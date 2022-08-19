const isAuthenticated = state => state.auth.isAuthenticated;

const getUserName = state => state.auth.user.name;

const getUserEmail = state => state.auth.user.email;

export {
  isAuthenticated,
  getUserName,
  getUserEmail,
};