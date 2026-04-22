import { View, Text, Link } from "@react-pdf/renderer";
import { useCvStore } from "../../store/cvStore";
import { pdfStyles } from "../../pdf/pdfStyles";

export const PdfSection = ({ config }) => {
  const items = useCvStore(state => state[config.storeKey]);
  const isProjects = config.secondary === "techStack"

  if (!items || items.length === 0) return null;

  return (
    <View>
      <Text style={pdfStyles.sectionTitle}>
        {config.title}
      </Text>

      <View
        style={pdfStyles.sectionDivider}
      />

      {items
        .filter(item => item[config.primary] && item[config.primary].trim() !== "")
        .map(item => (
          <View key={item.id}>

            <View style={pdfStyles.headerRow}>
              <Text style={pdfStyles.boldText}>
                <Text>
                  {config.prefix && item[config.prefix]}
                </Text>

                {config.prefix &&
                  item[config.prefix] &&
                  item[config.primary] &&
                  " , "}

                <Text>
                  {item[config.primary]}
                </Text>
              </Text>

              {config.secondary && (
                <Text>
                  {item[config.secondary]}
                </Text>
              )}
            </View>

            {config.tertiary && item[config.tertiary] && (
              <Text>
                {item[config.tertiary]}
              </Text>
            )}

            {item.descriptions?.length > 0 && (
              <View>
                {item.descriptions.map(desc => (
                  <Text key={desc.id}>
                    •   {desc.text}
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
