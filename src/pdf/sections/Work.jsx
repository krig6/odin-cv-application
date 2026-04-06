import { View, Text } from "@react-pdf/renderer";
import { pdfStyles } from "../pdfStyles";

export const Work = ({ work }) => {
  return (
    <View>
      {work
        .filter((work) => work.company && work.company.trim() !== "")
        .map((work) => (
          <View key={work.id} style={pdfStyles.itemContainer}>
            <Text style={pdfStyles.sectionHeading}>EXPERIENCE</Text>
            <View style={pdfStyles.rowBetween}>
              <Text style={pdfStyles.subHeading}>
                {work.company}
              </Text>

              <Text style={pdfStyles.subHeading}>
                {work.period}
              </Text>
            </View>

            <Text style={{ ...pdfStyles.bodyText, fontWeight: "bold" }}>
              {work.position}
            </Text>

            {work.descriptions?.map((desc) => (
              <Text key={desc.id} style={pdfStyles.bodyText}>
                • {desc.text}
              </Text>
            ))}
          </View>
        ))}
    </View>
  );
};
