<template >
    <v-dialog v-model="dialog" fullscreen class="d-block" >
        <div class="" @click="log" slot="activator" >
            <div :style="styleOfImgContaner" class=" mt-3" @click="log" >
                <v-img :aspect-ratio="aspectRatioOfImages" v-for="(img,i) in images()" :src="img.img" :key="img.id" :style='{"grid-area" : "cls"+i, backgroundColor: "#E0E0E0"}' ></v-img >

            </div >
            <h1 class="primary--text subheading text-xs-center py-2" v-if="imgs.length > 5" >see +{{imgs.length - 5}} more
                                                                                        images</h1 >

        </div >
        <v-card class="dialogOfImg d-flex" >
            <v-btn icon top fab fixed small left absolute dark @click="dialog = false" class="mt-5 black" style="opacity: .4" >
                <v-icon >close</v-icon >
            </v-btn >
            <!--:style="{backgroundImage:'url('+img+')'}"-->
            <!--Images-->
            <!--<v-img class="pb-2 align-self-center"  :max-height="getScreenH" contain   v-for="img in imgs" :src="img.img" :key="img.id" ></v-img >-->
            <transition name="imgFade"   mode="out-in">
                <v-img class="pb-2 align-self-center"  :max-height="getScreenH" contain   v-for="(img , index) in imgs" :src="img.img" :key="img.id" v-if="index === currentImageIndex" ></v-img >

            </transition >
            <!--<v-img class="pb-2 align-self-center" :max-height="getScreenH" contain :src="imgs[currentImageIndex].img" ></v-img >-->

            <v-btn icon fab fixed small right absolute dark @click="nextImage()" class="black align-self-center" style="opacity: .4" v-if="imgs.length !== 1">
                <v-icon >arrow_forward_ios</v-icon >
            </v-btn >
            <v-btn icon fab fixed small left absolute dark @click="previousImage()" class=" black align-self-center" style="opacity: .44" v-if="imgs.length !== 1">
                <v-icon >arrow_back_ios</v-icon >
            </v-btn >
        </v-card >
    </v-dialog >
</template >

<script >
    export default {
        name    : "Postimage",
        props   : {
            imgs: {
                type: Array
            }
        },
        data()
        {
            return {
                dialog             : false,
                currentImageIndex  : 0,
                currentImageCounter: 0,

            }
        },
        methods :
            {


                nextImage()
                {
                    this.currentImageCounter++;
                    this.currentImageIndex = Math.abs((this.currentImageCounter) % this.imgs.length);
                },
                previousImage()
                {
                    this.currentImageCounter--;
                    this.currentImageIndex = Math.abs((this.currentImageCounter) % this.imgs.length);
                },

                log()
                {
                    console.log("i am clicked" + this.imgs.length);
                },
                getRandomColor()
                {
                    let colors = ['red', "blue", 'green', "pink", 'yellow', "purple", 'grey'];
                    return colors[Math.floor((colors.length - 1) * Math.random())];
                },

                images()
                {
                    if (this.imgs.length > 5)
                    {
                        return this.imgs.slice(0, 5);
                    }
                    else
                    {
                        return this.imgs;
                    }
                },
            },
        computed: {
            getScreenW()
            {
                return screen.width;
            },
            getScreenH()
            {
                return screen.height ;
            },
            styleOfImgContaner()
            {
                if (this.imgs.length === 2)
                {

                    return {
                        display                : 'grid',
                        'grid-template-columns': '1fr 1fr 1fr 1fr',

                        'grid-template-areas':
                            `"cls0 cls0 cls1 cls1"
                    "cls0 cls0 cls1 cls1"
                    "cls0 cls0 cls1 cls1"
                    "cls0 cls0 cls1 cls1"`,
                        'grid-gap'           : '4px'
                    }

                }
                if (this.imgs.length === 3)
                {

                    return {
                        display                : 'grid',
                        'grid-template-columns': '1fr, 1fr, 1fr ,1fr',
                        'grid-template-areas'  :
                            `"cls0 cls0 cls0 cls0"
                        "cls0 cls0 cls0 cls0"
                        "cls1 cls1 cls2 cls2"
                        "cls1 cls1 cls2 cls2"`,
                        'grid-gap'             : '4px'
                    }

                }
                if (this.imgs.length === 4)
                {

                    return {
                        display                : 'grid',
                        'grid-template-columns': '1fr, 1fr, 1fr ,1fr',
                        'grid-template-areas'  :
                            `"cls0 cls0 cls1 cls1"
                            "cls0 cls0 cls1 cls1"
                            "cls2 cls2 cls3 cls3"
                            "cls2 cls2 cls3 cls3"`,
                        'grid-gap'             : '4px'
                    }

                }
                if (this.imgs.length >= 5)
                {

                    return {
                        display                : 'grid',
                        'grid-template-columns': '1fr 1fr 1fr 1fr 1fr 1fr',

                        'grid-template-areas':
                            `"cls0 cls0 cls0 cls1 cls1 cls1"
                    "cls0 cls0 cls0 cls1 cls1 cls1"
                    "cls2 cls2 cls3 cls3 cls4 cls4"
                    "cls2 cls2 cls3 cls3 cls4 cls4"`,
                        'grid-gap'           : '4px'
                    }

                }
                else
                {
                    return {}
                }
            },
            aspectRatioOfImages()
            {
                if (this.imgs.length === 2)
                {
                    return 0.6;
                }
                if (this.imgs.length === 3)
                {
                    return 2
                }
                if (this.imgs.length === 4)
                {
                    return .9
                }
                if (this.imgs.length >= 5)
                {
                    return .8
                }
                else
                {
                    return 1.5

                }
            }
        },
    }
</script >

<style scoped >


    .dialogOfImg
    {
        background-color : rgba(33, 33, 33, 0.95);

    }


    .imgFade-enter-active
    {
        animation:fade-in 300ms ease-in reverse;
    }

    .imgFade-leave-active{
        animation:fade-out 300ms ease-out reverse;
    }

    @keyframes fade-in
    {
        0%
        {
            opacity   : 1;
            transform : translateY(0px) ;
        }
        100%
        {
            opacity   : 0;
            transform : translateY(500px) rotateZ(90deg);
        }
    }
    @keyframes fade-out
    {
        0%
        {
            opacity   : 0;
            transform : translateY(-500px) rotateZ(90deg) ;
        }
        100%
        {
            opacity   : 1;
            transform : translateY(0px);
        }
    }
</style >

<!--aspect-ratio="2"-->