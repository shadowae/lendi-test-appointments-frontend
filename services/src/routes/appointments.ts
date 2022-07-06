import { Router } from "express";

const appointments = [
  { id: 1, brokerId: 1, date: "15/10/2021", client:'SAP Enterprise', clientRep: 'Mr Brown', location: '28 Hutsons Road,Melbourne, 2714, Australia' },
  { id: 2, brokerId: 3, date: "22/11/2021", client:'Walgreen Inc', clientRep: 'Mrs Lee', location: '12 Eleventh Avenue,Melbourne, 4719, Australia' },
  { id: 3, brokerId: 3, date: "23/11/2021", client:'Beta Productions', clientRep: 'Mr Dan', location: '26 Oconnell Street,Melbourne, 4363, Australia' },
  { id: 4, brokerId: 4, date: "10/5/2021", client:'Major Motors', clientRep: 'Mr Zac', location: '4 Candlenut Close,Melbourne, 4817, Australia' },
];

const router = Router();

export default router;

router.get("/", (req, res) => {
  res.send(appointments);
});
