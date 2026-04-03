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
          update={(itemId, val) => setItem("skills", itemId, { category: val })}
          del={(itemId) => deleteItem("skills", itemId)}
          label="Category"
          className="sortable-list__main"
        >
          {skill => (
            <SkillItems
              skill={skill}
              setItem={setItem}
              addItem={addItem}
            />
          )}
        </SortableList >

        <AddButton onClick={() => addItem("skills")}>
          Category
        </AddButton>
      </CollapsibleSection>
    </section>
  );
};

const SkillItems = ({ skill }) => {
  const reorderSkills = useCvStore(state => state.reorderSkills)
  const setSkill = useCvStore(state => state.setSkill)
  const deleteSkill = useCvStore(state => state.deleteSkill)
  const addSkill = useCvStore(state => state.addSkill)

  return (
    <article className="project__item">
      <h3>{skill.category || "Category"}</h3>

      <SortableList
        items={skill.entries}
        onReorder={(newSkill) => reorderSkills(skill.id, newSkill)}
        update={(itemId, value) => setSkill(skill.id, itemId, value)}
        del={(itemId) => deleteSkill(skill.id, itemId)}
        label="Skill"
      />

      <AddButton onClick={() => addSkill(skill.id)}>
        Skill
      </AddButton>
    </article>
  )
}
