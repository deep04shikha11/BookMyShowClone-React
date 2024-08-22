import { axiosInstance } from "./index";
//Register a user
export const RegisterUser = async (value) => {
  try {
    const response = await axiosInstance.post("/api/users/register", value);
    return response.data;
  } catch (error) {
    console.log("Register User axios error");
    console.log(error);
  }
};
