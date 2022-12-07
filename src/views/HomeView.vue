<template>
<div>
    <router-link to="/login"></router-link>
    <router-link to="/cadastro"></router-link>
    <router-link to="/profissionais"></router-link>
    <v-navigation-drawer app v-model="sidebar" color="primary" white elavation="1">
        <v-list>
            <v-list-item>
                <v-list-item-action>
                    <v-icon @click.stop="sidebar = !sidebar"> mdi-chevron-left </v-icon>
                </v-list-item-action>
                <v-list-item-title>
                    <h3>Menu</h3>
                </v-list-item-title>
            </v-list-item>
            <v-divider></v-divider>
        </v-list>
        <v-list-item>
            <v-list-item-avatar>
                <v-icon>mdi-file-document-plus-outline</v-icon>
            </v-list-item-avatar>
            <v-list-item-content>Criar Curriculo</v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item>
            <v-list-item-avatar>
                <v-icon>mdi-inbox-full-outline</v-icon>
            </v-list-item-avatar>
            <v-list-item-content>Ver Curriculo</v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
    </v-navigation-drawer>

    <nav>
        <v-toolbar dark prominent src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
            <v-app-bar-nav-icon @click.stop="sidebar = !sidebar"></v-app-bar-nav-icon>

            <v-toolbar-title>Brasil Jobs <v-spacer></v-spacer>
                <v-divider></v-divider>
                <v-divider vertical></v-divider>
                <v-btn text>
                    <v-list-item v-for="item of elemento" :key="item.title" link :to="item.to">
                        Para Profissionais
                    </v-list-item>
                    <v-list-item v-for="item of object" :key="item.title" link :to="item.to">
                        Login
                    </v-list-item>

                    <v-list-item v-for="item of coisa" :key="item.title" link :to="item.to">
                        Cadastro
                    </v-list-item>
                </v-btn>

                <v-divider vertical></v-divider>
            </v-toolbar-title>
            <v-toolbar-items class="hidden-sm-and-down"></v-toolbar-items>
            <v-spacer></v-spacer>
            <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
            </v-btn>
            <v-btn icon>
                <v-icon>mdi-export</v-icon>
            </v-btn>
        </v-toolbar>
        <br />
        <v-row>
            <v-col cols="6" sm="4">
                <v-img src="https://i.pinimg.com/564x/d3/7c/b1/d37cb1efe702dd266c5f6f18a9cdb99e.jpg" gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"></v-img>
            </v-col>
            <v-col cols="6" sm="4">
                <v-img src="https://i.pinimg.com/564x/40/13/36/401336799683542b766d35c7769eee33.jpg" gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"></v-img>
            </v-col>
            <v-col cols="6" sm="4">
                <v-img src="https://i.pinimg.com/564x/8b/d2/2b/8bd22b30ca7a42215b758f7a664a9a6e.jpg" gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"></v-img>
            </v-col>
        </v-row>
        <br />
        <v-carousel :show-arrows="false" height="400">
            <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src" reverse-transition="fade-transition" transition="fade-transition"></v-carousel-item>
        </v-carousel>
        <br />
        <v-img src="https://i.pinimg.com/originals/03/cf/a5/03cfa585ed6e2460456bf53de5dc49bc.gif">
            <div class="fill-height bottom-gradient"></div>
        </v-img>
        <br />
        <v-divider></v-divider>

        <v-footer blue padless>
            <v-card class="flex" flat tile>
                <v-card-title class="teal">
                    <strong class="love"></strong>

                    <v-spacer></v-spacer>

                    <v-btn v-for="icon in icons" :key="icon" class="mx-4" icon>
                        <v-icon size="24px">
                            {{ icon }}
                        </v-icon>
                    </v-btn>
                </v-card-title>

                <v-card-text class="leal">
                    {{ new Date().getFullYear() }} — <strong>Brasil Jobs</strong>
                </v-card-text>

                <router-view></router-view>
            </v-card>
        </v-footer>

        <v-spacer></v-spacer>
    </nav>
</div>
</template>

<script>
export default {
    data() {
        return {
            items: [{
                    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
                },
                {
                    src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
                },
                {
                    src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
                },
                {
                    src: "https://images.unsplash.com/photo-1573164574511-73c773193279?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",
                },
            ],

            icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],

            object: [{
                title: "Login",
                to: "/login"
            }],

            coisa: [{
                title: "Cadastro",
                to: "/cadastro"
            }],

            elemento: [{
                title: "Profissionais",
                to: "/profissionais"
            }],

            sidebar: false,

            methods: {
                async cadastro() {
                    this.$router.push({
                        name: "Cadastro"
                    });
                },
            },
        };
    },
};
</script>

<style scoped>
.bottom-gradient {
    background-image: linear-gradient(to top,
            rgba(0, 0, 0, 0.4) 0%,
            transparent 72px);
}

.repeating-gradient {
    background-image: repeating-linear-gradient(-45deg,
            rgba(255, 0, 0, 0.25),
            rgba(255, 0, 0, 0.25) 5px,
            rgba(0, 0, 255, 0.25) 5px,
            rgba(0, 0, 255, 0.25) 10px);
}

.teal {
    color: cornflowerblue;
}

.leal {
    text-align: center;
    color: cornflowerblue;
}

.love {
    text-align: center;
}
</style>
