import Account from "../components/Account";

function AccountList() {
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
    <div className="account-list">
      {Object.keys(accountObject).map((key) => {
        const account = accountObject[key];
        return <Account account={account} key={key} />;
      })}
    </div>
  );
}

export default AccountList;
