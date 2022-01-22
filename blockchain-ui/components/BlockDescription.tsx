import moment from 'moment';
import React, { Fragment } from 'react';
import { Descriptions, Table, Typography } from 'antd';
import { DetailedBlock } from '../interfaces/DetailedBlock';
import Link from 'next/link';

const { Item } = Descriptions;
const { Title } = Typography;
const { Column } = Table;

interface BlockDescriptionProps {
  block: DetailedBlock;
  loading?: boolean;
}

const BlockDescription: React.FC<BlockDescriptionProps> = ({ block }) => {
  return (
    <Fragment>
      <Title level={2}>Block {block.height}</Title>

      <Descriptions column={1} contentStyle={{ backgroundColor: '#FFF' }} bordered>
        <Item label="Size">{block.size.toLocaleString()} Bytes</Item>
        <Item label="Index">{block.block_index}</Item>
        <Item label="Time">{moment.utc(block.time).format('HH:mm')}</Item>
        <Item label="Hash">{block.hash}</Item>
        <Item label="Previous hash">{block.prev_block}</Item>
      </Descriptions>

      <Title level={4} style={{ marginTop: '2rem' }}>
        Transactions:
      </Title>

      <Table dataSource={block.tx} rowKey="hash">
        <Column title="Hash" dataIndex="hash" />
        <Column title="Time" dataIndex="time" render={(time) => moment.utc(time).format('HH:mm')} />
        <Column title="Size" dataIndex="size" />
        <Column title="Fee" dataIndex="fee" />
        <Column title="Index" dataIndex="tx_index" />
      </Table>
    </Fragment>
  );
};

export default BlockDescription;
