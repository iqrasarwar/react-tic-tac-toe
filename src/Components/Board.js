import Sqaure from "./Sqaure";

const styles = {
  display: "flex",
  flexDirection: "row",
  width: "30.5%",
  flexWrap: "wrap",
  margin: "auto",
  alignItems: "center",
};
const styleh = {
  color: "red",
  fontSize: "30px",
  fontWeight: "bold",
  marginLeft: "40%",
  marginTop: "20px",
  marginBottom: "20px",
  fontFamily: "Verdana",
};
export default function Board({ sqaures, onClick }) {
  return (
    <>
      <div style={styleh}>Tic Tac Toe</div>
      <div style={styles}>
        {sqaures.map((square, i) => (
          <Sqaure key={i} value={square} onClick={() => onClick(i)} />
        ))}
      </div>
    </>
  );
}
