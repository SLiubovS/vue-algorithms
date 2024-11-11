<script setup lang="ts">
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-primary sticky-top" data-bs-theme="dark">
    <div class="container-fluid">
      <a class="navbar-brand table_align" href="#">
        <img src="../src/img/icons_lable.png" alt="Заглушка" width="40" height="40">
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Переключатель навигации">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div class="navbar-nav">
          <RouterLink to="/" class="nav-link ">Алгоритмы сортировки</RouterLink>
          <RouterLink to="/SearchAlgorithm" class="nav-link">Алгоритмы поиска</RouterLink>
        </div>
      </div>
    </div>
  </nav>
  <div class="container">
    <RouterView />
  </div>
</template>

<style scoped>
.router-link-exact-active {
  color: white;
}

.table_align {
  margin: 0;
  padding: 5px;
}
</style>
