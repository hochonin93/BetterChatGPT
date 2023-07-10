import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import { NextSeo } from 'next-seo';

const IndexPage = () => {
  return (
    <div>
      <NextSeo
        title='免費ChatGPT工具'
        description='免費ChatGPT工具'
        openGraph={{
          title: '免費ChatGPT工具',
          description: '免費ChatGPT工具',
          images: [
            {
              url: '/pexels-andrew-neel-15863044.jpg',
            },
          ],
        }}
        link={[
          {
            rel: 'icon',
            href: '/favicon-32x32.png',
          },
        ]}
      />
      <meta charSet='UTF-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href='apple-touch-icon.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href='favicon-32x32.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='16x16'
        href='favicon-16x16.png'
      />
      <Script
        type='module'
        crossOrigin='anonymous'
        src='./dist/assets/index-c19a1a20.js'
      />

      <Script
        async
        src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9272842344184040'
        crossOrigin='anonymous'
      />
      <link rel='stylesheet' href='./dist/assets/index-0c0990c7.css' />
      <div>
        <div id='root'></div>
        <div id='modal-root'></div>
      </div>
    </div>
  );
};

export default IndexPage;
