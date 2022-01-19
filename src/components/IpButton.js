import Button from "react-bootstrap/Button";

const IpButton = ({ toggleOpen }) => {
  const handleClick = () => toggleOpen();

  return (
    <Button onClick={handleClick} variant="outline-primary">
      Show my IP
    </Button>
  );
};

export default IpButton;
