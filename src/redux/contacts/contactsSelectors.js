const getContacts = state => state.contacts.items;
const getFilter = state => state.contacts.filter;
const getIsLoading = state => state.contacts.isLoading;
const getError = state => state.contacts.error;

export const contactsSelectors = {
  getContacts,
  getFilter,
  getIsLoading,
  getError,
};
