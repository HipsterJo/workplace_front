import React from "react";
import styles from "./Toggle.module.css";

interface ToggleProps {
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Toggle: React.FC<ToggleProps> = ({ checked, onChange }) => {
  return (
    <label className={styles.toggleLabel}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className={styles.toggle}
      />
      <span className={styles.toggleSlider}></span>
    </label>
  );
};
