const BASE_URI = process.env.REACT_APP_BASE_URI;
console.log("REACT_APP_URL", process.env.REACT_APP_BASE_URI);
export const user_api = `${BASE_URI}/users`;
export const register_api = `${BASE_URI}/auth/register`;
export const login_api = `${BASE_URI}/auth/login`;
export const project_api = `${BASE_URI}/projects`;



