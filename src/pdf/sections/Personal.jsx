import { View, Text, Link } from "@react-pdf/renderer";
import { pdfStyles } from "../pdfStyles";
import { Fragment } from "react";

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
  ]
    .filter(Boolean)
    .join(" | ");

  const links = [
    { id: "email", label: "Email" },
    { id: "linkedin", label: "LinkedIn" },
    { id: "github", label: "GitHub" },
    { id: "portfolio", label: "Portfolio" },
  ].filter(link => personal[link.id]?.trim())

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

      <Text style={pdfStyles.contact}>
        {contactInfo}

        {contactInfo && links.length > 0 ? " | " : ""}

        {links.map((link, index) => (
          <Fragment key={link.id}>
            <Link src={personal[link.id]}>
              {link.label}
            </Link>
            {index < links.length - 1 && " | "}
          </Fragment>
        ))}

      </Text>
    </View >
  );
};
