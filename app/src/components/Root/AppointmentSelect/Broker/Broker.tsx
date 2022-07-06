import React, {useState} from "react";

export interface BrokerProps {
  key: number,
  broker: {
    name: string;
    id: number;
    appointments: { id: number; brokerId: number; date: string }[];
  };
  onSelect(arg0: any): void;
  currentAppt: { 
    id: number; 
    brokerName: string; 
    date: string, 
    client: string;
    clientRep: string;
    location: string;
  };
}

const Broker = (brokerData: BrokerProps) => {
  const [showAppt, setShowAppt] = useState(false);

  const { broker, onSelect, currentAppt } = brokerData;
  
  const onClick = (appt: any) => {
    if(currentAppt && appt.id === currentAppt.id) {
      onSelect(undefined)
    } else {
      onSelect({ 
        id: appt.id,
        brokerName: broker.name,
        date: appt.date,
        client: appt.client, 
        clientRep: appt.clientRep, 
        location: appt.location 
      })
    }    
  }

  const renderApptList = () => {
    return broker.appointments.map(appt => (
      <li onClick={() => onClick(appt)}>{appt.date}</li>
    ))
  }

  const renderAppt = () => {
    return (
      <>
        <button onClick={() => setShowAppt(!showAppt)}>
          {showAppt ? 'Show appointments' : 'Hide appointments'}
        </button>
        <div hidden={showAppt}>
          <ul>
            {renderApptList()}
          </ul>
        </div>
      </>
      
    )
  }
  return (
    <li>
      {broker.name}'s appointments:
      <br />
      {broker.appointments.length > 0 ? renderAppt() : 'No appointments available'}
    </li>
  );
};

export default Broker;
