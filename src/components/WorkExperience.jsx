import { CollapsibleSection } from "./CollapsibleSection"
import { useWork } from "../store/cvStore"
import { SortableItems } from "./SortableSections";

export const WorkExperience = ({ dragHandleProps }) => {
  const works = useWork(state => state.works)
  const addWork = useWork(state => state.addWork)
  const setWork = useWork(state => state.setWork)
  const deleteWork = useWork(state => state.deleteWork)
  const addDescription = useWork(state => state.addDescription)
  const setDescription = useWork(state => state.setDescription)
  const deleteDescription = useWork(state => state.deleteDescription)
  const reorderDescriptions = useWork(state => state.reorderDescriptions);
  const reorderWorks = useWork(state => state.reorderWorks);

  return (
    <div className="works">
      <CollapsibleSection title="Professional Experience" dragHandleProps={dragHandleProps}>
        <SortableItems
          items={works}
          onReorder={reorderWorks}
          update={(id, val) => setWork(id, { name: val })}
          del={deleteWork}
          label="Company"
        >
          {(work) => (
            <>
              <div className="works__period">
                <label className="works__label" htmlFor={`period-${work.id}`}>Period</label>
                <input
                  id={`period-${work.id}`}
                  className="works__input"
                  value={work.period}
                  onChange={(e) => setWork(work.id, { period: e.target.value })}
                />
              </div>

              <div className="works__position">
                <label className="works__label" htmlFor={`position-${work.id}`}>Position</label>
                <input
                  id={`position-${work.id}`}
                  className="works__input"
                  value={work.position}
                  onChange={(e) => setWork(work.id, { position: e.target.value })}
                />
              </div>

              <SortableItems
                items={work.descriptions}
                onReorder={(newDesc) => reorderDescriptions(work.id, newDesc)}
                update={(descId, value) => setDescription(work.id, descId, { text: value })}
                del={(descId) => deleteDescription(work.id, descId)}
                label="Description"
              />
              <button className="works__button works__button--add-description" type="button" onClick={() => addDescription(work.id)}>+ Add Description</button>
            </>
          )}
        </SortableItems >
        <button className="works__button works__button--add-work" type="button" onClick={addWork}>+ Add Employment</button>
      </CollapsibleSection >
    </div >
  )
}
