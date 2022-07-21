<template>
<v-app id="inspire">
      <v-content>
         <v-container fluid fill-height>
            <v-layout align-center justify-center>
               <v-flex xs12 sm8 md4>
                  <v-card class="elevation-12">
                     <v-toolbar dark color="primary">
                        <v-toolbar-title>Vamos fazer o seu Cadrastro :)</v-toolbar-title>
                     </v-toolbar>
                     <v-card-text>
                        <v-form>
                            <v-text-field
                              name="email"
                              label="E-mail"
                              type="text"
                           ></v-text-field>
                           <v-text-field
                              name="login"
                              label="Nome Completo"
                              type="text"
                           ></v-text-field>
                            <v-text-field
                              name="login"
                              label="Telefone"
                              type="text"
                           ></v-text-field>
                           <v-text-field
                              id="password"
                              name="password"
                              label="Senha"
                              type="password"
                           ></v-text-field>
                            <v-text-field
                              name="login"
                              label="Cidade"
                              type="text"
                           ></v-text-field>
                        </v-form>
                     </v-card-text>
                     <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="avy blue" to="/">Cadastrar</v-btn>
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
};
  
      
</script>

<style>

</style>