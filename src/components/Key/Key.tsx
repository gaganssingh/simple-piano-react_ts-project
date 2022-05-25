import clsx from "clsx";
import { NoteType } from "../../domain/note";
import styles from "./Key.module.css";

type PressCallback = () => void;
type KeyProps = {
  type: NoteType;
  label: string;
  disabled?: boolean;
  onUp: PressCallback;
  onDown: PressCallback;
};

export const Key: React.FC<KeyProps> = ({
  type,
  label,
  onUp,
  onDown,
  ...rest
}) => (
  <button
    className={clsx(styles.key, styles[type])}
    type="button"
    onMouseUp={onUp}
    onMouseDown={onDown}
    {...rest}
  >
    {label}
  </button>
);
