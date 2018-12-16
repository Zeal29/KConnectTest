<template >
    <div class="iframe-container mt-1 " >
        <iframe :src="`https://www.youtube.com/embed/${VideoId}`" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen ></iframe >
    </div >
</template >

<script >
    export default {
        name    : "YtdVideo",
        props   : {
            link: {
                type    : String,
                required: true
            },
        },
        data()
        {
            return {

            }
        },
        computed: {
            VideoId()
            {
              return this.link.match(new RegExp("https:\\/\\/[-\\d\\w.]*\\/(embed\\/|watch\\?v=)?([-_\\w]*)"))[2];
            }
        }


    }
</script >

<style scoped >

    .iframe-container
    {
        position       : relative;
        width          : 100%;
        padding-bottom : 56.25%;
        height         : 0;
    }


    .iframe-container iframe
    {
        position : absolute;
        top      : 0;
        left     : 0;
        width    : 100%;
        height   : 100%;
    }
</style >