function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo">
        <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Logo" />
        <h2>The Transformation Arena</h2>
      </div>

      <div className="hamburger-menu-container">
        <img
          className="hamburger-menu"
          src={`${import.meta.env.BASE_URL}hamburgermenu.svg`}
          alt="Menu"
        />
      </div>

      <nav>
        <ul>
          <li className="active">
            <img src={`${import.meta.env.BASE_URL}dashboard1.png`} alt="Dashboard" />
            <p>Dashboard</p>
          </li>

          <li>
            <img src={`${import.meta.env.BASE_URL}contact1.png`} alt="Contact" />
            <p>TTA About us</p>
          </li>

          <li>
            <img src={`${import.meta.env.BASE_URL}invoice1.png`} alt="Invoice" />
            <p>Online Bible</p>
          </li>

          <li>
            <img src={`${import.meta.env.BASE_URL}comment1.png`} alt="Comment" />
            <p>TTA Testimonies</p>
          </li>

          <li>
            <img src={`${import.meta.env.BASE_URL}invoice1.png`} alt="Invoice" />
            <p>TTA News</p>
          </li>

          <li>
            <img src={`${import.meta.env.BASE_URL}invoice1.png`} alt="Invoice" />
            <p>Hymn Book</p>
          </li>

          <li>
            <img src={`${import.meta.env.BASE_URL}Layer56.png`} alt="Layer56" />
            <p>Tithe & Offering</p>
          </li>

          <li>
            <img src={`${import.meta.env.BASE_URL}Layer2.png`} alt="Layer2" />
            <p>Account Settings</p>
          </li>
        </ul>
      </nav>

      <div className="prayer-request-container">
        <img src={`${import.meta.env.BASE_URL}banner.png`} alt="arrow" />
      </div>

      <div className="side-bar-footer">
        <p className="footer-text1">TTA Online Portal Version 1.0</p>
        <p className="footer-text2">Made with ❤️ by TTA Tech Team</p>
      </div>
    </aside>
  )
}

export default Sidebar
