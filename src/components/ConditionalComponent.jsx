import Code from "./Code";
import Welcome from "./Welcome";

export default function ConditionalComponent() {
  let message;
  const display = true;

  return display ? <Welcome /> : <Code />;
}
