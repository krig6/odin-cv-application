import { View, Text } from "@react-pdf/renderer";
import { pdfStyles } from "../pdfStyles";

export const Education = ({ education }) => {
  return (
    <View>
      <Text style={pdfStyles.sectionHeading}>EDUCATION</Text>
      {education
        .filter((education) => education.university && education.university.trim() !== "")
        .map((education) => (
          <View key={education.id} style={pdfStyles.itemContainer}>
            <View style={pdfStyles.rowBetween}>
              <Text style={pdfStyles.subHeading}>
                {education.university}
              </Text>

              <Text style={pdfStyles.subHeading}>
                {education.period}
              </Text>
            </View>

            <Text style={{ ...pdfStyles.bodyText, fontWeight: "bold" }}>
              {education.degree}
            </Text>

            {
              education.descriptions?.map((desc) => (
                <Text key={desc.id} style={pdfStyles.bodyText}>
                  • {desc.text}
                </Text>
              ))
            }
          </View>
        ))}
    </View>
  );
};
