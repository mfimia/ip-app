const IpMessage = ({ ipData }) => {
  return (
    <div>
      <p>{ipData.ip}</p>
      <p>{ipData.location?.country}</p>
      <p>{ipData.location?.region}</p>
      <p>{ipData.location?.timezone}</p>
      <p>{ipData.as?.domain}</p>
    </div>
  );
};

export default IpMessage;
