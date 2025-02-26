import styles from "./Button.module.css";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}
export const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <div className={styles.button} onClick={onClick}>
      {children}
    </div>
  );
};
