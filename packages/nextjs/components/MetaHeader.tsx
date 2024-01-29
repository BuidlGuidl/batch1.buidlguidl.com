import React from "react";
import Head from "next/head";

type MetaHeaderProps = {
  title?: string;
  description?: string;
  image?: string;
  twitterCard?: string;
  children?: React.ReactNode;
};

// Images must have an absolute path to work properly on Twitter.
// We try to get it dynamically from Vercel, but we default to relative path.
const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/` : "/";

export const MetaHeader = ({
  title = "Batch#1",
  description = "Built by Buidl Guidl with 🏗 Scaffold-ETH 2!",
  image = "batch1_logo4.png",
  twitterCard = "summary_large_image",
  children,
}: MetaHeaderProps) => {
  const imageUrl = baseUrl + image;

  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {title && (
        <>
          <title>{title}</title>
          <meta property="og:title" content={title} />
          <meta name="twitter:title" content={title} />
        </>
      )}
      {description && (
        <>
          <meta name="description" content={description} />
          <meta property="og:description" content={description} />
          <meta name="twitter:description" content={description} />
        </>
      )}
      {image && (
        <>
          <meta property="og:image" content={imageUrl} />
          <meta property="og:image:height" content="200" />
          <meta property="og:image:width" content="300" />
          <meta name="twitter:image" content={imageUrl} />
        </>
      )}
      {twitterCard && <meta name="twitter:card" content={twitterCard} />}
      <meta property="og:url" content="https://batch1.buidlguidl.com/" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="BuidlGuidl Batch#1" />
      <link rel="icon" type="image/png" sizes="32x32" href="/batch1_logo4.png" />
      {children}
    </Head>
  );
};
