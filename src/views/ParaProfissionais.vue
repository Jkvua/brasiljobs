<template>
<v-if-else>
    <v-toolbar dark prominent src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
        <v-toolbar-title>Brasil Jobs <v-spacer></v-spacer>
            <v-divider></v-divider>
            <v-divider vertical></v-divider>
        </v-toolbar-title>
        <v-toolbar-items class="hidden-sm-and-down"></v-toolbar-items>
        <v-spacer></v-spacer>
        <v-toolbar-title>Vagas Disponíveis <v-spacer></v-spacer>
            <v-divider></v-divider>
            <v-divider vertical></v-divider>
        </v-toolbar-title>
        <v-btn icon >
            <v-icon >mdi-briefcase-outline</v-icon>
        </v-btn>
    </v-toolbar>
    <div>
        <v-container>
            <v-row>
                <v-col cols="8" sm="4" v-for="(vaga, i) in vagas" :key="i">
                    <v-card class="mx-auto" color="#AAD4FF" style="margin-top: 2px; margin-left: -20px; padding-top: 1rem">
                        <v-card-text>
                            <div>
                                <h1>Estamos Empregando</h1>
                            </div>
                            <br />
                            <p>Vaga inativa</p>
                            <div class="text--primary">
                                Estamos em busca de empregandos capacitados.
                            </div>
                        </v-card-text>
                        <v-card-actions>
                            <!--VER MAIS-->
                            <v-btn icon @click="vaga.show = !vaga.show">
                                <v-icon>
                                    {{
                      vaga.show
                        ? "mdi-chevron-up"
                        : "mdi-drag-horizontal-variant"
                    }}</v-icon>
                            </v-btn>
                        </v-card-actions>

                        <v-expand-transition>
                            <div v-show="vaga.show">
                                <v-divider></v-divider>
                                <v-card-text class="texto-respostas">
                                    {{ vaga.answer }}
                                </v-card-text>
                            </div>
                        </v-expand-transition>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
        <v-spacer></v-spacer>
            <v-card>
                <v-card-subtitle class="pedro">
                    Se inscreva em uma vaga!
                    <v-btn icon><v-icon>mdi-chevron-up</v-icon></v-btn>
                </v-card-subtitle>
              
            </v-card>
    </div>
</v-if-else>
</template>

<script>
export default {
    data: () => ({
        dialog: false,
        reveal: false,
        vagas: [{
                titulo: "Administração",
                answer: "Dar suporte na contabilidade e acessoria",
                id: 1,
                show: false
            },
            {
                titulo: "Administração",
                answer: "oi2",
                id: 1,
                show: false
            },
            {
                tilulo: "Administração",
                answer: "Dar suporte ao planejamento e implantação de projetos na área de atendimento ao cliente. Atuar em projetos que combinem processos e tecnologia, com vista a trazer a melhor experiência ao cliente. Acompanhar o desenvolvimento das iniciativas e indicadores-chave do levantamento de requisitos à entrega final.",
                id: 2,
                show: false,
            },
            {
                titulo: "Administração",
                answer: "oi2",
                id: 1,
                show: false
            },
            {
                titulo: "Administração",
                answer: "oi2",
                id: 1,
                show: false
            },
            {
                titulo: "Administração",
                answer: "oi2",
                id: 1,
                show: false
            },
            {
                titulo: "Administração",
                answer: "oi2",
                id: 1,
                show: false
            },
            {
                titulo: "Administração",
                answer: "oi2",
                id: 1,
                show: false
            },
            {
                titulo: "Administração",
                answer: "oi2",
                id: 1,
                show: false
            },
        ],
    }),
};
</script>

<style scoped>
.pedro{
    font-style: unset;
    color: aquamarine;
    text-align: center;
}


</style>
