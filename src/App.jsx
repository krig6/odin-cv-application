import { PersonalDetails } from "./components/PersonalDetails"
import { Summary } from "./components/Summary"
import { Skills } from "./components/Skills"

export const App = () => {
  return (
    <>
      <div className="cv-builder">
        <div className="cv-builder__inputs">
          <PersonalDetails />
          <Summary />
          <Skills />
        </div>
        <div className="cv-builder__preview">
        </div>
      </div>
    </>
  )
}

