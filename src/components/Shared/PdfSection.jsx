import { View, Text, Link } from "@react-pdf/renderer";
import { pdfStyles } from "../../pdf/pdfStyles";
import { useCvStore } from "../../store/CvStore";

export const PdfSection = ({ pdfConfig }) => {
  const items = useCvStore(state => state[pdfConfig.storeKey]);

  return (
    <View>

      {items.length > 0 && (
        <Text style={pdfStyles.sectionHeading}>
          {pdfConfig.title}
        </Text>
      )}

      {items
        .filter(item => item[pdfConfig.primary] && item[pdfConfig.primary].trim() !== "")
        .map(item => (
          <View key={item.id} style={pdfStyles.itemContainer}>

            <View style={{ flexDirection: "row", width: "100%" }}>
              <Text style={{ fontWeight: "bold" }}>
                {pdfConfig.prefix && item[pdfConfig.prefix]}
                {pdfConfig.prefix &&
                  item[pdfConfig.prefix] &&
                  item[pdfConfig.primary] &&
                  ", "}
                {item[pdfConfig.primary]}
              </Text>

              {pdfConfig.secondary && (
                <Text style={{ marginLeft: "auto" }}>
                  {item[pdfConfig.secondary]}
                </Text>
              )}
            </View>

            {pdfConfig.tertiary && (
              <Text>
                {item[pdfConfig.tertiary]}
              </Text>
            )}

            {item.descriptions?.length > 0 && (
              <View>
                {item.descriptions.map(desc => (
                  <Text key={desc.id} style={pdfStyles.bodyText}>
                    • {desc.text}
                  </Text>
                ))}
              </View>
            )}

            {pdfConfig.footerFields && (
              <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                {pdfConfig.footerFields.map(field => (
                  <Text key={field.key} style={{ marginRight: 6 }}>
                    {field.label}:{" "}
                    <Link src={field.key} style={pdfStyles.link}>
                      {item[field.key]}
                    </Link>
                  </Text>
                ))}
              </View>
            )}

          </View>
        ))}
    </View>
  );
};
