<template>
  <h1>Danh sách học sinh</h1>

  <Table />

  <nav aria-label="Page navigation example">
    <ul class="pagination justify-content-end">
      <li class="page-item disabled">
        <a class="page-link" href="#" tabindex="-1" aria-disabled="true"
          >Previous</a
        >
      </li>
      <li class="page-item">
         <a class="page-link" href="#"> 1 </a>
         </li>
      <li class="page-item">
         <a     class="page-link" @click="selectedComponet='appCard'"  href="#"> 2 </a>
         </li>
   
      <li class="page-item">
        <a class="page-link" href="#">Next</a>
      </li>
    </ul>
  </nav>

</template> 

<script>

import Table from "./components/Table.vue";

export default {
  name: "App",
  components: {
    Table,
    
  },
  data() {
    return {
  
    };
  },
};
</script>

<style>
</style>
