import Image from "next/image";
import Link from "next/link";
import { UserIcon } from "@heroicons/react/24/solid";

export const Header = () => {
  return (
    <header className="mb-1 flex justify-between items-center px-4 sm:px-5 md:px-7 py-2 md:py-5 border-b rounded-b-sm bg-gradient-to-b from-neutral-100 border-neutral-400">
      <div className="flex justify-between items-center">
        <Link href="/">
          <Image
            src="/static/images/hdepo-logo.png"
            width={85}
            height={85}
            alt="hdepo logo"
          />
        </Link>
        <h1 className="mx-2 sm:ml-3 md:mx-4 font-bold uppercase text-4xl sm:text-5xl md:text-6xl">
          hdepo
        </h1>
      </div>
      <Link href="/studio">
        <UserIcon className="h-5 w-5 sm:h-6 sm:w-6 mx-1" />
      </Link>
    </header>
  );
};
