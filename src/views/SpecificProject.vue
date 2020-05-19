<template>
    <div>
        <main class='wrapper'>
            <div class='project-info'>
                <h1 class='project-title'>{{ specificProject.title }}</h1>
                <p class='project-description'>{{ specificProject.description }}</p>
                <p class='project-skills'>Languages, Frameworks & Libraries</p>
                <div class='skills-container'>
                    <img v-for='technology in specificProject.technologies' @mouseover='displayAlt' @mouseleave='hover = false' class='skill-image' :src='require("@/assets/technologies/" + technology.name + "." + technology.extension)' :alt="technology.alt">
                </div>
                <div class="buttons flex">
                    <a class='live-site' :href="specificProject.url" target="_blank"><img src="@/assets/external.svg" alt="Visit Site">Visit Site</a>
                    <a v-for='repo in specificProject.repository' class='github' href="https://github.com/BozhidarKabzamalov/League-Of-Legends-Frontend" target="_blank">
                        <img src="@/assets/github-white.svg" alt="GitHub">{{ repo.type }} Repository
                    </a>
                </div>
                <div class='caption' v-if='hover' v-bind:style='{ "top": eOffsetTop + "px", "left": eOffsetLeft + "px" }'>
                    <p>{{ alt }}</p>
                </div>
            </div>
            <div class="image-container">
                <img v-for='(image, index) in specificProject.images' v-if='index == currentImage' :class='[ index == currentImage ? "active" : "inactive", "project-image"]' :src='require("@/assets/projects/" + image.folder + "/" + image.name + "." + image.extension)' alt="Landing Page">
            </div>
            <div v-if='specificProject.title == "ArtShare"' class="project-specifications">
                <p>
                    The application utilizes the Model-View-Controller architecture which separates the application into three parts - model, view and controller.
                    The MVC architecture is employed because it provides a large number of benefits like:
                </p>
                <ul>
                    <li>Separation of concerns</li>
                    <li>Easy maintenance thanks to the separation of concerns</li>
                    <li>Supports test-driven development</li>
                    <li>Fast development process</li>
                    <li>Possibility for parallel work on different modules</li>
                </ul>
                <p class='bold'>Front-end responsibilities:</p>
                <ul>
                    <li>Neatly present data to the users</li>
                    <li>Add interactivity to the application through JavaScript</li>
                    <li>Make AJAX requests in order to send and retrieve data from the back-end</li>
                </ul>
                <p class='bold'>Back-end responsibilities:</p>
                <ul>
                    <li>Create, read, update and delete data</li>
                    <li>Store information inside the database</li>
                    <li>Execute MySQL queries</li>
                    <li>Deal with user authentication and user roles</li>
                    <li>Validate data</li>
                    <li>Handle file uploads</li>
                    <li>Deal with image handling and manipulation</li>
                    <li>Handle routing</li>
                </ul>
            </div>
            <div v-else-if='specificProject.title == "Legends Of Runeterra"' class="project-specifications">
                <p class='project-description'>
                    The application consists of a Vue.js front-end which draws information from a JSON file and then displays the information in a user-friendly manner.
                </p>
                <p>
                    The lazy loading design pattern is utilized in order to defer the rendering of the images until they are in the viewport of the user, and in return reduce the website's bandwidth usage.
                    Moreover, all images are provided in WebP format with fallback to PNG format on browsers that do not support WebP.
                </p>
                <p>The application is completely responsive as a result of the use of CSS3 media queries.</p>
            </div>
            <div v-else-if='specificProject.title == "League Of Stats"' class="project-specifications">
                <p class='project-description'>
                    The application consists of a Vue.js front-end and PHP (Laravel) back-end
                    which are separated from each other. Separating the front-end from the
                    back-end has many advantages such as:
                </p>
                <ul>
                    <li>Readability</li>
                    <li>Flexibility</li>
                    <li>Scalability</li>
                    <li>Easy maintenance</li>
                    <li>Modularity</li>
                    <li>Easier deployment</li>
                </ul>
                <p class='bold'>Front-end responsibilities:</p>
                <ul>
                    <li>Make requests to the back-end for information about League Of Legends users and matches</li>
                    <li>Display all the information in an understandable manner</li>
                </ul>
                <p class='bold'>Back-end responsibilities:</p>
                <ul>
                    <li>Make requests to Riot Games's API and then return the responses to the front-end</li>
                    <li>Store the API responses inside the database</li>
                    <li>Obfuscate Riot Games's API key</li>
                </ul>
            </div>
            <div v-else-if='specificProject.title == "Travel Diary"' class="project-specifications">
                <p class='project-description'>
                    The application consists of a Vue.js front-end and PHP (Laravel) back-end
                    which are separated from each other. Separating the front-end from the
                    back-end has many advantages such as:
                </p>
                <ul>
                    <li>Readability</li>
                    <li>Flexibility</li>
                    <li>Scalability</li>
                    <li>Easy maintenance</li>
                    <li>Modularity</li>
                    <li>Easier deployment</li>
                </ul>
                <p class='bold'>Front-end responsibilities:</p>
                <ul>
                    <li>Make requests to the back-end for information about League Of Legends users and matches</li>
                    <li>Display all the information in an understandable manner</li>
                </ul>
                <p class='bold'>Back-end responsibilities:</p>
                <ul>
                    <li>Make requests to Riot Games's API and then return the responses to the front-end</li>
                    <li>Store the API responses inside the database</li>
                    <li>Obfuscate Riot Games's API key</li>
                </ul>
                <p class='bold'>Overcome challenges:</p>
                <ul>
                    <li>Working with a complex third party API which has considerable amount of endpoints and thousands of properties</li>
                    <li>Designing a simple, intuitive and easy to use user interface for a complex API</li>
                </ul>
            </div>
        </main>
        <Footer></Footer>
    </div>
</template>

<script>
import Footer from '../components/Footer.vue';
import projectsJson from '../assets/projects.json'

export default {
    props: ['project'],
    components: {
        Footer
    },
    data(){
        return {
            projectName: this.$route.params.projectName,
            projects: projectsJson,
            hover: false,
            eOffsetTop: null,
            eOffsetLeft: null,
            alt: null,
            currentImage: 0
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
    },
    computed: {
        specificProject(){
            return this.projects.find((project) => {
                return project.subpage == this.projectName
            })
        }
    },
    mounted(){
        setInterval(() => {
            this.currentImage += 1;

            if (this.currentImage >= this.specificProject.images.length) {
                this.currentImage = 0
            }
            console.log(this.currentImage)
        }, 5000);
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
