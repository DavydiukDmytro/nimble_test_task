import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { getContactsThunk } from './thunk';
import { handleFulfilled, handlePending, handleRejected } from './handleReducers';

const contactsSlice = createSlice({
	name: 'contacts',
	initialState: initialState,
	extraReducers: (builder) => {
		builder
			.addCase(getContactsThunk.pending, handlePending)
			.addCase(getContactsThunk.fulfilled, handleFulfilled)
			.addCase(getContactsThunk.rejected, handleRejected);
	},
});

export const contactsReducer = contactsSlice.reducer;
