import Head from "next/head";
import ThemeShowcase from "../components/atoms/ThemeShowcase";

export default function IndexPage(): JSX.Element {
  return (
    <>
      <Head>
        <title>Ljung 🌺</title>
        <meta name="description" content="Game Developer" />
      </Head>
      <ThemeShowcase />
    </>
  );
}
