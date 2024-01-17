export const get = <T>(url: string) =>
    fetch(url).then<T>((r) => r.json());