<template lang="html">
    <section class='about'>
        <p class='name'>Bozhidar Kabzamalov</p>
        <p class='title'>Web Developer</p>
        <div class='links'>
            <a href=''>
                <img src="@/assets/cv.png" alt="GitHub">
                <p>CV</p>
            </a>
            <a href='https://github.com/BozhidarKabzamalov'>
                <img src="@/assets/github.svg" alt="GitHub">
                <p>GitHub</p>
            </a>
            <a href="mailto: KabzamalovBozhidar@gmail.com">
                <img src="@/assets/at.svg" alt="Email">
                <p>KabzamalovBozhidar@Gmail.com</p>
            </a>
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
.about {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 80px;
}
.name {
    font-size: 5em;
    font-weight: 600;
    text-align: center;
    margin: 0 40px 0 40px;
}
.title {
    font-size: 4em;
    font-weight: 500;
    text-align: center;
    margin-bottom: 20px;
}
.links {
    display: flex;
    font-size: 1.1em;
    font-weight: 500;
    text-align: center;
}
.links a {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px 30px;
    padding: 10px 0 10px 0;
    position: relative;
}
.links a:after {
    background: rgba(0, 0, 0, 0.8);
    content: '';
    position: absolute;
    width: 0;
    height: 4px;
    display: block;
    margin-top: 25px;
    left: 0;
    right: 100%;
    transition: all .5s ease;
    -webkit-transition: all .5s ease;
}
.links a:hover:after{
    width: 100%;
    left: 0;
    right: 0;
}
.links a img {
    width: 30px;
    height: 30px;
    margin-right: 10px;
    opacity: 0.8;
}

@media (max-width: 1280px) {
    .name {
        font-size: 3em;
    }
    .title {
        font-size: 2em;
    }
}
@media (max-width: 900px) {
    .links {
        flex-direction: column;
    }
}
</style>
