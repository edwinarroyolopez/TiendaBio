import React from 'react'
import { Link  } from 'react-router-dom'

export default class Browser extends React.Component {
  constructor() {
      super()
  }
  render(){
        return(<Link  to={ this.props.path } onClick={(e) => {this.props.on_Browser(this.props.number)}}>
                      <div className="text">
                        <div className="circle"></div>
                        <div className="label">{ this.props.value }</div>
                      </div>
               </Link>)
  }/* render */

}
