export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

function requestLogin(creds) {
  return {
    type: LOGIN_REQUEST,
    isAuthenticated: false,
    creds
  }
}

function receiveLogin(user) {
  return {
    type: LOGIN_SUCCESS,
    isAuthenticated: true,
    id_token: user.id_token
  }
}

function loginError(message) {
  return {
    type: LOGIN_FAILURE,
    isAuthenticated: false,
    message
  }
}

export function loginUser(creds) {

  let form = new FormData();
  form.append('grant_type','password');
  form.append('username',creds.username);
  form.append('password',creds.password);

  let config = {
    method: 'post',
    headers: { 'Authorization': 'Basic Y2xpZW50OnNlY3JldA=='},
    body: form
  }

  return dispatch => {
    dispatch(requestLogin(creds))
    return fetch('/oauth/token', config)
      .then(response => response.json().then(user => ({ user, response })))
      .then(({ user, response }) =>  {
        if (!response.ok) {
          dispatch(loginError(user.error_description))
          return Promise.reject(user)
        }
        else {
          localStorage.setItem('id_token', user.access_token)
          dispatch(receiveLogin(user))
        }
      }).catch(err => console.log("Error: ", err))
  }
}
