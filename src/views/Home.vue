<template >
    <div class="" >


        <home-front ></home-front >
        <v-layout >
           <home-left-panel></home-left-panel>
            <post-container ></post-container >
        </v-layout >
        <div class="" style="height: 1000px" ></div >
    </div >
</template >

<script >
    import HomeFront     from '../components/Home/HomeFront.vue';
    import HomeLeftPanel    from '../components/Home/HomeLeftPanel.vue';
    import PostContainer from '../components/Post/PostContainer.vue';


    export default {
        components: {
            HomeFront,
            PostContainer,
            HomeLeftPanel,
        },
        methods   : {},
        computed  : {}
    }
</script >
