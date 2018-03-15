import React from 'react'

import Tab from './Tab'

export default class TabList extends React.Component {
  constructor() {
      super()
  }

  render(){

      let all_tabs = this.props.tabs.map((tab) => {
                                  return(<Tab  key={tab.id.toString()} id={tab.id} nav={tab.nav} value={tab.value} on_Tab={ this.props.on_Tab }/>)
                            })

        return(<div id="browser_tabs">
                     { all_tabs }
                  </div>)
  }

}
