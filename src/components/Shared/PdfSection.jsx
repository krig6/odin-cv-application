import { View, Text, Link } from "@react-pdf/renderer";
import { pdfStyles } from "../../pdf/pdfStyles";
import { useCvStore } from "../../store/CvStore";

export const PdfSection = ({ config }) => {
  const items = useCvStore(state => state[config.storeKey]);
  const isProjects = config.secondary === "techStack"

  if (!items || items.length === 0) return null;

  return (
    <View>
      <Text style={pdfStyles.sectionHeading}>
        {config.title}
      </Text>

      <View
        style={pdfStyles.sectionDivider}
      />

      {items
        .filter(item => item[config.primary] && item[config.primary].trim() !== "")
        .map(item => (
          <View key={item.id} style={pdfStyles.itemContainer}>

            <View style={pdfStyles.rowBetween}>
              <Text style={pdfStyles.bodyText}>
                <Text style={pdfStyles.subHeading}>
                  {config.prefix && item[config.prefix]}
                </Text>

                {config.prefix &&
                  item[config.prefix] &&
                  item[config.primary] &&
                  ", "}

                <Text style={pdfStyles.subHeading}>
                  {item[config.primary]}
                </Text>
              </Text>

              {config.secondary && (
                <Text style={pdfStyles.metaText}>
                  {item[config.secondary]}
                </Text>
              )}
            </View>

            {config.tertiary && item[config.tertiary] && (
              <Text style={pdfStyles.bodyText}>
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

            {config.fields && isProjects && (
              <View style={pdfStyles.projectLinksRow}>
                {config.fields.map(field => {
                  if (field.key === "techStack") return

                  return (
                    <Text key={field.key}>
                      <Link src={item[field.key]} style={pdfStyles.link}>
                        {field.label}
                      </Link>
                    </Text>
                  )
                })}
              </View>
            )}

          </View>
        ))}
    </View>
  );
};
