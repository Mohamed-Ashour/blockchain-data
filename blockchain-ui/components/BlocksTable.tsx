import moment from 'moment';
import React from 'react';
import Link from 'next/link';
import { Table } from 'antd';
const { Column } = Table;

import { SimpleBlock } from '../interfaces/SimpleBlock';

interface BlocksTableProps {
  blocks: SimpleBlock[];
  loading?: boolean;
}

const BlocksTable: React.FC<BlocksTableProps> = ({ blocks, loading = false }) => {
  return (
    <Table dataSource={blocks} rowKey="hash" loading={loading} bordered>
      <Column
        title="Hash"
        dataIndex="hash"
        key="hash"
        render={(hash) => <Link href={`/block/${hash}`}>{hash}</Link>}
      />
      <Column
        title="Time"
        dataIndex="time"
        key="time"
        render={(time) => moment.utc(time).format('HH:mm')}
      />
      <Column title="Height" dataIndex="height" key="height" />
    </Table>
  );
};

export default BlocksTable;
