// import { BehaviorSubject } from 'rxjs';

// import { handleResponse } from '../helpers/handle-response';

// // used to login and logout of the application
// // if authentication is successful the user details including the token are added to local storage

// const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));

// export const authenticationService = {
//     login,
//     logout,
//     currentUser: currentUserSubject.asObservable(),
//     get currentUserValue () { return currentUserSubject.value }
// };

// function login(username, password) {
//     const requestOptions = {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ username, password })
//     };

//     return fetch(`http://localhost:4000/users/authenticate`, requestOptions)
//         .then(handleResponse)
//         .then(user => {
//             // store user details and jwt token in local storage to keep user logged in between page refreshes
//             localStorage.setItem('currentUser', JSON.stringify(user));
//             currentUserSubject.next(user);

//             return user;
//         });
// }

// function logout() {
//     // remove user from local storage to log user out
//     localStorage.removeItem('currentUser');
//     currentUserSubject.next(null);
// }