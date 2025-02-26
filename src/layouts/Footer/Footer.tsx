import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

export const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      <Link to="/">Home</Link>
      <Link to="/create">Create Workplace</Link>
    </div>
  );
};
