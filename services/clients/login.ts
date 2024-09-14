"use client";
import { createClient } from "@/utils/supabase/client";

const API_HOST = process.env.API_HOST;

export default async function login(username: string, password: string) {
  try {
    const response = await fetch(`${API_HOST}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      throw new Error("Login failed");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}
