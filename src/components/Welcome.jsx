import { Alert } from "react-bootstrap";

const Welcome = function () {
  return (
    <>
      {["info"].map((variant) => (
        <Alert key={variant} variant={variant} className="m-3">
          Sconto super conveniente fino al primo Giugno 2024!
        </Alert>
      ))}
      <h2 className="text-center my-4">Shop Online</h2>
    </>
  );
};

export default Welcome;
