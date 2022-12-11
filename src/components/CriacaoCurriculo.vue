<template>
<div class="CriacaoCurriculo">
    <v-btn color="#A2DFE1" @click="entrarCard">
        <v-icon>mdi-file-document-plus-outline</v-icon> <v-divider></v-divider> {{titulo.titulo}}
    </v-btn>
</div>
</template>

<script>
export default {
    props: ['titulo'],
    methods: {
        entrarCard() {
            this.$router.push({
                name: "Curriculo"
            });
        },
    }
}
</script>

<style scoped>
.CriacaoCurriculo {
    margin: 5px 0;
}
</style>
