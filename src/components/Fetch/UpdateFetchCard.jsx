import axios from 'axios';

// axios.defaults.baseURL = 'https://645bb75199b618d5f323b663.mockapi.io';

// export async function updateUsers(userId, followers) {
//   const response = await axios.put(`/users/${userId}`, { followers });
//   return response;
// }

axios.defaults.baseURL =
  'https://64679c42e99f0ba0a81353e2.mockapi.io/users/users';

// export async function updateFetchCard(cardId, followers) {
//   const info = await axios.put(`/${cardId}`, { followers });
//   return info;
// }

export const updateFetchCard = async (cardId, userData) => {
  try {
    await axios.put(`/${cardId}`, { ...userData }).then(({ data }) => {
      return data;
    });
  } catch (error) {
    alert(error);
  }
};
