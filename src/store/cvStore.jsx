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
  })),
  setSkills: (newArray) => set({ skills: newArray })
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
  })),
  reorderProjects: (newProjectsArray) => set({ projects: newProjectsArray }),

  reorderDescriptions: (projId, newDescriptionsArray) =>
    set((state) => ({
      projects: state.projects.map((project) =>
        project.id !== projId
          ? project
          : { ...project, descriptions: newDescriptionsArray }
      ),
    })),
}))

export const useWork = create((set) => ({
  works: [],
  addWork: () => set(state => ({
    works: [...state.works, { id: crypto.randomUUID(), name: "", position: "", period: "", descriptions: [] }]
  })),
  setWork: (workId, updates) => set(state => ({
    works: state.works.map((work) => {
      if (work.id !== workId) return work

      return { ...work, ...updates }
    })
  })),
  deleteWork: (workId) => set(state => ({
    works: state.works.filter(work => work.id !== workId)
  })),
  addDescription: (workId) => set(state => ({
    works: state.works.map(work => work.id === workId
      ? { ...work, descriptions: [...work.descriptions, { id: crypto.randomUUID(), text: "" }] } : work
    )
  })),
  setDescription: (workId, descId, newValue) => set(state => ({
    works: state.works.map((work) => {
      if (work.id !== workId) return work

      return {
        ...work, descriptions: work.descriptions.map((description) => {
          if (description.id !== descId) return description

          return { ...description, ...newValue }
        })
      }
    })
  })),
  deleteDescription: (workId, descId) => set(state => ({
    works: state.works.map((work) => {
      if (work.id !== workId) return work

      return {
        ...work, descriptions: work.descriptions.filter(description => description.id !== descId)
      }
    })
  })),
  reorderWorks: (newWorksArray) => set({ works: newWorksArray }),

  reorderDescriptions: (workId, newDescriptionsArray) =>
    set((state) => ({
      works: state.works.map((work) =>
        work.id !== workId
          ? work
          : { ...work, descriptions: newDescriptionsArray }
      ),
    })),
}))

export const useEducation = create((set) => ({
  educations: [],
  addEducation: () => set(state => ({
    educations: [...state.educations, { id: crypto.randomUUID(), name: "", degree: "", period: "", descriptions: [] }]
  })),
  setEducation: (educId, newValues) => set(state => ({
    educations: state.educations.map((education) => {
      if (education.id !== educId) return education

      return { ...education, ...newValues }
    })
  })),
  reorderEducations: (newEducationsArray) => set({ educations: newEducationsArray }),

  reorderDescriptions: (educId, newDescriptionsArray) =>
    set((state) => ({
      educations: state.educations.map((education) =>
        education.id !== educId
          ? education
          : { ...education, descriptions: newDescriptionsArray }
      ),
    })),
  deleteEducation: (educId) => set(state => ({
    educations: state.educations.filter(education => education.id !== educId)
  })),
  addDescription: (educId) => set(state => ({
    educations: state.educations.map((education) => {
      if (education.id !== educId) return education

      return { ...education, descriptions: [...education.descriptions, { id: crypto.randomUUID(), text: "" }] }
    })
  })),
  setDescription: (educId, descId, newValue) => set(state => ({
    educations: state.educations.map((education) => {
      if (education.id !== educId) return education

      return {
        ...education, descriptions: education.descriptions.map((description) => {
          if (description.id !== descId) return description

          return { ...description, ...newValue }
        })
      }
    })
  })),
  deleteDescription: (educId, descId) => set(state => ({
    educations: state.educations.map((education) => {
      if (education.id !== educId) return education

      return { ...education, descriptions: education.descriptions.filter(description => description.id !== descId) }
    })
  }))
}))

export const usePersonal = create((set) => ({
  person: { jobTarget: "", firstName: "", lastName: "", email: "", phone: "", linkedin: "", github: "", portfolio: "", postalCode: "", cityState: "", country: "" },
  setPerson: (update) => set(state => ({
    person: { ...state.person, ...update }
  }))
}))
