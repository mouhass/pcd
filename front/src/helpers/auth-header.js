// import { authenticationService } from '../services/authentication.service';

// // a helper function that returns an HTTP Authorization header containing the JWT auth token of the currently logged in user.
// // If the user isn't logged in an empty object is returned.

// export default function authHeader() {
//     // return authorization header with jwt token
//     const currentUser = authenticationService.currentUserValue;
//     if (currentUser && currentUser.token) {
//         return { Authorization: `Bearer ${currentUser.token}` };
//     } else {
//         return {};
//     }
// }