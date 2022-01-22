import Head from 'next/head';
import React, { Fragment } from 'react';
import styles from '../styles/Layout.module.css';
import { Layout as AntLayout } from 'antd';
import { NavBar } from './NavBar';

const { Header, Content } = AntLayout;

export const Layout: React.FC = ({ children }) => {
  return (
    <Fragment>
      <Head>
        <title>Blockchain</title>
        <meta name="description" content="blockchain data" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AntLayout>
        <Header>
          <NavBar />
        </Header>
        <Content className={styles.container}>
            {children}
        </Content>
      </AntLayout>
    </Fragment>
  );
};
