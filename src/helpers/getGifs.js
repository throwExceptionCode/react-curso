export const getGif = async (category)=>{
    try {
       const key = 'U7NsQmeqBwinUBJTBYYi3p9ifI4SpeQ3';
       const limit = 10;
       const query = category;
       const url = `https://api.giphy.com/v1/gifs/search?limit=${limit}&q=${encodeURI(query)}&api_key=${key}&rating=r`;
       const resp = await fetch( url );
       //console.log(resp.ok);
       const {data} = await resp.json();
       const gifs = data.map(img =>
           ({id: img.id, title: img.title, url: img.images.downsized_medium.url}));
       //console.log(gifs);
       //setImages(gifs);
       return gifs;
    } catch (error) {
        //console.log(error)
        return error;
    }
   
    
};
