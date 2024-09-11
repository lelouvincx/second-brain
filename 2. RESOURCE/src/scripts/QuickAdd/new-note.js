const getCurrentTime = () => {
    const now = new Date();
    now.setHours(now.getHours() + 7);
    return now.toISOString().slice(0, 19);
}

module.exports = async (params) => {
    const {
		quickAddApi: { inputPrompt },
	} = params;

    const val = await inputPrompt("📁 File Name");

    console.log(val)

    const fileContent = `---
Type:
Related:
Status:
Created At: ${getCurrentTime()}
tags:
---
`;

    const newFile = await app.vault.create(`${val}.md`, fileContent);
    console.log('Error here')
    const leaf = app.workspace.getLeaf("tab");
    leaf.openFile(newFile)
}