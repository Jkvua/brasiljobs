<template>
<v-app id="inspire">
    <v-content>
        <v-container fluid fill-height>
            <v-layout align-center justify-center>
                <v-flex xs12 sm8 md4>
                    <v-card class="elevation-12">
                        <v-toolbar color="#B2DFE1">
                            <v-toolbar-title class="pont"> Cadrastre-se </v-toolbar-title>
                        </v-toolbar>
                        <v-card-text>

                            <v-form>
                                <v-text-field label="Email" outlined v-model="user.email"></v-text-field>
                                <v-text-field label="Nome Completo" outlined v-model="user.nome"></v-text-field>
                                <v-text-field label="Ano de Nascimento (Ex = 2004)" type="date" outlined v-model="user.idade"></v-text-field>
                                <v-text-field label="Telefone" outlined v-model="user.telefone"></v-text-field>
                                <v-text-field label="Cidade" outlined v-model="user.cidade"></v-text-field>
                                <v-text-field label="CPF" outlined v-model="user.cpf"></v-text-field>
                                <v-text-field label="Senha" outlined :type="show ? 'text' : 'password'" :append-icon="show ? 'mdi-eye-outline' : 'mdi-eye-off-outline'" @click:append="show = !show" v-model="user.senha"></v-text-field>
                            </v-form>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-row class="botoes">
                                <v-col cols="3">
                                    <v-btn color="#B2DFE1" @click="criarNovaConta">Cadastrar-se</v-btn>
                                </v-col>
                                <v-col cols="2"></v-col>
                                <v-col cols="3">
                                    <v-btn color="#B2DFE1" @click="VoltarLogin">Cancelar</v-btn>
                                </v-col>
                            </v-row>
                            <v-snackbar transition="scale-transition" v-model="userExiste" dismissible outlined>Este email já está em uso.</v-snackbar>
                            <v-snackbar transition="scale-transition" v-model="alertInvalidInfo" dismissible outlined>Preencha todos os campos.</v-snackbar>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </v-content>
</v-app>
</template>

<script>
import * as fb from '@/plugins/firebase'

export default {
    data() {
        return {
            show: false,
            alertInvalidInfo: false,
            invalidInfo: false,
            userExiste: false,
            user: {
                email: '',
                senha: '',
                nome: '',
                idade: '',
                cpf: '',
                cidade: '',
                telefone: '',
            },
            
        }
    },

    methods: {
        VoltarLogin() {
            this.$router.push({
                name: "Login"
            });

        },
        async criarNovaConta() {
            try {
                if (this.user.nome == null || this.user.nome == '' || this.user.idade == null || this.user.idade == '' || this.user.telefone == null || this.user.telefone == '' || this.user.cpf == null || this.user.cpf == '' || this.user.cidade == null || this.user.cidade == '' || this.user.email == null || this.user.email == '' || this.user.senha == null || this.user.senha == '') {
                    this.invalidInfo = false
                    this.alertInvalidInfo = true
                } else {
                    this.invalidInfo = true
                }
                if (this.invalidInfo == true) {
                    await fb.auth.createUserWithEmailAndPassword(
                        this.user.email,
                        this.user.senha
                    );
                    this.registrarCadastro();
                    this.entrar();
                } else {
                    this.alertInvalidInfo = true
                }

            } catch (error) {
                const errorCode = error.code;
                switch (errorCode) {
                    case "auth/invalid-email":
                        this.emailInvalid = true;
                        this.user = {};
                        break;
                    case "auth/email-already-in-use":
                        this.userExiste = true;
                        this.user = {};
                        break;
                    default:
                        this.userExiste = true;
                        break;
                }
            }
        },
        async entrar() {
            try {
                await fb.auth.signInWithEmailAndPassword(
                    this.user.email,
                    this.user.senha,
                );
                this.$router.push({
                    name: "Home"
                });
            } catch (error) {
                this.erroEntrar = true;
            }
        },
        async registrarCadastro() {
            this.uid = fb.auth.currentUser.uid;
            const res = await fb.profileCollection.add({
                owner: this.uid,
                Email: this.user.email,
                Nome: this.user.nome,
                Data_nasc: this.user.idade,
                telefone: this.user.telefone,
                cidade: this.user.cidade,
                cpf: this.user.cpf,
            });
            const idCadastro = res.id
            await fb.profileCollection.doc(idCadastro).update({
                idCadastro: idCadastro
            })
        },
    },
}
</script>

<style scoped>
.elevation-12 {
    text-align: center;
    margin-left: 1rem;
}

.pont {

    text-align: center;
    margin-left: 10.5rem;
}
</style>
