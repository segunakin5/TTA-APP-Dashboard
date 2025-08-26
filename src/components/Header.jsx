
function Header(){

  return(
    <header className="header">
   
    <div className="left-side-header">
      <img src="public/search2.png" />
      <input type="text" placeholder="Search here" />
    
    </div>

    <div className="middle-side-header">
      <nav>
        <ul>
          <li>
            <a href="/"><img src="public/notification.png" /></a>
          </li>
          
          <li>
            <a href="/about"><img src="public/gift.png" /></a>
          </li>

          <li>
            <a href="/services"><img src="public/check.png" /></a>
          </li>

          <li>
            <a href="/contact"><img src="public/folder.png" /></a>
          </li>
        </ul>
      </nav>
    </div>

    



    <div className="right-side-header">
      <img src="public/AYO.jpeg" alt="User Profile" />
      <span>Ayomide</span>
      <span className="dropdown-icon">&#9662;</span>
    </div>

    </header>



  );




}
export default Header;