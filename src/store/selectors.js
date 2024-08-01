export const selectContacts = (state) => state.contacts.items;

export const selectStatusLoading = (state) => state.contacts.isLoading;

export const selectError = (state) => state.contacts.error;
