import { FunctionComponent } from "react";
import { IMediaAreaProps } from "./types/types";
import YoutubeEmbed from "./Youtube";
import { MediaAreaContainer } from "./styles/styled";

const MediaArea: FunctionComponent<IMediaAreaProps> = ({ data, themeState, dimensions }) => {
  return (
    <MediaAreaContainer dimensions={dimensions} themeState={themeState}>
      <YoutubeEmbed id={data.data.youtube} themeState={themeState} dimensions={dimensions} />
    </MediaAreaContainer>
  );
};

export default MediaArea;
