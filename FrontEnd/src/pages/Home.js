function Home() {
  return (
    <div className="main">
      <img src="bank-tree.jpeg" alt="principal du site" className="main-logo" />
      <section className="features-container">
        <div className="features">
          <img src="icon-chat.png" alt="" className="features-icon" />
          <h3>You are our #1 priority</h3>
          <p>
            Need to talk to a representative? You can get in touch through our
            24/7 chat or through a phone call in less than 5 minutes.
          </p>
        </div>
        <div className="features">
          <img src="icon-money.png" alt="" className="features-icon" />
          <h3>More savings means higher rates</h3>
          <p>
            The more you save with us, the higher your interest rate will be!
          </p>
        </div>
        <div className="features">
          <img src="icon-security.png" alt="" className="features-icon" />
          <h3>Security you can trust</h3>
          <p>
            We use top of the line encryption to make sure your data and money
            is always safe.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;
