import { CollapsibleSection } from "./CollapsibleSection";
import { useCvStore } from "../store/CvStore";
import { SortableList } from "./SortableSections";
import { AddButton } from "./Shared/Buttons";

export const Skills = ({ dragHandleProps }) => {
  const skills = useCvStore(state => state.skills)
  const addItem = useCvStore(state => state.addItem)
  const setItem = useCvStore(state => state.setItem)
  const deleteItem = useCvStore(state => state.deleteItem)
  const reorderItems = useCvStore(state => state.reorderItems);

  return (
    <section className="skills">
      <CollapsibleSection title="Skills" dragHandleProps={dragHandleProps}>
        <SortableList
          items={skills}
          onReorder={(newArray) => reorderItems("skills", newArray)}
          update={(itemId, val) => setItem("skills", itemId, { name: val })}
          del={(itemId) => deleteItem("skills", itemId)}
          label="Skill"
          containerClass="skills"
        />
        <AddButton onClick={() => addItem("skills")}>
          Skills
        </AddButton>
      </CollapsibleSection>
    </section>
  );
};
