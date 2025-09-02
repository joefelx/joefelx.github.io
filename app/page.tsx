import Experience from "./_components/Experience";
import Footer from "./_components/Footer";
import Intro from "./_components/Intro";
import Projects from "./_components/Projects";
import Skills from "./_components/Skills";
import jsonData from "./config/Data.json";

export default function Home() {
  const data = jsonData;
  return (
    <div className="w-full h-full flex justify-center bg-black">
      <div className="h-full w-full max-w-5xl p-5 ">
        <Intro
          name={data.name}
          about={data.about}
          resume={data.resume}
          links={data.links}
        />
        <Projects projects={data.projects} />
        <Skills skills={data.skills} />
        <Experience experience={data.experience} />
        <Footer />
      </div>
    </div>
  );
}
