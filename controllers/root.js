import React, { Component } from 'react';
'use strict'


const asociacion = require('../views/src/components/vistas/asociacion')

function getContent(tab) {

    /* identificar coordenadas--> Navegador -- Tab */

      let id = tab.id
      let nav = tab.nav


      console.log(' Root: id '+id+' nav: '+nav);

      switch (nav) {
        case 1:/* Asociacion */
              return asociacion.get(id);
          break;
        default:

      }

}

function getTabs (op) {
        let tabs = []

        if(op==10){
              tabs = [{nav:1,value:'Asociacion',id:1},
                      {nav:1,value:'Asociacion',id:2},
                      {nav:1,value:'Asociacion',id:5},
                      {nav:1,value:'Asociacion',id:4}]
        }else if(op==20){
              tabs = [{nav:2,value:'Productor',id:1},
                      {nav:2,value:'Productor',id:2},
                      {nav:2,value:'Productor',id:5},
                      {nav:2,value:'Productor',id:4}]
        }else{
              tabs = [{nav:3,value:'Consumidor',id:1},
                      {nav:3,value:'Consumidor',id:2},
                      {nav:3,value:'Consumidor',id:5},
                      {nav:3,value:'Consumidor',id:4}]
        }
      return tabs;
}
function getBrowsers () {
      let browsers = [{path:'associations',value:'Asociaciones',id:10},
                      {path:'producers',value:'Productores',id:20},
                      {path:'customers',value:'Clientes',id:30},
                      {path:'transportadoras',value:'Transportadoras',id:40},
                      {path:'products',value:'Productos',id:50},
                      {path:'pedidos',value:'Pedidos',id:60}]
      return browsers
}

function getCustomers (req, res) {}

function saveCustomer (req, res) {}

function updateCustomer (req, res) {}

function deleteCustomer (req, res) {}

module.exports = {
      getContent,
      getBrowsers,
      getTabs,
      getCustomers,
      saveCustomer,
      updateCustomer,
      deleteCustomer
}
