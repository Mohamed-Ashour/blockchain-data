import { GetServerSideProps } from 'next';
import React, { Fragment, useState } from 'react';
import Head from 'next/head';
import { Col, Row, Typography, DatePicker } from 'antd';
import moment, { Moment } from 'moment';

import apolloClient from '../../libs/apollo-client';
import { GET_BLOCKS } from '../../queries/blocks';
import { SimpleBlock } from '../../interfaces/SimpleBlock';
import BlocksTable from '../../components/BlocksTable';
import styles from '../../styles/Blocks.module.css';

const { Title } = Typography;

interface BlocksProps {
  blocks: SimpleBlock[];
}

const getBlocksByDate = async (date: Moment) => {
  const { data } = await apolloClient.query({
    query: GET_BLOCKS,
    variables: {
      date,
    },
  });

  return data.blocks;
};

const Home: React.FC<BlocksProps> = ({ blocks: initialBlocks }) => {
  const [blocks, setBlocks] = useState(initialBlocks);
  const [loading, setLoading] = useState(false);

  const onChange = async (date: Moment | null) => {
    setLoading(true);
    const blocks = await getBlocksByDate(date as Moment);
    setBlocks(blocks);
    setLoading(false);
  };

  return (
    <Fragment>
      <Head>
        <title>Blocks History</title>
      </Head>
      <Row>
        <Col span={12}>
          <Title level={2}>Blocks History:</Title>
        </Col>
        <Col span={12} className={styles.datePickerContainer}>
          <DatePicker onChange={onChange} disabledDate={(date) => date.isAfter(moment())} />
        </Col>
      </Row>

      <Row>
        <Col span={24}>
          <BlocksTable blocks={blocks} loading={loading} />
        </Col>
      </Row>
    </Fragment>
  );
};

export const getServerSideProps: GetServerSideProps<BlocksProps> = async ({ params }) => {
  const blocks = await getBlocksByDate(moment(Number(params?.date)));

  return {
    props: { blocks },
  };
};

export default Home;
