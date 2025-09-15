import Hero from "../components/Hero/Hero";
import Presentation from "../components/Presentation/Presentation";
import Projects from "../components/LatestProjects/LatestProjects";
import Separator from "../components/Separator/Separator";

export default function Home() {
  return (
    <>
      <Hero />
      <Separator />
      <Presentation />
      <Separator />
      <Projects />
      <Separator />
    </>
  );
}
