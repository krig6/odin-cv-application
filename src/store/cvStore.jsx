import { create } from "zustand";

export const useSummary = create((set) => ({
  summary: "",
  setSummary: (newValue) => set({ summary: newValue })
}))
