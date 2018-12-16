<template >
    <v-layout class="mb-3">
        <v-flex xs12 sm12 >
            <v-card flat >
                <!--:src="avartarBgPicUrl"-->
                <!--:style="{'background-image': avartarBgPicUrl}"-->
                <v-img

                        :aspect-ratio="aspectRatio"
                        :src="avartarBgPicUrl"


                >
                </v-img >


                <v-avatar size style=" display: block; " >
                    <div class="avatar-pic" :style="{backgroundImage : avartarPicUrl }"


                    ></div >
                    <!--<ali-avatar :url="avartarPicUrl" :size="150" class="avatar-pic" style="float: none"></ali-avatar>-->
                    <div class=" headline font-weight-light mb-4
                    " >
                        {{getUserName}}
                    </div >
                </v-avatar >
                <v-card-actions class="d-flex justify-center" >
                    <v-btn flat color="primary" @click="getHeight" >Friends</v-btn >
                    <v-btn flat color="primary" >Change Pic</v-btn >
                    <v-btn flat color="primary" >Settings</v-btn >
                </v-card-actions >

            </v-card >
        </v-flex >
    </v-layout >
</template >

<script >
    import aliAvatar from '../aliAvatar.vue'
    export default {
        name      : "HomeFront",
        data()
        {
            return {}
        },
        computed  : {
            aspectRatio()
            {
                if (this.$vuetify.breakpoint.sm)
                {
                    return 2.7
                }
                else if (this.$vuetify.breakpoint.mdAndUp)
                {
                    return 4;
                }
                return 1.8;
            },
            avartarPicUrl()
            {
                return 'url('+ this.$store.state.avatarPic + ')';
            },
            avartarBgPicUrl()
            {
                return this.$store.state.avatarBgPic;
            },
            getUserName()
            {
                return this.$store.state.userName;
            },



        },
        methods   :
            {
                getHeight()
                {
                    // let VImg = document.getElementById('txt');
                    // console.log(VImg.height);

                }
            },
        components: {
            aliAvatar
        }
    }
</script >

<style scoped >
    .avatar-pic
    {
        height              : 150px;
        width               : 150px;
        border-radius       : 50%;
        border              : 4px solid white;
        background-size     : cover;
        background-position : center;
        margin              : -120px auto 0 auto;
        float: inherit;
    }


    .Bg-Img
    {
        /*background-size: initial;*/
        /*background-attachment: fixed;*/

    }

</style >