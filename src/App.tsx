import { Heading } from "./components/Heading";
import { TextInput } from "./components/TextInput";
import { Envelope } from "phosphor-react";
import "./styles/global.css";
import { Text } from "./components/Text";

export function App() {
  return (
    <>
      <h1 className="font-bold text-2xl">Hello World</h1>;
      <button className="bg-cyan-500 font-medium px-4 py-3 rounded text-white hover:bg-cyan-300">
        Enviar
      </button>
      <h1>Testando Input sem ícone</h1>
      <TextInput.Root>
        <TextInput.Input placeholder="Testando" />
      </TextInput.Root>
      <h1>Testando Input com ícone</h1>
      <TextInput.Root>
        <Envelope color="white" />
        <TextInput.Input placeholder="Testando" />
      </TextInput.Root>
      <Text size="lg">adicione seu cartão de credito</Text>
    </>
  );
}
