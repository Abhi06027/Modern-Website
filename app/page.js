import About from "@/Components/about";
import { Hero, Explore, Getstarted } from "../Components/sections";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Explore />
      <Getstarted />
    </main>
  );
}
