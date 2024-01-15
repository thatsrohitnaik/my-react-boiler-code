export const get = async(url:string) => {
    const res = await fetch(url)
    const data = await res.json();
    console.log(data,"data")
    return data;
}