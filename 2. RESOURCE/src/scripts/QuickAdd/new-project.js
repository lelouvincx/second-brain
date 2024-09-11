const NEW_PROJECT = "New Project";
const NEW_PROJECT_NOTE = "New Project Note";
const NEW_PROJECT_TASK = "New Project Task";
const NEW_PROJECT_MEETING = "New Project Meeting";

const nameToTag = (name) => {
    return name.toLowerCase().replace(" ", "-");
}

function renderDataview(filename) {
    return `\`\`\`dataviewjs
function formatStatus(status) {
	return \`<span class="\${status.toLowerCase()}">\${status}</span>\`
}
const all = dv.el('button', '🐧 All');
const backlog = dv.el('button', '🎫 Backlog')
const todo = dv.el('button', '🙌 Todo');
const inProgress = dv.el('button', '🧑‍🍳 In Progress');
const done = dv.el('button', '✅ Done');
const blocked = dv.el('button', '🛑 Blocked');

const tabs = [
	{
		element: all,
		class: 'all',
	},
	{
		element: backlog,
		class: 'backlog',
	},
	{
		element: todo,
		class: 'todo',
	},
	{
		element: inProgress,
		class: 'inProgress',
	},
	{
		element: done,
		class: 'done',
	},
	{
		element: blocked,
		class: 'blocked',
	},
];

dv.container.classList.add('project-container');
dv.container.classList.add('all');

const tabsContainer = dv.el('div', '');
tabsContainer.classList.add('navigation');

let active = tabs[0];
all.classList.add("active");

tabs.forEach((tab) => {
	tab.element.addEventListener('click', () => {
		dv.container.classList.replace(active.class, tab.class);
		active.element.classList.remove('active');
		tab.element.classList.add('active');
		active = tab;
	});
	tabsContainer.appendChild(tab.element);
})

dv.table(["Name", "Status", "Priority", "Due"], dv.pages("#${nameToTag(filename)}")
	.filter(p => p["Project Status"] !== undefined)
	.sort(p["Created At"])
	.map(p => [\`[[\${p.file.name}]]\`, formatStatus(p["Project Status"]), p["Priority"], p["Due"]])
)

dv.table(["Name", "Status", "Priority", "Due"], dv.pages("#${nameToTag(filename)}")
	.filter(p => p["Project Status"] === "Backlog")
	.sort(p["Due"])
	.map(p => [\`[[\${p.file.name}]]\`, formatStatus(p["Project Status"]), p["Priority"], p["Due"]])
)

dv.table(["Name", "Status", "Priority", "Due"], dv.pages("#${nameToTag(filename)}")
	.filter(p => p["Project Status"] === "Todo")
	.sort(p["Due"])
	.map(p => [\`[[\${p.file.name}]]\`, formatStatus(p["Project Status"]), p["Priority"], p["Due"]])
)

dv.table(["Name", "Status", "Priority", "Due"], dv.pages("#${nameToTag(filename)}")
	.filter(p => ["Pending", "Testing", "Review"].includes(p["Project Status"]))
	.sort(p["Due"])
	.map(p => [\`[[\${p.file.name}]]\`, formatStatus(p["Project Status"]), p["Priority"], p["Due"]])
)

dv.table(["Name", "Status", "Priority", "Due"], dv.pages("#${nameToTag(filename)}")
	.filter(p => ["Done", "Archived"].includes(p["Project Status"]))
	.sort(p["Created At"])
	.map(p => [\`[[\${p.file.name}]]\`, formatStatus(p["Project Status"]), p["Priority"], p["Due"]])
)

dv.table(["Name", "Status", "Priority", "Due"], dv.pages("#${nameToTag(filename)}")
	.filter(p => p["Project Status"] === "Blocked")
	.sort(p["Created At"])
	.map(p => [\`[[\${p.file.name}]]\`, formatStatus(p["Project Status"]), p["Priority"], p["Due"]])
)
\`\`\``;
}

function formatPriority(priority) {
    if (priority === "highest") return [" 🔺 ", "🔺 Highest"]
    else if (priority === "high") return [" ⏫ ", "⏫ High"]
    else if (priority === "medium") return [" 🔼 ", "🔼 Medium"]
    else if (priority === "low") return [" 🔽 ", "🔽 Low"]
    else if (priority === "lowest") return [" ⏬ ", "⏬ Lowest"]
    else return [" ", "Normal"]
}

const getCurrentTime = () => {
    const now = new Date();
    now.setHours(now.getHours() + 7);
    return now.toISOString().slice(0, 19);
}

