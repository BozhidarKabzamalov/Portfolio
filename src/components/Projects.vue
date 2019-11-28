<template lang="html">
        <div class='projects'>
            <h1 class='section-header'>PROJECTS</h1>
            <div class="projects-container">
                <div class="project">
                    <div class="column">
                        <h1 class='project-name'>League Of Stats</h1>
                        <p class='project-description'>Single-page application which allows League of Legends users to easily look up information and statistics about their accounts by utilizing Riot Games's API.</p>
                        <div class='skills-container'>
                            <img @mouseover='displayAlt' @mouseleave='hover = false' class='skill-image' src="@/assets/html.png" alt="HTML5">
                            <img @mouseover='displayAlt' @mouseleave='hover = false' class='skill-image' src="@/assets/css.png" alt="CSS3">
                            <img @mouseover='displayAlt' @mouseleave='hover = false' class='skill-image' src="@/assets/js.png" alt="JavaScript">
                            <img @mouseover='displayAlt' @mouseleave='hover = false' class='skill-image' src="@/assets/vue.png" alt="Vue.js">
                            <img @mouseover='displayAlt' @mouseleave='hover = false' class='skill-image' src="@/assets/php.png" alt="PHP">
                            <img @mouseover='displayAlt' @mouseleave='hover = false' class='skill-image' src="@/assets/laravel.png" alt="Laravel">
                            <img @mouseover='displayAlt' @mouseleave='hover = false' class='skill-image' src="@/assets/mysql.png" alt="MySQL">
                        </div>
                        <div class="project-links">
                            <router-link class='more-info' :to="'LeagueOfStats'"><img src="@/assets/info.svg" alt="More Info">More Info</router-link>
                            <a class='live-site' href="http://lol.kabzamalov.com"><img src="@/assets/external.svg" alt="Visit Site">Visit Site</a>
                        </div>
                        <div class='caption' v-if='hover' v-bind:style='{ "top": eOffsetTop + "px", "left": eOffsetLeft + "px" }'>
                            <p>{{ alt }}</p>
                        </div>
                    </div>
                    <div class="column">
                        <img class='thumbnail' src="../assets/lol.png" alt="thumbnail">
                    </div>
                </div>
                <div class="project">
                    <div class="column">
                        <h1 class='project-name'>Travel Diary</h1>
                        <p class='project-description'>Single-page application which allows its users to pinpoint cities on a Google map, and in return, receive a list of recommended places, vistas and activities to check out in the selected city.</p>
                        <div class='skills-container'>
                            <img @mouseover='displayAlt' @mouseleave='hover = false' class='skill-image' src="@/assets/html.png" alt="HTML5">
                            <img @mouseover='displayAlt' @mouseleave='hover = false' class='skill-image' src="@/assets/css.png" alt="CSS3">
                            <img @mouseover='displayAlt' @mouseleave='hover = false' class='skill-image' src="@/assets/js.png" alt="JavaScript">
                            <img @mouseover='displayAlt' @mouseleave='hover = false' class='skill-image' src="@/assets/vue.png" alt="Vue.js">
                            <img @mouseover='displayAlt' @mouseleave='hover = false' class='skill-image' src="@/assets/php.png" alt="PHP">
                            <img @mouseover='displayAlt' @mouseleave='hover = false' class='skill-image' src="@/assets/laravel.png" alt="Laravel">
                            <img @mouseover='displayAlt' @mouseleave='hover = false' class='skill-image' src="@/assets/mysql.png" alt="MySQL">
                        </div>
                        <div class="project-links">
                            <router-link class='more-info' :to="'TravelDiary'"><img src="@/assets/info.svg" alt="More Info">More Info</router-link>
                            <a class='live-site' href="http://diary.kabzamalov.com"><img src="@/assets/external.svg" alt="Visit Site">Visit Site</a>
                        </div>
                    </div>
                    <div class="column">
                        <img class='thumbnail' src="../assets/travel.png" alt="thumbnail">
                    </div>
                </div>
                <div class="project">
                    <div class="column">
                        <h1 class='project-name'>ArtShare</h1>
                        <p class='project-description'>Multiple-page CRUD application which aims to provide a platform where artists can share, discuss and rate their artworks. Designed and developed in line with the emerging trends and technologies for web development.</p>
                        <div class='skills-container'>
                            <img @mouseover='displayAlt' @mouseleave='hover = false' class='skill-image' src="@/assets/html.png" alt="HTML5">
                            <img @mouseover='displayAlt' @mouseleave='hover = false' class='skill-image' src="@/assets/css.png" alt="CSS3">
                            <img @mouseover='displayAlt' @mouseleave='hover = false' class='skill-image' src="@/assets/js.png" alt="JavaScript">
                            <img @mouseover='displayAlt' @mouseleave='hover = false' class='skill-image' src="@/assets/jquery.png" alt="jQuery">
                            <img @mouseover='displayAlt' @mouseleave='hover = false' class='skill-image' src="@/assets/php.png" alt="PHP">
                            <img @mouseover='displayAlt' @mouseleave='hover = false' class='skill-image' src="@/assets/laravel.png" alt="Laravel">
                            <img @mouseover='displayAlt' @mouseleave='hover = false' class='skill-image' src="@/assets/mysql.png" alt="MySQL">
                        </div>
                        <div class="project-links">
                            <router-link class='more-info' :to="'ArtShare'"><img src="@/assets/info.svg" alt="More Info">More Info</router-link>
                            <a class='live-site' href="http://art.kabzamalov.com"><img src="@/assets/external.svg" alt="Visit Site">Visit Site</a>
                        </div>
                    </div>
                    <div class="column">
                        <img class='thumbnail' src="../assets/art.jpg" alt="thumbnail">
                    </div>
                </div>
            </div>
    </div>

