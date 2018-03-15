import React from 'react'

import BrowserBox from '../browser/BrowserBox';
import TabBox from './TabBox'

const rootCtrl = require('../../../../controllers/root')
const producerCtrl = require('../../../../controllers/producer')
const customerCtrl = require('../../../../controllers/customer')

let Ctrl;

let prueba = 0;
let opTab = 10;
let tabs = [];


export default class AppBox extends React.Component {
  constructor() {
      super()
      this.state = {contenido:'Default',browsers: [],tabs: []}
   }/* constructor */

   componentWillMount(){
     /* Carga contenido local */
     console.log('Carga AppBox')

        console.log('componentWillMount: prueba '+prueba);

      /* Carga tabs para el tipo de usuario */
              let browsers = []
              let user_type = this.props.user.user_type

              switch (user_type) {
                    case 1:/* roots */
                          Ctrl = rootCtrl
                      break;
                    case 2:/* associations */
                          //  tabs = producerCtrl.getTabs()
                      break;
                    case 3:/* producers */
                          Ctrl = producerCtrl
                      break;
                    case 4:/* customers */
                          Ctrl = customerCtrl
                      break;
                  default:
              }

              browsers = Ctrl.getBrowsers();
              tabs = Ctrl.getTabs(opTab)
              let content = Ctrl.getContent({id:1,nav:1})
              this.setState({ browsers:browsers,tabs:tabs,contenido:content})


   }/* componentWillMount */

   on_Browser(op){

              opTab = op;
              prueba = 1;

         console.log('Prueba on Browser: ' + prueba)
         console.log('AppBox Browser op: ' + op)


          //  tabs = Ctrl.getTabs(op)
          // //   console.log('Browser tabs: '+JSON.stringify(tabs));
          //   this.setState({tabs:tabs})

         /* Cambia el contenido de app, pero conserva el de los browsers
            this.setState({contenido:tab});          */

   }/* on Browser */


  on_Tab(tab){

              console.log(' Tab: ' + tab + ' user: ' + this.props.user.username+ ' User type: ' + this.props.user.user_type )

              /* aquí debo acceder directamente al contenido de la tab,
                el usuario ya está identificado  */

                let content = Ctrl.getContent(tab)
                this.setState({contenido:content})


  }/* on Tab */

  componentDidMount(){
      console.log('componentDidMount: prueba '+prueba);
  }
  shouldComponentUpdate(){

      console.log('shouldComponentUpdate: prueba '+prueba);
      /* aquí cambian las tabs */

      return true;
  }
  componentWillUnMount(){
    console.log('componentWillUnMount: prueba '+prueba);
  }
  /* Aquí click en el navegador y redireccionamiento: Cambia info del contenedor  */
  render(){

            if(prueba == 0){
              console.log('AppBox Renderiza primera vez');
            }else{
              console.log('AppBox  Renderiza segunda vez');
              tabs = Ctrl.getTabs(opTab)
            }

                  /* Aquí debo buscar todos los navegadores: dependiendo del tipo de usuario  */
                      return(<div>
                                  <BrowserBox browsers={this.state.browsers} on_Browser={this.on_Browser.bind(this)} />
                                  <div id='app'>
                                        <div id='header_local'>
                                            <div className="title">{this.props.user.title}{prueba}</div>
                                        </div>
                                        <TabBox tabs={tabs} on_Tab={this.on_Tab.bind(this)} />
                                        <div id="content">{this.state.contenido}</div>
                                  </div>
                            </div>)

  }/* render */

}
