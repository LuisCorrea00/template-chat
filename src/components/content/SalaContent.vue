<template>
    <v-main>
        <div id="screen" ref="messageContainer">
            <v-row>
                <v-col v-for="(message, index) in Messages" :key="index" cols="12" class="d-flex justify-end pb-0 pt-0">
                    <v-col cols="8" class="d-flex justify-end pb-0 pt-0">
                        <div class="d-flex align-center pa-3">
                            <div id="message">
                                <div class="d-flex">
                                    <p class="align-center mb-0 subtitle-1 text-break">{{ message.textMessage }}</p>
                                    <p class="ml-3 mb-0 caption">{{ formatTime(message.timestamp) }}</p>
                                </div>
                            </div>
                            <div class="ml-3">
                                <v-icon x-large color="black">mdi-account-circle</v-icon>
                            </div>
                        </div>
                    </v-col>
                </v-col>
            </v-row>
        </div>
        <div class="chat-message">
            <v-row align="center" justify="center">
                <v-col cols="8">
                    <v-row align="center">
                        <v-col cols="9">
                            <div>
                                <v-text-field single-line outlined label="Digite..." v-model="message" />
                            </div>
                        </v-col>
                        <v-col cols="3" class="mb-5">
                            <div>
                                <v-btn @click="sendMessage" color="black" icon>
                                    <v-icon large>mdi-send</v-icon>
                                </v-btn>
                            </div>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </div>
    </v-main>
</template>

<script>
export default {
    name: "SalaContent",
    data() {
        return {
            message: "",
        };
    },
    computed: {
        Messages() {
            return this.$store.state.Messages;
        },
    },
    methods: {
        sendMessage() {
            if (this.message.trim() !== "") {
                const messageObject = {
                    textMessage: this.message,
                    timestamp: new Date(),
                };
                this.$store.commit("sendMessage", messageObject);
                this.message = "";
                this.$nextTick(() => {
                    const messageContainer = this.$refs.messageContainer;
                    messageContainer.scrollTop = messageContainer.scrollHeight;
                });
            }
        },
        formatTime(timestamp) {
            return timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        },
    },
};
</script>

<style scoped>
#message {
    border-style: solid;
    border-width: 1px;
    border-radius: 10px;
    padding: 8px;
    max-width: 30rem;
}
.chat-message {
    position: fixed;
    bottom: 0;
    width: 100%;
}
#screen {
    min-height: 70vh;
    max-height: calc(100vh - 200px);
    overflow-y: auto;
    overflow-x: hidden;
}
</style>