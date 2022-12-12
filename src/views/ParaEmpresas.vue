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
                        <v-btn color="#4DC3C8" @click.stop="formcard = !formcard">
                            <v-icon>mdi-plus</v-icon>
                        </v-btn>
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
                                            <v-text-field v-model="Campotitulo" :rules="[rules.required, rules.counter]" label="Nome" counter maxlength="100">
                                            </v-text-field>
                                            <v-text-field v-model="Experiencias" label="Telefone" counter maxlength="9"></v-text-field>
                                            <v-text-field v-model="Telefone" label="Experiencias" counter maxlength="400"></v-text-field>
                                            <v-text-field v-model="fmc" label="Formação" counter maxlength="80"></v-text-field>
                                            <v-text-field v-model="descform" label="Breve descrição de sua Formação" counter maxlength="230"></v-text-field>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col>
                                            <v-btn color="#3489FF" @click.stop="FuncAddCurriculo">
                                                <v-icon>mdi-plus</v-icon> Criar Currículo
                                            </v-btn>
                                        </v-col>
                                        <v-col cols="12" sm="1"></v-col>
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
                        <CriacaoCurriculo :titulo="id" v-for="id in Curriculo" :key="id"></CriacaoCurriculo>
                    </v-card-text>
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
import * as fb from '@/plugins/firebase';
export default {
    data() {
        return {
            Campotitulo: "",
            descform: "",
            fmc: "",
            Telefone: "",
            Experiencias: "",
            Comentario: "",
            formcard: false,
            Curriculo: [{
                    id: 1,
                    titulo: "Currículo para vaga de gerente administrativa",
                },
                {
                    id: 2,
                    titulo: "Currículo para vaga de professor substituto",
                },
                {
                    id: 3,
                    titulo: "Currículo para vaga de engenheiro de software",
                },
            ],
            rules: {
                required: (value) => !!value || "obrigatório",
                counter: (value) => value.length <= 20 || "Max 100 caracteres",
            },
            methods: {
                entrarCard() {
                    this.$router.push({
                        name: "Curriculo"
                    });
                },
                async FuncAddCardapio() {
      this.Cardapios.EstaAtivo = false;
      if (this.Cardapios.Campotitulo == null || this.Cardapios.Campotitulo == '') {
        this.invalidInfo = false
        this.alertInvalidInfo = true
      }
      else {
        this.invalidInfo = true
      }
      if (this.invalidInfo == true) {
        this.uid = fb.auth.currentUser.uid;
        const res = await fb.CardapioCollection.add({
          DonoCardapio: this.uid,
          NomeCardapio: this.Cardapios.Campotitulo,
          ComentarioCardapio: this.Cardapios.Comentario,
          Estaativo: this.Cardapios.EstaAtivo,
          NumeroRefs: 0
        });
        const idCardapio = res.id
        await fb.CardapioCollection.doc(idCardapio).update({
          idCardapio: idCardapio
        })
      }
      this.puxarcardapios();
      this.Cardapios.Campotitulo = "";
      this.Cardapios.Comentario = "";
      this.formcard = false;
    },
       
            },
        }

    },
    components: {
        CriacaoCurriculo
},
};
</script>

<style>

</style>
