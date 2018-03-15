import React, { Component } from 'react'
import io from 'socket.io-client'
import axios from 'axios'

'use strict'


function login(user,row) {

                    console.log('Ingresa a login!');


                    const promise = new Promise(function (resolve, reject) {

                            setTimeout(function() {


                                       axios.post('http://localhost:3000/api/login', {user:user})
                                                     .then(function (res) {

                                                         console.log('exploring: '+JSON.stringify(res.data.rows))
                                                         row = res.data.rows[0]

                                                         resolve(row)

                                                         console.log('No llega aquí?');

                                                     }).catch(function (error) {
                                                       console.log(error);
                                                     });



                            }, 1000);

                            if (!row) {
                              reject(new Error('No existe row'))
                            }
                    })


                    return promise

}

/*

          ​var clientData = {
                id: 094545,
                fullName: “Not Set”,
                setUserName: function (firstName, lastName){
                  this.fullName = firstName + ” ” + lastName;
                }
          }
          ​
          ​function getUserInput(firstName, lastName, callback){
              callback (firstName, lastName);
          }
          getUserInput (“Barack”, “Obama”, clientData.setUserName);
          ​

          console.log (clientData.fullName);
          console.log (window.fullName);

*/




module.exports = {
      login
}
