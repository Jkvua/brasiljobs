<template>
  <v-if-else>
  <div class="pa-8" fluid 
  >
  <h1 style="text-align:center; font-family: Georgia, 'Times New Roman', Times, serif;">Vagas</h1>
          <v-divider></v-divider>
   <v-container>
  <v-card
     class="mx-auto"
     max-width="344"
     color="#9ACDF6"
     style="margin-top:10px ; margin-left:-71px ;  padding-top:1rem"
     >
 
     <v-card-text>
       <div><h1>Estamos Empregando</h1> </div>
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
 </v-container>
 </div>
      <v-divider></v-divider>
 <div>
   <v-container>
  <v-card
     class="mx-auto"
     max-width="344"
     color="#9ACDF6"
     style="margin-top:10px ; margin-left:-71px ;  padding-top:1rem"
     >
 
     <v-card-text>
       <div><h1> Estamos Empregando</h1></div>
       <br>
       <p class= text-h4 text--primary>
         Assistente Administrativo 
       </p>
     <p>Vaga inativa</p>
       <div class="text--primary">
          Requisitos: Ensino médio ou superior incompleto, Conhecimento de sistemas e procedimentos de gerenciamento de escritório
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
           <p>Buscamos um assistente administrativo responsável por fornecer suporte a nossos gerentes e funcionários, auxiliar nas necessidades diárias de escritório e gerenciar as atividades administrativas gerais de nossa empresa.
              Deve ter excelentes habilidades de comunicação oral e escrita e ser capaz de organizar seu trabalho usando ferramentas, como o MS Excel. Se também tiver experiência anterior na função e familiaridade em nosso setor, gostaríamos de conhecer você. </p>
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
 </v-container>
 </div>

    <v-divider></v-divider>
 
    <div>
   <v-container>
  <v-card
     class="mx-auto"
     max-width="344"
     color="#9ACDF6"
     style="margin-top:10px ; margin-left:-71px ;  padding-top:1rem"
     >
 
     <v-card-text>
       <div><h1>Estamos Empregando</h1></div>
       <br>
       <p class= text-h4 text--primary>
          Recepsionista
       </p>
     <p>Vaga inativa</p>
       <div class="text--primary">
           Requisitos: Excelentes habilidades organizacionais e de ser multitarefa, Ensino médio, técnico ou Superior cursando
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
           <p>Estamos à procura de recepcionista para gerenciar nossa recepção diariamente e para executar uma variedade de tarefas administrativas que ajudem na organização de nossa empresa.
              Como recepcionista, você será o primeiro ponto de contato: receberá os visitantes e clientes, coordenando as atividades da recepção, incluindo a distribuição de correspondências e o redirecionamento de chamadas telefônicas.  </p>
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
 </v-container>
 </div>
    <v-divider> </v-divider>
 <div>
   <v-container>
  <v-card
     class="mx-auto"
     max-width="344"
     color="#9ACDF6"
     style="margin-top:10px ; margin-left:-71px ;  padding-top:1rem"
     >
 
     <v-card-text>
       <div><h1>Estamos Empregando</h1> </div>
       <br>
       <p class= text-h4 text--primary>
         Analista Financeiro
       </p>
     <p>Vaga inativa</p>
       <div class="text--primary">
           Requisitos: De 2 a 3 anos de experiência na área, Conhecimento em previsão e diagnóstico financeiro, finanças corporativas e análise de informações
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
           <p>Buscamos analista financeiro para fornecer informações precisas e baseadas em dados sobre a lucratividade, solvência, estabilidade e liquidez da empresa.
                Você pesquisará e analisará informações financeiras para ajudar a empresa a tomar decisões bem informadas, redigir relatórios e monitorar movimentos financeiros. </p>
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
 </v-container>
 </div>

 <div id="app">
  <v-app id="inspire">
    <v-row justify="center">
      <v-dialog
        v-model="dialog"
        persistent
        max-width="600px"
        style="margin-top:100px ; margin-left:171px ;  padding-top:1rem"
     >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="#83D5D8"
            dark
            v-bind="attrs"
            v-on="on"
          >
            Se Inscrever!
          </v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="text-h5">Informações Pessoais</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col
                  cols="12"
                  sm="6"
                  md="4"
                >
                  <v-text-field
                    label="primeiro nome legal*"
                    required
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                  md="4"
                >
                  <v-text-field
                    label="primeiro Nome"
                    hint="letras maiuscúlas e minúsculas"
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                  md="4"
                >
                  <v-text-field
                    label="último nome*"
                    hint="letras maiuscúlas e minúsculas"
                    persistent-hint
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="Email*"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="Senha*"
                    type="password"
                    required
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                >
                  <v-select
                    :items="['0-17', '18-29', '30-54', '54+']"
                    label="Idade*"
                    required
                  ></v-select>
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                >
                  <v-autocomplete
                    :items="['Analista Financeiro', 'Recepcionista', 'Assistente Administrativo', 'Analistas de Progetos e Indicadores']"
                    label="Interese"
                    multiple
                  ></v-autocomplete>
                </v-col>
              </v-row>
            </v-container>
            <small>*indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="#9ACDF6"
              text
              @click="dialog = false"
            >
              Close
            </v-btn>
            <v-btn
              color="#9ACDF6"
              text
              @click="dialog = false"
            >
              Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </v-app>
</div>
   
  
 </v-if-else>
 
 </template>
 
   
 
 <script>
 
 export default {
     data: () => ({
      dialog: false, 
      reveal: false,
     }),
 
   }
  
 </script>
 
 
 <style scoped
 
 
   bottom: 1;
   opacity: 1 !important;
   position: absolute;
   width: 100%;
  
 
 
 >
  
</style>
 