<template lang="html">
    <section class='skills'>
        <h1 class='section-header'>SKILLS</h1>
        <h2 class='section-description'>Languages, Frameworks & Libraries</h2>
        <div class="skills-container">
            <div class="skill">
                <div class="container">
                    <p class='skills-description'>Front End</p>
                    <div class='skills-images-container'>
                        <img @mouseover='displayAlt' @mouseleave='hover = false' class='skill-image' src="@/assets/html.png" alt="HTML5">
                        <img @mouseover='displayAlt' @mouseleave='hover = false' class='skill-image' src="@/assets/css.png" alt="CSS3">
                        <img @mouseover='displayAlt' @mouseleave='hover = false' class='skill-image' src="@/assets/js.png" alt="JavaScript">
                        <img @mouseover='displayAlt' @mouseleave='hover = false' class='skill-image' src="@/assets/vue.svg" alt="Vue.js">
                        <img @mouseover='displayAlt' @mouseleave='hover = false' class='skill-image' src="@/assets/jquery.png" alt="jQuery">
                    </div>
                </div>
            </div>
            <div class="skill">
                <div class="container">
                    <p class='skills-description'>Back End</p>
                    <div class='skills-images-container'>
                        <img @mouseover='displayAlt' @mouseleave='hover = false' class='skill-image' src="@/assets/php.png" alt="PHP">
                        <img @mouseover='displayAlt' @mouseleave='hover = false' class='skill-image' src="@/assets/laravel.png" alt="Laravel">
                        <img @mouseover='displayAlt' @mouseleave='hover = false' class='skill-image' src="@/assets/mysql.png" alt="MySQL">
                    </div>
                </div>
            </div>
            <div class="skill">
                <div class="container">
                    <p class='skills-description'>Tools</p>
                    <div class='skills-images-container'>
                        <img @mouseover='displayAlt' @mouseleave='hover = false' class='skill-image' src="@/assets/photoshop.svg" alt="Photoshop">
                        <img @mouseover='displayAlt' @mouseleave='hover = false' class='skill-image' src="@/assets/github.svg" alt="GitHub">
                        <img @mouseover='displayAlt' @mouseleave='hover = false' class='skill-image' src="@/assets/phpmyadmin.png" alt="phpMyAdmin">
                        <img @mouseover='displayAlt' @mouseleave='hover = false' class='skill-image' src="@/assets/npm.png" alt="Npm">
                        <img @mouseover='displayAlt' @mouseleave='hover = false' class='skill-image' src="@/assets/composer.png" alt="Composer">
                    </div>
                </div>
            </div>
        </div>
        <div class='caption' v-if='hover' v-bind:style='{ "top": eOffsetTop + "px", "left": eOffsetLeft + "px" }'>
            <p>{{ alt }}</p>
        </div>
    </section>
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

            this.eOffsetTop = eOffsetTop + height + 20
            this.eOffsetLeft = eOffsetLeft + width/2
            this.alt = e.target.alt
        }
    }
}
</script>

<style lang="css" scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fefefe;
    border-radius: 4px;
    box-shadow: 0 5px 8px 0 rgba(0,0,0,.2);
    padding: 40px 80px 40px 80px;
    min-height: 600px;
}
.skills {
    padding: 80px 0 0 0;
    margin-bottom: 80px;
}
.section-header {
    font-size: 40px;
    font-weight: 700;
    text-align: center;
}
.skills-description {
    font-weight: 700;
    font-size: 30px;
    margin-bottom: 40px;
}
.section-description {
    font-size: 30px;
    font-weight: 400;
    text-align: center;
    margin-bottom: 80px;
}
.skills-container {
    display: flex;
    padding: 0px 40px 0px 40px;
}
.skill {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    margin-bottom: 20px;
}
.skills-images-container {
    display: flex;
    flex-wrap: wrap;
    width: 200px;
}
.skill-image {
    width: 75px;
    height: auto;
    margin-right: 50px;
    transition: all .1s linear;
    opacity: 0.9;
    margin-bottom: 80px;
}
.skill-image:nth-child(2n+2) {
    margin-right: 0;
}
.skill-image:last-child {
    margin-bottom: 0;
}
.skill-image:hover {
    opacity: 1;
    transform: scale(1.1);
}
.caption {
    max-width: 400px;
    position: absolute;
    padding: 10px;
    font-weight: bold;
    transform: translateX(-50%);
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 4px;
}
.caption p {
    color: #f1f1f1;
    color: rgba(0, 0, 0, 0.8);
    color: #f1f1f1;
    min-width: 100px;
    text-align: center;
    opacity: 1;
}

@media (max-width: 1770px) {
    .container {
        min-height: 0;
    }
    .skills-container {
        flex-direction: column;
    }
}
</style>
