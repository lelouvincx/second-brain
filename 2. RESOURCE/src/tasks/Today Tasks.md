---
cssclasses:
  - tasks
Related:
  - "[[Task]]"
---
```dataviewjs
let today = new Date();

let year = today.getFullYear();
let month = String(today.getMonth() + 1).padStart(2, '0');
let day = String(today.getDate()).padStart(2, '0');

let todayFormatted = `${year}-${month}-${day}`;

const query = `
(due today) OR (path includes ${todayFormatted})
sort by status
sort by priority
`

dv.paragraph('```tasks\n' + query + '\n```');
```