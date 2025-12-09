import About from "@/components/curriculo/About";
import Banner from "@/components/curriculo/Banner";
import Experience from "@/components/curriculo/Experience";
import Footer from "@/components/curriculo/Footer";
import Projects from "@/components/curriculo/Projects";
import Skills from "@/components/curriculo/Skills";
import TitleBlinker from "@/components/curriculo/TitleBlinker";

export default function Curriculo() {
  return (
    <main className="h-full w-full  bg-[url('/LooperGroup2.png')] bg-no-repeat">
      <TitleBlinker />
      <div className="flex flex-col">
        <Banner />
        <div className="mb-32">
          <About />
        </div>
        <div className="mb-32">
          <Experience />
        </div>
        <div className="mb-32">
          <Skills />
        </div>
        <div className="mb-32">
          <Projects />
        </div>
        <Footer />
      </div>
    </main>
  );
}

