import { useEffect, useState } from "react";
import IpButton from "./components/IpButton";
import { apiKey } from "./utils/apiKey";
import IpMessage from "./components/IpMessage";

const App = () => {
  const [ipData, setIpData] = useState({});
  const [open, setOpen] = useState(false);

  const toggleOpen = () => setOpen((prev) => !prev);

  const getData = async () => {
    const response = await fetch(
      `https://geo.ipify.org/api/v2/country?apiKey=${apiKey}`
    );
    const data = await response.json();
    setIpData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <IpButton toggleOpen={toggleOpen} />
      {open ? <IpMessage ipData={ipData} /> : null}
    </div>
  );
};

export default App;
