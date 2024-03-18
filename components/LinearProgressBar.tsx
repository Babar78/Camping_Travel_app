"use client";
import * as React from "react";
import LinearProgress from "@mui/joy/LinearProgress";
import { useCountUp } from "use-count-up";

const LinearProgressBar = () => {
  const { value } = useCountUp({
    isCounting: true,
    duration: 2,
    easing: "linear",
    start: 0,
    end: 75,
    onComplete: () => ({
      shouldRepeat: false,
    }),
  });
  return (
    <LinearProgress
      determinate
      variant="outlined"
      color="neutral"
      size="sm"
      thickness={20}
      value={Number(value)}
      sx={{
        "--LinearProgress-radius": "20px",
        "--LinearProgress-thickness": "20px",
        color: "#30af5b",
      }}
    ></LinearProgress>
  );
};

export default LinearProgressBar;
