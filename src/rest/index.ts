export const get = async<T extends unknown>(url:string) => {
    const res = await fetch(url)
    const data = await res.json() as T;
    return data;
}