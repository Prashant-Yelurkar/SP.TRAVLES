interface InputProps {
  title: any;
  placeholder: any;
  type: any;
  change: Function;
  value: any;
}

import styles from "./inpute.module.css";
export default function Inpute({
  value,
  type,
  title,
  placeholder,
  change,
}: InputProps) {
  return (
    <label className={styles.inputField}>
      {title}
      <input
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={(e) => change(e.target.value)}
      />
    </label>
  );
}
