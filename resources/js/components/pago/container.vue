<template>
    <v-app>
        <v-container>
            <v-row>
                <v-col sm="6" offset-sm="3">
                    <v-stepper>
                        <v-stepper-header>
                            <v-stepper-step step="1" /><v-divider></v-divider>
                            <v-stepper-step step="2" /><v-divider></v-divider>
                            <v-stepper-step step="3" />
                        </v-stepper-header>
                        <v-stepper-items>
                            <v-stepper-content step="1">
                                <h1
                                    class="display-1 grey--text text--darken-1 text-center"
                                >
                                    Datos de contacto
                                </h1>
                                <v-row class="px-2">
                                    <v-icon left>mdi-account</v-icon
                                    ><v-text-field label="Nombre" />
                                </v-row>
                                <v-row class="px-2"> 
                                    <v-icon left>mdi-mail</v-icon
                                    ><v-text-field label="Correo" />
                                </v-row>
                                <v-row class="px-2">
                                    <v-icon left>mdi-phone</v-icon
                                    ><v-text-field label="Número de teléfono" />
                                </v-row>
                                <v-btn color="primary">Continuar</v-btn>
                                <v-btn text to="/carrito">Cancelar</v-btn>
                            </v-stepper-content>
                            <v-stepper-content step="2">
                                <h1
                                    class="display-1 grey--text text--darken-1 text-center"
                                >
                                    Datos de envío
                                </h1>
                                <v-text-field label="Departamento" />
                                <v-text-field label="Provincia" />
                                <v-text-field label="Distrito" />
                                <v-text-field label="Direccion" />
                                <v-btn color="primary">Continuar</v-btn>
                                <v-btn text to="/carrito">Atrás</v-btn>
                            </v-stepper-content>
                            <v-stepper-content step="3">
                                Step3
                            </v-stepper-content>
                        </v-stepper-items>
                    </v-stepper>
                </v-col>
            </v-row>
        </v-container>
    </v-app>
</template>
