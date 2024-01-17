export const get = async<T extends unknown>(url: string) => {
    try {
        const res = await fetch(url)
        if (res?.ok) {
            const data = await res.json() as T;
            return {data,  error: ""};
        }
        return {data:{}, error: ""}
    }
    catch (e) {
        return {data:{}, error: e}
    }
}