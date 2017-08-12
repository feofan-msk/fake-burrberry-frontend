import React from "react";
import { Helmet } from "react-helmet";
import Header from "./Header";
import Product from "./Product";
import Footer from "./Footer";
import { IntlProvider, addLocaleData } from "react-intl";
import ruLocaleData from "react-intl/locale-data/ru";

addLocaleData(ruLocaleData);

export default () => {
  return (
    <IntlProvider locale="ru">
      <div>
        <Helmet>
          <title>Long Cotton Gabardine Car Coat | Men - Burberry</title>
          <meta
            name="description"
            content="A refined car coat crafted in protective cotton gabardine."
          />
        </Helmet>
        <Header />
        <Product />
        <Footer />
      </div>
    </IntlProvider>
  );
};
