import { View, Text } from "@react-pdf/renderer";
import { pdfStyles } from "../pdfStyles";

export const Personal = ({ personal }) => {
  const contactInfo = [
    personal.address,
    personal.phone,
    personal.email,
    personal.linkedin,
    personal.github,
    personal.portfolio,
  ]
    .filter(Boolean)
    .join(" | ");

  return (
    <View style={{ marginBottom: 6 }}>
      <Text style={pdfStyles.name}>
        {`${personal.firstName || ""} ${personal.lastName || ""}`.trim()}
      </Text>

      {
        personal.jobTarget && (
          <Text style={pdfStyles.jobTarget}>
            {personal.jobTarget}
          </Text>
        )
      }

      {
        contactInfo && (
          <Text style={pdfStyles.contactInfo}>
            {contactInfo}
          </Text>
        )
      }
    </View >
  );
};
