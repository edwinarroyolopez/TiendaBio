import React from 'react'

export default class LoginBox extends React.Component {
  constructor(props) {
      super(props)
      this.state = {}
   }/* constructor */

   componentDidMount(){}/* componentDidMount */
   componentWillMount(){}/* componentDidMount */

  /* Aquí click en el navegador y redireccionamiento: Cambia info del contenedor  */
  render(){
            /*  */
        return(<div className="box" id="loginBox">

                    <div className="field">
                        <div className="label">Usuario</div>
                        <div className="textbox"><input id="txt_username" placeholder="Usuario" ></input> </div>
                    </div>
                    <div className="field">
                        <div className="label">Contraseña</div>
                        <div className="textbox"><input id="txt_password" placeholder="Contraseña" ></input> </div>
                    </div>
                    <div className="content_button">
                        <div className="button" onClick={ (e) => {this.props.on_Login()}} >
                            <div className="label">Login</div>
                        </div>
                    </div>

               </div>)
  }

}
