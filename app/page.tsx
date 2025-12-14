"use client";

// {import react compoent here}
import Plasma from "../components/Plasma";

export default function Home() {
  return (
    <div className="">
      {/* {replace react component here} */}
      <main className="flex min-h-screen bg-black w-full max-w-3xl flex-col items-center justify-between py-32 px-16  dark:bg-black sm:items-start">
        <div style={{ width: "100%", height: "600px", position: "relative" }}>
          <Plasma
            color="#ff6b35"
            speed={2}
            direction="forward"
            scale={1.1}
            opacity={0.8}
            mouseInteractive={true}
          />
        </div>
      </main>
    </div>
  );
}
