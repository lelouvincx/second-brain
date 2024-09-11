module.exports = async (params) => {
    const cache = this.app.metadataCache;
    const files = params.app.vault.getMarkdownFiles();
    const selections = [];

    files.forEach((file) => {
        const fileCache = cache.getFileCache(file);
        if (fileCache.frontmatter && fileCache.frontmatter.tags && fileCache.frontmatter.tags.contains("moc")) {
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

    if (pickedFile) {
        const leaf = app.workspace.getLeaf("tab");
        await leaf.openFile(pickedFile);
    }
};
