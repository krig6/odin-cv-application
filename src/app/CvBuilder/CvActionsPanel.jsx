import { useCvStore } from "../../store/cvStore";
import { CvPDF } from "../../pdf/CvPDF";
import { ActionButton } from "../../shared/ui/Buttons";
import { FileDetail, RefreshCw } from "@boxicons/react";

export const CvActionsPanel = ({ sections }) => {
  const fillCv = useCvStore(state => state.fillCv)
  const resetCv = useCvStore(state => state.resetCv)

  return (
    <>
      <ActionButton
        icon={<FileDetail />}
        onClick={fillCv}
      >
        Fill CV
      </ActionButton>

      <ActionButton
        icon={<RefreshCw />}
        onClick={resetCv}
      >
        Reset CV
      </ActionButton>

      <CvPDF sections={sections} />
    </>
  )
}
