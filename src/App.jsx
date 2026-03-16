import { PersonalDetails } from "./components/PersonalDetails"
import { Summary } from "./components/Summary"

export const App = () => {
  return (
    <>
      <div className="cv-builder">
        <div className="cv-builder__inputs">
          <PersonalDetails />
          <Summary />
        </div>
        <div className="cv-builder__preview">
        </div>
      </div>
    </>
  )
}

