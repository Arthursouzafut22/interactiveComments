import styles from "./Controls.module.scss";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import Input from "../Input/Input";
import React, { useState } from "react";

const Controls = ({ score }: { score: number }) => {
  const [scoreUser, setScoreUser] = useState(score);

  const validateNum: React.CSSProperties =
    scoreUser === 0
      ? {
          color: " #5457B6",
          cursor: "pointer",
          pointerEvents: "none",
          opacity: "0.5",
        }
      : { color: " #5457B6", cursor: "pointer" };

  return (
    <div className={styles.control}>
      <FaPlus
        style={{ color: " #5457B6", cursor: "pointer" }}
        onClick={() => setScoreUser((prev) => prev + 1)}
      />
      <Input type="number" name="number" id="number" value={scoreUser} />
      <FaMinus
        style={validateNum}
        onClick={() => setScoreUser((prev) => prev - 1)}
      />
    </div>
  );
};

export default Controls;
