import { View, Text } from "@react-pdf/renderer";
import { pdfStyles } from "../pdfStyles";

export const Summary = ({ summary }) => {
  return (
    <View>
      {summary && (
        <View>
          <Text style={pdfStyles.sectionTitle}>Summary</Text>
          <View
            style={pdfStyles.sectionDivider}
          />
          <Text>
            {summary}
          </Text>
        </View>
      )
      }
    </View>
  )
}
