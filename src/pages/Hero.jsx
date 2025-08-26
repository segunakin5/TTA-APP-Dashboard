function Hero() {
  return (
    <section className="hero">
      <h1>Welcome Ayomide Akintoye</h1>

      <div className="hero1-image">
        <img src={`${import.meta.env.BASE_URL}hero1.png`} alt="Hero" />
      </div>

      <div className="hero2-container">
        <img src={`${import.meta.env.BASE_URL}Group7160.png`} alt="Hero2" />
      </div>

      <div className="hero3-container">
        <img className="hero3-1" src={`${import.meta.env.BASE_URL}todays.png`} alt="Hero3" />
        <img className="hero3-2" src={`${import.meta.env.BASE_URL}newest1.png`} alt="Hero3" />
        <img className="hero3-3" src={`${import.meta.env.BASE_URL}banner2.png`} alt="Hero3" />
      </div>
    </section>
  );
}

export default Hero;
