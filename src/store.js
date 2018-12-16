import Vue  from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store(
    {
        state    : {
            userName   : 'Raldox Ramen',
            avatarPic  : 'https://media1.popsugar-assets.com/files/thumbor/toCB3aWi2wtp6m-6x1wKkdvjQIM/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2017/09/15/948/n/3019466/cbb060d259bc4a224f3ed3.35832650_edit_img_image_37326804_1456416000/i/Hot-Bearded-Guys.jpg',
            avatarBgPic: 'http://img.bell-rehwoldt.com/images/images.china.cn/attachement/jpg/site1007/20111104/000cf1a48f87101dcc202b.jpg',
            
        },
        mutations: {},
        actions  : {},
        getters  : {
            avartarPicUrl : state=>
            {
                return 'url("' +  state.avatarPic + '")';
            }
        }
    }
);

