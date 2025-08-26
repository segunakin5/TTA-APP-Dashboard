function Header() {
  return (
    <header className="header">
      <div className="left-side-header">
        <img src={`${import.meta.env.BASE_URL}search2.png`} alt="Search" />
        <input type="text" placeholder="Search here" />
      </div>

      <div className="middle-side-header">
        <nav>
          <ul>
            <li>
              <a href="/"><img src={`${import.meta.env.BASE_URL}notification.png`} alt="Notification" /></a>
            </li>
            <li>
              <a href="/about"><img src={`${import.meta.env.BASE_URL}gift.png`} alt="Gift" /></a>
            </li>
            <li>
              <a href="/services"><img src={`${import.meta.env.BASE_URL}check.png`} alt="Check" /></a>
            </li>
            <li>
              <a href="/contact"><img src={`${import.meta.env.BASE_URL}folder.png`} alt="Folder" /></a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="right-side-header">
        <img src={`${import.meta.env.BASE_URL}AYO.jpeg`} alt="User Profile" />
        <span>Ayomide</span>
        <span className="dropdown-icon">&#9662;</span>
      </div>
    </header>
  )
}

export default Header
