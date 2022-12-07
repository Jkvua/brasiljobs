<template>
<v-if-else>
    <v-toolbar dark prominent src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
        <v-toolbar-title>Brasil Jobs <v-spacer></v-spacer>
            <v-divider></v-divider>
            <v-divider vertical></v-divider>
        </v-toolbar-title>
        <v-toolbar-items class="hidden-sm-and-down"></v-toolbar-items>
        <v-spacer></v-spacer>
        <v-toolbar-title>Crie seu Currículo <v-spacer></v-spacer>
            <v-divider></v-divider>
            <v-divider vertical></v-divider>
        </v-toolbar-title>
    </v-toolbar>
    <v-container>
        <v-card>
            <v-div>
                <v-card class="vcards" elevation="6" outlined shaped>
                    <v-card-subtitle>
                        <h1>Criação de Currículo</h1>
                    </v-card-subtitle>
                    <v-card-text>
                        <Btncard :titulo="id" v-for="id in Curriculo" :key="id"></Btncard>
                        <v-card-text>
                            <v-btn color="#4DC3C8" @click.stop="formcard = !formcard">
                                <v-icon>mdi-plus</v-icon>
                            </v-btn>
                        </v-card-text>
                    </v-card-text>
                </v-card>
                <v-divider></v-divider>
                <v-row>
                    <v-col cols="1"></v-col>

                    <v-col cols="10">
                        <v-divider color="#4DC3C8" v-show="formcard"></v-divider>
                        <v-alert class="formcardapio" transition="scale-transition" v-show="formcard" elevation="6" outlined shaped>
                            <v-form>
                                <v-container>
                                    <v-row>
                                        <v-col>
                                            <v-text-field v-model="Campotitulo" :rules="[rules.required, rules.counter]" label="Nome" counter maxlength="20">
                                            </v-text-field>
                                            <v-text-field v-model="Experiencias" label="Telefone" counter maxlength="80"></v-text-field>
                                            <v-text-field v-model="Telefone" label="Experiencias" counter maxlength="400"></v-text-field>
                                            <v-text-field v-model="fmc" label="Formação" counter maxlength="80"></v-text-field>
                                            <v-text-field v-model="descform" label="Breve descrição de sua Formação" counter maxlength="230"></v-text-field>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col>
                                            <v-btn color="#3489FF" @click.stop="FuncAddCardapio">
                                                <v-icon>mdi-plus</v-icon> Criar Currículo
                                            </v-btn>
                                        </v-col>

                                        <v-col cols="12" sm="2">
                                            <v-btn color="#3489FF" @click.stop="formcard = !formcard">
                                                <v-icon>mdi-cancel</v-icon>Cancelar
                                            </v-btn>
                                            <v-spacer></v-spacer>
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </v-form>
                        </v-alert>
                    </v-col>
                    <v-col cols="1"></v-col>
                </v-row>
            </v-div>
        </v-card>
        <v-divider></v-divider>
    </v-container>
    <v-container>
        <v-row>
            <v-col cols="1"></v-col>
            <v-col cols="10">
                <v-card>
                    <v-card-title>
                        <h2>Currículos</h2>
                    </v-card-title>
                    <v-card-text>
                        <Btncard :titulo="id" v-for="id in Curriculo" :key="id"></Btncard>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="1"></v-col>
        </v-row>
    </v-container>

</v-if-else>
</template>

<script>
import CriacaoCurriculo from "@/components/CriacaoCurriculo.vue";

export default {
    data() {
        return {
            descform: "",
            fmc: "",
            Telefone: "",
            Experiencias: "",
            Comentario: "",
            Campotitulo: "",
            formcard: false,
            Curriculo: [{
                    id: 1,
                    titulo: "Assistente administrativo",
                },
                {
                    id: 2,
                    titulo: "era so uma fritura",
                },
            ],
            rules: {
                required: (value) => !!value || "obrigatório",
                counter: (value) => value.length <= 20 || "Max 20 caracteres",
            },
            methods: {
                FuncAddCardapio() {
                    if (this.Campotitulo) {
                        this.Curriculo.push({
                            titulo: this.Campotitulo,
                        });
                    }
                    this.Campotitulo = "";
                    this.Experiencias = "";
                    this.Telefone = "";
                    this.fmc = "";
                    this.descform = "";
                },
            },
        }

    },
 components: { CriacaoCurriculo },
};
</script>

<style>

</style>
