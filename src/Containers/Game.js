import Board from "../Components/Board";
import React, { useState } from "react";
import { calculateWinner } from "../Helpers/CalculateWinner";
import Score from "../Components/Score";

const style = {
  color: "red",
  fontSize: "17px",
  fontFamily: "Verdana",
  fontWeight: "600",
  margin: "0 auto",
  marginLeft: "43%",
  padding: "10px",
  borderRadius: "5px",
  textAlign: "center",
  border: "2px inset green",
  backgroundColor: "#f0fceb",
};
//tic tac toe game component
export default function Game() {
  const [board, setBord] = useState(Array(9).fill(null));
  const [Next, setNext] = useState(true);
  const Winner = calculateWinner(board);
  const OnClick = (i) => {
    const boardCoy = [...board];
    if (Winner || boardCoy[i]) {
      return;
    }
    boardCoy[i] = Next ? "X" : "O";
    setBord(boardCoy);
    setNext(!Next);
  };
  //reset game button on click function
  const Reset = () => {
    setBord(Array(9).fill(null));
    setNext(true);
  };

  return (
    <>
      <Board sqaures={board} onClick={OnClick} />
      <Score winner={Winner} />
      <button style={style} onClick={Reset}>
        Reset
      </button>
    </>
  );
}
