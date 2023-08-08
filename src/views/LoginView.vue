<template>
  <v-main>
      <v-row align="center" class="mt-8">
          <v-col cols="12" class="d-flex justify-center">
              <v-icon class="mr-2" x-large color="black">mdi-forum</v-icon>
              <span class="mr-5 text-h3">The Chat</span>
          </v-col>
          <v-col cols="12" class="d-flex justify-center">
              <v-card min-width="500px" elevation="5" class="mt-15">
                  <v-card-title class="justify-center">Login</v-card-title>
                  <v-card-text>
                      <v-text-field
                          outlined
                          placeholder="Apelido"
                          class="pa-5 pb-0"
                          v-model="apelido"
                      />
                  </v-card-text>
                  <v-card-actions class="justify-center mb-5">
                      <v-btn @click="logar">Entrar</v-btn>
                  </v-card-actions>
              </v-card>
          </v-col>
      </v-row>
      <v-row >

      </v-row>
  </v-main>
</template>

<script>
export default {
    name: "LoginView",
    data(){
        return{
            apelido:'',
        }
    },
    methods:{
        logar(){
            if(this.apelido.trim()!==""){
                this.$store.commit('setApelido',this.apelido);
                this.$router.push('/home');
            } else alert("Insira um apelido!")
        }
    }
}
</script>

<style scoped>

</style>