import { View, Text } from "@react-pdf/renderer";

export const Education = ({ education }) => {
  return (
    <View>
      <Text>EDUCATION</Text>

      {education
        .filter((education) => education.university && education.university.trim() !== "")
        .map((education) => (
          <View key={education.id}>

            <Text>
              {education.university}{education.period}
            </Text>

            <Text>
              {education.degree}
            </Text>

            {education.descriptions?.map((desc) => (
              <Text key={desc.id}>
                • {desc.text}
              </Text>
            ))}
          </View>
        ))}
    </View>
  );
};
