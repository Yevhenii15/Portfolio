<template>
     <div class="portfolio-container">
       <div class="works">
          <div class="portfolio-item" v-for="item in state" :key="item">
            <RouterLink :to="{ name:'workdetails', params:  { id:item.id}}" ><h3>{{ item.title }}</h3></RouterLink>            
            <img :src="item.image" alt="">
         </div>
      </div>
   </div>
   <div class="contact">
      <h1>Contact Details</h1>
      <p class="bold">Phone Number</p>
      <p>+45 31880275</p>
      <p class="bold">Email</p>
      <p>motov150805@gmail.com</p>
      <p class="bold">Linkedin</p>
      <p><a href="https://linkedin.com/in/yevhenii-motov" target=”_blank”>linkedin.com/in/yevhenii-motov</a></p>
   </div>
</template>
<script setup>
import portfolio from '../assets/modules/portfolio'

const {state} = portfolio()
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Allerta+Stencil&family=Cabin:wght@400;500;700&display=swap');
.works{
   display: flex;
   flex-wrap: wrap;
}
.portfolio-item{
   margin-bottom: 3%;
}
@media screen and (max-width: 600px) {
   .portfolio-item{
      margin-bottom: 6%;
   }
}
</style>
