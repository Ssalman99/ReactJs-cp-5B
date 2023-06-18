// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isDarkMode: true}

  onModes = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  render() {
    const {isDarkMode} = this.state
    const container = isDarkMode ? 'card-container' : 'card-container1'

    const buttonText = isDarkMode ? 'Light Mode' : 'Dark Mode'

    return (
      <div className="bg-container">
        <div className={container}>
          <h1 className="heading">Click To Change Mode</h1>
          <button className="button" onClick={this.onModes}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
