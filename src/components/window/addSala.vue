<template>
    <v-dialog v-model="showDialog" max-width="500px" persistent>
        <v-card>
            <v-card-title>
                <span class="headline">Adicionar Sala</span>
            </v-card-title>
            <v-card-text>
                <v-text-field
                        label="Nome"
                        v-model="nomeSala"
                />
                <p class="text-h6 mb-0">Tipo</p>
                <v-radio-group v-model="tipoSala">
                    <v-radio label="Pública" value="publica"></v-radio>
                    <v-radio label="Privada" value="privada"></v-radio>
                </v-radio-group>
                <div v-if="tipoSala === 'privada'">
                    <v-text-field
                        v-model="senhaSala"
                        label="Senha"
                        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                        :type="showPassword ? 'text' : 'password'"
                        @click:append="showPassword = !showPassword"
                    />
                </div>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn  @click="createSala">Adicionar</v-btn>
                <v-btn color="error" @click="closeModel">Fechar</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    name: "addSala",
    props: {
        dialog: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            nomeSala: "",
            tipoSala: "",
            senhaSala: "",
            showDialog: "",
            showPassword: false,
        };
    },
    watch: {
        dialog: {
            immediate: true,
            handler(newVal) {
                this.showDialog = newVal;
            },
        },
    },
    methods: {
        closeModel() {
            this.$emit("close-dialog");
            this.nomeSala = "";
            this.tipoSala = "";
            this.senhaSala = "";
        },
        createSala() {
            if (this.nomeSala.trim() !== "" && this.tipoSala.trim() !== "") {
                this.$store.commit("createSala", {
                    nome: this.nomeSala,
                    tipo: this.tipoSala,
                    senha: this.senhaSala,
                });
                this.closeModel();
            } else {
                alert("Insira o nome e o tipo de sala antes de adiciona-lá.");
            }
        },
    },
}
</script>

<style scoped>

</style>