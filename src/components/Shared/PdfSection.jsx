import { View, Text, Link } from "@react-pdf/renderer";
import { pdfStyles } from "../../pdf/pdfStyles";
import { useCvStore } from "../../store/CvStore";

export const PdfSection = ({ config }) => {
  const items = useCvStore(state => state[config.storeKey]);

  return (
    <View>

      {items.length > 0 && (
        <Text style={pdfStyles.sectionHeading}>
          {config.title}
        </Text>
      )}

      {items
        .filter(item => item[config.primary] && item[config.primary].trim() !== "")
        .map(item => (
          <View key={item.id} style={pdfStyles.itemContainer}>

            <View style={{ flexDirection: "row", width: "100%" }}>
              <Text style={{ fontWeight: "bold" }}>
                {config.prefix && item[config.prefix]}
                {config.prefix &&
                  item[config.prefix] &&
                  item[config.primary] &&
                  ", "}
                {item[config.primary]}
              </Text>

              {config.secondary && (
                <Text style={{ marginLeft: "auto" }}>
                  {item[config.secondary]}
                </Text>
              )}
            </View>

            {config.tertiary && (
              <Text>
                {item[config.tertiary]}
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

            {config.footerFields && (
              <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                {config.footerFields.map(field => (
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
