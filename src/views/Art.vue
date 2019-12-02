<template>
    <div>
        <main class='wrapper'>
            <div class='project-info'>
                <h1 class='project-title'>ArtShare</h1>
                <p class='project-description'>
                    ArtShare is a multiple-page CRUD application which aims to provide a platform where artists can share,
                    discuss and rate their artworks. Designed and developed in line with the emerging trends
                    and technologies for web development. The application is easy to use, intuitive, efficient and has an attractive, responsive and modern web design.
                    It is also extremely fast and flexible, with expansion possibilities.
                </p>
                <p class='project-skills'>Languages, Frameworks & Libraries</p>
                <div class='skills-container'>
                        <img @mouseover='displayAlt' @mouseleave='hover = false' class='skill-image' src="@/assets/html.png" alt="HTML5">
                        <img @mouseover='displayAlt' @mouseleave='hover = false' class='skill-image' src="@/assets/css.png" alt="CSS3">
                        <img @mouseover='displayAlt' @mouseleave='hover = false' class='skill-image' src="@/assets/js.png" alt="JavaScript">
                        <img @mouseover='displayAlt' @mouseleave='hover = false' class='skill-image' src="@/assets/jquery.png" alt="jQuery">
                        <img @mouseover='displayAlt' @mouseleave='hover = false' class='skill-image' src="@/assets/php.png" alt="PHP">
                        <img @mouseover='displayAlt' @mouseleave='hover = false' class='skill-image' src="@/assets/laravel.png" alt="Laravel">
                        <img @mouseover='displayAlt' @mouseleave='hover = false' class='skill-image' src="@/assets/mysql.png" alt="MySQL">
                    </div>
                <div class="buttons flex">
                    <a class='live-site' href="http://art.kabzamalov.com/"><img src="@/assets/external.svg" alt="Visit Site">Visit Site</a>
                    <a class='github' href="https://github.com/BozhidarKabzamalov/Art"><img src="@/assets/github-white.svg" alt="GitHub">Repository</a>
                </div>
                <div class='caption' v-if='hover' v-bind:style='{ "top": eOffsetTop + "px", "left": eOffsetLeft + "px" }'>
                        <p>{{ alt }}</p>
                    </div>
            </div>
            <div class="image-container">
                <img class='project-image' src="@/assets/artshare/art1.jpg" alt="Landing Page">
            </div>
            <div class="project-specifications">
                <p>
                    The application utilizes the Model-View-Controller architecture which separates the application into three parts - model, view and controller.
                    The MVC architecture is used because it provides many benefits like:
                </p>
                <ul>
                    <li>Separation of concerns</li>
                    <li>Easy maintenance thanks to the separation of concerns</li>
                    <li>Supports test-driven development</li>
                    <li>Fast development process</li>
                    <li>Possibility for parallel work on different modules</li>
                </ul>
            </div>
            <div class="image-container">
                <img class='project-image' src="@/assets/artshare/art2.jpg" alt="Landing Page">
            </div>
            <div class="image-container">
                <img class='project-image' src="@/assets/artshare/art3.jpg" alt="Landing Page">
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
