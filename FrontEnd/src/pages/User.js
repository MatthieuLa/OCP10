import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserProfile } from "../features/user/userSlice";
import AccountList from "../containers/AccountList";

const User = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const [isEditing, setIsEditing] = useState(false);
  const [newUserName, setNewUserName] = useState(user?.userName || "");

  useEffect(() => {
    /* On n'a pas besoin de fetch le profil car le header s'en occupe.
    if (!user) {
      dispatch(fetchUserProfile());
    } else {
     */
    setNewUserName(user?.userName || "");
    // }
  }, [dispatch, user]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = async () => {
    try {
      await dispatch(updateUserProfile({ userName: newUserName }));
      setIsEditing(false);
    } catch (error) {
      console.error("Failed to update user profile:", error);
    }
  };

  const handleCancelClick = () => {
    setNewUserName(user?.userName || "");
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
                value={newUserName || ""}
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
                value={user?.firstName || ""}
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
                value={user?.lastName || ""}
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

  return user ? (
    <main className="main bg-dark">
      <div className="header">
        <h1>
          Welcome back
          <br />
          {user?.userName || user?.firstName || ""} {user?.lastName || ""}!
        </h1>
        <button className="edit-button" onClick={handleEditClick}>
          Edit Name
        </button>
      </div>
      <h2 className="sr-only">Accounts</h2>
      <AccountList />
    </main>
  ) : (
    <h1>Chargement de l'utilisateur en cours...</h1>
  );
};

export default User;
