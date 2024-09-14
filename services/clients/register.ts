"use client";

const API_HOST = process.env.API_HOST;

export default async function register(
  username: string,
  password: string,
  isAdmin: boolean
) {
  try {
    const response = await fetch(`${API_HOST}/api/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password, isAdmin }),
    });

    if (!response.ok) {
      throw new Error("Registration failed");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}
