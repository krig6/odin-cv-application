import { useSkill } from "../store/cvStore"

export const SkillsPreview = () => {
  const skills = useSkill(state => state.skills)
  return skills.length > 0
    ? (<section className="preview-section" >
      <h2 className="preview-section__title">Skills</h2>
      {skills
        .filter(skill => (skill.name ?? "").toString().trim() !== "")
        .map(skill => (
          <span key={skill.id}>{skill.name}</span>
        ))}
    </section >)
    : null
}
