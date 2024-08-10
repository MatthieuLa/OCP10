import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserProfile, setUser } from "../features/user/userSlice";
import AccountList from "../containers/AccountList";

const User = () => {
  const dispatch = useDispatch();

  // Get user data from the store
  const user = useSelector((state) => state.user.user);

  // Local state to control form visibility and username edit
  const [isEditing, setIsEditing] = useState(false);
  const [newUserName, setNewUserName] = useState(user?.userName || "");

  useEffect(() => {
    if (!user) {
      dispatch(fetchUserProfile());
    } else {
      setNewUserName(user.userName || ""); // Ensure newUserName is not null
    }
  }, [dispatch, user]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    // Dispatch action to update the user name
    dispatch(setUser({ ...user, userName: newUserName }));
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setNewUserName(user?.userName || ""); // Reset to original user name or empty string
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <main className="main bg-dark">
        <div className="header">
          <h1>Edit user info</h1>
          <form className="edit-user-form">
            <div className="input-wrapper user">
              <label htmlFor="userName" className="label-user">
                User name
              </label>
              <input
                type="text"
                id="userName"
                value={newUserName || ""} // Ensure value is not null
                onChange={(e) => setNewUserName(e.target.value)}
              />
            </div>
            <div className="input-wrapper user">
              <label htmlFor="firstName" className="label-user">
                First name
              </label>
              <input
                type="text"
                id="firstName"
                value={user?.firstName || ""} // Ensure value is not null
                readOnly
                disabled
                className="input-disabled"
              />
            </div>
            <div className="input-wrapper user">
              <label htmlFor="lastName" className="label-user">
                Last name
              </label>
              <input
                type="text"
                id="lastName"
                value={user?.lastName || ""} // Ensure value is not null
                readOnly
                disabled
                className="input-disabled"
              />
            </div>
            <div className="button-group">
              <button
                type="button"
                onClick={handleSaveClick}
                className="save-button"
              >
                Save
              </button>
              <button
                type="button"
                onClick={handleCancelClick}
                className="cancel-button"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </main>
    );
  }

  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>
          Welcome back
          <br />
          {user?.firstName || ""} {user?.lastName || ""}!
        </h1>
        <button className="edit-button" onClick={handleEditClick}>
          Edit Name
        </button>
      </div>
      <h2 className="sr-only">Accounts</h2>
      <AccountList />
    </main>
  );
};

export default User;
