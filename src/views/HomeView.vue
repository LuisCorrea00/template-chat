<template>
  <v-main>
      <v-row>
          <v-col cols="3" class="pr-0 pb-0">
              <div id="sidebarContainer">
                  <div id="addSalas" class="d-flex mt-16">
                      <p class="mb-0 pa-3 text-h5">Salas</p>
                      <v-btn class="ml-auto pa-3" fab small @click="openDialog">
                          <v-icon>mdi-plus</v-icon>
                      </v-btn>
                  </div>
                  <lista-salas/>
              </div>
          </v-col>
          <v-col cols="9" class="pl-0 pb-0">
              <div id="MainContent">
                  <div id="header" class="mb-6">
                      <v-toolbar flat>
                          <v-row align="center" justify="space-between">
                              <v-col cols="auto">
                                  <div v-if="salaSelecionada">
                                      <p class="mb-0 text-h5">{{ salaSelecionada.nome }}</p>
                                  </div>
                              </v-col>
                              <v-col cols="auto" class="ml-auto">
                                  <div class="d-flex align-center">
                                      <v-icon class="mr-2" color="black">mdi-forum</v-icon>
                                      <v-toolbar-title class="mr-5 text-h5">The Chat</v-toolbar-title>
                                  </div>
                              </v-col>
                          </v-row>
                      </v-toolbar>
                  </div>
                  <div id="content">
                      <div v-if="salaSelecionada">
                          <div v-if="salaSelecionada.tipo === 'privada' && !showLoginSala">
                              <entrar-sala :dialog="!showLoginSala" @close-entrar="closeEntrar"/>
                          </div>
                          <div v-if="this.$store.state.logged">
                              <sala-content/>
                          </div>
                          <div v-if="salaSelecionada.tipo === 'publica'">
                              <sala-content/>
                          </div>
                      </div>
                      <div v-else>
                          <v-img id="bgImg" :src="require(`@/assets/astronauta.jpg`)" max-height="80vh" max-width="80vw" contain/>
                      </div>
                  </div>
              </div>
          </v-col>
      </v-row>
      <add-sala :dialog="dialog" @close-dialog="closeDialog"/>
  </v-main>
</template>

<script>


import AddSala from "@/components/window/addSala.vue";
import ListaSalas from "@/components/sidebar/ListaSalas.vue";
import SalaContent from "@/components/content/SalaContent.vue";
import EntrarSala from "@/components/window/EntrarSala.vue";

export default {
    name: "HomeView",
    components: {EntrarSala, SalaContent, ListaSalas, AddSala},
    data() {
        return {
            dialog: false,
        };
    },
    computed: {
        salaSelecionada() {
            return this.$store.state.salaSelecionada;
        },
        showLoginSala(){
            return this.$store.state.showLoginSala;
        }
    },
    methods: {
        openDialog() {
            this.dialog = true;
        },
        closeDialog() {
            this.dialog = false;
        },
        closeEntrar(){
            this.$store.state.showLoginSala = true;
        },
    },
}
</script>

<style scoped>
#sidebarContainer{
    border-style: solid;
    border-width: 1px;
    height: 100vh;
}
#header{
    border-style: solid;
    border-width: 1px;
}
#bgImg{
    opacity: 65%;
}
</style>