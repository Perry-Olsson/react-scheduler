import React, { FC } from "react";
import "../styles/global.css";
import { Header } from "./Header";
import "./styles.css";

export const Scheduler: FC<React.HTMLProps<HTMLDivElement>> = ({
  ...props
}) => {
  return (
    <div className="ReactScheduler_scheduler ReactScheduler_global" {...props}>
      <Header />
    </div>
  );
};
