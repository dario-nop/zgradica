const Home = () => {
  return (
    <section className="home image" id="home">
      <div>
        <div className="position-relative">
          <h1>
            <span>
              <span className="animated-layer">
                Zgradica<span>!</span>
              </span>
            </span>
            <span className="position-relative">
              <span className="animated-layer">vaš</span>
              <span className="intro animated-layer">
                Pretvorite vašu zgradu u smart dom ... upravljajte, glasujte i komunicirajte pametnije uz Zgradicu
              </span>
            </span>
            <span>
              <span className="animated-layer">smart dom.</span>
            </span>
          </h1>
        </div>
      </div>
      {/* CALL TO ACTION STARTS */}
      <span className="animated-layer animated-btn cta" id="cta">
        <span></span>
      </span>
      {/* CALL TO ACTION ENDS */}
    </section>
  );
};
export default Home;