import React from 'react';
import Head from 'next/head';
import Script from 'next/script';

const IndexPage = () => {
  return (
    <div>
      <div>
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
        <meta property='og:image' content='pexels-andrew-neel-15863044.jpg' />
        <meta name='twitter:image' content='pexels-andrew-neel-15863044.jpg' />
        <meta name='description' content='免費ChatGPT工具' />
        <meta name='twitter:description' content='免費ChatGPT工具' />
        <meta name='twitter:title' content='免費ChatGPT工具' />
        <meta name='twitter:card' content='summary_large_image' />
        <title>免費ChatGPT工具</title>
        <Script
          type='module'
          crossOrigin='anonymous'
          src='./dist/assets/index-c19a1a20.js'
        />
        <link rel='stylesheet' href='./dist/assets/index-0c0990c7.css' />
        <Script
          async
          src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9272842344184040'
          crossOrigin='anonymous'
        />
      </div>
      <div>
        <div id='root'></div>
        <div id='modal-root'></div>
      </div>
    </div>
  );
};

export default IndexPage;
