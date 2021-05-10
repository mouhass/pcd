// import { authenticationService } from '../services/authentication.service';

// // The handleResponse function checks responses from the api to see if the request was unauthorised, forbidden or unsuccessful.
// // If the response status is "401 Unauthorized" or "403 Forbidden" then the user is automatically logged out of the application
// // This handles if the user token is no longer valid.

// export function handleResponse(response) {
//     return response.text().then(text => {
//         const data = text && JSON.parse(text);
        
        
//         if (!response.ok) {
//             if ([401, 403].indexOf(response.status) !== -1) {
//                 // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
//                 authenticationService.logout();
//                 window.location.reload(true);
//             }

//             const error = (data && data.message) || response.statusText;
//             return Promise.reject(error);
//         }

//         return data;
//     });
    
// }