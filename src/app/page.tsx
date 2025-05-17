import ComoFunciona from "@/components/home/como_funciona/ComoFunciona";
import Sobre from "@/components/home/sobre/Sobre";

export default function Home() {
  return (
    <main className="flex flex-col gap-4 h-screen items-center">
      <div className="">
        <Sobre />
        <ComoFunciona />
      </div>
    </main>
  );
}
