<template>
  <tr>
    <td>{{ id }}</td>
    <td>{{ title }}</td>
    <td>{{ manufacturer }}</td>
    <td>{{ description }}</td>
    <td>{{ netPrice }}</td>
    <td>{{ grossPrice }}</td>
    <td>{{ vatRate }}</td>
  </tr>
</template>

<script>
export default {
  name: "TableMaker",
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
};
</script>
