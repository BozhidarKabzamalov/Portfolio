<template lang="html">
    <div class="project">
        <div class="column">
            <h1 class='project-name'>{{ project.title }}</h1>
            <p class='project-description'>{{ project.description}}</p>
            <div class='skills-container'>
                <img v-for='technology in project.technologies' @mouseover='displayAlt' @mouseleave='hover = false' class='skill-image' :src='require("@/assets/technologies/" + technology.name + "." + technology.extension)' :alt="technology.alt">
            </div>
            <div class="project-links">
                <router-link class='more-info' :to="{ name: 'specificProject', params: { projectName: this.project.subpage, project: this.project }}">
                    <img src="@/assets/info.svg" alt="More Info">More Info
                </router-link>
                <a class='live-site' :href="project.url" target="_blank">
                    <img src="@/assets/external.svg" alt="Visit Site">Visit Site
                </a>
            </div>
            <div class='caption' v-if='hover' v-bind:style='{ "top": eOffsetTop + "px", "left": eOffsetLeft + "px" }'>
                <p>{{ alt }}</p>
            </div>
        </div>
        <div class="column">
            <img class='thumbnail' :src='require("@/assets/projects/" + project.thumbnail.folder + "/" + project.thumbnail.name + "." + project.thumbnail.extension)' :alt="project.thumbnail.name">
        </div>
    </div>
</template>

<script>
export default {
    props: ['project'],
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
.project {
    display: flex;
    background-color: #fefefe;
    margin-bottom: 40px;
    border-radius: 4px;
    box-shadow: 0 5px 8px 0 rgba(0,0,0,.2);
    min-height: 380px;
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
