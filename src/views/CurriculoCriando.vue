<template>
<div>
    <v-toolbar dark prominent src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
        <v-toolbar-title>Brasil Jobs <v-spacer></v-spacer>
            <v-divider></v-divider>
            <v-divider vertical></v-divider>
        </v-toolbar-title>
        <v-toolbar-items class="hidden-sm-and-down"></v-toolbar-items>
        <v-spacer></v-spacer>
        <v-toolbar-title>Seu Curriculo<v-spacer></v-spacer>
            <v-divider></v-divider>
            <v-divider vertical></v-divider>
        </v-toolbar-title>
    </v-toolbar>
    <v-container class="maria">
        <v-col cols="1"></v-col>
        <v-col cols="10">
            <v-card>
                <v-div>
                    <v-card color="#DDE8E8">
                        <v-card-subtitle>
                            <h1>Maria Clara - Gerente de Vagas</h1>
                        </v-card-subtitle>
                    </v-card>
                </v-div>
            </v-card>
            <v-divider></v-divider>
            <v-card>
                <v-div>
                    <v-card-subtitle>
                        <h4>Contato: Email: mariaclara@gmail.com</h4>
                        <h4>Telefone: 991576454</h4>
                        <h4>Endereço: Rua Diogo Dias Velho</h4>
                    </v-card-subtitle>
                </v-div>
            </v-card>
            <v-divider></v-divider>
            <v-card>
                <v-div>
                    <v-card-subtitle>
                        <h4>Objetivo: Atuar na área de vendas. Atuar como assistente no departamento de vendas. Procuro a minha primeira oportunidade de trabalho no setor jurídico. Almejo uma vaga de estágio no departamento de logística para exercitar o que aprendi na faculdade.</h4>
                    </v-card-subtitle>
                </v-div>
            </v-card>
            <v-divider></v-divider>
            <v-card>
                <v-div>
                    <v-card-subtitle>
                        <h4>Formação: IFC - Araquari Tecnico em Informatica, UFPR - Administração - 2022 / 2030
                        </h4>
                    </v-card-subtitle>
                </v-div>
            </v-card>
            <v-divider></v-divider>
            <v-card>
                <v-div>
                    <v-card-subtitle>
                        <h4>Descrição: Maria estava em fúria, ela me encarava,olhos firmes, arregalados, faíscas.
                        </h4>
                    </v-card-subtitle>
                </v-div>
            </v-card>
            <v-divider></v-divider>
            <v-card>
                <v-div>
                    <v-card-subtitle>
                        <h4>Experiencias: Gente da Nike - gerenciou lojas em três estados</h4>
                        <h4> Gerente da Santauro - facilitou e criou um consumo mais consiente aos clientes</h4>

                    </v-card-subtitle>
                </v-div>
            </v-card>
        </v-col>
        <v-col cols="2"></v-col>
        <v-card-subtitle class="clara">
            <h3>Alterar Currículo</h3>
        </v-card-subtitle>
        <v-card-text class="festa">
            <v-btn color="#4DC3C8" @click="formRefs = true">
                <v-icon>mdi-plus</v-icon>
            </v-btn>
        </v-card-text>
        <v-row>
            <v-col cols="1"></v-col>
            <v-col cols="10">
                <div>
                    <v-expansion-panels>
                        <v-expansion-panel v-for="refeicao in Refeicoes" :key="refeicao">
                            <v-expansion-panel-header>
                                <v-row>
                                    <v-col cols="3">
                                        <v-checkbox> </v-checkbox>
                                    </v-col>
                                    <v-col cols="4">
                                        <v-card-subtitle>
                                            <h4>{{ refeicao.titulo }}</h4>
                                        </v-card-subtitle>
                                    </v-col>
                                    <v-col cols="1">
                                        <v-btn color="#4DC3C8" max-width="100px" @click="formAlimentos = true">
                                            <v-icon>mdi-pencil</v-icon>editar
                                        </v-btn>
                                    </v-col>
                                    <v-col cols="1"></v-col>
                                    <v-col cols="1">
                                        <v-btn color="#B2DFE1" max-width="140px">
                                            <v-icon>mdi-delete </v-icon>Excluir
                                        </v-btn>
                                    </v-col>
                                </v-row>
                            </v-expansion-panel-header>
                        </v-expansion-panel>
                    </v-expansion-panels>
                </div>
            </v-col>
        </v-row>
    </v-container>
</div>
</template>

<script>

</script>

<style>
.maria {
    font-family: Arial, Helvetica, sans-serif;
    padding: 0;

}

.clara {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    align-self: start;
    ;
}

.festa {
    align-self: flex-start;
}
</style>
