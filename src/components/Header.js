const Header = () => {
  return (
    <header>
      {/* Desktop Menu Starts */}
      <div className="header-inner hide-mobile">
        {/* MENU STARTS */}
        <div className="menu">
          <nav>
            <ul>
              <li>
                <span className="active" id="home-link">
                  Početna
                </span>
              </li>
              <li>
                <span id="about-link">O Zgradici</span>
              </li>
              <li>
                <span id="portfolio-link">Funkcionalnosti</span>
              </li>
              <li>
                <span id="contact-link">Kontakt</span>
              </li>
               {/*<li>
                <span id="blog-link">Blog</span>
              </li>*/}
            </ul>
          </nav>
        </div>
        {/* MENU ENDS */}
        {/* FREELANCE STARTS */}
        <div className="mail">
          <p>
            Email :<span> info@zgradica.com</span>
          </p>
        </div>
        {/* FREELANCE ENDS */}
      </div>
      {/* Desktop Menu Ends */}
      {/* Mobile Menu Starts */}
      <nav className="mobile-menu">
        <div id="menuToggle">
          <input type="checkbox" id="checkboxmenu" />
          <span />
          <span />
          <span />
          <ul className="list-unstyled" id="menu">
            <li>
              <a href="#home">
                <span>Početna</span>
              </a>
            </li>
            <li>
              <a href="#my-photo">
                <span>O Zgradici</span>
              </a>
            </li>
            <li>
              <a href="#portfolio">
                <span>Funkcionalnosti</span>
              </a>
            </li>
            <li>
              <a href="#contact">
                <span>Kontakt</span>
              </a>
            </li>
            {/*<li>
              <a href="#blog">
                <span>Blog</span>
              </a>
            </li>*/}
          </ul>
        </div>
      </nav>
      {/* Mobile Menu Ends */}
    </header>
  );
};
export default Header;
