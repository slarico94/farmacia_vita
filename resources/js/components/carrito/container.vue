<template>
    <v-app>
        <v-container>
            <v-row>
                <v-col sm="8" md="5" offset-md="2" lg="4" offset-lg="3">
                    <v-row
                        v-for="producto in $store.state.productos"
                        :key="producto.name"
                    >
                        <v-card outlined min-width="100%" class="mb-5 pa-4">
                            <div class="d-flex">
                                <div>
                                    <v-img
                                        :src="producto.image"
                                        width="120px"
                                        height="120px"
                                    />
                                </div>
                                <div class="d-flex flex-column justify-center">
                                    <v-card-title class="pt-0">
                                        {{ producto.name }}
                                    </v-card-title>
                                    <v-card-subtitle>
                                        S/{{ producto.price }}
                                    </v-card-subtitle>
                                    <v-btn
                                        color="error"
                                        small
                                        class="ml-4"
                                        width="200px"
                                    >
                                        <v-icon left>mdi-minus</v-icon>
                                        Eliminar del carrito
                                    </v-btn>
                                </div>
                            </div>
                        </v-card>
                    </v-row>
                </v-col>
                <v-col sm="4" md="3" order="first" order-sm="last">
                    <v-card outlined class="px-2">
                        <v-card-title>Detalles de pago</v-card-title>
                        <v-card-text>
                            <v-row>
                                <v-icon left>mdi-account</v-icon
                                ><v-text-field label="Nombre" />
                            </v-row>
                            <v-row>
                                <v-icon left>mdi-mail</v-icon
                                ><v-text-field label="Correo" />
                            </v-row>
                            <p>Total: S/.999</p>
                            <v-btn color="primary" to="/pago">
                                Completar pago
                            </v-btn>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-app>
</template>
