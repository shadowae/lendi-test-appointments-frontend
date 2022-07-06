import React from "react";
import styled from "styled-components";

type AppointmentDetailsProps = {
    currentAppt: { 
      id: number; 
      brokerName: string; 
      date: string, 
      client: string;
      clientRep: string;
      location: string;
    };
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const AppointmentDetails = (props: AppointmentDetailsProps) => {
    const {currentAppt} = props;
    return (
        <Wrapper>
          {Object.entries(currentAppt).map(([key, value] = entry) => {
            return (
            <div>
                {key}: {value}
            </div>
            )
          })}
        </Wrapper>
      );
  };
  
  export default AppointmentDetails;
  