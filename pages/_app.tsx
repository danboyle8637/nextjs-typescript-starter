import { AppProps } from "next/app";

import { Layout } from "../src/Layouts/BaseLayout";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default MyApp;
