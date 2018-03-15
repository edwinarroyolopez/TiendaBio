import React from 'react'

import TabList from './TabList'

export default class BrowserBox extends React.Component {
  constructor() {
      super()
      this.state = {}
   }/* constructor */

   componentDidMount(){
   }/* componentDidMount */

  /* Aquí click en el navegador y redireccionamiento: Cambia info del contenedor  */
  render(){

            /* TabList */
        return(<TabList  tabs={ this.props.tabs } on_Tab={  this.props.on_Tab } />)

  }

}
