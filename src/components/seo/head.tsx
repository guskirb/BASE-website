import { Helmet, HelmetData } from "react-helmet-async";

interface HeadProps {
  title?: string;
  desc?: string;
}

const helmetData = new HelmetData({});

export const Head = ({ title = "", desc = "" }: HeadProps) => {
  return (
    <Helmet helmetData={helmetData} title={title ? `${title}` : undefined}>
      <meta name="description" content={desc} />
    </Helmet>
  );
};
