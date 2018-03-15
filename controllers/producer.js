import React, { Component } from 'react';
'use strict'

/*
  const Producer = require('../models/producer')
*/

function getProducer (pmt) {
    return(<div>
              <h2>From producer: { pmt }</h2>
              <input type='text' placeholder={pmt}></input>
           </div>);
}

function getTabs () {
      let tabs = [{value:'Manager',id:1},{value:'producer Operaciones',id:2},{value:'producer Conectar',id:5},{value:'producer Codificar',id:4}]

      return tabs;
}
function getBrowsers () {
      let browsers = [{path:'producers',value:'Productores',id:10},
                      {path:'other',value:'P Otro',id:20},
                      {path:'some',value:'P Alguno',id:30},
                      {path:'ese',value:'P Aquel',id:40},
                      {path:'react',value:'P React',id:50}]
      return browsers
}

function getProducers (req, res) {}

function saveProducer (req, res) {}

function updateProducer (req, res) {}

function deleteProducer (req, res) {}

module.exports = {
      getProducer,
      getProducers,
      saveProducer,
      updateProducer,
      deleteProducer,
      getBrowsers,
      getTabs
}
