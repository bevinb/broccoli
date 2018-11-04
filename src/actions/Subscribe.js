export const SUBSCRIBE_REQUEST = 'SUBSCRIBE_REQUEST';
export const SUBSCRIBE_SUCCESS = 'SUBSCRIBE_SUCCESS';
export const SUBSCRIBE_FAILURE = 'SUBSCRIBE_FAILURE';

function requestSubscribe(creds) {
  return {
    type: SUBSCRIBE_REQUEST,
    isFetching: true,
    isAuthenticated: false,
    creds
  };
}

function subscribeSuccess(user) {
  return {
    type: SUBSCRIBE_SUCCESS,
    isFetching: false,
    isAuthenticated: false
  };
}

function subscribeError(message) {
  return {
    type: SUBSCRIBE_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    message
  };
}

export function subscribe(creds) {

  let config = {
    method: 'POST',
    headers: { 'Content-Type':'application/json' },
    body: JSON.stringify(creds)
  };

  return dispatch => {
    // dispatch requestLogin to kickoff the call to the API
    dispatch(requestLogin(creds));

    return fetch(`${API_HOST}/api/subscribe`, config)
        .then(response =>
            response.json().then(user => ({ user, response }))
    ).then(({ user, response }) =>  {
          if (!response.ok) {
            // If there was a problem, we want to
            // dispatch the error condition
            dispatch(loginError(user.message));
            return Promise.reject(user);
          } else {
            // If login was successful, set the token in local storage
            localStorage.setItem('access_token', user.token);
            fetch(`${API_HOST}/api/user/3`,{headers: { 'Authorization': `JWT ${user.token}` }}
            ).then(response => response.json().then(user => ({ user, response }) => {
                  alert(user)
                  dispatch(receiveLogin(user));
                }))
          }

      }).catch(err => console.log("Error: ", err));
  }
}