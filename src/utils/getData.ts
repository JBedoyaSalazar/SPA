const API = import.meta.env.VITE_API;

export const getData = async (id?: string | number, page?: number, name?: string) => {
    let apiURI = API;
    if (id) {
        apiURI = `${API}${id}`;
    } else {
        const queryParams = new URLSearchParams();
        if (page) queryParams.append('page', page.toString());
        if (name) queryParams.append('name', name);
        
        const queryString = queryParams.toString();
        if (queryString) {
            apiURI = `${API}?${queryString}`;
        }
    }
    
    try {
        const response = await fetch(apiURI);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Fetch Error', error);
        return null;
    }
}