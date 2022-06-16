// Write your code here

import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {isSubscribed: false}

  onSubscribe = () => {
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }

  render() {
    const {isSubscribed} = this.state
    const buttonText = isSubscribed ? 'Subscribed' : 'Subscribe'

    return (
      <div className="welcome-container">
        <h1 className="heading">Welcome</h1>
        <p className="quote">Thank you!Happy Learning</p>
        <button className="button" type="button" onClick={this.onSubscribe}>
          {buttonText}
        </button>
      </div>
    )
  }
}

export default Welcome
