import { CollapsibleSection } from "./CollapsibleSection"
import { TrashAlt } from "@boxicons/react"
import { useSkill } from "../store/cvStore"

export const Skills = ({ dragHandleProps }) => {
  const skills = useSkill(state => state.skills)
  const addSkill = useSkill(state => state.addSkill)
  const setSkill = useSkill(state => state.setSkill)
  const deleteSkill = useSkill(state => state.deleteSkill)
  return (
    <div className="skills">
      <CollapsibleSection title="Skills" dragHandleProps={dragHandleProps}>
        <div className="skills__fields">
          {skills.map(skill => (
            <div className="skills__field" key={skill.id}>
              <label htmlFor={skill.id}>Skill</label>
              <input
                id={skill.id}
                value={skill.name}
                onChange={(e) => setSkill(skill.id, e.target.value)}
              />
              <TrashAlt onClick={() => deleteSkill(skill.id)} />
            </div>
          ))}
        </div>
        <button className="skills__add-btn" type="button" onClick={addSkill}>+ Add skill</button>
      </CollapsibleSection>
    </div>
  )
}
