import { useAudioContext, useMount, useSoundfont } from "../../hooks";
import { Keyboard } from "./Keyboard";

export const KeyboardWithInstrument = () => {
  const AudioContext = useAudioContext()!;
  const { loading, play, stop, load } = useSoundfont({ AudioContext });
  useMount(() => load());

  return <Keyboard loading={loading} play={play} stop={stop} />;
};
