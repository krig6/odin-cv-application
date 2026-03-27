import { View, Text } from "@react-pdf/renderer";

export const Projects = ({ projects }) => {
  return (
    <View>
      <Text>PROJECTS</Text>

      {projects
        .filter((project) => project.name && project.name.trim() !== "")
        .map((project) => (
          <View key={project.id}>

            <Text>
              {project.name} - {project.techStack}
            </Text>

            {project.descriptions?.map((desc) => (
              <Text key={desc.id}>
                • {desc.text}
              </Text>
            ))}

            <View>
              <Text>Live: {project.live} Repo: {project.repo}</Text>
            </View>

          </View>
        ))}
    </View>
  );
};
