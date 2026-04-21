import { View, Text } from "@react-pdf/renderer";
import { pdfStyles } from "../pdfStyles";

export const Personal = ({ personal }) => {
  const fullName = [
    personal.firstName,
    personal.lastName
  ]
    .filter(Boolean)
    .join(" ")

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
    <View style={pdfStyles.personalSection}>

      {fullName && (
        <Text style={pdfStyles.personalName}>
          {fullName}
        </Text>
      )}

      {personal.jobTarget && (
        <Text style={pdfStyles.jobTarget}>
          {personal.jobTarget}
        </Text>
      )}

      {contactInfo && (
        <Text style={pdfStyles.contact}>
          {contactInfo}
        </Text>
      )}

    </View>
  );
};
