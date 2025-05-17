import Sobre from "@/components/home/sobre/Sobre";

export default function Home() {
  return (
    <main className="flex flex-col gap-4 h-screen items-center">
      <div className="flex justify-center w-full h-full max-w-[1440px] text-preto1">
        <Sobre />
      </div>
    </main>
  );
}
