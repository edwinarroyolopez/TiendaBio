import React from 'react'

import BrowserList from './BrowserList'

export default class BrowserBox extends React.Component {
  constructor() {
      super()
      this.state = {}
   }/* constructor */


  /* Aquí click en el navegador y redireccionamiento: Cambia info del contenedor  */
  render(){
                  /* Aquí debo buscar todos los navegadores: dependiendo del tipo de usuario  */

                  let browsers = this.props.browsers;

                  return(<nav id="browserBox">
                                <BrowserList  browsers={ browsers } on_Browser={this.props.on_Browser} />
                        </nav>)
  }

}
