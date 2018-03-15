import React, { Component } from 'react'
import io from 'socket.io-client'
import axios from 'axios'

'use strict'


function get(tab) {

      console.log('tab asociacion: '+tab);

      switch (tab) {
          case 1:/* Crud */
                return getCrud()
            break;
          case 2:/* Estadistica */
                return getEstadisticas()
              break;
          default:
      }
}

read_association()

function read_association(){
      axios.post('http://localhost:3000/api/read-association', {})
         .then(function (res) {
             console.log(JSON.stringify(res.data.associations));
         }).catch(function (error) {
           console.log(error);
         });
}/* read association */

function on_Almacenar() {
    console.log('Almacenando asociacion!');

            let id_asociacion = __('txtAsociacion').getAttribute('data-id_asociacion')
            let descripcion = __('txtAsociacion').value
            let nit = __('txtNit').value
            let id_user = __('txtUsername').getAttribute('data-id_user')
            let username = __('txtUsername').value
            let password = __('txtPassword').value
            let departamento = __('txtDepartamento').value
            let municipio = __('txtMunicipio').value
            let vereda = __('txtVereda').value
            let direccion = __('txtDireccion').value
            let presidente = __('txtPresidente').value
            let telefono = __('txtTelefono').value
            let email = __('txtEmail').value

            let asociacion = {id_asociacion:id_asociacion,descripcion:descripcion,nit:nit,id_user:id_user,
                              username:username,password:password,departamento:departamento,
                              municipio:municipio,vereda:vereda,direccion:direccion,presidente:presidente,
                              telefono:telefono,email:email}


             axios.post('http://localhost:3000/api/create-update-association', {
                      asociacion:asociacion
                    })
                    .then(function (res) {
                  //   console.log(JSON.stringify(res));
                        console.log('Msg: '+res.data.message);
                    })
                    .catch(function (error) {
                      console.log(error);
                    });

}

function getCrud () {
        return(<div>
                  <h2>Crud: Asociacion </h2>

                  <div className="content_crud" id="crudGrupo">
                                <div className="box">
                                  <div className="content_search">
                                      <div className="searcher">
                                          <div className="fieldSearch">
                                              <input className="txtSearch" data-id_grupo="0" id="txtBuscador_grupo" placeholder="..."></input>
                                          </div>
                                          <div className="label">Ingrese Asociacion</div>
                                          <div className="list hidden" id="listGrupos"></div>
                                      </div>
                                  </div>
                                  <div className="setter" id="setterAsociacion">
                                        <div className="driver">
                                          <div>
                                                  <div className="operations">
                                                    <div className="add" id="addAsociacion"></div>
                                                    <div className="remove" id="removeAsociacion"></div>
                                                  </div>
                                                  <div className="profile_info">
                                                    <div className="info">
                                                      <div className="label">Productos</div>
                                                      <div className="value" id="info_productos">10</div>
                                                    </div>
                                                    <div className="info">
                                                      <div className="label">V. Grupo</div>
                                                      <div className="value" id="info_vfacturas"></div>
                                                    </div>
                                                    <div className="info">
                                                      <div className="label">Estado</div>
                                                      <div className="value" id="info_estado"></div>
                                                    </div>
                                                    <div className="info">
                                                      <div className="label">Estado</div>
                                                      <div className="value" id="info_estado"></div>
                                                    </div>
                                                    <div className="info">
                                                      <div className="label">Estado</div>
                                                      <div className="value" id="info_estado"></div>
                                                    </div>
                                                  </div>
                                          </div>
                                        </div>
                                       <div className="content_box" >
                                         <div className="box">
                                           <div className="head">
                                             <div className="label" id="msgOperationAsociacion">Nueva Asociación</div>
                                           </div>
                                           <div className="field">
                                               <div className="textbox"><input type="text" id="txtNit" placeholder="1038115788"/></div>
                                           </div>
                                             <div className="field">
                                                 <div className="textbox"><input type="text"  id="txtAsociacion" placeholder="Asociación" data-id_asociacion="0"/></div>
                                             </div>
                                             <div className="field">
                                                 <div className="textbox"><input type="text" id="txtUsername" placeholder="usuario" data-id_user="0"/></div>
                                             </div>
                                             <div className="field">
                                                 <div className="textbox"><input type="text" id="txtPassword" placeholder="contraseña"/></div>
                                             </div>
                                             <div className="field">
                                                 <div className="textbox"><input type="text" id="txtDepartamento" placeholder="Departamento"/></div>
                                             </div>
                                             <div className="field">
                                                 <div className="textbox"><input type="text" id="txtMunicipio" placeholder="Municipio"/></div>
                                             </div>
                                             <div className="field">
                                                 <div className="textbox"><input type="text" id="txtVereda" placeholder="Vereda"/></div>
                                             </div>
                                             <div className="field">
                                                 <div className="textbox"><input type="text" id="txtDireccion" placeholder="Dirección"/></div>
                                             </div>
                                             <div className="field">
                                                 <div className="textbox"><input type="text" id="txtPresidente" placeholder="Presidente"/></div>
                                             </div>
                                             <div className="field">
                                                 <div className="textbox"><input type="text" id="txtTelefono" placeholder="Telefono"/></div>
                                             </div>
                                             <div className="field">
                                                 <div className="textbox"><input type="text" id="txtEmail" placeholder="Email"/></div>
                                             </div>
                                            <div className="result">
                                                 <div className="label" id="resultOperationAsociacion"></div>
                                             </div>
                                             <div className="content_button">
                                               <div className="button" onClick={(e) => {on_Almacenar()}}>
                                                 <div className="label">Ingresar</div>
                                               </div>
                                             </div>
                                         </div>
                                       </div>
                                  </div>
                          </div>

                      </div>
                    </div>);
}
function getEstadisticas () {
    return(<div>
              <h2>Estadisticas: Asociacion </h2>
           </div>);
}

module.exports = {
      get
}
