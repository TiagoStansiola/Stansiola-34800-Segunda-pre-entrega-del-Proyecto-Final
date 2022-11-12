import React from "react";
import { useParams } from "react-router-dom";
import DetalleProducto from "../../componentes/DetalleProducto/DetalleProducto";
import { useEffect ,useState} from "react";
import { gFetch } from "../../utils/objetos";

const ContenedorDetalle = () => {
  const [products, setProducts] = useState([]);
  const { productId } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (productId) {
      gFetch()
        .then((resp) =>
          setProducts(
            resp.filter((prod) => prod.id === productId)
          )
        )
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    } else {
      gFetch()
        .then((resp) => setProducts(resp))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }
  }, [productId]);

  const cambiarEstado = () => {
    setBool(!bool);
  };
  return loading ? (
    <h2>cargando...</h2>
  ) : (
    <div>
      {products.map((obj) => (
        <div className="place-items-center">
          <div className="" key={obj.id}>
            <DetalleProducto id={obj.id} name={obj.name} foto={obj.foto} kcal={obj.kcal}desc={obj.desc} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContenedorDetalle;
