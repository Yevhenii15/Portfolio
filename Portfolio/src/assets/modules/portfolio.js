import { ref } from 'vue'

const getPortfolio = () => {
    const state = ref([
        {
            id: 1,
            title: 'Website',
            wholetitle: 'BBQ Website',
            description: 'Client wanted a BBQ website for their competition and we created color palette, logo, video and poster to promot the event.',
            image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-ed1cb.appspot.com/o/bbq1.jpg?alt=media&token=42bf1511-b766-475d-a1a8-02f47bfff9e2',
            image1: 'https://firebasestorage.googleapis.com/v0/b/portfolio-ed1cb.appspot.com/o/bbq1.jpg?alt=media&token=42bf1511-b766-475d-a1a8-02f47bfff9e2',
            image2:'https://firebasestorage.googleapis.com/v0/b/portfolio-ed1cb.appspot.com/o/bbq2.jpg?alt=media&token=feafc4d3-c195-4b5a-8dc1-3b15c9fd653b',
            colortext: 'Color',
            color: 'https://firebasestorage.googleapis.com/v0/b/portfolio-ed1cb.appspot.com/o/bbqcolor.png?alt=media&token=06d579f0-9de6-4965-b31a-776d3250b14a',
            fonttext: 'Font',
            font: 'https://firebasestorage.googleapis.com/v0/b/portfolio-ed1cb.appspot.com/o/western-bang-bang.png?alt=media&token=05b0bbc6-ba5a-434a-ba9c-3166ddc9fe32',
            font1: 'https://firebasestorage.googleapis.com/v0/b/portfolio-ed1cb.appspot.com/o/helvetica.jpeg?alt=media&token=353e6bf9-e9f2-4fa9-a20f-b1afa97ebecb',
            logotext: 'Logo',
            logo: 'https://firebasestorage.googleapis.com/v0/b/portfolio-ed1cb.appspot.com/o/bbqlogo.png?alt=media&token=b168167a-998a-409c-bdde-6a04ce286f16',
            postertext: 'Poster',
            poster: 'https://firebasestorage.googleapis.com/v0/b/portfolio-ed1cb.appspot.com/o/poster.png?alt=media&token=b515802f-d1a9-4231-ba77-a24da1e25534',
            poster1: 'https://firebasestorage.googleapis.com/v0/b/portfolio-ed1cb.appspot.com/o/poster1.png?alt=media&token=5a081188-fd08-4d45-bf34-69f79d864636',
            video: 'https://www.youtube.com/embed/7LVdGbQwJEY',
            link: 'https://yevhenii15.github.io/',
            videoheight: '315',
            size: '0',
            button: 'Visit Website',
            noneonlyforfolder: 'display: none',
            noneonlybranding: 'display: none',
            noneonlyforpromocommercial: 'display: none',
            noneonlybrandingconcept: 'display: none'

        },
        {
            id: 2,
            title: 'Rebranding',
            wholetitle: 'Rebranding concept',
            description: 'This project was about making a Social media campaign along with all the content required. The project is based on a real world case and might be presented to the municipality of Esbjerg.',
            image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-ed1cb.appspot.com/o/mockup8.png?alt=media&token=39a26d1b-ae7c-46f5-a13e-631ac7491698',
            somecalendar: 'SoMeCalendar',
            mockups: 'Mockups',
            imageb11: 'https://firebasestorage.googleapis.com/v0/b/portfolio-ed1cb.appspot.com/o/mockup8.png?alt=media&token=39a26d1b-ae7c-46f5-a13e-631ac7491698',
            imageb5: 'https://firebasestorage.googleapis.com/v0/b/portfolio-ed1cb.appspot.com/o/somecalendar1.png?alt=media&token=9cbb616b-2fe9-4ea9-b92c-3c63b9a0ce85',
            imageb6: 'https://firebasestorage.googleapis.com/v0/b/portfolio-ed1cb.appspot.com/o/somecalendar2.png?alt=media&token=329ffdd4-ec92-4d0e-a2bd-fa022f86f473',
            imageb7: 'https://firebasestorage.googleapis.com/v0/b/portfolio-ed1cb.appspot.com/o/somecalendar3.png?alt=media&token=3f4620f0-8b8d-4243-990e-fb0ddc07cc80',
            imageb8: 'https://firebasestorage.googleapis.com/v0/b/portfolio-ed1cb.appspot.com/o/somecalendar4.png?alt=media&token=c71e4fad-041c-4d14-9aa4-69f6b81cd69f',
            imageb1: 'https://firebasestorage.googleapis.com/v0/b/portfolio-ed1cb.appspot.com/o/somecalendar5.png?alt=media&token=d293a688-f6cc-4b4d-bb1b-5a77246938d8',
            imageb2: 'https://firebasestorage.googleapis.com/v0/b/portfolio-ed1cb.appspot.com/o/somecalendar6.png?alt=media&token=6ec9d6bf-542b-4883-96fc-bbcc5e1375c5',
            imageb3: 'https://firebasestorage.googleapis.com/v0/b/portfolio-ed1cb.appspot.com/o/somecalendar7.png?alt=media&token=ddd62ec5-a9ef-4a97-8532-a39c8b410ea0',
            imageb4: 'https://firebasestorage.googleapis.com/v0/b/portfolio-ed1cb.appspot.com/o/somecalendar8.png?alt=media&token=aa53b86a-5bed-449d-b65c-812bb4bfab38',
            imageb9: 'https://firebasestorage.googleapis.com/v0/b/portfolio-ed1cb.appspot.com/o/mockup1.png?alt=media&token=03882955-069e-4702-b5f2-c5541a98c00e',
            imageb10: 'https://firebasestorage.googleapis.com/v0/b/portfolio-ed1cb.appspot.com/o/mockup2.png?alt=media&token=af4917e7-15ca-43c6-bf07-a993a6e6afc8',
            imageb12: 'https://firebasestorage.googleapis.com/v0/b/portfolio-ed1cb.appspot.com/o/mockup6.png?alt=media&token=d068314f-14af-4faa-aacc-1458d0a88b4d',
            imageb13: 'https://firebasestorage.googleapis.com/v0/b/portfolio-ed1cb.appspot.com/o/mockup3.png?alt=media&token=c050c597-4234-4c6f-8dc9-959b333b4923',
            imageb14: 'https://firebasestorage.googleapis.com/v0/b/portfolio-ed1cb.appspot.com/o/mockup4.png?alt=media&token=c42084ff-27c1-4b20-8453-18d0d37b09f4',
            imageb15: 'https://firebasestorage.googleapis.com/v0/b/portfolio-ed1cb.appspot.com/o/mockup5.png?alt=media&token=8813a9f3-f520-4f26-a965-c0127b22e934',
            videobranding: 'https://www.youtube.com/embed/l-ycqdgvkYY',
            size: '0',
            link: 'https://youtu.be/l-ycqdgvkYY',
            videoheight: '0',
            button: 'Watch Video',
            noneonlyforwebsite: 'display: none',
            noneonlyforfolder: 'display: none',
            noneonlyforpromocommercial: 'display: none',
            noneonlyforwebsitebbq: 'display: none',

        },
        {
            id: 3,
            title: 'Folder',
            wholetitle: 'Folder',
            description: 'This folder was made to promote one nice place in Denmark and can be use like a pamphlet. The main idea was to show advantages of this island.',
            image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-ed1cb.appspot.com/o/folder1.png?alt=media&token=33937973-6aa8-4416-adab-24240b5da7aa',
            imagef: 'https://firebasestorage.googleapis.com/v0/b/portfolio-ed1cb.appspot.com/o/folder1.png?alt=media&token=33937973-6aa8-4416-adab-24240b5da7aa',
            imagef1: 'https://firebasestorage.googleapis.com/v0/b/portfolio-ed1cb.appspot.com/o/folder2.png?alt=media&token=c7117715-7353-445b-8185-1761a8990c29',
            imagef2: 'https://firebasestorage.googleapis.com/v0/b/portfolio-ed1cb.appspot.com/o/folder3.png?alt=media&token=e83ce5df-a744-4fdc-9790-e8fc1c3654cf',
            link: 'https://indd.adobe.com/view/c7e2ed51-d7f1-4e9a-bf9b-9c888d85e199',
            size: '0',
            videoheight: '0',
            noneonlyforwebsite: 'display: none',
            button: 'Visit Pdf',
            noneonlybranding: 'display: none',
            noneonlyforpromocommercial: 'display: none',
            noneonlybrandingconcept: 'display: none',
            noneonlyforwebsitebbq: 'display: none',

        },
        {
            id: 4,
            title: 'Website',
            wholetitle: 'Travel website',
            description: 'Client wanted a travel website for their company and we created color palette, logo, for their clients.',
            image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-ed1cb.appspot.com/o/travel1.png?alt=media&token=46d899c9-b4f0-4283-b8c5-227cdc3e5110',
            image1: 'https://firebasestorage.googleapis.com/v0/b/portfolio-ed1cb.appspot.com/o/travel1.png?alt=media&token=46d899c9-b4f0-4283-b8c5-227cdc3e5110',
            image2: 'https://firebasestorage.googleapis.com/v0/b/portfolio-ed1cb.appspot.com/o/travel2.png?alt=media&token=06a532c2-6262-449e-898f-3129f0f80df9',
            colortext: 'Color',
            color: 'https://firebasestorage.googleapis.com/v0/b/portfolio-ed1cb.appspot.com/o/travelcolor.png?alt=media&token=634acb9f-aa76-4e77-8ea1-6c4f6f1d05b4',
            fonttext: 'Font',
            font: 'https://firebasestorage.googleapis.com/v0/b/portfolio-ed1cb.appspot.com/o/akayakanadaka.svg?alt=media&token=56e7db04-f1b3-4304-90e8-e394f27575a5',
            font1: 'https://firebasestorage.googleapis.com/v0/b/portfolio-ed1cb.appspot.com/o/lato.png?alt=media&token=1ba3e208-9410-4bc0-ae82-1728d59b66f2',
            logotext: 'Logo',
            logo: 'https://firebasestorage.googleapis.com/v0/b/portfolio-ed1cb.appspot.com/o/travellogo.png?alt=media&token=e80468c3-2c07-4e78-8b18-4b19757f109f',
            link: '',
            videoheight: '0',
            size: '0',
            button: 'Visit Website',
            noneonlyforfolder: 'display: none',
            noneonlybranding: 'display: none',
            noneonlyforpromocommercial: 'display: none',
            noneonlybrandingconcept: 'display: none',
            noneonlyforwebsitebbq: 'display: none',
        },
        {
            id: 5,
            title: 'Promocommercial',
            wholetitle: 'Promocommercial',
            description: 'This promo commercial video was created for Instagram to show audience, how they can save money in Denmark.',
            image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-ed1cb.appspot.com/o/Promocomortional.png?alt=media&token=88a1e88e-72f5-44a8-8042-e073baf34aba',
            promovideo: 'https://firebasestorage.googleapis.com/v0/b/portfolio-ed1cb.appspot.com/o/Promocomortional_1.mp4?alt=media&token=82e44443-a614-4153-9c63-fa4372121191',
            link: 'https://youtube.com/shorts/v2dpLKICsvM?feature=share',
            size: '300',
            videoheight: '0',
            noneonlyforwebsite: 'display: none',
            button: 'Visit YouTube',
            noneonlyforfolder: 'display: none',
            noneonlybranding: 'display: none',
            noneonlybrandingconcept: 'display: none',
            noneonlyforwebsitebbq: 'display: none',
        },
        {
            id: 6,
            title: 'Branding',
            wholetitle: 'Branding',
            description: 'In this project our task was to re-design organ donation website, made it more user-friendly or make people  trust us. ',
            image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-ed1cb.appspot.com/o/branding1.png?alt=media&token=bca4fe89-9765-4cde-b33e-7ad0ba02df87',
            imageb1: 'https://firebasestorage.googleapis.com/v0/b/portfolio-ed1cb.appspot.com/o/branding1.png?alt=media&token=bca4fe89-9765-4cde-b33e-7ad0ba02df87',
            imageb2: 'https://firebasestorage.googleapis.com/v0/b/portfolio-ed1cb.appspot.com/o/branding3.png?alt=media&token=0040b3e4-d42e-4b49-9999-8b345405dace',
            imageb3: 'https://firebasestorage.googleapis.com/v0/b/portfolio-ed1cb.appspot.com/o/branding4.png?alt=media&token=7f6bcfe4-2572-4607-8bc7-715079708d18',
            imageb4: 'https://firebasestorage.googleapis.com/v0/b/portfolio-ed1cb.appspot.com/o/branding5.png?alt=media&token=5877f855-fe5d-43cd-8f02-7e227b05f7a5',
            videobranding: 'https://www.youtube.com/embed/yca0BSgptzI',
            link: 'https://youtu.be/yca0BSgptzI',
            size: '0',
            videoheight: '0',
            noneonlyforwebsite: 'display: none',
            button: 'Visit YouTube',
            noneonlyforfolder: 'display: none',
            noneonlyforpromocommercial: 'display: none',
            noneonlybrandingconcept: 'display: none',
            noneonlyforwebsitebbq: 'display: none',
        }
    ])
    return {
        state
    }
}
export default getPortfolio