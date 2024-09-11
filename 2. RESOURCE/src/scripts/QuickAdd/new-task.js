module.exports = async (params) => {
	const cache = this.app.metadataCache;
	const files = app.vault.getMarkdownFiles();
    const selections = [];

    files.forEach((file) => {
        const fileCache = cache.getFileCache(file);
        if (fileCache.frontmatter && fileCache.frontmatter["Related"] && fileCache.frontmatter["Related"].contains("[[Ongoing Courses]]")) {
            selections.push(file);
        }
    })

	const sortedSelections = selections.sort((a, b) => {
        if (a.basename < b.basename) {
            return -1;
        } else if (a.basename > b.basename) {
            return 1;
        }
        return 0;
    });


	const pickedFile = await params.quickAddApi.suggester(
		(file) => file.basename,
		sortedSelections
	);

	const modalForm = app.plugins.plugins.modalforms.api;
	const result = await modalForm.openForm('new-task');
	function formatDate(dateString) {
		const parts = dateString.split("-");
		const formattedDate = `${parts[2]}/${parts[1]}/${parts[0]}`;
		return formattedDate;
	}

	function mergeDateAndTime(dateString, timeString) {
		const combinedString = `${dateString}T${timeString}`;
		const combinedDateTime = new Date(combinedString);
		const options = {
			year: "numeric",
			month: "2-digit",
			day: "2-digit",
			hour: "2-digit",
			minute: "2-digit",
			second: "2-digit",
			hour12: false,
			timeZone: "Asia/Ho_Chi_Minh",
			timeZoneName: "short"
		};
		const formattedDateTime = combinedDateTime.toLocaleString("en-US", options);
		return formattedDateTime;
	}

	function subtractOneMinute(dateTimeString) {
		const dateTime = new Date(dateTimeString);
		dateTime.setMinutes(dateTime.getMinutes() - 1);
		const options = {
			year: "numeric",
			month: "2-digit",
			day: "2-digit",
			hour: "2-digit",
			minute: "2-digit",
			second: "2-digit",
			hour12: false,
			timeZone: "Asia/Ho_Chi_Minh",
			timeZoneName: "short"
		};
		const formattedDateTime = dateTime.toLocaleString("en-US", options);
		return formattedDateTime;
	}

	function convertToAMPM(timeString) {
		const [hours, minutes] = timeString.split(":");
		let formattedTime = "";
		let period = "";

		if (hours < 12) {
			period = "A.M.";
			formattedTime = `${hours}:${minutes}`;
		} else {
			period = "P.M.";
			const adjustedHours = hours % 12 || 12;
			formattedTime = `${adjustedHours}:${minutes}`
		}

		return `${formattedTime} ${period}`;
	}

	const dueDate = result.get("dueDate");
	const dueTime = result.get("dueTime");
	const title = result.get("title");
	const priority = result.get("priority");

	const newTask = `
##### ${formatDate(dueDate)}

> [!date]+ ${convertToAMPM(dueTime)}
> - [ ] ${title} ${priority} 📅 ${dueDate}

`;

	function getPos(str, subStr, i) {
		return str.split(subStr, i).join(subStr).length;
	}

	params.app.vault.process(pickedFile, (data) => {
		const delimiter = '---';
		const secondDelimiterIndex = getPos(data, delimiter, 2);

		return data.slice(0, secondDelimiterIndex + delimiter.length) + newTask + data.slice(secondDelimiterIndex + delimiter.length);
	});
};
