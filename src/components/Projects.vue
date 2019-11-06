<template lang="html">
        <section class='projects'>
            <h1 class='section-header'>PROJECTS</h1>
            <div class="projects-container">
                <div class="project">
                    <div class="column">
                        <h1 class='project-name'>League Of Stats</h1>
                        <p class='project-description'>Single-page application which allows League of Legends users to easily look up information and statistics about their accounts by utilizing Riot Games's API.</p>
                        <div class='skills-container'>
                            <img class='skill-image' src="@/assets/html.png" alt="HTML5">
                            <img class='skill-image' src="@/assets/css.png" alt="CSS3">
                            <img class='skill-image' src="@/assets/js.png" alt="JavaScript">
                            <img class='skill-image' src="@/assets/vue.svg" alt="Vue.js">
                            <img class='skill-image' src="@/assets/php.png" alt="PHP">
                            <img class='skill-image' src="@/assets/laravel.png" alt="Laravel">
                            <img class='skill-image' src="@/assets/mysql.png" alt="MySQL">
                        </div>
                        <div class="project-links">
                            <a href="http://lol.kabzamalov.com">More Info</a>
                            <a href="http://lol.kabzamalov.com">Live Site</a>
                            <a href="https://github.com/BozhidarKabzamalov/League-Of-Legends-Frontend">View Source</a>
                            <a href="https://github.com/BozhidarKabzamalov/League-Of-Legends-Backend">View Source</a>
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
                            <img class='skill-image' src="@/assets/html.png" alt="HTML5">
                            <img class='skill-image' src="@/assets/css.png" alt="CSS3">
                            <img class='skill-image' src="@/assets/js.png" alt="JavaScript">
                            <img class='skill-image' src="@/assets/vue.svg" alt="Vue.js">
                            <img class='skill-image' src="@/assets/php.png" alt="PHP">
                            <img class='skill-image' src="@/assets/laravel.png" alt="Laravel">
                            <img class='skill-image' src="@/assets/mysql.png" alt="MySQL">
                        </div>
                        <div class="project-links">
                            <a href="http://travel.kabzamalov.com">Live Site</a>
                            <a href="https://github.com/BozhidarKabzamalov/Travel-Diary-Frontend">View Source</a>
                            <a href="https://github.com/BozhidarKabzamalov/Travel-Diary-Backend">View Source</a>
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
                            <img class='skill-image' src="@/assets/html.png" alt="HTML5">
                            <img class='skill-image' src="@/assets/css.png" alt="CSS3">
                            <img class='skill-image' src="@/assets/js.png" alt="JavaScript">
                            <img class='skill-image' src="@/assets/jquery.png" alt="jQuery">
                            <img class='skill-image' src="@/assets/php.png" alt="PHP">
                            <img class='skill-image' src="@/assets/laravel.png" alt="Laravel">
                            <img class='skill-image' src="@/assets/mysql.png" alt="MySQL">
                        </div>
                        <div class="project-links">
                            <a href="http://art.kabzamalov.com">Live Site</a>
                            <a href="https://github.com/BozhidarKabzamalov/Art">View Source</a>
                        </div>
                    </div>
                    <div class="column">
                        <img class='thumbnail' src="../assets/lol.png" alt="thumbnail">
                    </div>
                </div>
            </div>
    </section>

</template>

<style lang="css" scoped>
.projects {
    padding: 80px 0 0 0;
    font-size: 1.1em;
    line-height: 30px;
    margin-bottom: 80px;
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

    padding: 30px;
}
.project-name, .project-description {
    margin-bottom: 30px;
}
.skills-container {
    margin-bottom: 30px;
}
.project-links {
    display: flex;
    justify-content: space-between;
}
.project-links > a {
    color: rgb(83,109,254);
    margin-right: 30px;
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
}
.skill-image:hover {
    opacity: 1;
    transform: scale(1.1);
}
.thumbnail {
    display: block;
    width: 100%;
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
}
@media (max-width: 1410px) {
    .project {
        width: 100%;
    }
}
</style>
