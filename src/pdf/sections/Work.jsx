import { View, Text } from "@react-pdf/renderer";

export const Work = ({ work }) => {
  return (
    <View>
      <Text>PROFESSIONAL EXPERIENCE</Text>

      {work
        .filter((work) => work.company && work.company.trim() !== "")
        .map((work) => (
          <View key={work.id}>

            <Text>
              {work.company}{work.period}
            </Text>

            <Text>
              {work.position}
            </Text>

            {work.descriptions?.map((desc) => (
              <Text key={desc.id}>
                • {desc.text}
              </Text>
            ))}
          </View>
        ))}
    </View>
  );
};
