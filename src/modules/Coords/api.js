export const loadCoords = ({ address1, address2 }) => {
  return fetch(
    `https://loft-taxi.glitch.me/route?address1=${address1}&address2=${address2}`,
    {
      method: "GET",
      mode: "cors"
    }
  ).then(response => response.json());
};
