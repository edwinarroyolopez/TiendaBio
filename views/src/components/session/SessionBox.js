import React from 'react'

import ContentBox from './ContentBox'
import LoginBox from './LoginBox'

export default class SessionBox extends React.Component {
  constructor() {
      super()
      this.state = {}
   }/* constructor */

   componentDidMount(){
   }/* componentDidMount */

  /* Aquí click en el navegador y redireccionamiento: Cambia info del contenedor  */
  render(){

            /*  */
        return(<div id="sessionBox">
                  <ContentBox />
                  <LoginBox on_Login={this.props.on_Login}  prueba={this.props.prueba}/>
              </div>)

  }

}
