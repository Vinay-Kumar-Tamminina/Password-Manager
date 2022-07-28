import {Component} from 'react'
import {v4} from 'uuid'
import YourPasswords from '../YourPasswords/index'
import './index.css'

class PasswordInputs extends Component {
  state = {
    passwordItems: [],
    websiteInput: '',
    usernameInput: '',
    passwordInput: '',
    isChecked: false,
    searchInput: '',
  }

  onChangeWebsite = event => {
    this.setState({websiteInput: event.target.value})
  }

  onChangeUsername = event => {
    this.setState({usernameInput: event.target.value})
  }

  onChangePassword = event => {
    this.setState({passwordInput: event.target.value})
  }

  onAddPasswordList = event => {
    event.preventDefault()
    const {websiteInput, usernameInput, passwordInput} = this.state
    const newPassword = {
      id: v4(),
      website: websiteInput,
      username: usernameInput,
      password: passwordInput,
    }
    this.setState(prevState => ({
      passwordItems: [...prevState.passwordItems, newPassword],
      websiteInput: '',
      usernameInput: '',
      passwordInput: '',
    }))
  }

  updateSearchList = event => {
    this.setState({searchInput: event.target.value})
  }

  onChecked = () => {
    this.setState(prev => ({isChecked: !prev.isChecked}))
  }

  renderShowNoPasswords = () => (
    <div className="no-passwords-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
        alt="no passwords"
        className="no-passwords-image"
      />

      <p className="no-password">No Passwords</p>
    </div>
  )

  deletePasswordItem = id => {
    const {passwordItems} = this.state
    const filteredList = passwordItems.filter(
      eachPassword => eachPassword.id !== id,
    )
    this.setState({passwordItems: filteredList})
  }

  render() {
    const {
      passwordItems,
      websiteInput,
      usernameInput,
      passwordInput,
      isChecked,
      searchInput,
    } = this.state

    const count = passwordItems.length

    const updatedNewList = passwordItems.filter(eachPassword =>
      eachPassword.website.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div>
        <div className="password-inputs-container">
          <div className="inputs-container">
            <div className="inputs-card">
              <form
                onSubmit={this.onAddPasswordList}
                className="add-password-container"
              >
                <h1 className="heading">Add New Password</h1>
                <div className="input-container">
                  <img
                    className="input-logo"
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                    alt="website"
                  />
                  <input
                    onChange={this.onChangeWebsite}
                    value={websiteInput}
                    className="input-item"
                    type="text"
                    placeholder="Enter Website"
                  />
                </div>
                <div className="input-container">
                  <img
                    className="input-logo"
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                    alt="username"
                  />
                  <input
                    onChange={this.onChangeUsername}
                    value={usernameInput}
                    className="input-item"
                    type="text"
                    placeholder="Enter Username"
                  />
                </div>
                <div className="input-container">
                  <img
                    className="input-logo"
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                    alt="password"
                  />
                  <input
                    onChange={this.onChangePassword}
                    value={passwordInput}
                    className="input-item"
                    type="password"
                    placeholder="Enter Password"
                  />
                </div>
                <div className="add-button-container">
                  <button type="submit" className="add-button">
                    Add
                  </button>
                </div>
              </form>
            </div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
              className="password-manager-image"
            />
          </div>
        </div>
        <div className="password-show-container">
          <div className="search-password-and-length">
            <div className="show-password">
              <h1 className="show-heading">Your Passwords</h1>
              <p className="count">{count}</p>
            </div>

            <div className="search-input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="input-logo"
              />
              <input
                type="search"
                placeholder="Search"
                className="search-input-item"
                onChange={this.updateSearchList}
              />
            </div>
          </div>
          <div className="password-list-container">
            <input
              type="checkbox"
              id="showPassword"
              onChange={this.onChecked}
              checked={isChecked}
            />
            <label htmlFor="showPassword">Show passwords</label>
          </div>
          {count === 0 ? (
            this.renderShowNoPasswords()
          ) : (
            <ul className="ul-list">
              {updatedNewList.map(eachPassword => (
                <YourPasswords
                  key={eachPassword.id}
                  passwordItemDetails={eachPassword}
                  isChecked={isChecked}
                  deletePasswordItem={this.deletePasswordItem}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default PasswordInputs
