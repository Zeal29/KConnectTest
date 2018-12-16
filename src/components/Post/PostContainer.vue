<template >
        <v-flex xs12 sm10 offset-sm1 md5 offset-md0 >
            <my-post
                    class="mb-3"

                    :name="post.name"
                    :dateTime="post.dateTime"
                    :avatarLink="post.avaterLink"
                    :title="post.title"
                    :text="post.text"
                    :ImgLinks="post.ImgLinks"
                    :VidLinks="post.VidLinks"
                    :likes="post.likes"
                    :comments="post.comments"
                    :id="post.id"
                    :page-name="post.pageName"

                    v-for="post in Posts"
                    :key="post.id"
            >{{post.text}}
            </my-post >

        </v-flex >
</template >

<script >
    import Post from './Post.vue';

    export default {
        name      : "PostContainer",
        components: {
            'myPost': Post,
        },
        data()
        {
            return {
                Posts: [
                    {
                        name      : "Alexa Steef",
                        dateTime  : '3 hrs',
                        avaterLink: 'https://source.unsplash.com/1600x900/?profile,people',
                        title     : 'This is a Title',
                        text      : "Is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
                        ImgLinks  : [
                            {id:1 , img:'http://www.hdwallpaperspulse.com/wp-content/uploads/2017/03/28/awesome-natural-lake-image.jpg'},
                            {id:2 , img:'https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg'},
                            {id:3 , img:'http://img.fixthephoto.com/UserFiles/remove-photo-background-online%20(2)(1).jpg'}
                        ],
                        VidLinks  : ['https://www.youtube.com/watch?v=mCyITaDib7M'],
                        likes     : 1000,
                        comments  : 0,
                        id        : 1,
                        pageName  : 'jobs'

                    },
                    {
                        name      : "Mikel Jourge",
                        dateTime  : '3 hrs',
                        avaterLink: 'https://source.unsplash.com/1600x900/?profile,people',
                        title     : 'This is a Title',
                        text      : "Is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
                        ImgLinks  : [{id:4 , img:'https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg'}],
                        VidLinks  : ['https://www.youtube.com/watch?v=dbO61cZxEw8'],
                        likes     : 0,
                        comments  : 0,
                        id        : 2,
                        pageName  : 'jobs'

                    },
                    {
                        name      : "Steef Jobs",
                        dateTime  : '3 hrs',
                        avaterLink: 'https://source.unsplash.com/1600x900/?profile,people',
                        title     : 'This is a Title',
                        text      : "Is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
                        ImgLinks  : [
                            {id:5 , img:'https://images.unsplash.com/photo-1535440568529-40a78746670d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'},
                            {id:6 , img:'https://mdbootstrap.com/img/Photos/Horizontal/Nature/full%20page/img(20).jpg'},
                        ],
                        VidLinks  : ['https://www.youtube.com/watch?v=-vzXo9O9aAg'],
                        likes     : 0,
                        comments  : 0,
                        id        : 3,
                        pageName  : 'jobs'

                    },
                    {
                        name      : "Elon Musk",
                        dateTime  : '3 hrs',
                        avaterLink: 'https://source.unsplash.com/1600x900/?profile,people',
                        title     : 'This is a Title',
                        text      : "Is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
                        ImgLinks  : [
                            {id:7 , img:'http://wvs.topleftpixel.com/photos/scotia_plaza_tall_stitched.jpg'},
                            {id:8 , img:'https://i.ytimg.com/vi/uNCr7NdOJgw/maxresdefault.jpg'},
                            {id:10 , img:'https://tag-qgv8rvci.netdna-ssl.com/wp-content/uploads/2017/01/Fish-Tank-Background-600x300.jpg'},
                            {id:11 , img: 'https://pe-images.s3.amazonaws.com/photo-editing/cs6/background-eraser-tool/photoshop-background-eraser-example.jpg'},
                            {id:12 , img: 'https://cdn.pixabay.com/photo/2015/12/09/01/02/colorful-abstract-background-1084082__340.jpg'},
                        ],
                        VidLinks  : ['https://www.youtube.com/watch?v=cnwDaG99atQ'],
                        likes     : 0,
                        comments  : 0,
                        id        : 4,
                        pageName  : 'jobs'

                    },
                    {
                        name      : "Mark Zegurburk",
                        dateTime  : '3 hrs',
                        avaterLink: 'https://source.unsplash.com/1600x900/?profile,people',
                        title     : 'This is a Title',
                        text      : "Is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
                        ImgLinks  : [
                            {id:13 , img:'http://wvs.topleftpixel.com/photos/scotia_plaza_tall_stitched.jpg'},
                            {id:14 , img: 'https://i.ytimg.com/vi/uNCr7NdOJgw/maxresdefault.jpg'},
                            {id:15 , img: 'https://tag-qgv8rvci.netdna-ssl.com/wp-content/uploads/2017/01/Fish-Tank-Background-600x300.jpg'},
                            {id:17 , img: 'https://cdn.pixabay.com/photo/2015/12/09/01/02/colorful-abstract-background-1084082__340.jpg'},
                            {id:18 , img: 'https://i.ytimg.com/vi/uNCr7NdOJgw/maxresdefault.jpg'},
                            {id:19 , img:  'http://4.bp.blogspot.com/-pKUPlM5lje4/UhBNYalyYzI/AAAAAAAAoy8/kChWkp2Ml-0/s1600/Prabhas+HD+Wallpapers+6.jpg'},


                        ],
                        VidLinks  : [
                            'https://www.youtube.com/watch?v=ifTjtgSzYcI',
                            'https://youtu.be/tQsU70xSlAM',
                            '<iframe width="560" height="315" src="https://www.youtube.com/embed/P92vsCFKrFI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        ],
                        likes     : 0,
                        comments  : 0,
                        id        : 5,
                        pageName  : 'jobs'

                    },
                ]
            }
        },
    }
</script >

<style scoped >

</style >