<template>
  <body class="body">
    <header class="header">
      <h2>Products</h2>
    </header>
    <br />
    <br />
    <div class="page">
      <div class="shoppingCounter">
        <p v-if="shoppingCart.length != 0">
          Article in your shopping cart: {{ shoppingCart.length }}.
        </p>
      </div>

      <article class="list">
        <list-maker
          @addProduct="addProduct"
          v-for="product in products"
          :key="product.id"
          v-bind="product"
        />
      </article>
    </div>
  </body>
</template>

<script>
import listMaker from "./ListMaker.vue";
import dataBase from "../api/database";

export default {
  name: "ProductTable",
  components: {
    listMaker,
  },
  methods: {
    addProduct(eventObj) {
      this.shoppingCart.push(eventObj);
    },
  },
  data() {
    return {
      products: [],
      shoppingCart: [],
    };
  },

  created() {
    dataBase
      .getProducts()
      .then((response) => response.json())
      .then((products) => (this.products = products));
  },
};
</script>
<style>
.body {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-content: center;
}
.shoppingCounter {
  height: 30px;
  position: absolute;
  width: 70%;
  text-align: right;
}
.list {
  position: relative;
  padding-top: 20px;
}
.page {
  width: 90%;
}
</style>
