import Link from "next/link";

const Navbar = () => (
  <nav className="bg-white px-8 pt-2 shadow-md">
    <div className="-mb-px flex justify-center">
      <Link href="/">
        <a className="no-underline text-teal-dark uppercase tracking-wide font-bold text-xs py-3 mr-8">
          Home
        </a>
      </Link>
      <Link href="/about">
        <a className="no-underline text-grey-dark uppercase tracking-wide font-bold text-xs py-3 mr-8">
          About
        </a>
      </Link>
    </div>
  </nav>
);

export default Navbar;
