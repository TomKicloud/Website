import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'currentUser',
    initialState: {
        value: {}
    },
    reducers: {
        setCurrentUser: (state, user) => {
            state.value = user;
        }
    }
});

export const { setCurrentUser } = userSlice.actions;
export default userSlice.reducer;