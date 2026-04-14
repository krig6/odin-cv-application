import { View, Text } from "@react-pdf/renderer";
import { pdfStyles } from "../pdfStyles";

export const Summary = ({ summary }) => {
  return (
    <View>
      {summary && (
        <View>
          <Text style={pdfStyles.sectionHeading}>SUMMARY</Text>
          <View
            style={pdfStyles.sectionDivider}
          />
          <Text style={pdfStyles.bodyText}>
            {summary}
          </Text>
        </View>
      )
      }
    </View>
  )
}
