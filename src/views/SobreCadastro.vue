<template>
<v-app id="inspire">
      <v-content>
         <v-container fluid fill-height>
            <v-layout align-center justify-center>
               <v-flex xs12 sm8 md4>
                  <v-card class="elevation-12">
                     <v-toolbar  color="#B2DFE1">
                        <v-toolbar-title class="pont">  Cadrastre-se </v-toolbar-title>
                     </v-toolbar>
                     <v-card-text>

                        <v-form>
                           <v-text-field label="Email" outlined ></v-text-field>
                           <v-text-field label="Nome Completo" outlined ></v-text-field>
                           <v-text-field label="Telefone" outlined></v-text-field>
                           <v-text-field label="Cidade" outlined></v-text-field>
                           <v-text-field label="CNPJ" outlined ></v-text-field>
                           <v-text-field id="password" name= "password" label="Senha" type="password" outlined 
                           :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                           @click:append="show1 = !show1"></v-text-field>
                           
                        </v-form>
                     </v-card-text>
                     <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-row class="botoes">
                           <v-col cols="3">
                            <v-btn color="#B2DFE1">Cadastrar-se</v-btn>
                            </v-col>
                            <v-col cols="2"></v-col>
                            <v-col cols="3">
                            <v-btn color="#B2DFE1" @click="VoltarLogin">Cancelar</v-btn>
                            </v-col>
                            </v-row>
                     </v-card-actions>
                  </v-card>
               </v-flex>
            </v-layout>
         </v-container>
      </v-content>
   </v-app>
</template>

<script>
export default {
   name: 'SobreLogin',
   props: {
      source: String,
   },

   methods: {
       VoltarLogin() {
         this.$router.push({ name: "Login" });
       },
     }
};
  
      
</script>

<style scoped>



.elevation-12 {
      text-align: center;
      margin-left: 1rem;
}

.pont {

      text-align: center;
      margin-left: 15rem;
}

</style>


