//score component for tic tac toe
const styles = {
  color: "green",
  fontSize: "20px",
  fontWeight: "bold",
  textAlign: "center",
  marginRight: "5%",
  marginBlock: "20px",
};
const ss = {
  color: "red",
};
const Score = ({ winner }) => {
  return (
    <div style={styles}>
      Winner is <span style={ss}>{winner ? winner : "To Be Decided"}</span>
    </div>
  );
};

export default Score;
