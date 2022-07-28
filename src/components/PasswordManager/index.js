import {Component} from 'react'
import PasswordInputs from '../PasswordInputs'
import './index.css'

class PasswordManager extends Component {
  render() {
    return (
      <div className="app-container">
        <div className="password-manager-container">
          <div className="logo-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
              alt="app logo"
              className="passwordManager-logo"
            />
          </div>
          <PasswordInputs />
        </div>
      </div>
    )
  }
}

export default PasswordManager
