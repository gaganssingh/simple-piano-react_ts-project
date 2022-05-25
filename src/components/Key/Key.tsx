import clsx from "clsx";
import { NoteType } from "../../domain/note";
import styles from "./Key.module.css";

type KeyProps = {
  type: NoteType;
  label: string;
  disabled?: boolean;
};

export const Key: React.FC<KeyProps> = ({ type, label, ...rest }) => (
  <button className={clsx(styles.key, styles[type])} type="button" {...rest}>
    {label}
  </button>
);
