const NEW_INDEX_FILE = "New Index File";
const NEW_PEOPLE = "New People";
const NEW_ARTICLE = "New Article";
const NEW_BOOK_CHAPTER = "New Book Chapter";
const NEW_UNIVERSITY_COURSE = "New University Course";

module.exports = async (params) => {
	const {
		quickAddApi: { inputPrompt },
	} = params;

	const pickedSuggest = await params.quickAddApi.suggester(
		(suggestion) => suggestion,
		[NEW_INDEX_FILE, NEW_PEOPLE, NEW_ARTICLE, NEW_BOOK_CHAPTER, NEW_UNIVERSITY_COURSE]
	);

	if (pickedSuggest === NEW_INDEX_FILE) {
		// Open create event form
		const modalForm = app.plugins.plugins.modalforms.api;
		const result = await modalForm.openForm("new-index-file");

		const title = result.get('title');
		const type = result.get('type');
		const related = result.get('related');
		const tags = JSON.parse(result.get('tags'));

		const now = new Date();
		now.setHours(now.getHours() + 7);
		const formattedTime = now.toISOString().slice(0, 19);

		const file = await app.vault.create(`2. RESOURCE/Index/${title}.md`, `---
Type: ${type}
Related: "[[${related || "0. Index"}]]"
Created At: ${formattedTime}
tags:
- area
${tags.map((tag, idx) => {
	if (idx === tags.length - 1) {
		return `- ${tag}`;
	}
	return `- ${tag}\n`;
})}
---`)
		const leaf = app.workspace.getLeaf("tab");
		leaf.openFile(file)
	}

	if (pickedSuggest === NEW_PEOPLE) {
		const modalForm = app.plugins.plugins.modalforms.api;
		const result = await modalForm.openForm("new-people");

		const title = result.get("title");
		const fullName = result.get("fullName");
		const relationship = result.get("relationship");
		const hometown = result.get("hometown");
		const religion = result.get("religion");

		const now = new Date();
		now.setHours(now.getHours() + 7);
		const formattedTime = now.toISOString().slice(0, 19);

		const file = await app.vault.create(`2. RESOURCE/src/people/${title}.md`, `---
Type: People
aliases:
- ${fullName}
Related: "[[Relationship]]"
Full Name: ${fullName}
DOB: null
Relationship: ${relationship}
Hometown: ${hometown}
Religion: ${religion}
Social Media:
Cover Image: 
Phone:
Created At: ${formattedTime}
tags:
  - relationship
  - people
---`)
		const leaf = app.workspace.getLeaf("tab");
		leaf.openFile(file)
	}

	if (pickedSuggest === NEW_ARTICLE) {
		const modalForm = app.plugins.plugins.modalforms.api;
		const result = await modalForm.openForm("new-article");

		const title = result.get("title");
		const source = result.get("source");
		const tags = JSON.parse(result.get("tags"));

		const now = new Date();
		now.setHours(now.getHours() + 7);
		const formattedTime = now.toISOString().slice(0, 19);

		const file = await app.vault.create(`2. RESOURCE/src/articles/${title}.md`, `---
Type: Article
Related: "[[Articles]]"
Source: ${source}
Status: Working On
Created At: ${formattedTime}
tags:
  - article
  ${tags.map((tag, idx) => {
	if (idx === tags.length - 1) {
		return `- ${tag}`;
	}
	return `- ${tag}\n`;
  })}
---`);
		const leaf = app.workspace.getLeaf("tab");
		leaf.openFile(file)
	}

	if (pickedSuggest === NEW_BOOK_CHAPTER) {
		const title = await inputPrompt("📖 Book Chapter");

		if (!title) return;

		const now = new Date();
		now.setHours(now.getHours() + 7);
		const formattedTime = now.toISOString().slice(0, 19);

		const file = await app.vault.create(`2. RESOURCE/src/books/${title}.md`, `---
Type: Book Chapter
Related:
Status: Working On	
Created At: ${formattedTime}
tags:
  - book/chapter
---`);

		const leaf = app.workspace.getLeaf("tab");
		leaf.openFile(file)
	}

	if (pickedSuggest === NEW_UNIVERSITY_COURSE) {
		const title = await inputPrompt("📘 University Course");

		if (!title) return;

		const now = new Date();
		now.setHours(now.getHours() + 7);
		const formattedTime = now.toISOString().slice(0, 19);

		const file = await app.vault.create(`2. RESOURCE/src/university/${title}.md`, `---
Type: University Course
Related: 
- "[[Ongoing Courses]]"
tags:
- university
- course
---
`);

		const leaf = app.workspace.getLeaf("tab");
		leaf.openFile(file)
	}
};
