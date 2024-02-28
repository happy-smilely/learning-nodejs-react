import prismicClient from "../../../utils/prismic";
import { useContext, useState, useEffect } from "react";
import ThemeContext from "../../../context/theme/themeContext";

import { onPageView } from "../../../utils/googleAna";

import { FunctionComponent } from "react";
import { ProjectContainer } from "../Project/styles/styled";

import Loading from "../../Spinners/Spinner";
import { IThemeState } from "../../../context/theme/types";

import { MessageContainer, Title, SubTitle, Text } from "./styles/styled";

interface IFirstProps {
  themeState: IThemeState;
  dimensions: { width: number; height: number };
}

const FirstPage: FunctionComponent<IFirstProps> = ({ dimensions }) => {
  const { theme } = useContext(ThemeContext);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [aboutData, setAboutData] = useState<any | null>(null);

  const loadAboutData = async () => {
    try {
      const aboutDocument = await prismicClient.getAllByTag("first");
      setAboutData(aboutDocument[0]);
      setTimeout(() => {
        setIsLoading(false);
      }, 200);
    } catch (error: any) {
      // When true it will never load (become not null);
      setIsLoading(true);
    }
  };

  useEffect(() => {
    // onPageView("about");
    loadAboutData();
  }, []);

  return !isLoading ? (
    <MessageContainer>
      <SubTitle>{aboutData.data.project_name[0].text}</SubTitle>

      {aboutData.data.description.map((p: any) => {
        return <Text key={p.text}>{p.text}</Text>;
      })}
    </MessageContainer>
  ) : null;
};

export default FirstPage;
