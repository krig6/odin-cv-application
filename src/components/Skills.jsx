import { CollapsibleSection } from "./Shared/CollapsibleSection";
import { useCvStore } from "../store/CvStore";
import { SortableList } from "./Shared/SortableSection";
import { AddButton } from "./Shared/Buttons";
import pluralize from "pluralize";

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
  const category = pluralize.singular(skill.category || "Skill")

  return (
    <article className="project__item">
      <h3>{skill.category || "Category"}</h3>

      <SortableList
        items={skill.entries}
        onReorder={(newSkill) => reorderSkills(skill.id, newSkill)}
        update={(itemId, value) => setSkill(skill.id, itemId, value)}
        del={(itemId) => deleteSkill(skill.id, itemId)}
        label={category}
      />

      <AddButton onClick={() => addSkill(skill.id)}>
        {category}
      </AddButton>
    </article>
  )
}
