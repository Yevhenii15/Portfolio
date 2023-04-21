<template>
    <div class="aboutme1"><img src="../assets/img/aboutme.png" alt=""></div>
    <div class="aboutme2"><img src="../assets/img/Aboutmemobile.png" alt=""></div>
    <div class="button"><h1><a href="https://indd.adobe.com/view/c9822770-e1e8-4432-89a4-e19de92d0ac0" target=”_blank”>CV.PDF</a></h1></div>
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
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Allerta+Stencil&family=Cabin:wght@400;500;700&display=swap');
    .aboutme1 img{
        width: 100%;
    }
    .aboutme1{
        position: absolute;
        display: flex;
    }
    .aboutme2{
        display: none;
    }
    h1{
        text-align: center;
    }
    .button a{
        margin: 0;
        top:1410px;
        padding: 0.5% 4%;
        color: var(--white);
    }
    .contact{
        top:1430px
    }
    @media screen and (max-width: 600px) {
        .aboutme1{
            display: none;
        }
        .aboutme2{
            display: flex;
            position: absolute;
        }
        .aboutme2 img{
            width: 100%;
            margin-top: -1%;
        }
        .button{
            width:100% ;
        }
        .button a{
            margin: 0;
            top: 645px;
            text-align: center;
            width: none;
            padding: 0.5% 4%;
            color: var(--white);
        }
        .contact{
            top:655px
        }
}
</style>
    