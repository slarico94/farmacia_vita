<template>
    <v-app id="inspire">
        <v-navigation-drawer
            v-model="drawer"
            :clipped="$vuetify.breakpoint.lgAndUp"
            app
        >
            <v-list dense>
                <template v-for="item in items">
                    <v-row
                        v-if="item.heading"
                        :key="item.heading"
                        align="center"
                    >
                        <v-col cols="6">
                            <v-subheader v-if="item.heading">
                                {{ item.heading }}
                            </v-subheader>
                        </v-col>
                        <v-col cols="6" class="text-center">
                            <a href="#!" class="body-2 black--text">EDIT</a>
                        </v-col>
                    </v-row>
                    <v-list-item
                        v-else
                        :key="item.text"
                        link
                        v-bind:to="item.route"
                    >
                        <v-list-item-action>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title>
                                {{ item.text }}
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </template>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar
            :clipped-left="$vuetify.breakpoint.lgAndUp"
            app
            color="blue darken-3"
            dark
        >
            <v-app-bar-nav-icon
                @click.stop="drawer = !drawer"
            ></v-app-bar-nav-icon>
            <v-toolbar-title style="width: 300px" class="ml-0 pl-4">
                <span class="hidden-sm-and-down">Farmacia VITA</span>
            </v-toolbar-title>
            <v-text-field
                flat
                solo-inverted
                hide-details
                prepend-inner-icon="mdi-magnify"
                label="Search"
                class="hidden-sm-and-down"
            ></v-text-field>
            <v-spacer></v-spacer>
            <v-menu :close-on-content-click="false" :nudge-width="200" offset-y>
                <template v-slot:activator="{ on, attrs }">
                    <v-badge overlap color="red">
                        <v-btn icon large v-bind="attrs" v-on="on">
                            <v-icon>mdi-cart</v-icon>
                        </v-btn>
                    </v-badge>
                </template>
                <v-card>
                    <v-list>
                        <v-list-item>
                            <v-list-item-avatar>
                                <v-icon large>mdi-cart</v-icon>
                            </v-list-item-avatar>

                            <v-list-item-content>
                                <v-list-item-title
                                    >Carrito de compras</v-list-item-title
                                >
                                <v-list-item-subtitle
                                    >Farmacia VITA</v-list-item-subtitle
                                >
                            </v-list-item-content>
                        </v-list-item>
                    </v-list>

                    <v-divider></v-divider>
                    <v-card-actions>
                        <v-btn color="primary" to="/carrito">Ir a carrito de compras</v-btn>
                    </v-card-actions>
                </v-card>
            </v-menu>
        </v-app-bar>
        <v-main>
            <v-container fluid>
                <!-- Aqui viene el contenido -->
                <router-view></router-view>
            </v-container>
        </v-main>
        <v-snackbar
            v-model="$store.state.snackbar.show"
            :multi-line="true"
            :right="true"
            :top="true"
            :timeout="1500"
            :color="$store.state.snackbar.variant"
        >
            {{ $store.state.snackbar.message }}
            <!-- <v-btn
                dark
                text
                @click="$store.commit('updateSnackbar', { show: false })"
            >
                Cerrar
            </v-btn> -->
        </v-snackbar>
        <app-footer></app-footer>
    </v-app>
</template>

<script>
export default {
    props: {
        source: String
    },
    data: () => ({
        dialog: false,
        drawer: null,
        items: [
            { icon: "mdi-home", text: "Inicio", route: "/" },
            {
                icon: "mdi-face-mask",
                text: "Artículos de protección",
                route: "/articulos_proteccion"
            },
            { icon: "mdi-pharmacy", text: "Farmacia", route: "/farmacia" },
            {
                icon: "mdi-baby-bottle",
                text: "Mamá y Bebé",
                route: "/mama_bebe"
            },
            { icon: "mdi-nutrition", text: "Nutrición", route: "/nutricion" },
            {
                icon: "mdi-face",
                text: "Cuidado Personal",
                route: "/cuidado_personal"
            },
            { icon: "mdi-account-box", text: "Contáctenos", route: "/contacto" }
        ]
    })
};
</script>
