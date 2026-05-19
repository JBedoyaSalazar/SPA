import { Header } from "../template/Header";
import { Error404 } from "../pages/Error404";
import { Home } from "../pages/Home";
import { Character } from "../pages/Character";
import { resolveRoutes } from "../utils/resolveRoutes";
import { getHash } from "../utils/getHash";
import { SkeletonHome, SkeletonDetail } from "../template/Skeleton";

export const routes = {
    '/': Home,
    '/:id': Character,
    '/contact': "Contact",
}

export const router = async () => {
    const header: null | HTMLElement = document.querySelector('#header');
    const content: null | HTMLElement = document.querySelector('#content');

    if (header) {
        header.innerHTML = await Header();
        const searchForm = header.querySelector('#search-form') as HTMLFormElement;
        const searchInput = header.querySelector('#search-input') as HTMLInputElement;
        
        if (searchForm && searchInput) {
            const qIndex = location.hash.indexOf('?');
            if (qIndex !== -1) {
                const params = new URLSearchParams(location.hash.substring(qIndex + 1));
                searchInput.value = params.get('name') || '';
            }
            
            searchForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const query = searchInput.value.trim();
                if (query) {
                    location.hash = `#/page/1/?name=${encodeURIComponent(query)}`;
                } else {
                    location.hash = `#/`;
                }
            });
        }
    }
    
    let hash = getHash();
    let route = await resolveRoutes(hash);
    let render = routes[route] ? routes[route] : Error404

    if (content) {
        if (route === '/') {
            content.innerHTML = SkeletonHome();
        } else if (route === '/:id') {
            content.innerHTML = SkeletonDetail();
        }
    }

    const renderedContent = typeof render === 'function' ? await render() : render;
    if (content) content.innerHTML = renderedContent;
}