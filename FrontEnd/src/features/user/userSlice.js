// src/features/user/userSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Fetch user action
export const fetchUserFromAPI = createAsyncThunk(
  "user/fetchUserFromAPI",
  async (credentials) => {
    const response = await fetch("http://localhost:3001/api/v1/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      throw new Error("Failed to login");
    }

    const data = await response.json();
    // Ne stocker le token que si `rememberMe` est vrai
    return data;
  }
);

// Fetch user profile action
export const fetchUserProfile = createAsyncThunk(
  "user/fetchUserProfile",
  async (_, { getState }) => {
    const token = getState().user.token;
    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch user profile");
    }

    const data = await response.json();
    return data.body;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: JSON.parse(localStorage.getItem("user")) || null,
    token: localStorage.getItem("token") || null,
    isAuthenticated: !!localStorage.getItem("token"),
    isLoading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    },
    setUser: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserFromAPI.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchUserFromAPI.fulfilled, (state, action) => {
        state.isLoading = false;
        state.token = action.payload.token; // Stocker le token en mémoire
        state.isAuthenticated = true;
      })
      .addCase(fetchUserFromAPI.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(fetchUserProfile.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        // Vous pouvez également stocker l'utilisateur dans le localStorage si nécessaire
        localStorage.setItem("user", JSON.stringify(action.payload));
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { logout, setUser } = userSlice.actions;

export default userSlice.reducer;
