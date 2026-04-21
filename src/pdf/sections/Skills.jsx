import { View, Text } from "@react-pdf/renderer";
import { pdfStyles } from "../pdfStyles";

export const Skills = ({ skills }) => {
  if (skills.length === 0) return null

  return (
    <View>
      <Text style={pdfStyles.sectionTitle}>
        Skills
      </Text>
      <View
        style={pdfStyles.sectionDivider}
      />

      {skills
        .filter(skill => skill.category && skill.category.trim() !== "")
        .map(skill => {
          const entries = skill.entries
            ?.map(entry => entry.name)
            .filter(Boolean)
            .join(", ");

          return (
            <View key={skill.id}>

              <Text>
                <Text style={pdfStyles.boldText}>
                  {skill.category}:
                </Text>{" "}
                {entries}
              </Text>

            </View>
          );
        })}
    </View>
  );
};
