import Image from "next/image";

export default function Home() {
  return (
    <div className="">
    

      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold justify-start mt-15"> Hunting Coder </h1>
        <p className="text-center m-10">A blog for hunting coders by a hunting coder</p>
        <div>
          <h2 className="text-3xl font-bold">Latest  blogs:</h2>
          <h1 className="font-bold mt-3 mb-3"> Hunting Coder </h1>
          <p className="text-center">A blog for hunting coders by a hunting coder</p>
          <h1 className="font-bold mt-3 mb-3"> Hunting Coder </h1>
          <p className="text-center">A blog for hunting coders by a hunting coder</p>
          <h1 className="font-bold mt-3 mb-3"> Hunting Coder </h1>
          <p className="text-center">A blog for hunting coders by a hunting coder</p>
        </div>
      </div>
    </div>
  );
}
