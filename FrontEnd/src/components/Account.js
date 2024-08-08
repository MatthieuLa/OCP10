function Account() {
  const accountObject = {
    checking: {
      title: "Argent Bank Checking (x8349)",
      amount: "$2,082.79",
      description: "Available Balance",
    },
    savings: {
      title: "Argent Bank Savings (x6712)",
      amount: "$10,928.42",
      description: "Available Balance",
    },
    creditCard: {
      title: "Argent Bank Credit Card (x8349)",
      amount: "$184.30",
      description: "Current Balance",
    },
  };

  return (
    <>
      {Object.keys(accountObject).map((key) => (
        <section className="account" key={key}>
          <div className="account-content-wrapper">
            <h3 className="account-title">{accountObject[key].title}</h3>
            <p className="account-amount">{accountObject[key].amount}</p>
            <p className="account-amount-description">
              {accountObject[key].description}
            </p>
            <div className="account-content-wrapper cta">
              <button className="transaction-button">View transactions</button>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}

export default Account;
