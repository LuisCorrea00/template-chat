<template>
  <v-dialog  v-model="showDialog" max-width="500px" persistent>
      <v-card class="pa-7">
          <v-card-title>Entrar</v-card-title>
          <v-card-text class="mt-3">
              <v-text-field outlined label="Senha" v-model="senhaEntrar"/>
          </v-card-text>
          <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn @click="verify">Entrar</v-btn>
              <v-btn color="error" @click="closeModel">Fechar</v-btn>
          </v-card-actions>
      </v-card>
  </v-dialog>
</template>

<script>
export default {
    name: "EntrarSala",
    data(){
        return{
            senhaEntrar:'',
            showDialog: false,
        }
    },
    props: {
        dialog: {
            type: Boolean,
            default: false,
        },
    },
    watch: {
        dialog: {
            immediate: true,
            handler(newVal) {
                this.showDialog = newVal;
            },
        },
    },
    methods:{
        verify(){
            if (this.senhaEntrar.trim() !== ''){
                if (this.$store.state.salaSelecionada.senha === this.senhaEntrar){
                    this.$store.state.logged = true;
                    this.closeModel();
                }
                else alert("Senha incorreta!");
            } else alert("Insira todos os dados!")
        },
        closeModel() {
            this.$emit("close-entrar");
            this.senhaEntrar = "";
        },
    }
}
</script>

<style scoped>

</style>