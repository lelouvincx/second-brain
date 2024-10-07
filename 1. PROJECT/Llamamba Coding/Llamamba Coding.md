---
Type: Project
Related: "[[Ongoing Project]]"
Created At: 2024-09-11T14:35:18
tags:
- python
- LLM
- project
- dashboard
- llamamba-coding
cssclasses:
  - beautify-table
  - project-table
  - lg-width
---
```dataviewjs
function formatStatus(status) {
	return `<span class="${status.toLowerCase()}">${status}</span>`
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

dv.table(["Name", "Status", "Priority", "Due"], dv.pages("#llamamba-coding")
	.filter(p => p["Project Status"] !== undefined)
	.sort(p["Created At"])
	.map(p => [`[[${p.file.name}]]`, formatStatus(p["Project Status"]), p["Priority"], p["Due"]])
)

dv.table(["Name", "Status", "Priority", "Due"], dv.pages("#llamamba-coding")
	.filter(p => p["Project Status"] === "Backlog")
	.sort(p["Due"])
	.map(p => [`[[${p.file.name}]]`, formatStatus(p["Project Status"]), p["Priority"], p["Due"]])
)

dv.table(["Name", "Status", "Priority", "Due"], dv.pages("#llamamba-coding")
	.filter(p => p["Project Status"] === "Todo")
	.sort(p["Due"])
	.map(p => [`[[${p.file.name}]]`, formatStatus(p["Project Status"]), p["Priority"], p["Due"]])
)

dv.table(["Name", "Status", "Priority", "Due"], dv.pages("#llamamba-coding")
	.filter(p => ["Pending", "Testing", "Review"].includes(p["Project Status"]))
	.sort(p["Due"])
	.map(p => [`[[${p.file.name}]]`, formatStatus(p["Project Status"]), p["Priority"], p["Due"]])
)

dv.table(["Name", "Status", "Priority", "Due"], dv.pages("#llamamba-coding")
	.filter(p => ["Done", "Archived"].includes(p["Project Status"]))
	.sort(p["Created At"])
	.map(p => [`[[${p.file.name}]]`, formatStatus(p["Project Status"]), p["Priority"], p["Due"]])
)

dv.table(["Name", "Status", "Priority", "Due"], dv.pages("#llamamba-coding")
	.filter(p => p["Project Status"] === "Blocked")
	.sort(p["Created At"])
	.map(p => [`[[${p.file.name}]]`, formatStatus(p["Project Status"]), p["Priority"], p["Due"]])
)
```