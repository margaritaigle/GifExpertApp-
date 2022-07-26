export const getGifs = async ( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=QyN5OIn3NCXUH58sDza7Hb62Nz0DfrWO&q=${ category }&limit=10`
    const resp = await fetch( url );
    const { data } = await resp.json();
    
    const gifs = data.map( ({id, title, images}) => ({
        id: id,
        title: title,
        url: images.downsized_medium.url,
    }));
    
    return gifs;
  }