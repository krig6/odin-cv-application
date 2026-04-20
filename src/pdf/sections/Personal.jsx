import { View, Text } from "@react-pdf/renderer";
import { pdfStyles } from "../pdfStyles";

export const Personal = ({ personal }) => {
  const address = [
    personal.cityState,
    personal.postalCode,
    personal.country,
  ]
    .filter(Boolean)
    .join(", ");


  const contactInfo = [
    address,
    personal.phone,
    personal.email,
    personal.linkedin,
    personal.github,
    personal.portfolio,
  ]
    .filter(Boolean)
    .join(" | ");

  return (
    <View style={pdfStyles.itemContainer}>
      <Text style={pdfStyles.name}>
        {`${personal.firstName || ""} ${personal.lastName || ""}`.trim()}
      </Text>

      {personal.jobTarget && (
        <Text style={pdfStyles.jobTarget}>
          {personal.jobTarget}
        </Text>
      )}

      {contactInfo && (
        <Text style={pdfStyles.metaText}>
          {contactInfo}
        </Text>
      )}
    </View>
  );
};
