<template >
    <div class="avatarImg mr-1 " :style="{ 'background-Image' :avartarUrl,height : size+'px', width: size+'px', 'border-radius' : borderRadius+'%' }" ></div >
</template >

<script >
    export default {
        name: "aliAvatar",
        props: {
            url: {
                type: String,
            },
            size:{
                type:Number,
                default: 45,
            },
            borderRadius:{
                type: Number,
                default:50,
            }
        },
        computed: {
            avartarUrl()
            {
                return  'url('+ this.url + ')';
            }
        },
    }
</script >

<style scoped >
    .avatarImg
    {


        background-position : center;
        background-size     : cover;

        display             : block;
        float               : left;
    }
</style >