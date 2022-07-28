import './index.css'

const YourPasswords = props => {
  const {passwordItemDetails, isChecked, deletePasswordItem} = props
  const {id, website, username, password} = passwordItemDetails
  const initial = website[0].toUpperCase()

  const passwordItem = isChecked ? (
    <p className="para">{password}</p>
  ) : (
    <img
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
      alt="stars"
    />
  )

  const onDelete = () => {
    deletePasswordItem(id)
  }

  return (
    <div className="password-list-items-container">
      <li className="list-item-container">
        <div className="initial-section">{initial}</div>
        <div className="text-cont">
          <p className="heading">{website}</p>
          <p className="name">{username}</p>
          {passwordItem}
        </div>
        <div className="button-cont">
          <button type="button" className="delete-button" testid="delete">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
              alt="delete"
              className="delete-icon"
              onClick={onDelete}
            />
          </button>
        </div>
      </li>
    </div>
  )
}

export default YourPasswords
