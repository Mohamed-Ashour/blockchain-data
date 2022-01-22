import React from 'react';
import { Menu } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';
const { Item } = Menu;

export const NavBar: React.FC = () => {
  const router = useRouter();
  const todayDate = new Date().setHours(0, 0, 0, 0);

  return (
    <Menu theme="dark" mode="horizontal" selectedKeys={[router.pathname]}>
      <Item key="/">
        <Link href={`/`}>Home</Link>
      </Item>
      <Item key="/blocks/[date]">
        <Link href={`/blocks/${todayDate}`}>Blocks history</Link>
      </Item>
    </Menu>
  );
};
