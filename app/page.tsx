import Intro from "./_components/Intro";

export default function Home() {
  return (
    <div className="w-full h-full flex justify-center">
      <div className="flex justify-center h-screen w-full max-w-5xl p-5">
        <Intro />
      </div>
    </div>
  );
}
