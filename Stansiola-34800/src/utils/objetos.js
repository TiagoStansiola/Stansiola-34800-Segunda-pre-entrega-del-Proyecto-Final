let obj = [
  {
    id: "1",
    name: "Hamburguesa",
    categoria: "Haburguesa",
    stock: "100",
    price: "1500",
    kcal:"289 kcal",
    desc:"Carne 100% vacuna, queso derretido y mostaza, kétchup y cebolla triturada, es algo que nunca puede fallar. Un clásico que nunca pasa de moda",
    foto: "https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kqXzqebG/200/200/original?country=ar",
  },
  {
    id: "2",
    name: "Hamburguesa con Queso",
    categoria: "gorras",
    stock: "100",
    price: "1500",
    kcal:"",
    desc:"",
    foto: "https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kqX8TYcp/200/200/original?country=ar",
  },
  {
    id: "3",
    name: "PRODUCTO 3",
    categoria: "gorras",
    stock: "100",
    price: "1500",
    desc:"",
    foto: "https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kqXakvb9/200/200/original?country=ar",
  },
  {
    id: "4",
    name: "PRODUCTO 4",
    categoria: "remeras",
    stock: "100",
    price: "1500",
    kcal:"",
    desc:"",
    foto: "https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kqXsCqnz/200/200/original?country=ar",
  },
  {
    id: "5",
    name: "PRODUCTO 5",
    categoria: "remeras",
    stock: "100",
    price: "1500",
    kcal:"",
    desc:"",
    foto: "https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kqX3vl0y/200/200/original?country=ar",
  },
  {
    id: "6",
    name: "PRODUCTO 6",
    categoria: "remeras",
    stock: "100",
    price: "1500",
    kcal:"",
    desc:"",
    foto: "https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kqXzccTZ/200/200/original?country=ar",
  },
];
export const gFetch = (id) => {
  return new Promise((resuelto, rechazada) => {
    setTimeout(() => {
      resuelto(obj);
    }, 1000);
  });
};
