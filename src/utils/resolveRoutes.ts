export const resolveRoutes = (path: string) => {
    const cleanPath = path.split('?')[0] || '/';
    if (cleanPath === 'page') {
        return '/';
    }
    if (cleanPath.length <= 3) {
        let validRoute = cleanPath === '/' ? cleanPath : '/:id'
        return validRoute;
    }

    return `/${cleanPath}`
}