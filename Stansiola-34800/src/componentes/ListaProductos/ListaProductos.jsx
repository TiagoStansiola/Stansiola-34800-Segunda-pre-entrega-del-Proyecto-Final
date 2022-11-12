import React from "react";
import Productos from "./Productos";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { gFetch } from "../../utils/objetos";
import Title from "../Title";



const ListaProductos = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoriaId } = useParams();



  useEffect(() => {

      gFetch()
      .then(resp =>  setProducts(resp))    
      .catch(err => console.log(err))
      .finally(()=>setLoading(false)) 
  

  }, [categoriaId]);

  const cambiarEstado = () => {
    setBool(!bool);
  };

  return loading ? (
    <h2>Loading</h2>
  ) : (
    
    <div className="flex flex-wrap place-content-center ">
      <div className="w-full text-center mt-9  text-stone-800 text-5xl font-sans font-bold">
        <Title
        nombre={"Hamburguesas"}
        />
      </div>
      {products.map((obj) => (

          <div  className="place-items-center">  
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
