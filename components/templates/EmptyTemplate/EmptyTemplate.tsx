import Head from "next/head";
import type { CommonProps } from "../../../lib/cms";
import BodyContentLayout from "../../atoms/BodyContentLayout";
import BodyLayout from "../../atoms/BodyLayout";
import MainLayout from "../../atoms/MainLayout";
import PreviewBar from "../../atoms/PreviewBar";
import NavBar from "../../organisms/NavBar";

type EmptyTemplateProps = CommonProps;

export default function EmptyTemplate({
  isPreview,
  siteMetainfo,
  pageMetainfo,
}: EmptyTemplateProps): JSX.Element {
  return (
    <>
      <Head>
        <title>{pageMetainfo.seo.title}</title>
        <meta name="description" content={pageMetainfo.seo.description} />
      </Head>
      <MainLayout>
        {isPreview && <PreviewBar />}
        <BodyLayout>
          <NavBar
            title={siteMetainfo.headerTitle}
            subtitle={siteMetainfo.headerSubtitle}
            selected="Tutorials"
          />
          <BodyContentLayout>When the time is right.</BodyContentLayout>
        </BodyLayout>
      </MainLayout>
    </>
  );
}
