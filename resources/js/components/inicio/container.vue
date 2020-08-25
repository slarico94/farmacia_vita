<template>
    <v-app>
        <v-container>
            <h1 class="display-3 grey--text text--darken-1 text-center">
                Bienvenido a Farmacia Vita
            </h1>
            <v-divider></v-divider>
            <v-carousel>
                <v-carousel-item
                    v-for="(item, i) in items"
                    :key="i"
                    :src="item.src"
                    reverse-transition="fade-transition"
                    transition="fade-transition"
                ></v-carousel-item>
            </v-carousel>
            <blockquote class="blockquote px-0">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum
                maiores modi quidem veniam, expedita quis laboriosam, ullam
                facere adipisci, iusto, voluptate sapiente corrupti asperiores
                rem nemo numquam fuga ab at.
            </blockquote>
        </v-container>
    </v-app>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    src:
                        "https://images.ctfassets.net/l9x8e72nkkav/2KxPZI231bKbn32Oryzce6/54758ecae4adf748b897590e13e46664/inka-web-slide_huggies.jpg"
                },
                {
                    src:
                        "https://images.ctfassets.net/l9x8e72nkkav/HJuE0O6ssZCvzWdFs9O0C/9198a40efc2187ae962d2ebeb17a241d/inka-web-slide_sedal_dove.jpg"
                },
                {
                    src:
                        "https://images.ctfassets.net/l9x8e72nkkav/JPm0u0DiSNRR53GcMO0nh/bade8acd38008dc4c17c143fe44ccfee/inka-web-slide_loreal__2_.jpg"
                },
                {
                    src:
                        "https://images.ctfassets.net/l9x8e72nkkav/5hRxyJjQVfJkcnvUGp8kbL/56ef235bf303b4813bf391f218cf7d11/inka-web-slide_ensure_geriaplus.jpg"
                }
            ]
        };
    }
};
</script>
