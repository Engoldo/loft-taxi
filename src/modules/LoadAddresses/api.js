export const loadAddressList = () => {
  return fetch("https://loft-taxi.glitch.me/addressList", {
    method: "GET",
    mode: "cors"
  }).then(response => response.json());
};