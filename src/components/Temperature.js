import axios from "axios";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Temperature = ({ floor, id }) => {
  const clientId = process.env.REACT_APP_CLIENT_ID;
  const bridgeIp = process.env.REACT_APP_BRIDGE_IP;

  const [temperature, setTemperature] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      axios.get("http://" + bridgeIp + "/api/" + clientId + "/sensors/" + id).then((response) => {
        console.log("Updating " + floor);
        setTemperature(response.data.state.temperature / 100);
      });
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <motion.div animate={{ scale: 1 }} initial={false} transition={{ duration: 1 }}>
      {temperature} °C
    </motion.div>
  );
};

export default Temperature;
