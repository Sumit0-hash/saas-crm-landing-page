import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export async function submitContactForm(payload) {
  const { data } = await api.post("/inquiry", payload);
  return data;
}

export async function getAllInquiries() {
  const { data } = await api.get("/inquiry");
  return data;
}

export async function deleteInquiry(id) {
  const { data } = await api.delete(`/inquiry/${id}`);
  return data;
}

export default api;