import styles from "./Input.module.css";

export interface InputProps {
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  className?: string;
  error?: string; // Добавляем проп для ошибки
}

export const Input = ({
  className,
  placeholder,
  onChange,
  value,
  error,
}: InputProps) => {
  return (
    <div className={styles.wrapper}>
      <input
        className={`${styles.input} ${error ? styles.error : ""} ${className}`}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
      {error && <span className={styles.errorMessage}>{error}</span>}
    </div>
  );
};
