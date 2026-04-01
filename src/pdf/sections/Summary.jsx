import { View, Text } from "@react-pdf/renderer";

export const Summary = ({ summary }) => {
  return (
    <View >
      <Text>SUMMARY</Text>
      < Text>
        {summary}
      </Text>
    </View >
  )
}
