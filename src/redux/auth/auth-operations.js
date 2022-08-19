import axios from 'axios';
import Notiflix from 'notiflix';
import authActions from './auth-actions';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = userData => async dispatch => {
  dispatch(authActions.registerRequest())

  try {
    const { data } = await axios.post('/users/signup', userData);
    token.set(data.token);
    Notiflix.Notify.success(`Добро пожаловать ${data.user.name}!`);
    dispatch(authActions.registerSuccess(data))
  } catch (error) {
    Notiflix.Notify.failure('Что-то пошло не так, попробуйте ещё раз');
    dispatch(authActions.registerError(error.message))
  }
}

const login = userData => async dispatch => {
  dispatch(authActions.loginRequest());

  try {
    const { data } = await axios.post('/users/login', userData);
    token.set(data.token);
    Notiflix.Notify.success('Вход успешно выполнен!')
    dispatch(authActions.loginSuccess(data))
  } catch (error) {
    Notiflix.Notify.failure('Операция логина не выпонена,проверьте правильность ввода данных или вы ёще не зарегистрировались')
    dispatch(authActions.loginError(error.message))
  }
}

const logout = () => async dispatch => {
  dispatch(authActions.logoutRequest());
  try {
    await axios.post('users/logout');
    token.unset();
    Notiflix.Notify.info('Выход успешно выполнен')
    dispatch(authActions.logoutSuccess())
  } catch (error) {
    Notiflix.Notify.failure('Вам не удалось выйти, проверьте введённые данные вашей почты')
    dispatch(authActions.logoutError(error.message))
  }
}

const getCurrentUser = () => async (dispatch, getState) => {
  const { auth: { token: persistedToken } } = getState();

  if (!persistedToken) {
    return;
  }

  token.set(persistedToken);
  dispatch(authActions.getCurrentUserRequest());
  try {
    const response = await axios.get('users/current');
    dispatch(authActions.getCurrentUserSuccess(response.data))
  } catch (error) {
    dispatch(authActions.getCurrentUserError(error.message))
  }
}

export { register, login, logout, getCurrentUser }