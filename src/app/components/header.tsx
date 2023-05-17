import Link from "next/link";
import Image from "next/image"

const Header = () => {
  return (
    <header className="h-[75px] w-screen bg-main">
      <nav className="p-2">
        <ul className="flex items-center space-x-2">
          <li>
            <Image src="/vercel.svg" width={200} height={50} alt="logo" />
          </li>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/test">Test</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
