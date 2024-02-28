import prismicClient from "../../../utils/prismic";
import { FunctionComponent, useEffect, useState } from "react";
import { Container } from "./styles/styled";
import { IProjectsPageProps } from "./types/types";

import { onPageView } from "../../../utils/googleAna";

import { EPageNames, EWindowTypes } from "../../../interfaces/types";
import Icon from "../../Icons/Index";
import Loading from "../../Spinners/Spinner";

const ProjectsPage: FunctionComponent<IProjectsPageProps> = ({ data }) => {
  const [selectedIcon, setSelectedIcon] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [projects, setProjects] = useState<any | null>(null);

  const getAndSetProjects = async () => {
    try {
      const prismicDocs = await prismicClient.getAllByTag("projects");
      setProjects(prismicDocs);
      setIsLoading(false);
    } catch (error: any) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    // onPageView("projects");
    getAndSetProjects();
  }, []);

  return (
    <Container>
      {isLoading ? <Loading /> : null}
      {projects
        ? projects.map((project: any, ind: number) => {
            return (
              <Icon
                key={project.data.project_name[0].text}
                isProject={true}
                data={project}
                text={project.data.project_name[0].text}
                pageName={EPageNames.project}
                windowType={EWindowTypes.noSidebar}
                aniDelay={0.2 * ind}
                isWeb={null}
                selectedIcon={selectedIcon}
                setSelectedIcon={setSelectedIcon}
              />
            );
          })
        : null}
      <Icon
        key={"github"}
        isProject={true}
        data={null}
        text={"github"}
        pageName={EPageNames.github}
        windowType={EWindowTypes.noSidebar}
        aniDelay={1.5}
        isWeb={"https://github.com/happy-smilely/"}
        selectedIcon={selectedIcon}
        setSelectedIcon={setSelectedIcon}
      />
    </Container>
  );
};

export default ProjectsPage;
