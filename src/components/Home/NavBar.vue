<template >
    <div class="">




        <v-toolbar dark  flat :app="$vuetify.breakpoint.mdAndUp"  dense color="primary" >
            <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon >
            <v-toolbar-title >
                <router-link tag="span" :to="{name:'home'}" >
                    <b class=" font-weight-light" >K</b ><span class=" subheading font-weight-thin " >Connect</span >
                </router-link >
            </v-toolbar-title >
            <v-spacer ></v-spacer >
            <v-toolbar-items >
                <v-btn icon small >
                    <v-icon >notifications</v-icon >
                </v-btn >

                <v-btn icon :to="{name:'searchPeople'}" >
                    <v-icon >search</v-icon >
                </v-btn >
            </v-toolbar-items >
        </v-toolbar >



        <v-navigation-drawer
                v-model="drawer"
                app
        >
            <v-list class="pa-1">
                <v-list-tile avatar>

                        <avatar :url="$store.state.avatarPic" :size="50"></avatar>

                    <v-list-tile-content>
                        <v-list-tile-title>{{$store.state.userName}}</v-list-tile-title>
                    </v-list-tile-content>

                    <v-btn icon big  @click="drawer = !drawer"><v-icon>arrow_back_ios</v-icon></v-btn>

                </v-list-tile>
            </v-list>

            <v-divider></v-divider>

        </v-navigation-drawer>


    </div>
</template >

<script >
    import aliAvatar from '../aliAvatar.vue'
    export default {
        name: "NavBar",
        data()
        {
            return {
                drawer: false,
            }
        },
        components:{
            avatar:aliAvatar
        }
    }
</script >

<style scoped >
.e{
    position: fixed ;
}
</style >