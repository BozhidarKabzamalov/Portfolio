<template lang="html">
    <section class='skills'>
        <h1 class='section-header'>SKILLS</h1>
        <h2 class='section-description'>Languages, Frameworks & Libraries</h2>
        <div class="skills-container">
            <div v-for='technology in technologies' class="skill">
                <p class='skills-description'>{{ technology.type }}</p>
                <div class="skills-container">
                    <div v-for='skill in technology.skills' class="skill-container">
                        <img :src='require("@/assets/technologies/" + skill.file + "." + skill.extension)' :alt="skill.name">
                        <p>{{ skill.name }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data(){
        return {
            technologies: [
                {   type: 'Front End',
                    skills: [
                        { name: 'HTML5', file: 'html', extension: 'png' },
                        { name: 'CSS3', file: 'css', extension: 'png' },
                        { name: 'JavaScript', file: 'js', extension: 'png' },
                        { name: 'Vue.js', file: 'vue', extension: 'png' },
                        { name: 'Nuxt.js', file: 'nuxt', extension: 'png' },
                        { name: 'jQuery', file: 'jquery', extension: 'png' }
                    ]
                },
                {   type: 'Back End',
                    skills: [
                        { name: 'PHP', file: 'php', extension: 'png' },
                        { name: 'Laravel', file: 'laravel', extension: 'png' },
                        { name: 'MySQL', file: 'mysql', extension: 'png' },
                        { name: 'Node.js', file: 'node', extension: 'png' }
                    ]
                },
                {   type: 'Tools',
                    skills: [
                        { name: 'GitHub', file: 'github', extension: 'svg' },
                        { name: 'Photoshop', file: 'photoshop', extension: 'svg' },
                        { name: 'NPM', file: 'npm', extension: 'png' },
                        { name: 'Composer', file: 'composer', extension: 'png' }
                    ]
                },
            ]
        }
    }
}
</script>

<style lang="css" scoped>
.skills {
    padding: 40px 0 0 0;
    margin-bottom: 40px;
}
.skills-container {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
}
.skill {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: calc(33.3333% - 20px);
    background-color: #fefefe;
    border-radius: 4px;
    box-shadow: 0 5px 8px 0 rgba(0,0,0,.2);
    margin: 0 10px 20px 10px;
    padding: 20px;
}
.section-header {
    font-size: 40px;
    font-weight: 700;
    text-align: center;
}
.skills-description {
    font-size: 30px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 40px;
}
.section-description {
    font-size: 30px;
    font-weight: 400;
    text-align: center;
    margin-bottom: 80px;
}
.skills-images-container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
}
.skill-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
}
.skill-container p {
    font-size: 18px;
    font-weight: 700;
    margin: 20px 0 40px 0;
}
.skill-container img {
    width: 75px;
    height: auto;
    transition: all .1s linear;
    opacity: 0.9;
}
.skill-container img:hover {
    opacity: 1;
    transform: scale(1.1);
}
@media (max-width: 1200px) {
    .skill {
        width: calc(50% - 20px);
    }
}
@media (max-width: 900px) {
    .skill {
        width: 100%;
        margin: 0 0 20px 0;
    }
}
</style>
