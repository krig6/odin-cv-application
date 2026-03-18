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

export const useProject = create((set) => ({
  projects: [],
  addProject: () => set(state => ({
    projects: [...state.projects, { id: crypto.randomUUID(), name: "", techStack: "", descriptions: [], live: "", repo: "" }]
  })),
  setProject: (id, updates) => set(state => ({
    projects: state.projects.map(project => project.id === id ? { ...project, ...updates } : project)
  })),
  deleteProject: (id) => set(state => ({
    projects: state.projects.filter(project => project.id !== id)
  })),
  addDescription: (projId) => set(state => ({
    projects: state.projects.map(project => project.id === projId
      ? { ...project, descriptions: [...project.descriptions, { id: crypto.randomUUID(), text: "" }] } : project
    )
  })),
  setDescription: (projId, descId, newValue) => set(state => ({
    projects: state.projects.map((project) => {
      if (project.id !== projId) return project

      return {
        ...project, descriptions: project.descriptions.map((description) => {
          if (description.id !== descId) return description

          return { ...description, ...newValue }
        })
      }
    })
  })),
  deleteDescription: (projId, descId) => set(state => ({
    projects: state.projects.map((project) => {
      if (project.id !== projId) return project

      return {
        ...project, descriptions: project.descriptions.filter(description => description.id !== descId)
      }
    })
  }))
}))
