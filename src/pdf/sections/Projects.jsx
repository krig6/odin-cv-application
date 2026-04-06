import { View, Text, Link } from "@react-pdf/renderer";
import { pdfStyles } from "../pdfStyles";

export const Projects = ({ projects }) => {
  return (
    <View>
      <Text style={pdfStyles.sectionHeading}>PROJECTS</Text>

      {projects
        .filter((project) => project.name && project.name.trim() !== "")
        .map((project) => (
          <View key={project.id} style={pdfStyles.itemContainer}>

            <Text style={pdfStyles.subHeading}>
              <Text style={{ fontWeight: "bold" }}>{project.name}</Text>
              {" - "}
              <Text style={{ fontWeight: "normal" }}>{project.techStack}</Text>
            </Text>

            {project.descriptions?.map((desc) => (
              <Text key={desc.id} style={pdfStyles.bodyText}>
                • {desc.text}
              </Text>
            ))}

            <Text style={pdfStyles.bodyText}>
              Live:{" "}
              <Link src={project.live} style={pdfStyles.link}>
                {project.live}
              </Link>{" "}
              Repo:{" "}
              <Link src={project.repo} style={pdfStyles.link}>
                {project.repo}
              </Link>
            </Text>

          </View>
        ))}
    </View >
  );
};
