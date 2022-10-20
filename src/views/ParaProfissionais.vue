<template>
  <v-if-else>
    <h1 style="text-align: center; font-family: Georgia">Vagas</h1>
    <v-divider></v-divider>

    <div>
      <v-container>
        <v-row>
          <v-col cols="12" sm="4" v-for="(vaga, i) in vagas" :key="i">
            <v-card
              class="mx-auto"
              color="#9ACDF6"
              style="margin-top: 10px; margin-left: -71px; padding-top: 1rem"
            >
              <v-card-text>
                <div><h1>Estamos Empregando</h1></div>
                <br />
                <p class="text-h4" text--primary>jhfn,fkgfgfkgfhgkf</p>
                <p>Vaga inativa</p>
                <div class="text--primary">
                  Estamos em busca de um Analista de Projetos e Indicadores.
                </div>
              </v-card-text>
              <v-card-actions>
                <!--VER MAIS-->
                <v-btn icon @click="vaga.show = !vaga.show">
                  <v-icon>{{
                    vaga.show ? "mdi-chevron-up" : "mdi-magnify"
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
    </div>
  </v-if-else>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    reveal: false,
    vagas: [
      { titulo: "Administração", answer: "oi1", id: 1, show: false },
      { titulo: "Administração", answer: "oi2", id: 1, show: false },
    ],
  }),
};

</script>

<style scoped></style>
