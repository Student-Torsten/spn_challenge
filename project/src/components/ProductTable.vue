<template>
  <body class="body">
    <header class="header">
      <h2>Products</h2>
    </header>
    <br />
    <br />
    <div class="page">
      <article class="list">
        <list-maker
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

  data() {
    return {
      products: [],
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

.list {
  position: relative;
}
.page {
  width: 90%;
}
</style>
