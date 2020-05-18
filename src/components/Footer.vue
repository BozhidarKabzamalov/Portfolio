<template lang="html">
    <footer class='footer'>
        <div class="wrapper">
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
        </div>
    </footer>
</template>

<script>
export default {
    data() {
        return {
            year: ''
        }
    },
    mounted(){
        this.year = new Date().getFullYear()
    }
}
</script>

<style lang="css" scoped>
.footer {
    width: 100%;
    background-color: #cccccc;
}
.links {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0 20px 0;
}
.links a {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px 30px 0px 30px;
    padding: 5px 0 5px 0;
    position: relative;
}
.links a p {
    font-weight: 500;
}
.links a:after {
    background: rgba(0, 0, 0, 0.8);
    content: '';
    position: absolute;
    width: 0;
    height: 3px;
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
    width: 25px;
    height: 25px;
    margin-right: 10px;
    opacity: 0.8;
}
@media (max-width: 710px) {
    .links {
        flex-direction: column;
    }
    .links a {
        padding: 15px 0 15px 0;
    }
}
</style>
