



 function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo">
     <img src="public/logo.png" alt="Logo" />
      <h2>The Transformation Arena</h2>
     
   </div>
   <div className="hamburger-menu-container">
    <img className="hamburger-menu" src="public/hamburgermenu.svg" alt="Menu" /> </div>

     
      <nav>
        <ul>
          <li className="active">
            <img src="public/dashboard1.png"/>
            <p>Dashboard</p>
            </li>



          <li>
            <img src="public/contact1.png"/>
            <p>TTA About us</p>
            </li>

            
          <li>
            <img src="public/invoice1.png"/>
            <p>Online Bible</p>
          </li>

          <li>
            <img src="public/comment1.png"/>
            <p>TTA Testimonies</p>
          </li>

          <li>
            <img src="public/invoice1.png"/>
            <p>TTA News</p>
          </li>

          
          <li>
            <img src="public/invoice1.png"/>
            <p>Hymn Book</p>
          </li>
          <li>
            <img src="public/Layer56.png"/>
            <p>Tithe & Offering</p>
          </li>
          <li>
            <img src="public/Layer2.png"/>
            <p>Account Settings</p>
          </li>
        </ul>
      </nav>
      <div className="prayer-request-container">
        <img src="public/banner.png" alt="arrow" />
        

      </div>

      <div className="side-bar-footer">
        <p className="footer-text1"> TTA Online Portal Version 1.0</p>
        <p className="footer-text2">Made with ❤️ by TTA Tech Team</p>
      </div>
    </aside>
  );
}
export default Sidebar;
