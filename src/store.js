import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        logged: false,
        showLoginSala: false,
        Salas: [],
        Messages: [],
        salaSelecionada: null,
        apelido: '',
    },
    mutations: {
        setApelido(state, payload){
            state.apelido = payload;
        },
        createSala(state, payload) {
            state.Salas.push({
                nome: payload.nome,
                tipo: payload.tipo,
                senha: payload.senha,
            });
        },
        sendMessage(state, payload) {
            state.Messages.push(payload);
        },
        setSalaSelecionada(state, payload) {
            state.salaSelecionada = payload;
        },
        cleanHistory(state){
            state.Messages = [];
        }
    },
});