</template>

<script>
export default {
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

<style lang="css" scoped>
.projects {
    padding: 40px 0 0 0;
    font-size: 1.1em;
    line-height: 30px;
    margin-bottom: 40px;
}
.projects-container {
    display: flex;
    flex-direction: column;
}
.project {
    display: flex;
    background-color: #fefefe;
    margin-bottom: 40px;
    border-radius: 4px;
    box-shadow: 0 5px 8px 0 rgba(0,0,0,.2);
}
.project > .column:first-child {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 30px;
}
.project-name, .project-description {
    margin-bottom: 30px;
}
.project-links {
    display: flex;
}
.project-links a {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 15px;
}
.project-links a img {
    width: 20px;
    height: 20px;
    margin-right: 10px;
}
.project-links a:last-child {
    margin-right: 0px;
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
.more-info {
    font-weight: 500;
    padding: 10px 20px 10px 20px;
    border-radius: 4px;
    color: #fff;
    background-color: #08a6ff;
    transition: all .1s linear;
}
.more-info:hover {
    background-color: #0d93de;
    transform: scale(1.05);
}
.section-header {
    font-size: 40px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 80px;
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
.thumbnail {
    display: block;
    width: 100%;
}
.caption {
    padding: 1px 10px;
    position: absolute;
    transform: translateX(-50%);
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 4px;
}
.caption p {
    font-size: 14px;
    color: rgba(0, 0, 0, 0.8);
    color: #f1f1f1;
    text-align: center;
    opacity: 1;
}
@media (max-width: 1870px) {
    .project {
        flex-direction: column;
    }
    .projects-container {
        width: 100%;
        flex-direction: row;
        flex-wrap: wrap;
    }
    .project {
        width: calc(50% - 5px);
    }
    .project > .column:nth-child(1) {
        order: 1;
    }
    .project:nth-child(odd) {
        margin-right: 5px;
    }
    .project:nth-child(even) {
        margin-left: 5px;
    }
    .project > .column:first-child {
        justify-content: flex-start;
    }
}
@media (max-width: 1280px) {
    .project {
        width: 100%;
    }
    .project:nth-child(odd) {
        margin-right: 0px;
    }
    .project:nth-child(even) {
        margin-left: 0px;
    }
}
@media (max-width: 900px) {
    .project-links {
        font-size: 14px;
    }
}
</style>
