import React, { Component } from 'react';



import AppBox from '../components/app/AppBox';

import SessionBox from '../components/session/SessionBox';
const userView = require('../components/vistas/users')


class App extends Component {

    constructor (props) {
        super(props)

        this.state = {user: [], browsers:[], session:0}
    }/* constructor */

    componentWillMount(){}/* componentWillMount */


   on_Login(){

              let browsers = []
              let username = __('txt_username').value
              let pass = __('txt_password').value
              let self = this;
              let row = {}

               userView.login({username:username,pass:pass},row).then(function (res) {

                         /*
                            typeof(miVariable) != "undefined"
                            res === void 0
                         */
                                 let name = res.out_name;
                                 let user_type = res.out_user_type;
                                 let id_user = res.out_id_user;
                                 let status = res.out_status;
                                 let id_object = res.out_id_object;

                                 if(name===null){
                                   name = 'root';
                                   console.log('Null name!');
                                 }

                                 self.setState({session:1,user: {user_type:user_type,username:name,title:username}});

                })/* Login */

                /*
                    [{"out_name":"Dainer Acosta","out_user_type":0,"out_id_user":2,"out_status":1,"out_id_object":2}]
                */

   }

    render() {
              console.log('app session: ' +this.state.session);

        //          console.log(' state browsers producer: '+ JSON.stringify(this.state.browsers);
          if(this.state.session>0){/* Usuario logueado */
              return (<AppBox user={this.state.user} />);
          }else{/* redireccionamiento hacía el login */
                return (<SessionBox prueba={this.state.session} on_Login={this.on_Login.bind(this)}/>);
          }

    }/* render */
}
export default App;
