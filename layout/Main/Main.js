/**
 * The layout/Main/Main.js is included as an example on how to make a global layout for your nextjs project
 * it is installed with MUI, if you unintsall material, replace the container and box components
 * with relative counterparts in whatever design system you chose.
 */

import * as React from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';

import Head from 'next/head';

const Main = ({ children }) => {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>
      <div>
        <div>
          <Header />
        </div>
      </div>
      <div>{children}</div>
      <div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Main;
