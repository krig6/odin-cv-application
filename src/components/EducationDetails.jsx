import { CollapsibleSection } from "./CollapsibleSection"
import { useCvStore } from "../store/CvStore";
import { SortableList } from "./SortableSections";
import { InputField } from "./Shared/InputField";
import { AddButton } from "./Shared/Buttons";

export const EducationDetails = ({ dragHandleProps }) => {
  const education = useCvStore(state => state.education)
  const addItem = useCvStore(state => state.addItem)
  const setItem = useCvStore(state => state.setItem)
  const deleteItem = useCvStore(state => state.deleteItem)
  const reorderItems = useCvStore(state => state.reorderItems);

  return (
    <section className="education">
      <CollapsibleSection title="Education" dragHandleProps={dragHandleProps}>
        <SortableList
          items={education}
          onReorder={(newArray) => reorderItems("education", newArray)}
          update={(itemId, value) => setItem("education", itemId, { university: value })}
          del={(itemId) => deleteItem("education", itemId)}
          label="University"
          className="sortable-list__main"
        >
          {item => (
            <EducationItems
              education={item}
              setItem={setItem}
            />
          )}
        </SortableList>
        <AddButton onClick={() => addItem("education")}>
          Education
        </AddButton>
      </CollapsibleSection>
    </section>
  )
}

const EducationItems = ({ education, setItem }) => {
  const addDescription = useCvStore(state => state.addDescription)
  const setDescription = useCvStore(state => state.setDescription)
  const reorderDescriptions = useCvStore(state => state.reorderDescriptions)
  const deleteDescription = useCvStore(state => state.deleteDescription)

  return (
    <article className="education__item">
      <h3>{education.university || "Education Entry"}</h3>

      <div className="educ__info">
        <InputField
          id={`period-${education.id}`}
          value={education.period ?? ""}
          label="Period"
          onChange={(value) => setItem("education", education.id, { period: value })}
        />

        <InputField
          id={`degree-${education.id}`}
          value={education.degree ?? ""}
          label="Degree"
          onChange={(value) => setItem("education", education.id, { degree: value })}
        />
      </div>

      <SortableList
        items={education.descriptions}
        onReorder={(newDesc) => reorderDescriptions("education", education.id, newDesc)}
        update={(descId, value) => setDescription("education", education.id, descId, value)}
        del={(descId) => deleteDescription("education", education.id, descId)}
        label="Description"
      />

      <AddButton onClick={() => addDescription("education", education.id)}>
        Description
      </AddButton>
    </article>
  )
}
