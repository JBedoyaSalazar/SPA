import { getData } from "../utils/getData"

export const Home = async (): Promise<string> => {
    // Parse query search and page from hash
    const qIndex = location.hash.indexOf('?');
    let nameQuery = '';
    if (qIndex !== -1) {
        const params = new URLSearchParams(location.hash.substring(qIndex + 1));
        nameQuery = params.get('name') || '';
    }

    const hashParts = location.hash.slice(1).split('?')[0].toLowerCase().split('/');
    let page = 1;
    if (hashParts[1] === 'page' && hashParts[2]) {
        page = parseInt(hashParts[2], 10) || 1;
    }

    const characters = await getData(undefined, page, nameQuery);
    if (!characters || !characters.results) {
        return `
        <div class="Error">
            <h2>No results found</h2>
            <p>We couldn't find any characters matching "${nameQuery}".</p>
            <a href="#/" class="Pagination-btn" style="display: inline-block; margin-top: 1.5rem;">Back to Home</a>
        </div>
        `;
    }

    const totalPages = characters.info.pages;
    const querySuffix = nameQuery ? `?name=${encodeURIComponent(nameQuery)}` : '';

    const view = `
    <div class="Characters">
        ${characters.results.map((character: any) => `
            <article class="Character-item">
                <a href="#/${character.id}/">
                    <img src="${character.image}" alt="${character.name}">
                    <h2>${character.name}</h2>
                </a>
            </article>
        `).join('')}
    </div>
    <div class="Pagination">
        ${page > 1 ? `<a href="#/page/1/${querySuffix}" class="Pagination-btn">&laquo; First</a>` : `<span class="Pagination-btn disabled">&laquo; First</span>`}
        ${page > 1 ? `<a href="#/page/${page - 1}/${querySuffix}" class="Pagination-btn">&lsaquo; Prev</a>` : `<span class="Pagination-btn disabled">&lsaquo; Prev</span>`}
        <span class="Pagination-current">Page ${page} of ${totalPages}</span>
        ${page < totalPages ? `<a href="#/page/${page + 1}/${querySuffix}" class="Pagination-btn">Next &rsaquo;</a>` : `<span class="Pagination-btn disabled">Next &rsaquo;</span>`}
        ${page < totalPages ? `<a href="#/page/${totalPages}/${querySuffix}" class="Pagination-btn">Last &raquo;</a>` : `<span class="Pagination-btn disabled">Last &raquo;</span>`}
    </div>
    `;
    return view;
}