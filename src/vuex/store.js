import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        users: [],
    },
    actions: {
        GET_DATA_FROM_API({commit}) {
            console.log('Получаем данные');
            return axios('https://jsonplaceholder.typicode.com/users', {
               method: 'GET',
            })
                .then((response) => {
                    commit('SET_DATA_TO_VUEX', response.data)
                    console.log('получили:', response.data)
                })
        },
    },
    mutations: {
        SET_DATA_TO_VUEX: (state, users) => {
            state.users = users
        }
    },
    getters: {
        USERS(state) {
            return state.users
        }
    },
});

export default store;