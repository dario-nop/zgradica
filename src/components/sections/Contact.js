const Contact = () => {
  return (
    <section className="contact main-section flex-column-mobile" id="contact">
      {/* TITLE STARTS */}
      <div className="custom-title">
        {/* MAIN TITLE STARTS */}
        <h3>
          <span>
            <span className="animated-layer fade-in-left-animation fadeInUp wow">
              Kontakt
            </span>
          </span>
        </h3>
        {/* MAIN TITLE ENDS */}
      </div>
      {/* TITLE ENDS */}
      {/* CONTACTS STARTS */}
      <div className="boxes">
        <div>
          {/* CONTACT ITEM STARTS */}
          <div className="animated-layer fade-in-down-animation fadeInUp wow">
            <i className="fa fa-phone" />
            <p>
              <span className="small-text">Mobitel</span>
              +385 6327 203
            </p>
          </div>
          {/* CONTACT ITEM ENDS */}
          {/* CONTACT ITEM STARTS */}
          <div className="animated-layer fade-in-up-animation fadeInUp wow">
            <i className="fa fa-location-dot" />
            <p>
              <span className="small-text">Adresa</span>
              Osijek, Hrvatska
            </p>
          </div>
          {/* CONTACT ITEM ENDS */}
        </div>
        <div>
          {/* CONTACT ITEM STARTS */}
          <div className="animated-layer fade-in-down-animation fadeInUp wow">
            <i className="fa fa-envelope" />
            <p>
              <span className="small-text">email</span>
              info@zgradica.com
            </p>
          </div>
          {/* CONTACT ITEM ENDS */}
          {/* CONTACT ITEM STARTS */}
          <div className="animated-layer fade-in-up-animation fadeInUp wow">
            <i className="fa fa-share-nodes" />
            <span className="small-text">Pratite nas</span>
            <ul className="social">
              <li>
                <a href="https://chat.whatsapp.com/HQV2gnqeaUcGUP2k7Ae1my">
                  <i className="fa-brands fa-whatsapp" />
                </a>
              </li>
              <li>
                <a href="https://invite.viber.com/?g2=AQA5ALkmP54z3FTwTC5GxfFUK%2F%2Fwr0ap3VIZiNc3apUulC12jRTIqvzvDV0Pjki4">
                  <i className="fa-brands fa-viber" />
                </a>
              </li>
              <li>
                <a href="https://laus-deo.hr">
                  <i className="fa-brands fa-dribbble" />
                </a>
              </li>
             {/* <li>
                <a href="#">
                  <i className="fa-brands fa-facebook" />
                </a>
              </li>*/}
            </ul>
          </div>
          {/* CONTACT ITEM ENDS */}
        </div>
      </div>
      {/* CONTACTS ENDS 
      <img
        alt=""
        className="separator hide-mobile"
        src="assets/separator.png"
      />*/}
    </section>
  );
};
export default Contact;
