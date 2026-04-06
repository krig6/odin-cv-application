import { View, Text } from "@react-pdf/renderer";
import { pdfStyles } from "../pdfStyles";

export const Skills = ({ skills }) => {
  return (
    <View>
      <Text style={pdfStyles.sectionHeading}>SKILLS</Text>

      {skills
        .filter((skill) => skill.category && skill.category.trim() !== "")
        .map((skill) => {
          const skillEntries = skill.entries
            ?.map((entry) => entry.name)
            .filter(Boolean)
            .join(", ")

          return (
            <View key={skill.id} style={{ ...pdfStyles.itemContainer, marginBottom: 2 }}>
              <Text style={pdfStyles.bodyText}>
                <Text style={pdfStyles.subHeading}>
                  {skill.category}:
                </Text>{" "}
                {skillEntries}
              </Text>
            </View>
          )
        })}
    </View>
  )
}
