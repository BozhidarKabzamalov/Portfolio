<template lang="html">
        <section class='projects'>
            <h1 class='section-header'>PROJECTS</h1>
            <div class="projects-container">
                <Project v-for='project in projects' :project='project'></Project>
            </div>
    </section>

</template>

<script>
import Project from './Project.vue'
import projectsJson from '../assets/projects.json'

export default {
    components: {
        Project
    },
    data(){
        return {
            projects: projectsJson,
            hover: false,
            eOffsetTop: null,
            eOffsetLeft: null,
            alt: null
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
.section-header {
    font-size: 40px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 80px;
}
.projects-container {
    display: flex;
    flex-direction: column;
}

@media (max-width: 1870px) {
    .projects-container {
        width: 100%;
        flex-direction: row;
        flex-wrap: wrap;
    }
}
</style>
