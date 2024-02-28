import { FunctionComponent } from "react";
import { IconLetterLogo } from "./styles/styled";
import { IIconSquareProps } from "./types/interfaces";
import { EPageNames } from "../../interfaces/types";
import {
  IconSquare,
  GitSVG,
  TwitterSVG,
  BlogSVG,
  AboutSVG,
  ProjectsSVG,
  ContactSVG,
  LinkedInSVG,
  ThreeDeeSVG,
  OverayDiv,
  AboutImage,
  GitImage,
  ContactImage,
  LinkedInImage,
} from "./styles/styled";

const onMouseMoveHandler = (e: React.MouseEvent) => {
  const container: HTMLElement | null = (e.target as HTMLElement).closest('.container') as HTMLElement;
  const overlay: HTMLElement | null = container?.querySelector('.overlay') as HTMLElement;

  if (!container || !overlay) {
    return;
  }

  const x: number = e.nativeEvent.offsetX;
  const y: number = e.nativeEvent.offsetY;
  const rotateY: number = (-1 / 8) * x + 20;
  const rotateX: number = (4 / 30) * y - 20;

  overlay.style.backgroundPosition = `${x / 5 + y / 5}%`;
  overlay.style.filter = `opacity(${x / 200}) brightness(1.2)`;

  container.style.transform = `perspective(350px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
};

const onMouseOutHandler = (e: React.MouseEvent) => {
  const container: HTMLElement | null = (e.target as HTMLElement).closest('.container') as HTMLElement;
  const overlay: HTMLElement | null = container?.querySelector('.overlay') as HTMLElement;

  if (overlay) {
    overlay.style.filter = 'opacity(0)';
  }
  if (container) {
    container.style.transform = 'perspective(350px) rotateY(0deg) rotateX(0deg)';
  }
};

const IconSquareMain: FunctionComponent<IIconSquareProps> = ({ name, label, themeState, isProject }) => {
  return !isProject ? (
    <IconSquare themeState={themeState} className="container" onMouseMove={onMouseMoveHandler} onMouseOut={onMouseOutHandler}>
      {<OverayDiv className="overlay"/>}
      {label === EPageNames.github ? <GitImage className="card" themeState={themeState} src="./github-mark.png"/> : null}
      {label === EPageNames.about ? <AboutImage className="card" themeState={themeState} src="./증명사진20220720.jpg"/> : null}
      {label === EPageNames.contact ? <ContactImage className="card" themeState={themeState} src="./Iynque-Ios7-Style-Mail.512.png"/> : null}
      {label === EPageNames.linkedin ? <LinkedInImage className="card" themeState={themeState} src="./LI-In-Bug.png"/> : null}
    </IconSquare>
    // <IconSquare themeState={themeState}>
    //   {label === EPageNames.github ? <GitSVG themeState={themeState} /> : null}
    //   {label === EPageNames.twitter ? <TwitterSVG themeState={themeState} /> : null}
    //   {label === EPageNames.blog ? <BlogSVG themeState={themeState} /> : null}
    //   {label === EPageNames.about ? <AboutSVG themeState={themeState} /> : null}
    //   {label === EPageNames.projects ? <ProjectsSVG themeState={themeState} /> : null}
    //   {label === EPageNames.contact ? <ContactSVG themeState={themeState} /> : null}
    //   {label === EPageNames.linkedin ? <LinkedInSVG themeState={themeState} /> : null}
    //   {label === EPageNames.threedee ? <ThreeDeeSVG themeState={themeState} /> : null}
    // </IconSquare>
  ) : (
    <IconSquare themeState={themeState}>
      <IconLetterLogo themeState={themeState}>{name.slice(0, 1).toUpperCase()}</IconLetterLogo>
    </IconSquare>
  );
};

export default IconSquareMain;
