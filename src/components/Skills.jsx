import { CollapsibleSection } from "./CollapsibleSection";
import { useCvStore } from "../store/CvStore";
import { SortableItems } from "./SortableSections";

export const Skills = ({ dragHandleProps }) => {
  const skills = useCvStore(state => state.skills)
  const addItem = useCvStore(state => state.addItem)
  const setItem = useCvStore(state => state.setItem)
  const deleteItem = useCvStore(state => state.deleteItem)
  const reorderItems = useCvStore(state => state.reorderItems);

  return (
    <div className="skills">
      <CollapsibleSection title="Skills" dragHandleProps={dragHandleProps}>
        <SortableItems
          items={skills}
          onReorder={(newArray) => reorderItems("skills", newArray)}
          update={(itemId, val) => setItem("skills", itemId, { name: val })}
          del={(itemId) => deleteItem("skills", itemId)}
          label="Skill"
          containerClass="skills"
        />
        <button className="skills__add-btn" type="button" onClick={() => addItem("skills")}>+ Add skill</button>
      </CollapsibleSection>
    </div>
  );
};
