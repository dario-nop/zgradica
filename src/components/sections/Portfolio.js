import { salimovSlider } from "@/src/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

const Portfolio = () => {
  return (
    <section
      className="portfolio main-section flex-column-mobile"
      id="portfolio"
    >
      {/* TITLE STARTS */}
      <div className="custom-title">
        {/* MAIN TITLE STARTS */}
        <h3>
          <span>
            <span className="animated-layer fade-in-left-animation fadeInUp wow">
              Funkcionalnosti
            </span>
          </span>
        </h3>
        {/* MAIN TITLE ENDS */}
      </div>
      {/* TITLE ENDS */}
      <Swiper
        {...salimovSlider.portfolio}
        className="swiper swiper-portfolio animated-layer fade-in-right-animation fadeInUp wow"
        data-wow-offset={200}
      >
        {/* PORTFOLIO ITEM STARTS */}
        <SwiperSlide className="single-item swiper-slide">
          {/* ITEM MAIN CONTENT STARTS */}
          <div className="main-content">
            <div className="videocontainer">
              <iframe
                className="youtube-video"
                src="https://www.youtube.com/embed/MIf7_jdyoYY?enablejsapi=1&version=3&playerapiid=ytplayer"
                allowFullScreen=""
              />
            </div>
          </div>
          {/* ITEM MAIN CONTENT ENDS */}
          {/* ITEM DETAILS STARTS */}
          <div className="details">
            <h4>Zgradica - funkcionalnosti</h4>
            <div>
              <ul>
                <li>
                  <span>
                    <i className="fa-regular fa-file-lines" /> Projekt :
                  </span>
                  <span>Zgradica</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-user" /> Dostupnost :
                  </span>
                  <span>Javno</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-hourglass" /> Trajanje :
                  </span>
                  <span>2 min 11 sec</span>
                </li>
                <li>
                  <span>
                    <i className="fa-solid fa-code-branch" /> Platforma :
                  </span>
                  <span>Youtube</span>
                </li>
              </ul>
            </div>
            <a href="#" className="custom-btn util-btn">
              <span>
                Saznaj više <i className="fa-solid fa-arrow-up-right-from-square" />
              </span>
            </a>
          </div>
          {/* ITEM DETAILS ENDS */}
        </SwiperSlide>
        {/* PORTFOLIO ITEM ENDS */}
        {/* PORTFOLIO ITEM STARTS */}
        <SwiperSlide className="single-item swiper-slide">
          {/* ITEM MAIN CONTENT STARTS */}
          <div className="main-content">
            <Swiper
              {...salimovSlider.portfolioItems}
              className="swiper swiper-portfolio-item"
            >
              <SwiperSlide className="swiper-slide">
                <img src="assets/portfolio/1_korak_1.jpg" title="img" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <img src="assets/portfolio/1_korak_2.jpg" title="img" />
              </SwiperSlide>
               <SwiperSlide className="swiper-slide">
                <img src="assets/portfolio/1_korak_3.jpg" title="img" />
              </SwiperSlide>
               <SwiperSlide className="swiper-slide">
                <img src="assets/portfolio/1_korak_4.jpg" title="img" />
              </SwiperSlide>
              <div className="swiper-pagination" />
            </Swiper>
          </div>
          {/* ITEM MAIN CONTENT ENDS */}
          {/* ITEM DETAILS STARTS */}
          <div className="details">
            <h4>Registracija</h4>
            <div>
              <ul>
                <li>
                  <span>
                    <i className="fa-regular fa-1" /> Korak :
                  </span>
                  <span>Pristupite stranici za registraciju</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-2" /> Korak :
                  </span>
                  <span>Unesite kopije osobnih</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-3" /> Korak :
                  </span>
                  <span>Unesite ostale informacije</span>
                </li>
                <li>
                  <span>
                    <i className="fa-solid fa-4" /> Korak :
                  </span>
                  <span>Pritisnite gumb za registraciju</span>
                </li>
              </ul>
            </div>
            <a href="#" className="custom-btn util-btn">
              <span>
                Saznaj više <i className="fa-solid fa-arrow-up-right-from-square" />
              </span>
            </a>
          </div>
          {/* ITEM DETAILS ENDS */}
        </SwiperSlide>
        {/* PORTFOLIO ITEM ENDS */}
        {/* PORTFOLIO ITEM STARTS */}
        <SwiperSlide className="single-item swiper-slide">
          {/* ITEM MAIN CONTENT STARTS */}
          <div className="main-content">
            <div className="videocontainer">
              <iframe
                className="youtube-video"
                src="https://www.youtube.com/embed/YnI6jilWjcc?enablejsapi=1&version=3&playerapiid=ytplayer"
                allowFullScreen=""
              />
            </div>
          </div>
          {/* ITEM MAIN CONTENT ENDS */}
          {/* ITEM DETAILS STARTS */}
          <div className="details">
            <h4>Zgradica - proces registracije</h4>
            <div>
              <ul>
                <li>
                  <span>
                    <i className="fa-regular fa-file-lines" /> Projekt :
                  </span>
                  <span>Zgradica</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-user" /> Dostupnost :
                  </span>
                  <span>Javno</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-hourglass" /> Trajanje :
                  </span>
                  <span>3 min 15 sec</span>
                </li>
                <li>
                  <span>
                    <i className="fa-solid fa-code-branch" /> Platforma :
                  </span>
                  <span>Youtube</span>
                </li>
              </ul>
            </div>
            <a href="#" className="custom-btn util-btn">
              <span>
                Saznaj više <i className="fa-solid fa-arrow-up-right-from-square" />
              </span>
            </a>
          </div>
          {/* ITEM DETAILS ENDS */}
        </SwiperSlide>
        {/* PORTFOLIO ITEM ENDS */}
        
        {/* PORTFOLIO ITEM STARTS */}
        <SwiperSlide className="single-item swiper-slide">
          {/* ITEM MAIN CONTENT STARTS */}
          <div className="main-content">
            <div className="videocontainer">
              <iframe
                className="youtube-video"
                src="https://www.youtube.com/embed/o5BJfLoFZ9M?enablejsapi=1&version=3&playerapiid=ytplayer"
                allowFullScreen=""
              />
            </div>
          </div>
          {/* ITEM MAIN CONTENT ENDS */}
          {/* ITEM DETAILS STARTS */}
          <div className="details">
            <h4>Zgradica - glasovanje</h4>
            <div>
              <ul>
                <li>
                  <span>
                    <i className="fa-regular fa-file-lines" /> Projekt :
                  </span>
                  <span>Zgradica</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-user" /> Dostupnost :
                  </span>
                  <span>Javno</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-hourglass" /> Trajanje :
                  </span>
                  <span>1 min 23 sec</span>
                </li>
                <li>
                  <span>
                    <i className="fa-solid fa-code-branch" /> Platforma :
                  </span>
                  <span>Youtube</span>
                </li>
              </ul>
            </div>
            <a href="#" className="custom-btn util-btn">
              <span>
                Saznaj više <i className="fa-solid fa-arrow-up-right-from-square" />
              </span>
            </a>
          </div>
          {/* ITEM DETAILS ENDS */}
        </SwiperSlide>
        {/* PORTFOLIO ITEM ENDS */}
        

        <div className="nav-item next-item animated-btn">
          <span />
        </div>
        <div className="nav-item prev-item animated-btn">
          <span />
        </div>
      </Swiper>
      <img
        alt=""
        className="separator hide-mobile"
        src="assets/separator.png"
      />
    </section>
  );
};
export default Portfolio;
