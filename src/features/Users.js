import { createSlice } from "@reduxjs/toolkit";
import UsersData from "../data/ListOfUsers";

export const userSlice = createSlice({
    name: "users",
    initialState: { value: UsersData },
    reducers: {
        addUser: (state, action) => {
            // Write code for addUser function
            const newUser = action.payload;
            state.value.push(newUser);
        },
        deleteUser: (state, action) => {
            // Write code for deleteUser function
            const userId = action.payload;
            state.value = state.value.filter(user => user.id !== userId);
        },
        updateUsername: (state, action) => {
            // Write code for updateUsername function
            const { userId, newUsername } = action.payload;
            const user = state.value.find(user => user.id === userId);
            if (user) {
                user.username = newUsername;
            }
        }
    }
});

export default userSlice.reducer;
export const { addUser, deleteUser, updateUsername } = userSlice.actions;
