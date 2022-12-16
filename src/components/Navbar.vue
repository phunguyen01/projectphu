<template>
  <nav>
    <div class="pagination">
      <a href="#">&laquo;</a>

      <a href="/">1</a>
      <a href="/mot">2</a>
    

      <a href="#">&raquo;</a>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar-1",
};
</script>

<style scoped>
.pagination {
  display: inline-block;
}

.pagination a {
  color: black;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
  border: 1px solid #ddd;
}

.pagination a.active {
  background-color: #4caf50;
  color: white;
}

.pagination a:hover:not(.active) {
  background-color: #ddd;
}
.pagination a.active {
  background-color: #4caf50;
  color: white;
  border: 1px solid #4caf50;
}
</style>