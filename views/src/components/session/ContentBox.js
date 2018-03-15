import React from 'react'


export default class ContentBox extends React.Component {
  constructor() {
      super()
      this.state = {}
   }/* constructor */

   componentDidMount(){
   }/* componentDidMount */

  /* Aquí click en el navegador y redireccionamiento: Cambia info del contenedor  */
  render(){

        return(<div className="box" id="contentBox">
                  <div className="box left" >
                      <h3>Caja Izquierda!</h3>
                      <h3>Caja Izquierda!</h3>
                      <h3>Caja Izquierda!</h3>
                      <h3>Caja Izquierda!</h3>
                      <h3>Caja Izquierda!</h3>
                  </div>
                  <div className="box right">
                      <h3>Caja Derecha</h3>
                      <h3>Caja Derecha</h3>
                      <h3>Caja Derecha</h3>
                      <h3>Caja Derecha</h3>
                      <h3>Caja Derecha</h3>
                  </div>
               </div>)
  }

}
