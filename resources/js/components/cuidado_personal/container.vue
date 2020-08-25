<template>
    <v-app>
        <h1 class="display-1 grey--text text--darken-1 text-center">Cuidado Personal</h1>
        <v-divider></v-divider>
        <v-row>
            <v-col sm="12" offset-sm="1" lg="8" offset-lg="2">
                <v-row>
                    <v-col
                        sm="6"
                        md="4"
                        v-for="(producto, i) in $store.state.productos.slice(
                            0,
                            6
                        )"
                        :key="producto.name"
                    >
                        <v-card outlined min-height="100%">
                            <v-img :src="producto.image" height="200px">
                            </v-img>
                            <v-card-title>{{ producto.name }}</v-card-title>
                            <v-card-subtitle
                                >S/{{ producto.price }}</v-card-subtitle
                            >
                            <v-card-actions>
                                <v-btn small color="success" dark @click="addToCart">
                                    <v-icon small>mdi-plus</v-icon>
                                    Agregar al carrito
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-app>
</template>

<script>
export default {
    methods: {
        addToCart(index, quantity = 1) {
            this.$store.commit("addItemToCart", { itemId: index, quantity });
            this.$store.commit("updateSnackbar", { show: true });
        }
    }
};
</script>