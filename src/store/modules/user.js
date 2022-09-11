import { createSlice } from '@reduxjs/toolkit';

// Define the initial state using that type
const initialState = { user: "Abdulazeez", messages: [] }

export const userDetailsSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        },
        addMessage: (state, action) => {
            state.messages.push(action.payload)
        },
    }
});

export const { setUser, addMessage } = userDetailsSlice.actions