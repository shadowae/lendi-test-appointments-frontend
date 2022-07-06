import { useEffect, useLayoutEffect, useState } from "react";
import styled from "styled-components";
import Broker from "./Broker";
import AppointmentDetails from "./AppointmentDetails";
import { getAppointment, getBroker } from "./api";

const Wrapper = styled.div`
  display: flex;
`;

const SideBar = styled.div`
  width: 250px;
`;

const Heading = styled.strong.attrs({ role: "heading", level: 2 })`
  display: block;
  font-size: 20px;
`;

type AppointmentSelectProps = {
  currentAppt: { 
    id: number; 
    brokerName: string; 
    date: string, 
    client: string;
    clientRep: string;
    location: string;
  };
  setCurrentAppt(): void;
}

type BrokerAppointments = {
  id: number;
  name: string;
  appointments: { id: number; brokerId: number; date: string, client: string, clientRep: string, location: string }[];
}[];

const AppointmentSelect = (props: AppointmentSelectProps) => {
  const [brokerAppointments, setBrokerAppointments] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const appts = await getAppointment();
      const brokers = await getBroker();

      const processedBroker = brokers.map((broker: { id: any; }) => {
        const res = appts.filter((appt: { brokerId: any; }) => appt.brokerId === broker.id)
        return {...broker, appointments: res}
      })
      setBrokerAppointments(processedBroker);
    }
    fetchData();
  },[]);
  
  const renderList = () => {
    if(brokerAppointments !== undefined) {
      return (
        <ul>
              {brokerAppointments.map((broker: BrokerAppointments) => (
                <Broker key={broker.id} broker={broker} currentAppt={props.currentAppt} onSelect={props.setCurrentAppt}/>
              ))}
        </ul>
      )
    }
  };

  const renderApptDetails = () => (
  <div>
    <Heading>Appointment details</Heading>
    <AppointmentDetails currentAppt={props.currentAppt}/>
  </div>
  )
  
  return (
    <Wrapper>
      <SideBar>
        <Heading>Amazing site</Heading>
        {renderList()}
      </SideBar>
      {props.currentAppt && renderApptDetails()}
    </Wrapper>
  );
};

export default AppointmentSelect;
