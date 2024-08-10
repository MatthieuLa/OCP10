import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Fetch user action
export const fetchUserFromAPI = createAsyncThunk(
  "user/fetchUserFromAPI",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await fetch("http://localhost:3001/api/v1/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        return rejectWithValue("Failed to login");
      }

      const data = await response.json();
      return data.body;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchUserProfile = createAsyncThunk(
  "user/fetchUserProfile",
  async (_, { getState, rejectWithValue }) => {
    const token = getState().user.token;

    if (!token) {
      return rejectWithValue("Token is missing");
    }

    try {
      const response = await fetch(
        "http://localhost:3001/api/v1/user/profile",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        return rejectWithValue(
          `Failed to fetch user profile: ${response.statusText}`
        );
      }

      const data = await response.json();
      return data.body;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: JSON.parse(localStorage.getItem("user")) || null,
    token: sessionStorage.getItem("token") || null,
    isAuthenticated: !!sessionStorage.getItem("token"),
    isLoading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      sessionStorage.removeItem("token");
    },
    setUser: (state, action) => {
      state.user = action.payload.user;
      state.isAuthenticated = true;

      // Save user to localStorage
      localStorage.setItem("user", JSON.stringify(action.payload.user));

      if (action.payload.rememberMe) {
        localStorage.setItem("token", action.payload.token);
      }
    },
    setToken: (state, action) => {
      state.token = action.payload.token;
      sessionStorage.setItem("token", action.payload.token);
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
        state.token = action.payload.token;
        state.isAuthenticated = true;

        sessionStorage.setItem("token", action.payload.token);
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
        localStorage.setItem("user", JSON.stringify(action.payload));
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { logout, setUser, setToken } = userSlice.actions;

export default userSlice.reducer;
