import Features from "../components/Features";

function home() {
  return (
    <main>
      <div className="hero">
        <section className="hero-content">
          <p className="subtitle">No fees.</p>
          <p className="subtitle">No minimum deposit.</p>
          <p className="subtitle">High interest rates.</p>
          <p className="text">Open a savings account with Argent Bank today!</p>
        </section>
      </div>
      <section className="features-container">
        <Features />
      </section>
    </main>
  );
}

export default home;
