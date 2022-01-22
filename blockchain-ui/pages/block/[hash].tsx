import { GetServerSideProps } from 'next';
import React, { Fragment } from 'react';
import { Col, Row } from 'antd';
import Head from 'next/head';

import apolloClient from '../../libs/apollo-client';
import { GET_BLOCK } from '../../queries/blocks';
import { DetailedBlock } from '../../interfaces/DetailedBlock';
import BlockDescription from '../../components/BlockDescription';

interface BlockProps {
  block: DetailedBlock;
}

const Block: React.FC<BlockProps> = ({ block }) => {
  return (
    <Fragment>
      <Head>
        <title>Blocks history</title>
      </Head>

      <Row>
        <Col span={24}>
          <BlockDescription block={block} />
        </Col>
      </Row>
    </Fragment>
  );
};

export const getServerSideProps: GetServerSideProps<BlockProps> = async ({ params }) => {
  const { data } = await apolloClient.query({
    query: GET_BLOCK,
    variables: {
      hash: params?.hash,
    },
  });

  return {
    props: { block: data.block },
  };
};

export default Block;
