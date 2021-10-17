<template>
  <body>
    <header>
      <h2>Produkte</h2>
    </header>

    <br />
    <hr />
    <table class="list">
      <tbody>
        <table-maker
          v-for="product in products"
          :key="product.id"
          v-bind="product"
        />
      </tbody>
    </table>
  </body>
</template>

<script>
import TableMaker from "./TableMaker.vue";
import dataBase from "../api/database";

export default {
  name: "ProductTable",
  components: {
    TableMaker,
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
