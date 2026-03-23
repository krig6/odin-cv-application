import { CollapsibleSection } from "./CollapsibleSection"
import { useCvStore } from "../store/CvStore";
import { SortableItems } from "./SortableSections";
import { InputField } from "./Shared/InputField";

export const EducationDetails = ({ dragHandleProps }) => {
  const educations = useCvStore(state => state.educations)
  const addItem = useCvStore(state => state.addItem)
  const setItem = useCvStore(state => state.setItem)
  const deleteItem = useCvStore(state => state.deleteItem)
  const reorderItems = useCvStore(state => state.reorderItems);

  return (
    <div className="education">
      <CollapsibleSection title="Education" dragHandleProps={dragHandleProps}>
        <SortableItems
          items={educations}
          itemName={(item) => item.name}
          onReorder={(newArray) => reorderItems("educations", newArray)}
          update={(itemId, value) => setItem("educations", itemId, { name: value })}
          del={(itemId) => deleteItem("educations", itemId)}
          label="University"
        >
          {education => (
            <EducationItems
              education={education}
              setItem={setItem}
            />
          )}
        </SortableItems>
        <button className="educations__button educations__button--add-education" type="button" onClick={() => addItem("educations")}>+ Add Education</button>
      </CollapsibleSection >
    </div >
  )
}

const EducationItems = ({ education, setItem }) => {
  const addDescription = useCvStore(state => state.addDescription)
  const setDescription = useCvStore(state => state.setDescription)
  const reorderDescriptions = useCvStore(state => state.reorderDescriptions)
  const deleteDescription = useCvStore(state => state.deleteDescription)

  return (
    <>
      <InputField
        id={`period-${education.id}`}
        value={education.period ?? ""}
        label="Period"
        onChange={(value) => setItem("educations", education.id, { period: value })}
      />

      <InputField
        id={`degree-${education.id}`}
        value={education.degree ?? ""}
        label="Degree"
        onChange={(value) => setItem("educations", education.id, { degree: value })}
      />

      <SortableItems
        items={education.descriptions}
        onReorder={(newDesc) => reorderDescriptions("educations", education.id, newDesc)}
        update={(descId, value) => setDescription("educations", education.id, descId, value)}
        del={(descId) => deleteDescription("educations", education.id, descId)}
        label="Description"
      />

      <button className="educations__button educations__button--add-description" type="button" onClick={() => addDescription("educations", education.id)}>+ Add Description</button>
    </>
  )
}
