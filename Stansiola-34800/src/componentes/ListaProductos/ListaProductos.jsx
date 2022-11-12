import React from "react";
import Productos from "./Productos";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { gFetch } from "../../utils/objetos";
import Title from "../Title";
import Boton from "../Boton";



const ListaProductos = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoriaId } = useParams();



  useEffect(() => {

    if (categoriaId) {
      gFetch()
      .then(resp =>  setProducts(resp.filter(prod => prod.categoria === categoriaId)))    
      .catch(err => console.log(err))
      .finally(()=>setLoading(false)) 
      
  }else{
      gFetch()
      .then(resp =>  setProducts(resp))    
      .catch(err => console.log(err))
      .finally(()=>setLoading(false)) 
  }

  }, [categoriaId]);

  const cambiarEstado = () => {
    setBool(!bool);
  };

  return loading ? (
    <h2>Loading</h2>
  ) : (
    
    <div className="flex flex-wrap place-content-center ">
      <div>
                    <div className="flex flex-wrap justify-center">

                        <Boton
                           link={'/categoria/hamburguesa'}
                           icono={'https://www.mcdonalds.com.ar/uploads/bigmac_09ea6e610f.png'}
                           texto={"hamburguesa"}
                           />
                        <Boton
                           link={'/categoria/postres'}
                           icono={'https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$cono-de-vainilla.png/200/200/original?country=ar'}
                           texto={"postres"}
                           />
                        </div>
                    </div>

      <div className="w-full text-center mt-2  text-stone-800 text-5xl font-sans font-bold">
          <Title

          nombre={''}
          />
          </div>
      
      {products.map((obj) => (
        

          <div  className="place-items-center my-1">  

          

            <div className="">
              <Productos
              id={obj.id}
              name={obj.name}
              foto={obj.foto}
              />
            </div>  
          </div>

      ))}
    </div>
  );
};

export default ListaProductos;
