<template>
    <v-main>
        <div class="pa-7">
            <v-row>
                <v-col id="sala" class="mb-4" cols="12" v-for="(sala, index) in salas" :key="index">
                    <a @click="selecionarSala(sala)">
                        <div>
                            {{ sala.nome }}
                            <v-icon v-if="sala.tipo === 'privada'" color="black">mdi-lock</v-icon>
                        </div>
                    </a>
                </v-col>
            </v-row>
        </div>
    </v-main>
</template>

<script>
export default {
    name: "ListaSalas",
    computed: {
        salas() {
            return this.$store.state.Salas;
        },
    },
    methods:{
        selecionarSala(sala){
            this.$store.commit("setSalaSelecionada", sala);
            this.$store.commit('cleanHistory');
            this.$store.state.logged = false;
            if (sala.tipo === 'privada'){
                this.$store.state.showLoginSala = false;
                this.$store.state.logged = false;
            }
        }
    }
};
</script>

<style scoped>
#sala{
    border-radius: 10px;
    border-style: solid;
    border-width: 1px;
}
a{
    color: black;
}
</style>
