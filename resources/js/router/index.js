import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Articulos_proteccion from '../components/articulos_proteccion/container'
import Farmacia from '../components/farmacia/container'
import Mama_bebe from '../components/mama_bebe/container'
import Inicio from '../components/inicio/container'
import Nutricion from '../components/nutricion/container'
import Cuidado_personal from '../components/cuidado_personal/container'
import Contacto from '../components/contacto/container'
import Carrito from '../components/carrito/container'
import Pago from '../components/pago/container'

const routes = [
    {
        component: Inicio,
        name: 'inicio',
        path: '/'
    },
    {
        component: Articulos_proteccion,
        name: 'articulos_proteccion',
        path: '/articulos_proteccion'
    },
    {
        component: Farmacia,
        name: 'farmacia',
        path: '/farmacia'
    },
    {
        component: Mama_bebe,
        name: 'mama_bebe',
        path: '/mama_bebe'
    },
    {
        component: Nutricion,
        name: 'nutricion',
        path: '/nutricion'
    },
    {
        component: Cuidado_personal,
        name: 'cuidado_personal',
        path: '/cuidado_personal'
    },
    {
        component: Contacto,
        name: 'contacto',
        path: '/contacto'
    },
    {
        component: Carrito,
        name: 'carrito',
        path: '/carrito'
    },
    {
        component: Pago,
        name: 'pago',
        path: '/pago'
    },
];

export default new VueRouter({
    routes  //shor form for 'routes: routes'
});