import { CollapsibleSection } from "./CollapsibleSection"
import { TrashAlt } from "@boxicons/react"
import { useWork } from "../store/cvStore"

export const WorkExperience = ({ dragHandleProps }) => {
  const works = useWork(state => state.works)
  const addWork = useWork(state => state.addWork)
  const setWork = useWork(state => state.setWork)
  const deleteWork = useWork(state => state.deleteWork)
  const addDescription = useWork(state => state.addDescription)
  const setDescription = useWork(state => state.setDescription)
  const deleteDescription = useWork(state => state.deleteDescription)

  return (
    <div className="works">
      <CollapsibleSection title="Professional Experience" dragHandleProps={dragHandleProps}>
        <div className="works__list">
          {works.map(work => (
            <div className="works__item" key={work.id}>
              <div className="works__header">
                <label className="works__label" htmlFor={work.id}>Company</label>
                <input
                  id={work.id}
                  className="works__input"
                  value={work.name}
                  onChange={(e) => setWork(work.id, { name: e.target.value })}
                />
                <button
                  className="works__button works__button--delete" type="button" onClick={() => deleteWork(work.id)}
                >
                  <TrashAlt />
                </button>
              </div>
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
              <div className="works__descriptions">
                {work.descriptions.map(description => (
                  <div className="works__description" key={description.id}>
                    <input
                      id={`desc-${description.id}`}
                      className="works__input"
                      value={description.text}
                      onChange={(e) => setDescription(work.id, description.id, { text: e.target.value })}
                    />
                    <button
                      className="works__button works__button--delete" type="button" onClick={() => deleteDescription(work.id, description.id)}
                    >
                      <TrashAlt />
                    </button>
                  </div>
                ))}
              </div>
              <button className="works__button works__button--add-description" type="button" onClick={() => addDescription(work.id)}>+ Add Description</button>
            </div>
          ))}
        </div>
        <button className="works__button works__button--add-work" type="button" onClick={addWork}>+ Add Employment</button>
      </CollapsibleSection >
    </div >
  )
}
