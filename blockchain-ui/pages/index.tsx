import { GetServerSideProps } from 'next';
import React, { Fragment } from 'react';
import Head from 'next/head';
import { Col, Row, Typography } from 'antd';

import apolloClient from '../libs/apollo-client';
import { GET_BLOCKS } from '../queries/blocks';
import { SimpleBlock } from '../interfaces/SimpleBlock';
import BlocksTable from '../components/BlocksTable';

const { Title } = Typography;

interface IndexProps {
  blocks: SimpleBlock[];
}

const Home: React.FC<IndexProps> = ({ blocks }) => {
  return (
    <Fragment>
      <Head>
        <title>Latest blocks</title>
      </Head>

      <Row>
        <Col span={24}>
          <Title level={2}>Latest blocks</Title>
          <BlocksTable blocks={blocks} />
        </Col>
      </Row>
    </Fragment>
  );
};

export const getServerSideProps: GetServerSideProps<IndexProps> = async () => {
  const { data } = await apolloClient.query({
    query: GET_BLOCKS,
    variables: {
      date: new Date().setHours(0, 0, 0, 0),
    },
  });

  return {
    props: { blocks: data.blocks },
  };
};

export default Home;
