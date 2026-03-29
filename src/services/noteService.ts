import axios from "axios";
import type { Note } from "../types/note";

const api = axios.create({
  baseURL: "https://notehub-public.goit.study/api",
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
  },
});

// 🔹 типи відповідей
export interface FetchNotesResponse {
  notes: Note[];
  totalPages: number;
}

export interface CreateNotePayload {
  title: string;
  content: string;
  tag: string;
}

// 🔹 GET notes (WITH GENERIC ❗)
export const fetchNotes = async (
  page: number,
  search: string
): Promise<FetchNotesResponse> => {
  const { data } = await api.get<FetchNotesResponse>("/notes", {
    params: { page, search },
  });

  return data;
};

// 🔹 CREATE note (WITH GENERIC ❗)
export const createNote = async (
  payload: CreateNotePayload
): Promise<Note> => {
  const { data } = await api.post<Note>("/notes", payload);
  return data;
};

// 🔹 DELETE note
export const deleteNote = async (id: string): Promise<void> => {
  await api.delete<void>(`/notes/${id}`);
};



