<script setup>
import { RouterLink, RouterView } from 'vue-router';

</script>

<template>
  <div class="header">
  <img src="./assets/img/header.png">
  </div>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <a href="#">|</a>
        <RouterLink to="/aboutme">About me</RouterLink>
        <a href="#">|</a>
        <RouterLink to="/work">Work</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Allerta+Stencil&family=Cabin:wght@400;500;700&display=swap');
h1{
  font-family: 'Allerta Stencil';
    }
body{
  font-family: 'Cabin';
}

header{
  display: flex;
  justify-content: center;
}
.header img{
  height: 100px;
  width: 100%;
  position: absolute;
}
nav {
  text-align: center;
  display: flex;
  margin: 15px;
}
a{
  color: var(--white);
  font-family: 'Cabin';
  text-decoration: none;
  font-size: 35px;
  margin: 10px;
}
@media screen and (max-width: 600px) {
  a{
  font-size: 25px;
  }
  .header img{
  height: 81px;
  width: 100%;
  position: absolute;
  }
}
</style>
