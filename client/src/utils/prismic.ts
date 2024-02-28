import * as prismic from "@prismicio/client";

// const endpoint = prismic.getEndpoint("mooblyportfolio");
// const accessToken =
//   "MC5ZZ3M0TmhFQUFDd0FpY0hy.77-977-9bu-_vRnvv70ZZQHvv73vv73vv70IXWTvv73vv71F77-9G3bvv73vv71877-977-977-977-9eT7vv70W";

  const endpoint = prismic.getEndpoint("happysmilelyportfolio");
  const accessToken =
    "MC5aZDJMYlJFQUFCOEFieHRS.DWnvv71t77-9Oj0R77-9Hu-_ve-_ve-_ve-_ve-_vWLvv73vv70GV--_ve-_vTE-77-9e--_ve-_vXEi77-977-9";
  
const prismicClient = prismic.createClient(endpoint, { accessToken });

export default prismicClient;
