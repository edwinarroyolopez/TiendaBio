import React, { Component } from 'react';
'use strict'

/*
  const Producer = require('../models/producer')
*/

function getCustomer (pmt) {
    return(<div>
              <h2>From customer: { pmt }</h2>
              <input type='text' placeholder={pmt}></input>
           </div>);
}

function getTabs () {
      let tabs = [{value:'Manager',id:1},{value:'customer Operaciones',id:2},{value:'customer Conectar',id:5},{value:'customer Codificar',id:4}]

      return tabs;
}
function getBrowsers () {
      let browsers = [{path:'customers',value:'Consumidores',id:10},
                      {path:'other',value:'C Otro',id:20},
                      {path:'some',value:'C Alguno',id:30},
                      {path:'ese',value:'C Aquel',id:40},
                      {path:'react',value:'C React',id:50}]
      return browsers
}

function getCustomers (req, res) {}

function saveCustomer (req, res) {}

function updateCustomer (req, res) {}

function deleteCustomer (req, res) {}

module.exports = {
      getCustomer,
      getCustomers,
      saveCustomer,
      updateCustomer,
      deleteCustomer,
      getBrowsers,
      getTabs
}
