import { create } from "zustand";

const addComponents = {
  skills: { category: "", entries: [] },
  projects: { name: "", techStack: "", descriptions: [], live: "", repo: "" },
  work: { company: "", position: "", period: "", descriptions: [] },
  education: { university: "", degree: "", period: "", descriptions: [] }
}

export const useCvStore = create((set) => ({
  // ========== PERSONAL INFO ==========
  personal: { jobTarget: "", firstName: "", lastName: "", email: "", phone: "", linkedin: "", github: "", portfolio: "", postalCode: "", cityState: "", country: "" },
  summary: "",

  // ========== SECTIONS ==========
  skills: [],
  projects: [],
  work: [],
  education: [],

  // ========== ITEM CRUD ==========
  // Add a new item to a section (skills, projects, employments, educations)
  addItem: (sectionKey) => set(state => ({
    [sectionKey]: [...state[sectionKey], { ...addComponents[sectionKey], id: crypto.randomUUID() }]
  })),

  // Update person object
  setPersonal: (update) => set(state => ({
    personal: { ...state.personal, ...update }
  })),

  // Update summary
  setSummary: (newValue) => set({ summary: newValue }),

  // Update an existing item in a section
  setItem: (sectionKey, itemId, itemUpdates) => set(state => ({
    [sectionKey]: state[sectionKey].map(item => item.id === itemId ? { ...item, ...itemUpdates } : item)
  })),

  // Delete an item from a section
  deleteItem: (sectionKey, itemId) => set(state => ({
    [sectionKey]: state[sectionKey].filter(item => item.id !== itemId)
  })),

  // ========== DESCRIPTION CRUD ==========
  // Add a description to a specific item
  addDescription: (sectionKey, itemId) => set(state => ({
    [sectionKey]: state[sectionKey].map((item) => {
      if (item.id !== itemId) return item

      return { ...item, descriptions: [...item.descriptions, { id: crypto.randomUUID(), text: "" }] }
    })
  })),

  // Update a description text
  setDescription: (sectionKey, itemId, descId, newValue) => set(state => ({
    [sectionKey]: state[sectionKey].map((item) => {
      if (item.id !== itemId) return item

      return {
        ...item, descriptions: item.descriptions.map((description) => {
          if (description.id !== descId) return description

          return { ...description, text: newValue }
        })
      }
    })
  })),

  // Delete a description
  deleteDescription: (sectionKey, itemId, descId) => set(state => ({
    [sectionKey]: state[sectionKey].map((item) => {
      if (item.id !== itemId) return item

      return { ...item, descriptions: item.descriptions.filter(description => description.id !== descId) }
    })
  })),

  // ========== REORDER ==========
  // Replace a section with a new reordered array of items
  reorderItems: (sectionKey, newSectionArray) => set({ [sectionKey]: newSectionArray }),

  // Replace an item's descriptions with a new reordered array
  reorderDescriptions: (sectionKey, itemId, newDescriptionsArray) => set(state => ({
    [sectionKey]: state[sectionKey].map((item) => {
      if (item.id !== itemId) return item

      return { ...item, descriptions: newDescriptionsArray }
    })
  })),

  // ========== SKILL METHODS ==========
  // Add a new empty skill entry to a specific skill category
  addSkill: (skillId) => set(state => ({
    skills: state.skills.map((skill) => {
      if (skill.id !== skillId) return skill

      return {
        ...skill,
        entries: [...skill.entries, { id: crypto.randomUUID(), name: "" }]
      }
    })
  })),

  // Update the name of a specific skill entry within a category
  setSkill: (skillId, itemId, newValue) => set(state => ({
    skills: state.skills.map((skill) => {
      if (skill.id !== skillId) return skill

      return {
        ...skill,
        entries: skill.entries.map((item) => {
          if (item.id !== itemId) return item

          return { ...item, name: newValue }
        })
      }
    })
  })),

  // Remove a specific skill entry from a category
  deleteSkill: (skillId, itemId) => set(state => ({
    skills: state.skills.map((skill) => {
      if (skill.id !== skillId) return skill

      return {
        ...skill,
        entries: skill.entries.filter((entry) => entry.id !== itemId)
      }
    })
  })),

  // Replace the entire entries array for a category
  reorderSkills: (skillId, newSkillArray) => set(state => ({
    skills: state.skills.map((skill) => {
      if (skill.id !== skillId) return skill

      return { ...skill, entries: newSkillArray }
    })
  })),
}))
