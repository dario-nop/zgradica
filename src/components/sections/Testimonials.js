const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="testimonials-container flex-column-mobile">
        {/* TESTIMONIAL ITEM STARTS */}
        <div className="quote-container animated-layer fade-in-right-animation fadeInUp wow">
          <div>
            <p>
              <span className="quote">
                "Kao suvlasnica napokon imam jednostavan pregled svih troškova i odluka u zgradi. Sve račune mogu vidjeti kad god želim, a glasovanja su brza i jasna. Komunikacija sa susjedima više nije problem, jer sve rješavamo kroz aplikaciju bez nepotrebnih rasprava."
              </span>
              <span className="person">Ivana</span>
              <span className="job">Suvlasnica</span>
            </p>
            <img src="assets/testimonials/ivana.jpg" alt="" />
          </div>
        </div>
        {/* TESTIMONIAL ITEM ENDS */}
        {/* TESTIMONIAL ITEM STARTS */}
        <div className="quote-container animated-layer fade-in-right-animation fadeInUp wow">
          <div>
            <p>
              <span className="quote">
                "Lako je biti podstanar u našoj zgradi i baš mi je super što mogu kupiti domaće proizvode preko webshopa i dogovoriti dostavu. Uvijek sam informiran o važnim stvarima u zgradi, a i lako mogu javiti kvar ili podijeliti neku korisnu informaciju sa susjedima."
              </span>
              <span className="person">Jan</span>
              <span className="job">Student podstanar</span>
            </p>
            <img src="assets/testimonials/jan.jpg" alt="" />
          </div>
        </div>
        {/* TESTIMONIAL ITEM ENDS */}
        {/* TESTIMONIAL ITEM STARTS */}
        <div className="quote-container animated-layer fade-in-right-animation fadeInUp wow">
          <div>
            <p>
              <span className="quote">
                "Zgradica mi je kao predstavniku stanara znatno olakšala posao. Sve je pregledno i dokumentirano – od glasovanja i financija do prijave kvarova. Stanari su zadovoljni jer imaju uvid u sve, a meni je organizacija lakša i brža nego ikad prije."
              </span>
              <span className="person">Dario</span>
              <span className="job">Predstavnik stanara</span>
            </p>
            <img src="assets/testimonials/dario.jpg" alt="" />
          </div>
        </div>
        {/* TESTIMONIAL ITEM ENDS */}
      </div>
      <img
        alt=""
        className="z-1 hide-mobile opposite-separator"
        src="assets/separator-opposite.png"
      />
    </section>
  );
};
export default Testimonials;
