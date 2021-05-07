import axios from 'axios'



export const getClosestBuddy = async (latitude, longitude) => {
      let response = await axios.post(
        "https://us-central1-wayhome-48596.cloudfunctions.net/getClosestBuddy",
          { latitude: latitude, longitude: longitude }
      );
      return response.data;
};

export const registerUser = async(userData) => {
      let response = await axios.patch("https://wayhome-48596-default-rtdb.firebaseio.com/users.json", userData);
      return response.status;
}