import React from 'react'

export default class Tab extends React.Component {
  constructor() {
      super()
  }
  render(){

        return( <div className="tab" onClick={(e) => {this.props.on_Tab({id:this.props.id,nav:this.props.nav})}}>
                      <div className="label">{ this.props.value }</div>
                </div>
        )
  }/* render */

}
