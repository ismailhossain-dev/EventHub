import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const loginUser = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  try {
    console.log("📤 Sending login:", { email, password });

    const response = await axios.post(`${API_URL}/api/users/login`, {
      email,
      password,
    });

    console.log("📥 Login response:", response.data);

    return response.data.data;
  } catch (error: any) {
    console.log("❌ Login API error:");
    console.log("Status:", error.response?.status);
    console.log("Data:", error.response?.data);
    console.log("Message:", error.message);

    return null;
  }
};