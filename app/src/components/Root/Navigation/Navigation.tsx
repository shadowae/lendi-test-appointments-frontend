import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #e7e7e7;
  display: flex;
  font-size: 20px;
  justify-content: space-between;
  padding: 24px 48px;
  box-shadow: 1px 1px 1px #b8b8b8;
  margin-bottom: 48px;
`;

type NavigationProps = {
  currentAppt: { 
    id: number; 
    brokerName: string; 
    date: string, 
    client: string;
    clientRep: string;
    location: string;
  };
}

const Navigation = (props: NavigationProps) => {

  const {currentAppt} = props;

  const renderSelection = () => (
    <strong>
        Currently selected appointment: { currentAppt.date } with { currentAppt.brokerName }
    </strong>
  )
  return (
    <Wrapper>
      {props && props.currentAppt && renderSelection()}
      <strong>Welcome to Lendi</strong>
    </Wrapper>
  );
};

export default Navigation;
