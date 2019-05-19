export const checkAuth = ({ username, password }) => {
  return fetch(
    `https://loft-taxi.glitch.me/auth?username=${username.trim()}&password=${password.trim()}`,
    {
      method: "GET",
      mode: "cors"
    }
  ).then(response => response.json());
};
