const About = () => {
  return (
    <section className="about main-section flex-column-mobile" id="about">
      {/* INFO HOLDER STARTS */}
      <div className="info flex-column-mobile">
        {/* IMAGE STARTS */}
        <div
          className="img-container animated-layer image-animation my-photo-container fadeInUp wow"
          data-wow-offset={200}
          id="my-photo"
        >
          <div>
            <div>
              <img className="my-photo" src="assets/admin_s24.png" alt="" />
            </div>
          </div>
        </div>
        {/* IMAGE ENDS */}
        {/* INFO STARTS */}
        <div>
          <h2>
            <span>
              <span className="animated-layer fade-in-up-animation fadeInUp wow">
                O Zgradici
              </span>
            </span>
          </h2>
          <div className="infos">
            <ul>
              <li>
                <span>
                  <span className="animated-layer fade-in-up-animation fadeInUp wow">
                    <span>Cijena :</span>
                    <span>30 € / mjesečno + Dodatak</span>
                  </span>
                </span>
              </li>
              <li>
                <span>
                  <span className="animated-layer fade-in-up-animation fadeInUp wow">
                    <span>Dodatak :</span>
                    <span>+10 € / mjesečno za svakih 1000 m²</span>
                  </span>
                </span>
              </li>
              <li>
                <span>
                  <span className="animated-layer fade-in-up-animation fadeInUp wow">
                    <span>Plaćanje :</span>
                    <span>Godišnja pretplata, bez ugovorne obveze</span>
                  </span>
                </span>
              </li>
              <li>
                <span>
                  <span className="animated-layer fade-in-up-animation fadeInUp wow">
                    <span>Nagrada za preporuku :</span>
                    <span>2 mjesečne pretplate gratis</span>
                  </span>
                </span>
              </li>
            </ul>
            
            <ul>
              <li>
                <span>
                  <span className="animated-layer fade-in-up-animation fadeInUp wow">
                    <span>Edukacija :</span>
                    <span>Zoom webinar uključen</span>
                  </span>
                </span>
              </li>
              <li>
                <span>
                  <span className="animated-layer fade-in-up-animation fadeInUp wow">
                    <span>Nadogradnje:</span>
                    <span>Automatske, bez dodatne naknade</span>
                  </span>
                </span>
              </li>
              <li>
                <span>
                  <span className="animated-layer fade-in-up-animation fadeInUp wow">
                    <span>Uključen Email:</span>
                    <span>Email (ime_zgrade@zgradica.com)</span>
                  </span>
                </span>
              </li>
              <li>
                <span>
                  <span className="animated-layer fade-in-up-animation fadeInUp wow">
                    <span>Uključena Web stranica:</span>
                    <span> Web stranica (https://ime_zgrade.zgradica.com)</span>
                  </span>
                </span>
              </li>
            </ul>
          </div>

        </div>
        {/* INFO ENDS */}
      </div>
      {/* INFO HOLDER ENDS */}
      
      {/* SKILLS STARTS */}
      <div className="skills flex-column-mobile">
        {/* TITLE STARTS */}
        <div className="custom-title">
          <h3>
            <span>
              <span className="animated-layer fade-in-left-animation fadeInUp wow">
                Ključne funkcije
              </span>
            </span>
          </h3>
        </div>
        {/* TITLE ENDS */}
        <div className="skills-content">
          <div>
            {/* SKILL ITEM STARTS */}
            <div className="animated-layer fade-in-down-animation fadeInLeft wow">
              <span>
                <i className="fa-solid fa-vote-yea" />
              </span>
              <h4>Glasovanje</h4>
            </div>
            {/* SKILL ITEM ENDS */}
            {/* SKILL ITEM STARTS */}
            <div className="animated-layer fade-in-up-animation fadeInLeft wow">
              <span>
                <i className="fa-solid fa-comments" />
              </span>
              <h4>Komunikacija</h4>
            </div>
            {/* SKILL ITEM ENDS */}
          </div>
          <div>
            {/* SKILL ITEM STARTS */}
            <div className="animated-layer fade-in-down-animation fadeInLeft wow">
              <span>
                <i className="fa-solid fa-store" />
              </span>
              <h4>Vlastiti webshop</h4>
            </div>
            {/* SKILL ITEM ENDS */}
            {/* SKILL ITEM STARTS */}
            <div className="animated-layer fade-in-up-animation fadeInLeft wow">
              <span>
                <i className="fa-solid fa-shield-halved" />
              </span>
              <h4>Sigurnost</h4>
            </div>
            {/* SKILL ITEM ENDS */}
          </div>
          <div>
            {/* SKILL ITEM STARTS */}
            <div className="animated-layer fade-in-down-animation fadeInLeft wow">
              <span>
                <i className="fa-solid fa-chart-line" />
              </span>
              <h4>Transparentnost</h4>
            </div>
            {/* SKILL ITEM ENDS */}
            {/* SKILL ITEM STARTS */}
            <div className="animated-layer fade-in-up-animation fadeInLeft wow">
              <span>
                <i className="fa-solid fa-tools" />
              </span>
              <h4>Održavanje</h4>
            </div>
            {/* SKILL ITEM ENDS */}
          </div>
          <div>
            {/* SKILL ITEM STARTS */}
            <div className="animated-layer fade-in-down-animation fadeInLeft wow">
              <span>
                <i className="fa-solid fa-users" />
              </span>
              <h4>Zajednica</h4>
            </div>
            {/* SKILL ITEM ENDS */}
            {/* SKILL ITEM STARTS */}
            <div className="animated-layer fade-in-up-animation fadeInLeft wow">
              <span>
                <i className="fa-solid fa-cog" />
              </span>
              <h4>Automatizacija</h4>
            </div>
            {/* SKILL ITEM ENDS */}
          </div>
        </div>
      </div>
      {/* SKILLS ENDS */}
      
      {/* PREDNOSTI STARTS */}
      <div className="resume flex-column-mobile">
        {/* TITLE STARTS */}
        <div className="custom-title fadeInUp wow">
          <h3>
            <span>
              <span className="animated-layer fade-in-left-animation">
                Zašto Zgradica?
              </span>
            </span>
          </h3>
        </div>
        {/* TITLE ENDS */}
        {/* TIMELINE STARTS */}
        <div className="timeline">
          <ol className="animated-layer fade-in-animation">
            {/* TIMELINE ITEM STARTS */}
            <li>
              <div className="animated-layer fade-in-down-animation fadeInUp wow">
                <div className="experience">
                  <h4>Glasovanje</h4>
                  <p>
                    <i className="fa-solid fa-vote-yea" />
                    <span>Glasovanje je usklađeno s važećim zakonima i propisima</span>
                  </p>
                </div>
              </div>
            </li>
            {/* TIMELINE ITEM ENDS */}
            {/* TIMELINE ITEM STARTS */}
            <li>
              <div className="animated-layer fade-in-up-animation fadeInUp wow">
                <div className="experience">
                  <h4>Komunikacija</h4>
                  <p>
                    <i className="fa-solid fa-comments" />
                    <span>Razmjena poruka, prijava kvarova i email obavijesti</span>
                  </p>
                </div>
              </div>
            </li>
            {/* TIMELINE ITEM ENDS */}
            {/* TIMELINE ITEM STARTS */}
            <li>
              <div className="animated-layer fade-in-down-animation fadeInUp wow">
                <div className="experience">
                  <h4>Vlastiti webshop</h4>
                  <p>
                    <i className="fa-solid fa-store" />
                    <span>Stanari kupuju proizvode u zgradi s organiziranom dostavom</span>
                  </p>
                </div>
              </div>
            </li>
            {/* TIMELINE ITEM ENDS */}
            {/* TIMELINE ITEM STARTS */}
            <li>
              <div className="animated-layer fade-in-up-animation fadeInUp wow">
                <div className="experience">
                  <h4>Sigurnost</h4>
                  <p>
                    <i className="fa-solid fa-shield-halved" />
                    <span>Verifikacija registracije putem osobne iskaznice.</span>
                  </p>
                </div>
              </div>
            </li>
            {/* TIMELINE ITEM ENDS */}
            {/* TIMELINE ITEM STARTS */}
            <li>
              <div className="animated-layer fade-in-down-animation fadeInUp wow">
                <div className="experience">
                  <h4>Transparentnost</h4>
                  <p>
                    <i className="fa-solid fa-chart-line" />
                    <span>Pregled dokumentacije omogućen isključivo suvlasnicima.</span>
                  </p>
                </div>
              </div>
            </li>
            {/* TIMELINE ITEM ENDS */}
            {/* TIMELINE ITEM STARTS */}
            <li>
              <div className="animated-layer fade-in-up-animation fadeInUp wow">
                <div className="experience">
                  <h4>Održavanje</h4>
                  <p>
                    <i className="fa-solid fa-tools" />
                    <span>Prijava kvarova, održavanje i prijdlozi novih rješenja.</span>
                  </p>
                </div>
              </div>
            </li>
            {/* TIMELINE ITEM ENDS */}
            {/* TIMELINE ITEM STARTS */}
            <li>
              <div className="animated-layer fade-in-down-animation fadeInUp wow">
                <div className="experience">
                  <h4>Zajednica</h4>
                  <p>
                    <i className="fa-solid fa-users" />
                    <span>Događanja, razmjena informacija i ideja</span>
                  </p>
                </div>
              </div>
            </li>
            {/* TIMELINE ITEM ENDS */}
            {/* TIMELINE ITEM STARTS */}
            <li>
              <div className="animated-layer fade-in-up-animation fadeInUp wow">
                <div className="experience">
                  <h4>Automatizacija</h4>
                  <p>
                    <i className="fa-solid fa-cog" />
                    <span>Izvršavanje narudžbi s webshopa i komunikacija prema dobavljačima</span>
                  </p>
                </div>
              </div>
            </li>
            {/* TIMELINE ITEM ENDS */}
            <li />
          </ol>
        </div>
        {/* TIMELINE ENDS */}
      </div>
      {/* PREDNOSTI ENDS */}
      <img
        alt=""
        className="separator hide-mobile"
        src="assets/separator.png"
      />
    </section>
  );
};
export default About;