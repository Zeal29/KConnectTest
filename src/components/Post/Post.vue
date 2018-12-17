<template >
    <v-card flat class="py-2" >
        <div class="mx-2 " >
            <avatar :url="avatarLink" ></avatar >

            <div class="" >
                <div class="body-2" >
                    {{name}} <span class="caption grey--text text--darken-1" >from {{pageName}} page</span >
                </div >
                <div class="caption grey--text text--darken-1" >
                    {{dateTime}}
                </div >
            </div >
        </div >
        <div class="mx-3 mt-3" >

            <slot ></slot >

        </div >


        <p-img :imgs="ImgLinks" ></p-img >
        <!--<ytd-video v-for="(link, i) in VidLinks" :link="link" :key="i" ></ytd-video >-->

        <hr class="grey mt-3 lighten-5 mx-3" >

        <v-layout >
            <!--<v-flex>-->
            <div class="" >
                <v-btn icon small flat class="grey--text ml-4" :class="{'primary--text' : isLiked >= 1 }" >
                    <v-icon right >thumb_up</v-icon >
                    <span class="grey--text ml-2 mt-1" :class="{'primary--text' : isLiked >= 1 }" >
                        {{LikesAndDisCalculator(likes)}}
                     </span >
                </v-btn >
            </div >


            <div class="" >
                <v-btn icon small flat class="grey--text ml-4" :class="{'primary--text' :  isLiked <= -1 }" >
                    <v-icon right >thumb_down</v-icon >
                    <span class="grey--text ml-2 mt-1" :class="{'primary--text' : isLiked <= -1 }" >
                       {{LikesAndDisCalculator(disLikes)}}
                     </span >
                </v-btn >
            </div >

            <!--</v-flex>-->
            <!--<v-flex>-->

            <!--</v-flex>-->
            <v-spacer ></v-spacer >
            <v-btn icon small flat class="grey--text mr-5" >
                <v-icon >comment</v-icon >h
            </v-btn >
        </v-layout >


    </v-card >
</template >

<script >
    //@ts-check
    import PostImages from './PostImages.vue';
    import aliAvater  from '../aliAvatar.vue';
    import YtdVideo   from './YtdVideo.vue';

    export default {
        props: {
            id        : Number,
            name      : String,
            dateTime  : String,
            avatarLink: String,
            title     : String,
            ImgLinks  : Array,
            VidLinks  : Array,
            likes     : {
                type   : Number,
                default: 100,
            },
            disLikes  : {
                type   : Number,
                default: 100,
            },
            comments  : Number,
            pageName  : String,
            isLiked   : {
                type   : Number,
                default: 1,
            },
        },
        data()
        {
            return {
                isAvatar: true
            }
        },

        methods:
            {
                LikesAndDisCalculator: (likesOrDis) =>
                {
                    let Result = likesOrDis;

                    if (likesOrDis >= 10000000)
                    {
                        Result = (Result / 10000000).toFixed(1);

                        Result += "B";
                        return Result;
                    }
                    else if (likesOrDis >= 100000)
                    {
                        Result = (Result / 100000).toFixed(1);

                        Result += "M";
                        return Result;
                    }
                    else if (likesOrDis >= 1000)
                    {
                        Result = (Result / 1000).toFixed(1);

                        Result += "K";
                        return Result;
                    }


                    else
                    {
                        return Result;
                    }

                }
            },

        components: {
            'p-img' : PostImages,
            'avatar': aliAvater,
            YtdVideo
        }
    }
</script >

<style scoped >


</style >