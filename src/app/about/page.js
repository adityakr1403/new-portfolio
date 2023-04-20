import Aboutme from "./aboutme";
import Myskills from "./myskills";

export default function Home() {
  return (
    <main className="w-full text-white">
      <Aboutme />
      <Myskills />
    </main>
  );
}
