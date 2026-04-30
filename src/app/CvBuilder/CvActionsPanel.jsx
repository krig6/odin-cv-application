import { useCvStore } from "../../store/cvStore";
import { CvPdfDownload } from "../../pdf/CvPDF";
import { ActionButton } from "../../shared/ui/Buttons";
import { Eye, FileDetail, RefreshCw } from "@boxicons/react";

export const CvActionsPanel = ({ sections, onPreview }) => {
  const fillCv = useCvStore(state => state.fillCv)
  const resetCv = useCvStore(state => state.resetCv)

  return (
    <>
      <ActionButton
        icon={<FileDetail />}
        onClick={fillCv}
      >
        Fill
      </ActionButton>

      <ActionButton
        icon={<RefreshCw />}
        onClick={resetCv}
      >
        Reset
      </ActionButton>

      <ActionButton
        icon={<Eye />}
        onClick={onPreview}
      >
        Preview
      </ActionButton>

      <CvPdfDownload sections={sections} />
    </>
  )
}
