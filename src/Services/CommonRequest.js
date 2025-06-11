
import axios from "axios";

export const commonRequest = async (method, url, body, header) => {
  try {
    const response = await axios({
      method: method,
      url: url,
      data: body,           // crucial for FormData
      headers: header?header:{
                "Content-Type":"application/json"
      }
    });
    return response;
  } catch (error) {
    console.error("Error from commonRequest:", error);
    return error.response || error;
  }
};
