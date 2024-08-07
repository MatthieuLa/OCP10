import Account from "../components/Account";

function user() {
  return (
    <>
      <main class="main bg-dark">
        <div class="header">
          <h1>
            Welcome back
            <br />
            Tony Jarvis!
          </h1>
          <button class="edit-button">Edit Name</button>
        </div>
        <h2 class="sr-only">Accounts</h2>
        <Account />
      </main>
    </>
  );
}

export default user;
