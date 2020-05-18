<template>
    <div>
        <main class='wrapper'>
            <div class='project-info'>
                <h1 class='project-title'>Legends of Runeterra</h1>
                <p class='project-description'>
                    Single-page application which allows Legends of Runeterra users to look up and filter cards based on specific criteria.
                </p>
                <p class='project-skills'>Languages, Frameworks & Libraries</p>
                <div class='skills-container'>
                        <img @mouseover='displayAlt' @mouseleave='hover = false' class='skill-image' src="@/assets/technologies/html.png" alt="HTML5">
                        <img @mouseover='displayAlt' @mouseleave='hover = false' class='skill-image' src="@/assets/technologies/css.png" alt="CSS3">
                        <img @mouseover='displayAlt' @mouseleave='hover = false' class='skill-image' src="@/assets/technologies/js.png" alt="JavaScript">
                        <img @mouseover='displayAlt' @mouseleave='hover = false' class='skill-image' src="@/assets/technologies/vue.png" alt="Vue.js">
                    </div>
                <div class="buttons flex">
                    <a class='live-site' href="http://runeterra.kabzamalov.com"><img src="@/assets/external.svg" alt="Visit Site">Visit Site</a>
                    <a class='github' href="https://github.com/BozhidarKabzamalov/Legends-Of-Runeterra"><img src="@/assets/github-white.svg" alt="GitHub">Repository</a>
                </div>
                <div class='caption' v-if='hover' v-bind:style='{ "top": eOffsetTop + "px", "left": eOffsetLeft + "px" }'>
                        <p>{{ alt }}</p>
                    </div>
            </div>
            <div class="image-container">
                <img class='project-image' src="@/assets/projects/runeterra/1.png" alt="Landing Page">
            </div>
            <div class="project-specifications">
                <p class='project-description'>
                    The application consists of a Vue.js front-end which draws information from a JSON file and then displays the information in a user-friendly manner.
                </p>
                <p>
                    The lazy loading design pattern is utilized in order to defer the rendering of the images until they are in the viewport of the user, and in return reduce the website's bandwidth usage.
                    Moreover, all images are provided in WebP format with fallback to PNG format on browsers that do not support WebP.
                </p>
                <p>The application is completely responsive as a result of the use of CSS3 media queries.</p>
            </div>
            <div class="image-container">
                <img class='project-image' src="@/assets/projects/runeterra/1.png" alt="Landing Page">
            </div>
        </main>
        <Footer></Footer>
    </div>
</template>

<script>
import Footer from '../components/Footer.vue';

export default {
    components: {
        Footer
    },
    data(){
        return {
            hover: false,
            eOffsetTop: null,
            eOffsetLeft: null,
            alt: null
        }
    },
    methods: {
        displayAlt(e){
            this.hover = true;

            let height = e.target.height
            let width = e.target.width
            let eOffsetTop = e.target.offsetTop
            let eOffsetLeft = e.target.offsetLeft
            let alt = e.target.alt

            this.eOffsetTop = eOffsetTop + height + 10
            this.eOffsetLeft = eOffsetLeft + width/2
            this.alt = e.target.alt
        }
    }
}
</script>

<style scoped>
    main {
        background-color: #ffffff;
    }
    ul {
        width: 60%;
        font-size: 19px;
        line-height: 1.7;
        margin-bottom: 40px;
    }
    ul:last-child {
        margin-bottom: 0;
    }
    ul li {
        list-style-type: disc;
        list-style-position: inside;
    }
    .bold {
        font-weight: 500;
    }
    .project-info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .project-specifications, .project-info {
        padding: 40px 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .project-specifications p {
        font-size: 22px;
        width: 60%;
        line-height: 1.7;
        margin-bottom: 20px;
    }
    .project-image {
        display: block;
        width: 100%;
        height: 100%;
    }
    .project {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .project-title {
        margin: 0 0 40px 0;
    }
    .project-description {
        font-size: 22px;
        width: 60%;
        line-height: 1.7;
        margin-bottom: 40px;
    }
    .project-skills {
        text-align: center;
        font-weight: 500;
        font-size: 23px;
        margin-bottom: 20px;
    }
    .skills-container {
        margin-bottom: 20px;
    }
    .skill-image {
        width: 40px;
        height: auto;
        margin-right: 20px;
        transition: all .1s linear;
        opacity: 0.9;
        padding-bottom: 41px;
    }
    .skill-image:hover {
        opacity: 1;
        transform: scale(1.1);
    }
    .caption {
        padding: 1px 10px;
        position: absolute;
        transform: translateX(-50%);
        background-color: rgba(0, 0, 0, 0.7);
        border-radius: 4px;
        padding: 10px;
    }
    .caption p {
        font-size: 14px;
        color: rgba(0, 0, 0, 0.8);
        color: #f1f1f1;
        text-align: center;
        opacity: 1;
    }
    .buttons a {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 30px;
    }
    .buttons a:last-child {
        margin-right: 0px;
    }
    .buttons a img {
        width: 20px;
        height: 20px;
        margin-right: 10px
    }
    .live-site {
        font-weight: 500;
        padding: 10px 20px 10px 20px;
        border-radius: 4px;
        color: #fff;
        background-color: #00c58e;
        transition: all .1s linear;
    }
    .live-site:hover {
        background-color: #0db385;
        transform: scale(1.05);
    }
    .github {
        font-weight: 500;
        padding: 10px 20px 10px 20px;
        border-radius: 4px;
        color: #fff;
        background-color: #08a6ff;
        transition: all .1s linear;
    }
    .github:hover {
        background-color: #0d93de;
        transform: scale(1.05);
    }
    @media (max-width: 900px) {
        .project-specifications, .project-info {
            padding: 20px 10px;
        }
        .buttons {
            flex-direction: column;
        }
        .buttons a {
            margin: 0 0 20px 0;
        }
        ul, .project-specifications p, .project-description {
            width: 90%;
        }
    }
</style>
