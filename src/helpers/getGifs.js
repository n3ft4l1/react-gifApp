

export const getGifs =async ( categorias) =>{
        
    const url = `https://api.giphy.com/v1/gifs/search?limit=10&q=${encodeURI(categorias)}i&api_key=qcezr9yMhKLW3EBAy2vKZhxiY4QBlZyL`
    const resp = await fetch(url)
    const {data} = await resp.json()
    const gifs = data.map(img =>{
        return{
            id : img.id,
            title: img.title,
            url:img.images.original.url
        }
    })
    
    return gifs
    //console.log(gifs)

}