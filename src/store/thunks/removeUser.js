import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const removeUser = createAsyncThunk("users/remove", async (user) => {
  //request logic goes here
  const response = await axios.delete(`http://localhost:3005/users/${user.id}`);

  //FIX!!! was response.data (returns empty payload) now set to user
  return user;
});

export { removeUser };
