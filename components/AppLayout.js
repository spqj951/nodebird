import PropTypes from "prop-types";
import Link from "next/link";
import { Menu, Input, Row, Col } from "antd";
import React, { useState } from "react";
import styled from "styled-components";
import UserProfile from "../components/UserProfile";
import LoginForm from "../components/LoginForm";

const SearchInput = styled(Input.Search)`
  vertical-align: "middle";
`;
const AppLayout = ({ children }) => {
  const [isLogedIn, setIsLogedIn] = useState(false);
  return (
    <div>
      <div>공통메뉴</div>
      <Menu mode="horizontal">
        <Menu.Item>
          <Link href="/">노드버드</Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/profile">프로필</Link>
        </Menu.Item>
        <Menu.Item>
          <SearchInput enterButton />
        </Menu.Item>
        <Menu.Item>
          <Link href="/signup">회원가입</Link>
        </Menu.Item>
      </Menu>
      <Row gutter={8}>
        {/* //gutter : column사이의 간격 */}
        <Col xs={24} md={6}>
          {isLogedIn ? <UserProfile /> : <LoginForm />}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <a
            href="https://github.com/spqj951"
            target="_blank"
            rel="noreferrer noopener"
          >
            Made By Kyujin
          </a>
          {/* Target = _blank : 새창, rel => 보안 위협 제거 */}
        </Col>
      </Row>
      {children}
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
