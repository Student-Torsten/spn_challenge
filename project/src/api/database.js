export default {
  getProducts: () => {
    return fetch("http://localhost:3000/products");
  },
};
