import ReactGA from "react-ga";
export const TRACKING_ID = "UA-175968470-1";
ReactGA.initialize(TRACKING_ID);

export const onHomePageView = () => {
  ReactGA.pageview(window.location.pathname + window.location.search);
};

export const onPageView = (pagename: string) => {
  ReactGA.pageview(`/${pagename}`);
};
