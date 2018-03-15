import React from 'react'

import Browser from './Browser'

export default class BrowserList extends React.Component {
  constructor() {
      super()
  }

  render(){

      let all_browsers = this.props.browsers.map((browser) => {
                                  return(<li  key={browser.id.toString()}>
                                                    <Browser  number={browser.id}  path={browser.path} value={browser.value} on_Browser={ this.props.on_Browser}/>
                                             </li>)
                            })

        return(<ul className="browserList">
                    { all_browsers }
                </ul>)
  }

}
