import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://cors-anywhere.herokuapp.com/https://live.devnimble.com/api/v1';

const TOKEN = 'VlP9cwH6cc7Kg2LsNPXpAvF6QNmgZn';

axios.defaults.baseURL = BASE_URL;

axios.defaults.headers.common.Authorization = `Bearer ${TOKEN}`;

export const getContactsThunk = createAsyncThunk('contacts/getContacts', async (_, thunkAPI) => {
	try {
		const response = await axios.get('/contacts');
		return response.data;
	} catch (error) {
		return thunkAPI.rejectWithValue(error.messege);
	}
});
