import Features from "../components/Features";

function home() {
  return (
    <main>
      <div class="hero">
        <section class="hero-content">
          <p class="subtitle">No fees.</p>
          <p class="subtitle">No minimum deposit.</p>
          <p class="subtitle">High interest rates.</p>
          <p class="text">Open a savings account with Argent Bank today!</p>
        </section>
        {/* <img src="bank-tree.jpeg" alt="" className="main-logo" /> */}
      </div>
      <section class="features-container">
        <Features />
      </section>
    </main>
  );
}

export default home;
