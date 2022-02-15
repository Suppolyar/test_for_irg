import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        items: [],
        cart: [],
    },
    actions: {
        GET_DATA_FROM_API({commit}) {
            return axios('https://fakestoreapi.com/products', {
               method: 'GET',
            })
                .then((response) => {
                    commit('SET_DATA_TO_VUEX', response.data)
                })
        },
        ADD_TO_CART({commit}, product) {
            commit('SET_CART', product);
        },
        DELETE_FROM_CART({commit}, index) {
            commit('REMOVE_FROM_CART', index)
        }
    },
    mutations: {
        SET_DATA_TO_VUEX: (state, items) => {
            state.items = items
        },
        SET_CART: (state, product) => {
            if(state.cart.length) {
                let isProductExists = false;
                state.cart.map(function (item) {
                    if (item.id === product.id) {
                        isProductExists = true;
                        item.quantity++
                    }
                });
                if (!isProductExists) {
                    state.cart.push(product)
                }
            } else {
                state.cart.push(product)
            }
        },
        REMOVE_FROM_CART: (state, index) => {
            state.cart.splice(index, 1);
        }
    },
    getters: {
        ITEMS(state) {
            return state.items
        },
        CART(state) {
            return state.cart
        },
    },
});

export default store;