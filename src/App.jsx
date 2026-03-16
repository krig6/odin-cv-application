import { PersonalDetails } from "./components/PersonalDetails"
import { Summary } from "./components/Summary"
import { Skills } from "./components/Skills"
import { Projects } from "./components/Projects"

export const App = () => {
  return (
    <>
      <div className="cv-builder">
        <div className="cv-builder__inputs">
          <PersonalDetails />
          <Summary />
          <Skills />
          <Projects />
        </div>
        <div className="cv-builder__preview">
        </div>
      </div>
    </>
  )
}

