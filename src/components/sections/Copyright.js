const Copyright = () => {
  return (
    <section className="copyright">
      <img
        alt=""
        className="z-1 hide-mobile"
        src="assets/separator-copyright.png"
      />
      <div>
        <span>© {new Date().getFullYear()} Zgradica</span>
        <span>
          Powered By{" "}
          <a
            target="_blank"
            href="https://www.laus-deo.hr"
          >
            Laus Deo d.o.o.
          </a>
        </span>
        <ul>
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
        </ul>
      </div>
    </section>
  );
};
export default Copyright;
