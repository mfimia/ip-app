import Button from "react-bootstrap/Button";

const IpButton = ({ toggleOpen, open }) => {
  const handleClick = () => toggleOpen();
  return (
    <Button onClick={handleClick} variant="outline-info">
      {open ? "Hide" : "Show"} my IP
    </Button>
  );
};

export default IpButton;
