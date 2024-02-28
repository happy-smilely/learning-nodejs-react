import { FunctionComponent, useContext } from "react";
import { IProjectsPageProps } from "../Projects/types/types";
import { ProjectContainer } from "./styles/styled";
import TextSide from "./TextSide";
import ImageSide from "./ImageSide";
import ThemeContext from "../../../context/theme/themeContext";

const ProjectPage: FunctionComponent<IProjectsPageProps> = ({ data, dimensions }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <ProjectContainer dimensions={dimensions} themeState={theme}>
      <ImageSide data={data} themeState={theme} dimensions={dimensions} />
      <TextSide data={data} dimensions={dimensions} themeState={theme} />
    </ProjectContainer>
  );
};

export default ProjectPage;
