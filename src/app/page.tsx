import TestInput from "@/components/TestInput";
import { labelsFrutas, labelsEsporte } from "@/data/radioOptions"

export default function Home() {
  return (
    <div className="flex flex-col gap-4 w-screen h-screen bg-midnight text-white items-center justify-center">
      <h1 className="text-6xl font-bold">Hello World</h1>
      <h2 className="text-5xl font-semibold">Escrevendo na quebrada</h2>
      <TestInput inputName="frutas" title="Qual sua fruta favorita ?" labels={labelsFrutas}/>
      <TestInput inputName="esportes" title="Qual seu esporte favorito ?" labels={labelsEsporte}/>
    </div>
  );
}
