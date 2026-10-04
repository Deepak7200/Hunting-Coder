import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
    <nav>
      <ul className="flex justify-center mt-5 font-bold">
        <Link href='/'><li className="ml-5 mr-5">Home</li></Link>
        <Link href='/about'><li className="ml-5 mr-5">About</li></Link>
        <Link href='/blog'><li className="ml-5 mr-5">Blog</li></Link>
        <Link href='/contact'><li className="ml-5 mr-5">Contact</li></Link>
      </ul>
    </nav>

    <div className="flex flex-col  items-center justify-center">
      <h1 className="text-4xl font-bold justify-start mt-15"> Hunting Coder </h1>
      <p className="text-center m-10">A blog for hunting coders by a hunting coder</p>
      <div>
        <h2 className="text-3xl font-bold">Popular blogs:</h2>
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