module.exports = async (params) => {
    const pickedSuggest = await params.quickAddApi.suggester(
        (suggestion) => suggestion,
        [NEW_PROJECT, NEW_PROJECT_NOTE, NEW_PROJECT_TASK, NEW_PROJECT_MEETING]
    );

    if (pickedSuggest === NEW_PROJECT) {
        const modalForm = app.plugins.plugins.modalforms.api;
        const result = await modalForm.openForm("new-project");

        const title = result.get("title");
        const tags = JSON.parse(result.get("tags"));

        await app.vault.createFolder(`1. PROJECT/${title}`)
        await app.vault.createFolder(`1. PROJECT/${title}/Tasks`)

        const file = await app.vault.create(`1. PROJECT/${title}/${title}.md`, `---
Type: Project
Related: "[[Ongoing Project]]"
Created At: ${getCurrentTime()}
tags:
${tags.map((tag, idx) => {
            if (idx === tags.length - 1) {
                return `- ${tag}`;
            }
            return `- ${tag}\n`;
        })}
- project
- dashboard
- ${nameToTag(title)}
cssclasses:
  - beautify-table
  - project-table
  - lg-width
---
${renderDataview(title)}`);

        await app.vault.create(`1. PROJECT/${title}/${title} Meetings.md`, `---
Type: Project Meeting
Related: "[[${title}]]"
Created At: ${getCurrentTime()}
tags:
${tags.map((tag, idx) => {
            if (idx === tags.length - 1) {
                return `- ${tag}`;
            }
            return `- ${tag}\n`;
        })}
- project
- dashboard
- ${nameToTag(title)}
---`);

        await app.vault.create(`1. PROJECT/${title}/${title} Development.md`, `---
Type: Project Development
Related: "[[${title}]]"
Created At: ${getCurrentTime()}
tags:
${tags.map((tag, idx) => {
            if (idx === tags.length - 1) {
                return `- ${tag}`;
            }
            return `- ${tag}\n`;
        })}
- project
- dashboard
- ${nameToTag(title)}
---`);

        await app.vault.create(`1. PROJECT/${title}/${title} Wiki.md`, `---
Type: Project Wiki
Related: "[[${title}]]"
Created At: ${getCurrentTime()}
tags:
${tags.map((tag, idx) => {
            if (idx === tags.length - 1) {
                return `- ${tag}`;
            }
            return `- ${tag}\n`;
        })}
- project
- dashboard
- ${nameToTag(title)}
---`);

        const leaf = app.workspace.getLeaf("tab");
        leaf.openFile(file)
    }

    if (pickedSuggest === NEW_PROJECT_NOTE) {
        const projects = await app.vault.getFolderByPath("1. PROJECT");

        let tag = "hi";

        const pickedProject = await params.quickAddApi.suggester(
            (suggestion) => suggestion.name,
            projects.children
        );

        const projectFile = pickedProject.children.find((f) => f.basename === pickedProject.name)

        const fileCache = await app.metadataCache.getFileCache(projectFile);

        if (fileCache.frontmatter && fileCache.frontmatter.tags) {
            tag = fileCache.frontmatter.tags[0];
        }

        const modalForm = app.plugins.plugins.modalforms.api;
        const result = await modalForm.openForm("new-project-note");

        const title = result.get('title');
        const priority = result.get('priority');

        const file = await app.vault.create(`1. PROJECT/${pickedProject.name}/${title}.md`, `---
aliases:
- ${pickedProject.name} ${title}
Type: Project Development
Related:
Project Status: Backlog
Priority: ${priority}
Due: 
Finished At: 
Created At: ${getCurrentTime()}
tags:
- ${tag}
- project
- development   
- ${nameToTag(pickedProject.name)}
---`);

        const leaf = app.workspace.getLeaf("tab");
        leaf.openFile(file)
    }

    if (pickedSuggest === NEW_PROJECT_TASK) {
        const projects = await app.vault.getFolderByPath("1. PROJECT");

        let tag = "hi";

        const pickedProject = await params.quickAddApi.suggester(
            (suggestion) => suggestion.name,
            projects.children
        );

        const projectFile = pickedProject.children.find((f) => f.basename === pickedProject.name)

        const fileCache = await app.metadataCache.getFileCache(projectFile);

        if (fileCache.frontmatter && fileCache.frontmatter.tags) {
            tag = fileCache.frontmatter.tags[0];
        }

        const modalForm = app.plugins.plugins.modalforms.api;
        const result = await modalForm.openForm("new-project-task");

        const title = result.get('title');
        const priority = result.get('priority');
        const dueDate = result.get('date')

        const file = await app.vault.create(`1. PROJECT/${pickedProject.name}/Tasks/${title}.md`, `---
Type: Project Development
Related:
Project Status: Backlog
Priority: ${formatPriority(priority)[1]}
Due: ${dueDate}
Finished At: 
Created At: ${getCurrentTime()}
tags:
- ${tag}
- project
- development   
- ${nameToTag(pickedProject.name)}
- subtask
---
> [!todo] Todo
> - [ ] ${title}${formatPriority(priority)[0]}📅 ${dueDate}`);
    
    const leaf = app.workspace.getLeaf("tab");
    leaf.openFile(file)
    }
}
