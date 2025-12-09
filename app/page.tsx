import About from "@/components/About";
import Banner from "@/components/Banner";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import TitleBlinker from "@/components/curriculo/TitleBlinker";

export default function Home() {
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
          <Projects />
        </div>
        <Footer />
      </div>
    </main>
  );
}
