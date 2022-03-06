import { useState } from "react"
import { AddCategory } from "./componentes/AddCategory"
import { GifGrid } from "./componentes/GifGrid"



export const GifExpertApp = () =>{

    //const categorias = ['One Puch','DBZ','Full Metal Alquimist','Samurai X']
     const [categorias, setcategorias] = useState(['Avatar'])
    // const handleadd = () =>{
    //     setcategorias([...categorias,'Attack of Titans'])
    //     console.log(categorias)
    //}
    return(
        <>  
            <h2>GifExpertApp</h2>
            <AddCategory setcat = {setcategorias}></AddCategory>
            <hr></hr>

            <ol>
                {
                    categorias.map(category => 
                           <GifGrid
                                key = { category }
                                lasa = { category }
                            />

                            

                    
                    )

                }

            </ol>
        </>
    )
}