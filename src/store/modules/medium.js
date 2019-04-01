import MediumService from "../../services/MediumService";

export const namespaced = true;

export const state = {
  posts: []
};

export const mutations = {
  SET_POSTS(state, post) {
    state.posts = post;
  }
};

export const actions = {
  fetchPosts({ commit, state }) {
    return MediumService.getPosts()
      .then(response => {
        commit('SET_POSTS', response.data);
        return response.data;
      })
      .catch(error => {
        dispatch('notification/add', notification, { root: true });
      });
  }
};