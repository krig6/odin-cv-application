import { StyleSheet, Font } from "@react-pdf/renderer";

Font.register({
  family: "EB Garamond",
  fonts: [
    { src: "../../public/font/EBGaramond-Bold.ttf", fontWeight: "bold" },
    { src: "../../public/font/EBGaramond-Regular.ttf", fontWeight: "normal" },
  ],
});

export const pdfStyles = StyleSheet.create({
  page: {
    padding: 36,
    backgroundColor: "#FFFFFF",
    fontFamily: "EB Garamond",
    fontSize: 11,
    lineHeight: 1.3,
  },

  name: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 12,
  },

  jobTarget: {
    fontSize: 11,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 6,
  },

  sectionHeading: {
    fontSize: 14,
    fontWeight: "bold",
    marginVertical: 8,
  },

  subHeading: {
    fontSize: 12,
    fontWeight: "bold",
  },

  bodyText: {
    fontSize: 11,
    lineHeight: 1.4,
  },

  metaText: {
    fontSize: 10,
    lineHeight: 1.2,
    textAlign: "center"
  },

  itemContainer: {
    marginBottom: 6,
  },

  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  link: {
    fontSize: 11,
    color: "#1a0dab",
    textDecoration: "underline",
  },
});
