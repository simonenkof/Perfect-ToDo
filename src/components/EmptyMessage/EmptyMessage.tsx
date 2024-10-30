import styles from "./EmptyMessage.module.css";
import React from "react";

import { Typography } from "@mui/material";

const EmptyMessage: React.FC = () => {
  return (
    <Typography
      variant="body1"
      color="textSecondary"
      className={styles["empty-message"]}
    >
      Здесь пока ничего нет
    </Typography>
  );
};

export default EmptyMessage;
