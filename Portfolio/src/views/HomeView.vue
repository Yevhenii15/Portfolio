<template>
    <div class="body">
       <div class="main">
           <img src="../assets/img/main.png">
           <div class="blurbox">
               <h1>Yevhenii Motov</h1>
               <div class="vl"></div>
               <p>Multimedia designer</p>
            </div>
        </div>
       <div class="aboutme">
           <h1>About me</h1>
           <div class="container-aboutme">
              <img src="../assets/img/me.jpeg" alt="">
              <div class="text">
              <p>I am attentive to details and very creative, which allows me to develop unique and visually appealing projects.</p>
              <p>I am self motivated which allows me to work independently and meet deadlines. I am an excellent communicator, able to generate my own ideas and collaborate effectively with clients and team members. I am also highly adaptable, able to quickly learn new skills and software to keep up with the ever-evolving industry.</p>
              <p>I am persistent but at the same time objective, so if others have a different opinion, I will accept it if it is objectively better.</p>
              <p>Finally, I am passionate about my work and dedicated to producing high-quality multimedia content.</p>
              <div class="button"><h1><RouterLink to="/aboutme">More</RouterLink></h1></div>
             </div>       
          </div>
       </div>
      <div class="career">
           <h1>Career Objectives</h1>
           <div class="inner-container">
               <div class="text">
                  <p>Work as a multimedia designer for a company I can contribute to…</p>
                  <p>Create new solutions in website design.</p>
                  <p>Collaborate with other designers, developers, and project managers to create innovative and engaging multimedia designs that meet project goals and timelines.</p>
                  <p>Use all my skills that I have and also get new ones.</p>
                  <p>In this video CV you will be able to find out more about me as a personality and also about my skills.</p>
           </div>
          <iframe width="130%" height="280px" src="https://www.youtube.com/embed/8P-h_yYfJFo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
         </div>
     </div>
    <div class="portfolio-container">
       <h1>Work</h1>
       <div class="works">
          <div class="portfolio-item" v-for="item in state.slice(0, 3)" :key="item">
            <RouterLink :to="{ name:'workdetails', params:  { id:item.id}}" ><h3>{{ item.title }}</h3></RouterLink>
             <img :src="item.image" alt="">
           </div>
       </div>
      <div class="button"><h1><RouterLink to="/work">More</RouterLink></h1></div>
    </div>
   <div class="toolbox">
      <h1>My Toolbox</h1>
      <p>I am well work in all things Adobe Creative Suite.</p>
      <div class="icons">
        <img src="../assets/img/icons/indesign.png" alt="">
        <img src="../assets/img/icons/illustrato.png" alt="">
        <img src="../assets/img/icons/xd.svg.png" alt="">
        <img src="../assets/img/icons/photoshop.svg.png" alt="">
        <img src="../assets/img/icons/premierepro.svg.png" alt="">
        <img src="../assets/img/icons/aftereffects.svg.png" alt="">
        <img src="../assets/img/icons/audition.svg.png" alt="">
      </div>
   </div>
   <div class="education">
      <h1>Education</h1>
      <div class="text"><p>2022-2024</p><p class="bold">Business Academy Southwest</p><p>Academy Profession Degree, Multimedia Design</p></div>
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
</div>
</template>
<script setup>
import portfolio from '../assets/modules/portfolio';

