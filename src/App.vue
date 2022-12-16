<template>
  <h1>Danh sách học sinh</h1>
  <Table></Table>
  <Navbar />

 

</template>

<script>
import Navbar from "./components/Navbar";

import Table from "./components/Table.vue";


export default {
  name: "App",
  components: {
    Navbar,
    Table,
   
  },
  data() {
    return {};
  },
};
</script>

<style>
</style>
