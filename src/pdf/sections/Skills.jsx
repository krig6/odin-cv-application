import { View, Text } from "@react-pdf/renderer";

export const Skills = ({ skills }) => {
  const filteredSkills = skills
    .filter((s) => s.name && s.name.trim() !== "")
    .map(s => s.name)

  return (
    <View >
      <Text>TECHNICAL SKILLS</Text>
      < Text>
        {filteredSkills.join(', ')}
      </Text>
    </View >
  )
}
