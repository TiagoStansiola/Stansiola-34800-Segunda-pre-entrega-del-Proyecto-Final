let obj = [
  {
    id: "1",
    name: "Hamburguesa",
    categoria: "hamburguesa",
    stock: "100",
    price: "1500",
    kcal:"243 kcal",
    desc:"El sabor de la carne 100% vacuna más deliciosa, acompañado del pan más esponjoso, kétchup, mostaza y cebolla triturada.",
    foto: "https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kqXzqebG/200/200/original?country=ar",
  },
  {
    id: "2",
    name: "Hamburguesa con Queso",
    categoria: "hamburguesa",    
    stock: "100",
    price: "1500",
    kcal:"289 kcal",
    desc:"Carne 100% vacuna, queso derretido y mostaza, kétchup y cebolla triturada, es algo que nunca puede fallar. Un clásico que nunca pasa de moda.",
    foto: "https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kqX8TYcp/200/200/original?country=ar",
  },
  {
    id: "3",
    name: "Mc Fiesta",
    categoria: "hamburguesa",
    stock: "100",
    price: "1500",
    kcal:"289 kcal",
    desc:"Hamburguesa elaborada con carne 100% de carne vacuna, mayonesa, lechuga, tomate.",
    foto: "https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kqXakvb9/200/200/original?country=ar",
  },
  {
    id: "4",
    name: "Triple Hamburguesa con Queso",
    categoria: "hamburguesa",    
    stock: "100",
    price: "1500",
    kcal:"512 kcal",
    desc:"Tres medallones de carne 100% vacuna, queso derretido, mostaza, kétchup y cebolla triturada, es algo que nunca puede fallar.",
    foto: "https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kqXsCqnz/200/200/original?country=ar",
  },
  {
    id: "5",
    name: "Big Mac",
    categoria: "hamburguesa",
    stock: "100",
    price: "1500",
    kcal:"505 kcal",
    desc:"Quizás sean las dos hamburguesas de carne 100% vacuna con esa salsa especial y queso derretido, el toque de cebolla y la frescura de la lechuga o el crocante del pepino, lo que la hace la hamburguesa más famosa del mundo. Un sabor único.",
    foto: "https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kqX3vl0y/200/200/original?country=ar",
  },
  {
    id: "6",
    name: "Triple Mac",
    categoria: "hamburguesa",    
    stock: "100",
    price: "1500",
    kcal:"541 kcal",
    desc:"Una hamburguesa que no es para cualquiera. Sólo los más extremos están dispuestos a saborear tres carnes 100% vacuna acompañadas del clásico pan McDonald’s, su característica salsa especial, queso derretido, lechuga fresca, pepino crocante y el toque de cebolla que la hace única.",
    foto: "https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kqXzccTZ/200/200/original?country=ar",
  },
  {
    id: "7",
    name: "Cono de Vainilla",
    categoria: "postres",    
    stock: "100",
    price: "1500",
    kcal:"175 kcal",
    desc:"Un clásico cono que nunca pasa de moda. La opción que todos aman por su sabor, su dulce cucurucho y su estilo tan cool.",
    foto: "https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$cono-de-vainilla.png/200/200/original?country=ar",
  },
  {
    id: "8",
    name: "Cono Combinado",
    categoria: "postres",    
    stock: "100",
    price: "1500",
    kcal:"184 kcal",
    desc:"El helado para los que lo quieren todo. Para los que no se conforman con un sabor. Un helado que combina dulce de leche, vainilla y un delicioso cucurucho.",
    foto: "https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$cono-combinado.png/200/200/original?country=ar",
  },
  {
    id: "9",
    name: "Sundae de Dulce de Leche",
    categoria: "postres",    
    stock: "100",
    price: "1500",
    kcal:"257 kcal",
    desc:"El helado para los que lo quieren todo. Para los que no se conforman con un sabor. Un helado que combina dulce de leche, vainilla y un delicioso cucurucho.",
    foto: "https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$sundae-dulce-de-leche.png/200/200/original?country=ar",
  },
  {
    id: "10",
    name: "Sundae de Frutilla",
    categoria: "postres",    
    stock: "100",
    price: "1500",
    kcal:"222 kcal",
    desc:"El helado de vainilla que ya conocés, con una deliciosa salsa frutilla. Disfrutá la mezcla perfecta de tu postre preferido con la mejor selección de frutas.",
    foto: "https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$sundae-frutilla.png/200/200/original?country=ar",
  },
  {
    id: "11",
    name: "McFlurry Oreo",
    categoria: "postres",    
    stock: "100",
    price: "1500",
    kcal:"424 kcal",
    desc:"Un helado de vainilla que se banca compartir el protagonismo con trocitos de deliciosas galletitas Oreo y la salsa que elijas. Amalo hasta el final.",
    foto: "https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kcX83hlT/200/200/original?country=ar",
  },
  {
    id: "12",
    name: "McFlurry Kit Kat",
    categoria: "postres",    
    stock: "100",
    price: "1500",
    kcal:"455 kcal",
    desc:"La crocante oblea de chocolate que todo el mundo conoce y ama, pero acompañada de un cremoso helado de vainilla y una deliciosa salsa tibia de chocolate. ¿Hace falta que te diga más? El break helado que esperabas.",
    foto: "https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kcXpFS9c/200/200/original?country=ar",
  },
  
];
export const gFetch = (id) => {
  return new Promise((resuelto, rechazada) => {
    setTimeout(() => {
      resuelto(obj);
    }, 1000);
  });
};
