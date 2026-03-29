import axios from "axios";
import type { Note } from "../types/note";

const API_URL = "https://notehub-api.example.com/notes";

const token = import.meta.env.VITE_NOTEHUB_TOKEN;

const api = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export interface FetchNotesResponse {
  notes: Note[];
  totalPages: number;
}

export const fetchNotes = async (
  page: number,
  search: string
): Promise<FetchNotesResponse> => {
  const { data } = await api.get<FetchNotesResponse>("", {
    params: {
      page,
      search,
    },
  });

  return data;
};

export const createNote = async (
  payload: Pick<Note, "title" | "content">
): Promise<Note> => {
  const { data } = await api.post<Note>("", payload);
  return data;
};

export const deleteNote = async (id: string): Promise<Note> => {
  const { data } = await api.delete<Note>(`/${id}`);
  return data;
};




