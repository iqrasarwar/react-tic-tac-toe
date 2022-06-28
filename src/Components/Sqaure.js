import React from "react";

const styles = {
  border: "2px solid GREEN",
  background: "#95f092",
  color: "RED",
  fontFamily: "Verdana",
  width: "100px",
  height: "100px",
  textAlign: "center",
  fontSize: "60px",
  lineHeight: "100px",
};
const Sqaure = ({ value, onClick }) => {
  return (
    <div style={styles} onClick={onClick}>
      {value}
    </div>
  );
};

export default Sqaure;
