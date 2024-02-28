import prismicClient from "../../../utils/prismic";
import { useContext, useState, useEffect } from "react";
import ThemeContext from "../../../context/theme/themeContext";

import { onPageView } from "../../../utils/googleAna";

import { FunctionComponent } from "react";
import { IAboutPageProps } from "./types/types";
import { ProjectContainer } from "../Project/styles/styled";

import ImageSide from "../Project/ImageSide";
import AboutTextSide from "./AboutTextSide";
import Loading from "../../Spinners/Spinner";

const ProjectPage: FunctionComponent<IAboutPageProps> = ({ dimensions }) => {
  const { theme } = useContext(ThemeContext);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [aboutData, setAboutData] = useState<any | null>(null);

  const loadAboutData = async () => {
    try {
      const aboutDocument = await prismicClient.getAllByTag("about");
      setAboutData(aboutDocument[0]);
      setIsLoading(false);
    } catch (error: any) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // onPageView("about");
    loadAboutData();
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    <ProjectContainer dimensions={dimensions} themeState={theme}>
      {!isLoading && aboutData ? (
        <>
          <ImageSide data={aboutData} themeState={theme} dimensions={dimensions} />
          <AboutTextSide data={aboutData} dimensions={dimensions} themeState={theme} />
        </>
      ) : null}
    </ProjectContainer>
  );
};

export default ProjectPage;
