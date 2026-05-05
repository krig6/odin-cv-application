import { StyleSheet, Font } from "@react-pdf/renderer";

Font.register({
  family: "EB Garamond",
  fonts: [
    {
      src: `${import.meta.env.BASE_URL}font/EBGaramond-Bold.ttf`,
      fontWeight: "bold",
    },
    {
      src: `${import.meta.env.BASE_URL}font/EBGaramond-Regular.ttf`,
      fontWeight: "normal",
    },
  ],
});

Font.registerHyphenationCallback((word) => [word]);

export const pdfStyles = StyleSheet.create({
  page: {
    padding: 48,
    backgroundColor: "#FFFFFF",
    fontFamily: "EB Garamond",
    fontSize: 11,
    lineHeight: 1.4,
    gap: 12,
  },

  personalSection: {
    textAlign: "center",
  },

  personalName: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
  },

  jobTarget: {
    fontWeight: "bold",
    marginBottom: 6,
  },

  contact: {
    fontSize: 10,
  },

  sectionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 6,
  },

  boldText: {
    fontWeight: "bold",
  },

  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  link: {
    color: "#1a0dab",
    textDecoration: "underline",
  },

  projectLinksRow: {
    flexDirection: "row",
    gap: 12,
  },

  sectionDivider: {
    height: 1.5,
    backgroundColor: "#000",
    marginBottom: 2,
    width: "100%",
  }
});

