import prismicClient from "../../../utils/prismic";
import { FunctionComponent, useEffect, useState } from "react";
import { Container } from "../Projects/styles/styled";
import { onPageView } from "../../../utils/googleAna";
import { EPageNames, EWindowTypes } from "../../../interfaces/types";
import Icon from "../../Icons/Index";
import Loading from "../../Spinners/Spinner";

interface IPropsImagePage {
  data: any;
}

const ImagesPage: FunctionComponent<IPropsImagePage> = ({ data }) => {
  const [selectedIcon, setSelectedIcon] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [projects, setProjects] = useState<any | null>(null);

  const getAndSetProjects = async () => {
    try {
      const prismicDocs = await prismicClient.getAllByTag("3d");
      setProjects(prismicDocs);
      setIsLoading(false);
    } catch (error: any) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    // onPageView("3D");
    getAndSetProjects();
  }, []);

  return (
    <Container>
      {isLoading ? <Loading /> : null}
      {projects
        ? projects.map((image: any, ind: number) => {
            return (
              <Icon
                key={image.data.name[0].text}
                isProject={true}
                data={image}
                text={image.data.name[0].text}
                pageName={EPageNames.image}
                windowType={EWindowTypes.noSidebar}
                aniDelay={0.2 * ind}
                isWeb={null}
                selectedIcon={selectedIcon}
                setSelectedIcon={setSelectedIcon}
              />
            );
          })
        : null}
    </Container>
  );
};

export default ImagesPage;
