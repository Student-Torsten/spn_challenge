<template>
  <div class="article">
    <div class="picture">
      <img alt="Picture" src="https://picsum.photos/200" />
    </div>
    <p class="articleNumber">Artikel-Nummer: {{ id }}</p>
    <header class="articleHeader">
      {{ title }}
    </header>
    <p class="manufacturer">Hersteller: {{ manufacturer }}</p>
    <p class="description">Artikelbeschreibung: {{ description }}</p>
    <p class="netPrice">Nettopreis: {{ netPrice }} €</p>
    <p class="grossPrice">
      Bruttopreis (incl. MwSt. ({{ vatRate }}%)): {{ grossPrice }} €
    </p>
    <button class="buy" @click="onClick($event, title)"></button>
    <p v-if="shoppingCart.length != 0" class="shoppingCart">
      Dieser Artikel befindet sich {{ shoppingCart.length }} Mal im Warenkorb.
    </p>
  </div>
</template>

<script>
export default {
  name: "listMaker",
  props: {
    id: {
      type: Number,
    },
    title: {
      type: String,
    },
    manufacturer: {
      type: String,
    },
    description: {
      type: String,
    },
    netPrice: {
      type: Number,
    },
    grossPrice: {
      type: Number,
    },
    vatRate: { type: Number },
  },
  methods: {
    onClick(event, eventObject) {
      this.shoppingCart.push(eventObject);
    },
  },
  data() {
    return {
      shoppingCart: [],
    };
  },
};
</script>
<style>
.article {
  display: flex;
  position: relative;
  width: 80%;
  background-image: linear-gradient(gray, white);
  height: 300px;
  margin: 20px;
}
.picture {
  position: absolute;
  top: 10px;
  left: 10px;
}
.articleNumber {
  position: absolute;
  top: 210px;
  left: 20px;
}
.articleHeader {
  position: absolute;
  top: 30px;
  left: 240px;
  font-size: 24px;
  font-weight: bold;
}
.manufacturer {
  position: absolute;
  top: 80px;
  left: 240px;
  font-size: 18px;
  font-weight: bold;
}
.description {
  position: absolute;
  top: 120px;
  left: 240px;
  font-size: 16px;
  text-align: left;
  width: 40%;
}
.netPrice {
  position: absolute;
  border: 1px solid lemonchiffon;
  background-color: lightblue;
  top: 40px;
  right: 20px;
  font-size: 16px;
  text-align: left;
  font-size: 18px;
}
.grossPrice {
  position: absolute;
  border: 1px solid lemonchiffon;
  background-color: lightblue;
  top: 80px;
  right: 20px;
  font-size: 16px;
  text-align: left;
  font-size: 18px;
}
.buy {
  position: absolute;
  border: 1px solid lemonchiffon;
  background-image: url("/public/card.jpeg");
  bottom: 60px;
  right: 20px;
  text-align: left;
  font-size: 18px;
  width: 53px;
  height: 46px;
}
.buy:hover {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 255, 0, 0.5)),
    url("/public/card.jpeg");
}
.buy:active {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 255, 0.5)),
    url("/public/card.jpeg");
}
.shoppingCart {
  position: absolute;
  top: 230px;
  right: 20px;
}
</style>
