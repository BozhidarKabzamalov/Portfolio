<template lang="html">
    <section class='about'>
        <p class='name'>Bozhidar Kabzamalov</p>
        <p class='title'>Web Developer</p>
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
    margin-bottom: 30px;
    text-align: center;
}
</style>