const {state} = portfolio();
</script>
<style >
@import url('https://fonts.googleapis.com/css2?family=Allerta+Stencil&family=Cabin:wght@400;500;700&display=swap');
    h1{
        font-family: 'Allerta Stencil';
        font-size: 40px;
    }
    p{
        font-size: 20px;
    }
    body{
        font-family: 'Cabin';
        display: block;
    } 
    .main{
        display: flex;
        justify-content: center;
        height: 800px;
    }
    .main img{
        height: 800px;
        width: 100%;
        position: absolute;
    }
    .vl {
        border-bottom: 3px solid var(--white);
        width: 65%;
    }
    .blurbox{
        top: 350px;
        backdrop-filter: blur(5px);
        height: 200px;
        color: var(--white);
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }
    .blurbox h1{
        font-size: 90px;
    }
    .blurbox p{
        font-size: 35px;
    }
    .aboutme{
        padding: 2% 15%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    .aboutme h1{
        color: var(--blue);
    }
    .aboutme img{
        width: 35%;
        margin: -0.5%;
    }
    .container-aboutme{
        display: flex;
        padding: 3% 0 0 0 ;
    }
    .container-aboutme p{
        margin: 0 0 3% 7%;
    }
    .text{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .button a{
        margin: 0 0 0 7%;
        text-decoration: none;
        color: var(--blue);
        font-size: 27px;
        padding: 1% 7%;
        border: dashed 4px  var(--beige);
    }
    .career{
        display: flex;
        align-items: center;
        flex-direction: column;
        padding: 2% 15%;
        color: var(--beige);
        background-image: url("../assets/img/background.png");
        background-repeat: no-repeat;
        background-size: 100% 140%;
    }
   .inner-container{
       color: var(--white);
       display: flex;
       padding: 2% 0;
    }
   .inner-container .text{
       padding: 0 3%;
    }
   .portfolio-container{
       color: var(--blue);
       padding: 2% 15%;
       display: flex;    
       flex-wrap: wrap;
       justify-content: center;
    }
   .works{
       display: flex;
       justify-content: space-between;
       margin-top: 3%;
    }
   .portfolio-item{
       width: 32%;
       padding: 3%;
       display: flex;
       flex-direction: column;
       align-items: center;
       background-image: url("../assets/img/backgroundwork.png");
       background-repeat: no-repeat;
       background-size: 120%;
    }
   .portfolio-item img{
       width: 100%;
    }
   .portfolio-item h3{
       color: var(--white);
       font-size: 30px;
       text-align: center;
       padding: 1%;
       margin: 0 0 7% 0;
       transition: 0.4s;
    }
    .portfolio-item h3:hover{
        color: var(--beige);
    }
   .portfolio-container .button{
       width: 15%;
    }
   .portfolio-container .button a{
       display: flex;
       margin: 15% 0 0 0;
       justify-content: space-around;
       padding: 3% 0;
    }
   .toolbox{
       display: flex;
       flex-direction: column;
       align-items: center;
       background-image: url("../assets/img/background.png");
       background-repeat: no-repeat;
       background-size: 100% 140%;
       padding: 2% 15%;
   }
   .toolbox h1{
       color: var(--beige);
   }
   .toolbox p{
       color: var(--white);
       padding: 1.5% 0;
   }
   .icons{
    display: flex;
    justify-content: center;
   }
   .icons img{
       width: 15%;
       margin: 1%;
   }
   .education{
       display: flex;
       flex-direction: column;
       align-items: center;
       padding: 2% 15%;
   }
   .education h1{
    color: var(--blue);
   }
   .education .text{
    display: flex;
    flex-direction: row;
    margin-top: 2%;
   }
   .education p{
    margin: 0 0.1rem ;
   }
   .education .text .bold{
    font-family: 'Cabin';
    font-weight: bold;
   }
   .contact{
       display: flex;
       flex-direction: column;
       align-items: center;
       background-image: url("../assets/img/background.png");
       background-repeat: no-repeat;
       background-size: 100% 100%;
       padding: 2% 15%;
   }
   .contact h1{
       color: var(--beige);
       margin-bottom: 1%;
   }
   .contact p{
    color: var(--white);
    margin: 0.3% 0;
   }
   .contact .bold{
    font-family: 'Cabin';
    font-weight: bold;
   }
   a{
    color: var(--white);
    text-decoration: none;
   }
   @media screen and (max-width: 600px) {
    h1{
        font-size: 27px;
    }
    p{
        font-size: 18px;
    }
    .main{
        height: 250px;
    }
    .main img{
        width: 100% ;
        height: 100%;
        margin-top: -1%;
    }
    .blurbox{
        top: 25%;
        height: 50%;
        width: 60%;
    }
    .blurbox h1{
        font-size:30px;
        text-align: center;
    }
    .blurbox p{
        font-size: 20px;
    }
    .aboutme{
        padding: 5% 15%;
    }
    .container-aboutme{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .container-aboutme img{
        width: 100%;
    }
    .container-aboutme p{
        margin: 3% 0;
    }
    .container-aboutme .text{
        display: flex;
        align-items: center;
    }
    .button{
        width: 50%;
    }
    .button a{
        font-size: 20px;
        padding: 5% 20%;
    }
    .career{
        padding: 5% 15%;
        background-size: 100% 140%;
    }
    .inner-container{
        display: flex;
        flex-direction: column;
    }
    .inner-container .text p{
        margin: 3% 0;
    }
    .inner-container iframe{
        height: 100%;
        width: 100%;
    }
    .works{
        display: flex;
        flex-direction: column;
    
    }
    .portfolio-item{
        width: 100%;
        padding: 5% 10% ;
        margin-bottom: 5%;
    }
    .portfolio-container .button{
        width: 50%;
    }
    .portfolio-container .button a{
        margin: 0;
    }
    .toolbox{
        padding: 5% 15%;
    }
    .toolbox p{
        text-align: center;
    }
    .education{
        padding: 5% 15%;
    }
    .education .text{
        display: flex;  
        flex-direction: column;
        margin: 3% 0;
    }
    .education .text p{
        margin: 1% 0;
    }
    .contact{
        padding: 5% 15%;
    }
}
</style>