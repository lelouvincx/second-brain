 // You have to export the function you wish to run.
// QuickAdd automatically passes a parameter, which is an object with the Obsidian app object
// and the QuickAdd API (see description further on this page).
module.exports = async (params) => {
//     const { getCalendars } = this.app.plugins.plugins["google-calendar"].api;
//     const calendars = await getCalendars();
    const pickedFile = await params.quickAddApi.suggester(
        (file) => file.basename,
        params.app.vault.getMarkdownFiles().filter((file) => file.parent.path === "University/Courses")
    );

    const modalForm = app.plugins.plugins.modalforms.api;
    const result = await modalForm.openForm('new-task');
    function formatDate(dateString) {
        const parts = dateString.split("-");
        const formattedDate = `${parts[2]}/${parts[1]}/${parts[0]}`;
        return formattedDate;
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

    const newTask = `
##### ${formatDate(result.get("dueDate"))}

> [!date]+ ${convertToAMPM(result.get("dueTime"))}
> - [ ] ${result.get("title")} ${result.get("priority")} 📅 ${result.get("dueDate")}

`;

    function getPos(str, subStr, i) {
        return str.split(subStr, i).join(subStr).length;
    }

    params.app.vault.process(pickedFile, (data) => {
        const delimiter = '---';
        const secondDelimiterIndex = getPos(data, delimiter, 2);

        return data.slice(0, secondDelimiterIndex + delimiter.length) + newTask + data.slice(secondDelimiterIndex + delimiter.length);
    })
};

