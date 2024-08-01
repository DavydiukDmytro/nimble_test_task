export const handlePending = (state) => {
	state.isLoading = true;
	state.error = null;
};

export const handleFulfilled = (state, { payload }) => {
	state.isLoading = false;
	state.items = payload.resources;
	state.error = null;
};

export const handleRejected = (state, { payload }) => {
	state.isLoading = false;
	state.error = payload;
};
