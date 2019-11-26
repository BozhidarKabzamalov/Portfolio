<template lang="html">
    <section class='skills'>
        <h1 class='section-header'>SKILLS</h1>
        <h2 class='section-description'>Languages, Frameworks & Libraries</h2>
        <div class="skills-container">
            <div class="skill">
                <p class='skills-description'>Front End</p>
                <div class='skills-images-container'>
                    <div class='skill-container'>
                        <img src="@/assets/html.png" alt="HTML5">
                        <p>HTML5</p>
                    </div>
                    <div class='skill-container'>
                        <img class='skill-image' src="@/assets/css.png" alt="CSS3">
                        <p>CSS3</p>
                    </div>
                    <div class='skill-container'>
                        <img class='skill-image' src="@/assets/js.png" alt="JavaScript">
                        <p>JavaScript</p>
                    </div>
                    <div class='skill-container'>
                        <img class='skill-image' src="@/assets/vue.png" alt="Vue.js">
                        <p>Vue.js</p>
                    </div>
                    <div class='skill-container'>
                        <img class='skill-image' src="@/assets/nuxt.png" alt="Nuxt.js">
                        <p>Nuxt.js</p>
                    </div>
                    <div class='skill-container'>
                        <img class='skill-image' src="@/assets/jquery.png" alt="jQuery">
                        <p>jQuery</p>
                    </div>
                </div>
            </div>
            <div class="skill">
                <p class='skills-description'>Back End</p>
                <div class='skills-images-container'>
                    <div class='skill-container'>
                        <img src="@/assets/php.png" alt="PHP">
                        <p>PHP</p>
                    </div>
                    <div class='skill-container'>
                        <img src="@/assets/laravel.png" alt="Laravel">
                        <p>Laravel</p>
                    </div>
                    <div class='skill-container'>
                        <img src="@/assets/mysql.png" alt="MySQL">
                        <p>MySQL</p>
                    </div>
                    <div class='skill-container'>
                        <img src="@/assets/node.png" alt="Node.js">
                        <p>Node.js</p>
                    </div>
                </div>
            </div>
            <div class="skill">
                <p class='skills-description'>Tools</p>
                <div class='skills-images-container'>
                    <div class='skill-container'>
                        <img src="@/assets/photoshop.svg" alt="Photoshop">
                        <p>Photoshop</p>
                    </div>
                    <div class='skill-container'>
                        <img src="@/assets/github.svg" alt="GitHub">
                        <p>GitHub</p>
                    </div>
                    <div class='skill-container'>
                        <img src="@/assets/npm.png" alt="Npm">
                        <p>Npm</p>
                    </div>
                    <div class='skill-container'>
                        <img src="@/assets/composer.png" alt="Composer">
                        <p>Composer</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

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
