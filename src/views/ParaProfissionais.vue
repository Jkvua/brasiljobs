<template>

 <v-if-else>
 <div>
  
 <v-card
    class="mx-auto"
    max-width="344"
    style="margin-top:30px ; margin-left:30px"
    >

    <v-card-text>
      <div>Estamos Empregando</div>
      <br>
      <p class= text-h4 text--primary>
        Analista de Projetos e Indicadores
      </p>
    <p>Vaga inativa</p>
      <div class="text--primary">
          Estamos em busca de um Analista de Projetos e Indicadores.
      </div>
    </v-card-text>
    <v-card-actions>
      <v-btn
        text
        color="teal accent-4"
        @click="reveal = true"
      >
        Ver Mais
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <v-card
        v-if="reveal"
        class="transition-fast-in-fast-out v-card--reveal"
        style="height: 100%;"
      >
        <v-card-text class="pb-0">
          <p class="text-h4 text--primary">
            Descrição da Vaga
          </p>
          <br>
          <p>Dar suporte ao planejamento e implantação de projetos na área de atendimento ao cliente. Atuar em projetos que combinem processos e tecnologia, com vista a trazer a melhor experiência ao cliente.
            Acompanhar o desenvolvimento das iniciativas e indicadores-chave do levantamento de requisitos à entrega final. </p>
        </v-card-text>
        <v-card-actions class="pt-0">
          <v-btn
            text
            color="teal accent-4"
            @click="reveal = false"
          >
            Fechar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-expand-transition>  
  </v-card>

</div>

<v-row>
  <v-col>
<div class="left">
<div>
 <v-card
    class="mx-auto"
    max-width="344"
    style="margin-top:30px ; margin-left:30px"
    >

    <v-card-text>
      <div>Estamos Empregando</div>
      <br>
      <p class= text-h4 text--primary>
        Assistente Contábil 
      </p>
    <p>Vaga inativa</p>
      <div class="text--primary">
        Requisitos: Sem experiência, Ensino Médio
       
      </div>
    </v-card-text>
    <v-card-actions>
      <v-btn
        text
        color="teal accent-4"
        @click="reveal = true"
      >
        Ver Mais
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <v-card
        v-if="reveal"
        class="transition-fast-in-fast-out v-card--reveal"
        style="height: 100%;"
      >
        <v-card-text class="pb-0">
          <p class="text-h4 text--primary">
            Descrição da Vaga
          </p>
          <br>
          <p>Realizar pesquisa de mercado para cotações de preços, analisa e emite pedidos, atende fornecedores e acompanha entrada de notas fiscais no almoxarifado. </p>
        </v-card-text>
        <v-card-actions class="pt-0">
          <v-btn
            text
            color="teal accent-4"
            @click="reveal = false"
          >
            Fechar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-expand-transition>  
  </v-card>
</div>
</div>
</v-col>
</v-row>
</v-if-else>

</template>

  

<script>

export default {
    data: () => ({
      reveal: false,
    }),
  }
 
</script>


<style
 {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
></style>

