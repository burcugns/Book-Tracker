import type { ReadingType } from "../types/Types";
import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000/";

// Login function
export async function login(email: string, pass: string): Promise<string> {
  try {
    const response = await axios.get(
      `${BASE_URL}login?email=${email}&password=${pass}`
    );
    return String(response.data);
  } catch (error) {
    throw new Error("Login failed");
  }
}

// Sign up function
export async function signup(email: string, pass: string): Promise<string> {
  try {
    const response = await axios.post(`${BASE_URL}signup`, {
      email: email,
      password: pass,
    });
    return String(response.data);
  } catch (error) {
    console.error(error);
    throw new Error("Login failed");
  }
}

export async function get_user_books(email: string) {
  try {
    const response = await axios.get(`${BASE_URL}user_books?email=${email}`);
    return response.data;
  } catch (error) {
    return [];
  }
}

// Delete function
export async function delete_book(id: string): Promise<string> {
  try {
    const response = await axios.delete(`${BASE_URL}user_books?id=${id}`);
    return String(response.data);
  } catch (error) {
    throw new Error("delete failed");
  }
}

// Update function
export async function update_book(
  id: string,
  title: string,
  author: string,
  category: string,
  isRead: boolean
): Promise<ReadingType> {
  const response = await axios.put(`${BASE_URL}user_books`, {
    id,
    title,
    author,
    category,
    isRead,
  });
  return response.data;
}

// Create function
export async function add_books_to_backend(
  title: string,
  author: string,
  category: string,
  user_email: string,
  date: string
): Promise<ReadingType> {
  const response = await axios.post(`${BASE_URL}user_books`, {
    title,
    author,
    category,
    user_email,
    date: date,
  });

  const backendId = response.data.id;

  return {
    id: backendId,
    title,
    author,
    category,
    isRead: false,
    date: date,
  };
}
