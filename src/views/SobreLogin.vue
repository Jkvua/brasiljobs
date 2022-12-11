<template>
<v-container fluid class="body">
    <v-row class="row">
        <v-col cols="1"></v-col>
        <v-col cols="5" class="pt-3 ctexto">
            <v-card-text>
                <h1>FAÇA JÁ SEU LOGIN</h1>
            </v-card-text>
            <v-divider></v-divider>
            <v-img src="https://www.notalhub.com/assets/img/illustrations/Mobile-login.png">
            </v-img>
        </v-col>
        <v-col cols="2"></v-col>
        <v-col class="text-center">
            <v-form class="login">
                <h1 class="titlelogin">
                    LOGIN
                    <v-divider></v-divider>
                </h1>
                <v-text-field label="Email" v-model="user.email" outlined></v-text-field>
                <v-text-field label="Senha" v-model="user.senha" outlined :type="show ? 'text' : 'password'" :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'" @click:append="show = !show"></v-text-field>
                <v-btn @click="entrar" color="#4F94CD"> Login </v-btn>
                <h5 class="titlecadastro">Quer experimentar? Clique abaixo</h5>
                <v-btn @click="cadastrar" color="#4F94CD"> cadastrar </v-btn>
            </v-form>
        </v-col>
    </v-row>
    <v-snackbar color="#F81D1D" v-model="erroEntrar" danger aria-multiline="red" timeout="5000">
        Usuário ou Senha Inválidos</v-snackbar>

    <v-snackbar color="#DDE8E8" v-model="novaConta" danger aria-multiline max-width="300">
        <v-card>
            <v-card-title>Conta não encontrada.</v-card-title>
            <v-card-text>
                Deseja tentar novamente
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="#DDE8E8" text @click="novaConta = false">Sim</v-btn>
                <v-btn color="#DDE8E8" text @click="novaConta = false">Não</v-btn>
            </v-card-actions>
        </v-card>

    </v-snackbar>
</v-container>
</template>

<script>
import * as fb from '@/plugins/firebase'
export default {
    data() {
        return {
            user: {},
            show: false,
            erroEntrar: false,
            novaConta: false,
        }
    },
    methods: {
        reset() {
            this.user = {};
        },

        async entrar() {
            try {
                await fb.auth.signInWithEmailAndPassword(this.user.email, this.user.senha)
                this.$router.push({
                    name: 'Home'
                })
            } catch (error) {
                const errorCode = error.code
                switch (errorCode) {
                    case "auth/wrong-password":
                        this.erroEntrar = true
                        break
                    case "auth/invalid-email":
                        this.erroEntrar = true
                        this.emailInvalid = true;
                        break
                    case "auth/user-not-found":
                        this.novaConta = true
                        break
                    default:
                        this.erroEntrar = true
                        break
                }
            }
        },

        async CriarNovaConta() {
            this.novaConta = false
            await fb.auth.createUserWithEmailAndPassword(this.user.email, this.user.senha)
            

        },

        async cadastrar() {
            if (this.$router.push({
                    name: "Cadastro"
                }));
        },

    },
};
</script>

<style scoped>
.ctexto {
    padding-left: 3rem;
    text-align: center;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}

.bar {
    margin-bottom: 1rem;
    background: #4dc3c8;
    padding: 1rem 0 1rem 0;
    text-align: center;
    font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
}

.body {
    font-family: "Arial Narrow", Arial, sans-serif;
    padding: 1;
}

.login {
    padding-bottom: 1rem;
    padding-top: 1rem;
    text-align: center;
    max-width: 16rem;
}

.subtitle {
    text-align: start;
}

.titlelogin {
    margin-bottom: 1rem;
    padding-bottom: 1rem;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}

.titlecadastro {
    padding-bottom: 1rem;
    padding-top: 1rem;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}

h3 {
    font-weight: bold;
}

img {
    max-height: 7rem;
    max-width: 7rem;
}

.row {
    margin-top: 3rem;
}
</style>
