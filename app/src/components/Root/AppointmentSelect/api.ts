const getAppointment = async () => {
    const response = await fetch('http://localhost:8080/appointments');
    return response.json();
};

const getBroker = async () => {
    const response = await fetch('http://localhost:8080/brokers');
    return response.json();
}

export {
    getAppointment,
    getBroker
}