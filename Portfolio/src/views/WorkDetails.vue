<template> 
    <div  class="portfolio-item" v-if="workDetails">
        <!-- For all -->
      <h1>{{ workDetails.wholetitle }}</h1>
      <p>{{ workDetails.description }}</p>
      
      <!-- Folder -->

      <div :style="workDetails.noneonlyforfolder" class="folder">
         <img :src="workDetails.imagef" class="img1" alt="">
         <img :src="workDetails.imagef1" class="img2" alt="">
      </div>
      <div :style="workDetails.noneonlyforfolder" class="folder">
         <img :src="workDetails.imagef2" class="img2" alt="">
         <img :src="workDetails.imagef" class="img1" alt="">
      </div>
      
      <!-- Promocommercial -->

      <video :style="workDetails.noneonlyforpromocommercial" :width="workDetails.size" controls><source :src="workDetails.promovideo" class="promocommercial" type="video/mp4"></video>
      
      <!-- Branding -->

      <iframe class="two" :style="workDetails.noneonlybranding" width="100%" height="400" :src="workDetails.videobranding" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      
      <!-- Website -->

      <div :style="workDetails.noneonlyforwebsite" class="image">
        <img :src="workDetails.image1" alt="">
        <img :src="workDetails.image2" alt="">
    </div>
    
    <!-- Branding -->

    <div :style="workDetails.noneonlybranding" class="text-branding"><p>{{ workDetails.somecalendar }}</p></div>
    <div :style="workDetails.noneonlybranding" class="some"><img :src="workDetails.imageb1" alt=""><img :src="workDetails.imageb2" alt=""><img :src="workDetails.imageb3" alt=""><img :src="workDetails.imageb4" alt=""></div>
    <div :style="workDetails.noneonlybrandingconcept" class="some"><img :src="workDetails.imageb5" alt=""><img :src="workDetails.imageb6" alt=""><img :src="workDetails.imageb7" alt=""><img :src="workDetails.imageb8" alt=""></div>
    <div :style="workDetails.noneonlybrandingconcept" class="text-branding"><p>{{ workDetails.mockups }}</p></div>
    <div :style="workDetails.noneonlybrandingconcept" class="some"><img :src="workDetails.imageb9" alt=""><img :src="workDetails.imageb10" alt=""><img :src="workDetails.imageb11" alt=""><img :src="workDetails.imageb12" alt=""></div>
    
    <!-- Website -->

    <div :style="workDetails.noneonlyforwebsite"  class="text"><p>{{ workDetails.colortext }}</p><img :src="workDetails.color" alt=""></div>
    <div :style="workDetails.noneonlyforwebsite"  class="text1"><p>{{ workDetails.fonttext }}</p><img :src="workDetails.font" alt=""><img :src="workDetails.font1" alt=""> </div>
    <div :style="workDetails.noneonlyforwebsite"  class="text2"><p>{{ workDetails.logotext }}</p><img :src="workDetails.logo" alt=""></div>
    <div :style="workDetails.noneonlyforwebsite"  class="text3"> <p>{{ workDetails.postertext }}</p><div class="image"><img :src="workDetails.poster" alt=""><img :src="workDetails.poster1" alt=""></div></div>

   <!-- Website BBQ -->

    <iframe class="one" :style="workDetails.noneonlyforwebsitebbq" width="100%" :height="workDetails.videoheight" :src="workDetails.video" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

    <!-- For all -->

    <div class="button"><h1><a :href="workDetails.link" target=”_blank”>{{ workDetails.button }}</a></h1></div>
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
import { toRefs, computed } from 'vue';
import portfolio from '../assets/modules/portfolio'

const {state} = portfolio()
const props = defineProps({
    id: String
})
const { id } = toRefs(props)

const workDetails = computed( () => {
    return state.value.find(item => item.id == id.value)
})

</script>
<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Allerta+Stencil&family=Cabin:wght@400;500;700&display=swap');
.portfolio-item{
    width: 70%;
    margin: 4% 15%;
    padding: 3% 8%;
    background-image: url("../assets/img/backgroundwork.png");
    background-repeat: no-repeat;
    background-size: 120% 100%;
}
.portfolio-item h1{
    margin: 0;
    color: var(--beige);
    font-size: 40px;
}
.portfolio-item p{
    color: var(--white);
    margin: 1% 0;
}
.portfolio-item img{
    width: 48%;
}
.folder{
    display: flex;
    justify-content: space-between;
    margin-bottom: 5% ;
    margin-top: 1%;
}
.folder .img1{
    width: 33%;
}
.folder .img2{
    width: 63%;
}
.image{
    display: flex;
    justify-content: space-between;
    margin-top: 2%;
}
.text{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-top: 3%;
}
.text p{
    margin-right: 3%;
    font-size: 30px;
}
.text img{
    width: 70%;
}
.text1{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-top: 3%;
}
.text1 p{
    margin-right: 3%;
    font-size: 30px;
}
.text1 img{
    width: 35%;
    margin-right: 1%;
}
.text2{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-top: 3%;
    width: 100%;
}
.text2 p{
    margin-right: 3%;
    font-size: 30px;
}
.text2 img{
    width: 20%;
}
.text3 p{
    margin-right: 3%;
    font-size: 30px;
}
.text3 .image{
    width: 100%;
}
.one{
    margin: 5% 0;
}
.two{
    margin: 3% 0;
}
.button{
    width: 30%;
}
.button a{
    margin: 0;
    display: flex;
    justify-content: center;
    text-decoration: none;
    color: var(--blue);
    font-size: 27px;
    border: dashed 4px  var(--white);
}
.text-branding{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 2%;
}
.text-branding p{
    margin-right: 3%;
    font-size: 30px;
}
.some{
    display: flex;
    justify-content: space-between;
    margin-bottom: 6% ;

}
.some img{
    width: 24%;
    height: 100%;
}
video{
    margin-bottom: 5%;
}
@media screen and (max-width: 600px) {
    .portfolio-item h1{
        font-size: 27px;
        text-align: center  ;
    }
    .portfolio-item p{
        font-size: 20px;
        margin: 2%;
    }
    .portfolio-item{
        padding: 5% 10%;
        margin: -1% 0 0 0;
        width: 100%;

    }
    .portfolio-item .image{
        display: flex;
        flex-direction: column;
    }
    .portfolio-item .image img{
        width: 100%;
        margin: 2% 0;
    }
    .portfolio-item iframe{
        height: 100%;
    }
    .portfolio-item .button{
        width: 100%;
    }
    .portfolio-item .button a{
        font-size: 16px;
    }
    .some{
        display: flex;
        flex-wrap: wrap ;
    }
    .some img{
        width: 44%;
        margin: 3%;
    }
}
</style>