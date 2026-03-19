import { CollapsibleSection } from "./CollapsibleSection";
import { useSkill } from "../store/cvStore";
import { SortableItems } from "./SortableSections";

export const Skills = ({ dragHandleProps }) => {
  const skills = useSkill(state => state.skills);
  const addSkill = useSkill(state => state.addSkill);
  const setSkill = useSkill(state => state.setSkill);
  const deleteSkill = useSkill(state => state.deleteSkill);
  const setSkills = useSkill(state => state.setSkills);

  return (
    <div className="skills">
      <CollapsibleSection title="Skills" dragHandleProps={dragHandleProps}>
        <SortableItems
          items={skills}
          onReorder={setSkills}
          update={setSkill}
          del={deleteSkill}
          label="Skill"
          containerClass="skills"
        />
        <button className="skills__add-btn" type="button" onClick={addSkill}>+ Add skill</button>
      </CollapsibleSection>
    </div>
  );
};
