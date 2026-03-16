import { PersonalDetails } from "./components/PersonalDetails"

export const App = () => {
  return (
    <>
      <div className="cv-builder">
        <div className="cv-builder__inputs">
          <PersonalDetails />
        </div>
        <div className="cv-builder__preview">
        </div>
      </div>
    </>
  )
}

