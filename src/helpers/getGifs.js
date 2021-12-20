

export async function getGifs(category){
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=20&api_key=8hCaufhkT9lidXBb3gN7PMnmVVQ8JIUG`;

    const response = await fetch(url);
    const {data} = await response.json();
    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    return gifs;
}