export const getContacts = state => state.contacts.contacts;
export const getFilter = state => state.contacts.filter;
export const getIsLoading = state => state.contacts.isLoading;
export const getIsRefreshing = state => state.contacts.isRefreshing;

export const contactsSelectors = {
  getContacts,
  getFilter,
  getIsLoading,
  getIsRefreshing
};