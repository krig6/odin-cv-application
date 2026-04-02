import { View, Text } from "@react-pdf/renderer";

export const Personal = ({ personal }) => {
  return (
    <View>
      <Text>{`${personal.firstName} ${personal.lastName}`}</Text>
      <Text>{personal.jobTarget}</Text>
      <Text>
        {personal.phone} •{" "}
        {personal.cityState && personal.country
          ? `${personal.cityState}, ${personal.country}`
          : personal.cityState || personal.country}
      </Text>
      <Text>
        {personal.email} • {personal.linkedin} • {personal.github} • {personal.portfolio}
      </Text>
    </View>
  );
};
