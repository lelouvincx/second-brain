---
Type: Area
Related:
  - "[[Library]]"
cssclasses:
  - book-dashboard
  - full-width
Created At: 2024-04-28T15:25:00
tags:
  - area
  - book
  - moc
  - shortcut
---
```dataviewjs
const tabsContainer = dv.el('div', '');

const bookShelf = dv.el('button', '📚 Bookshelf');
const reading = dv.el('button', '🧑‍💻 Currently Reading');
const toRead = dv.el('button', '🛋 To Read');
const completed = dv.el('button', '🥰 Completed');

const dateFormat = (date) => {
	const year = date.getFullYear();
	const month = String(date.getMonth() + 1).padStart(2, '0');
	const day = String(date.getDate()).padStart(2, '0');

	const formattedDate = `${year}-${month}-${day}`;
	return formattedDate;
}

dv.container.classList.add('book-container');
dv.container.classList.add('book-shelf');

tabsContainer.classList.add('navigation');

const tabs = [
	{
		element: bookShelf,
		class: 'book-shelf',
		header: ['Book Shelf'],
		filter: (p) => p,
		sort: (p) => {
			const statusOrder = {
				"Reading": 1,
				"Completed": 2,
				"Unread": 3,
				"Sourceless": 4
			}
			return statusOrder[p["Status"]]
			
		},
		map: (p) => [`<a data-href="${p.file.name}" href="${p.file.name}" class="internal-link book-card" target="_blank" rel="noopener">
			<img src='${p["cover"]}' />
			<span class="divider"></span>
			<span class="content"><span class=title>📘 ${p.file.name}</span><span class=author>${p["Author"].map((author, idx) => idx !== 0 ? " " + author : author)}</span><span class="status ${p["Status"].toLowerCase()}">${p["Status"]}</span><span class="block mt-3"><span class="rating ${p["Book Rating"] === null && "null"}">${p["Book Rating"] || "Not yet rated"}</span></span><span class=author><strong>Publish Date:</strong> ${dateFormat(new Date(p["Publish Date"]))}</span></span>
		</a>`]
	},
	{
		element: reading,
		class: 'reading',
		header: ['Reading'],
		filter: (p) => p['Status'] === 'Reading',
		sort: (p) => p,
		map: (p) => [`<a data-href="${p.file.name}" href="${p.file.name}" class="internal-link book-card" target="_blank" rel="noopener">
			<img src='${p["cover"]}' />
			<span class="divider"></span>
			<span class="content"><span class=title>📘 ${p.file.name}</span><span class=author>${p["Author"].map((author, idx) => idx !== 0 ? " " + author : author)}</span><span class="status ${p["Status"].toLowerCase()}">${p["Status"]}</span><span class="block mt-3"><span class="rating ${p["Book Rating"] === null && "null"}">${p["Book Rating"] || "Not yet rated"}</span></span><span class=author><strong>Publish Date:</strong> ${dateFormat(new Date(p["Publish Date"]))}</span></span>
		</a>`]
	},
	{
		element: toRead,
		class: 'to-read',
		header: ['To Read'],
		filter: (p) => p['Status'] === 'Unread',
		sort: (p) => p,
		map: (p) => [`<a data-href="${p.file.name}" href="${p.file.name}" class="internal-link book-card" target="_blank" rel="noopener">
			<img src='${p["cover"]}' />
			<span class="divider"></span>
			<span class="content"><span class=title>📘 ${p.file.name}</span><span class=author>${p["Author"].map((author, idx) => idx !== 0 ? " " + author : author)}</span><span class="status ${p["Status"].toLowerCase()}">${p["Status"]}</span><span class="block mt-3"><span class="rating ${p["Book Rating"] === null && "null"}">${p["Book Rating"] || "Not yet rated"}</span></span><span class=author><strong>Publish Date:</strong> ${dateFormat(new Date(p["Publish Date"]))}</span></span>
		</a>`]
	},
	{
		element: completed,
		class: 'completed',
		header: ['Completed'],
		filter: (p) => p['Status'] === 'Completed',
		sort: (p) => p,
		map: (p) => [`<a data-href="${p.file.name}" href="${p.file.name}" class="internal-link book-card" target="_blank" rel="noopener">
			<img src='${p["cover"]}' />
			<span class="divider"></span>
			<span class="content"><span class=title>📘 ${p.file.name}</span><span class=author>${p["Author"].map((author, idx) => idx !== 0 ? " " + author : author)}</span><span class="status ${p["Status"].toLowerCase()}">${p["Status"]}</span><span class="block mt-3"><span class="rating ${p["Book Rating"] === null && "null"}">${p["Book Rating"] || "Not yet rated"}</span></span><span class=author><strong>Publish Date:</strong> ${dateFormat(new Date(p["Publish Date"]))}</span></span>
		</a>`]
	},
];

let active = tabs[0];

bookShelf.classList.add("active");

tabs.forEach((tab) => {
	tab.element.addEventListener('click', () => {
		dv.container.classList.replace(active.class, tab.class);
		active.element.classList.remove('active');
		tab.element.classList.add('active');
		active = tab;
	});
	tabsContainer.appendChild(tab.element);
})

tabs.map((tab) => {
	dv.table(tab.header, dv.pages("#book and -#template and -#moc and -#book/chapter")
	.filter(tab.filter)
	.sort(tab.sort)
	.map(tab.map))
})
```

