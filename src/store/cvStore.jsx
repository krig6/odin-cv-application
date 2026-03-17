import { create } from "zustand";

export const useSummary = create((set) => ({
  summary: "",
  setSummary: (newValue) => set({ summary: newValue })
}))

export const useSkill = create((set) => ({
  skills: [],
  addSkill: () => set(state => ({
    skills: [...state.skills, { id: crypto.randomUUID(), name: "" }]
  })),
  setSkill: (id, newValue) => set(state => ({
    skills: state.skills.map(skill => skill.id === id ? { ...skill, name: newValue } : skill)
  })),
  deleteSkill: (id) => set(state => ({
    skills: state.skills.filter(skill => skill.id !== id)
  }))
}))
