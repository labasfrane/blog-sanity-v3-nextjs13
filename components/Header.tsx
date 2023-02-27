import Image from "next/image";
import Link from "next/link";
import { UserIcon } from "@heroicons/react/24/solid";

export const Header = () => {
  return (
    <header className="mb-2 flex justify-between items-center px-2 md:px-7 py-2 md:py-5 border-b rounded-b-sm">
      <div className="flex justify-between items-center">
        <Link href="/">
          <Image
            className="bg-inherit"
            src="/static/images/hdepo-logo.png"
            width={100}
            height={100}
            alt="hdepo logo"
          />
        </Link>
        <h1 className="ml-2 md:ml-2 font-bold uppercase text-4xl md:text-6xl text-zinc-800">
          hdepo
        </h1>
      </div>
      <Link href="/studio">
        <UserIcon className="h-6 w-6" />
      </Link>
    </header>
  );
};
