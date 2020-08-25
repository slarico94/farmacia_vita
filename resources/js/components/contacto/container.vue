<template>
    <v-app>
        <v-container>
            <v-row>
                <v-col sm="6" offset-sm="3">
                    <v-card outlined>
                        <v-card-title
                            ><h1
                                class="display-1 grey--text text--darken-1 text-center"
                            >
                                Contáctenos
                            </h1></v-card-title
                        >
                        <v-divider></v-divider>
                        <v-card-subtitle>Ingrese sus datos</v-card-subtitle>
                        <v-card-text>
                            <v-row class="px-2">
                                <v-icon left>mdi-account</v-icon
                                ><v-text-field label="Nombre" hint="Ingrese su nombre completo" />
                            </v-row>
                            <v-row class="px-2">
                                <v-icon left>mdi-mail</v-icon
                                ><v-text-field label="Correo" hint="Ingrese su correo" />
                            </v-row>
                            <v-row class="px-2">
                                <v-icon left>mdi-phone</v-icon
                                ><v-text-field label="Telefono" hint="Ingrese su número de telefono" />
                            </v-row>
                            <v-row class="px-2">
                                <v-icon left top>mdi-android-messages</v-icon>
                                <v-textarea hint="Maximo 300 caracteres" label="Mensaje" />
                            </v-row>

                            <v-card-actions>
                                <v-btn color="primary">Enviar</v-btn>
                            </v-card-actions>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-app>
</template>

<script>
export default {
    data: () => ({
        valid: true,
        name: "",
        nameRules: [
            v => !!v || "Name is required",
            v => (v && v.length <= 10) || "Name must be less than 10 characters"
        ],
        email: "",
        emailRules: [
            v => !!v || "E-mail is required",
            v => /.+@.+\..+/.test(v) || "E-mail must be valid"
        ],
        select: null,
        items: ["Item 1", "Item 2", "Item 3", "Item 4"],
        checkbox: false,
        lazy: false
    }),

    methods: {
        validate() {
            this.$refs.form.validate();
        },
        reset() {
            this.$refs.form.reset();
        },
        resetValidation() {
            this.$refs.form.resetValidation();
        }
    }
};
</script>
