import MediumService from '@/services/MediumService.js';

export const state = {
    posts: [],
    postsTotal: 0,
    post: {},
    perPage: 3
}

export const mutations = { 
    SET_POSTS(state, po){
        state.posts.push(po)
    },
    SET_POST(state, po){
        state.posts = po
    }
}

export const actions = { 
    fetchPosts({ commit, dispatch } ){
        return MediumService.getPosts()
        .then(res => {
            commit('SET_POSTS', res.data)
        }).catch( err => {

        });
    }
}

export const getters = { 

}