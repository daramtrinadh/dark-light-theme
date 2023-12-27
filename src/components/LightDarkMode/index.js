// Write your code here
import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {mode: 'Light Mode'}

  switchMode = () => {
    this.setState(prevState => ({
      mode: prevState.mode === 'Dark Mode' ? 'Light Mode' : 'Dark Mode',
    }))
  }

  render() {
    const {mode} = this.state
    let modeclass
    if (mode === 'Light Mode') {
      modeclass = 'dark-mode'
    } else {
      modeclass = 'light-mode'
    }
    return (
      <div className="bg-container">
        <div className={modeclass}>
          <h1 className="head">Click To Change Mode</h1>
          <button type="button" onClick={this.switchMode} className="btn">
            {mode}
          </button>
        </div>
      </div>
    )
  }
}
export default LightDarkMode
