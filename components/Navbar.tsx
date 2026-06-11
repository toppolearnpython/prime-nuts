import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav style={{ backgroundColor: "#ebe0cc" }} className="shadow-md px-6 py-4 flex justify-between items-center">
      {/* Logo at top-left */}
      <div className="flex items-center">
        <Image
          src="/logo.png"   // ✅ place your logo file in /public/logo.png
          alt="Prime Nuts-Natural Logo"
          width={150}
          height={50}
          className="mr-2"
        />
        {/* Remove this span if you want only the logo */}
        <span className="text-xl font-bold"> </span>
      </div>

      {/* Tagline */}
      <p className="mt-2 text-lg italic">
        Welcome to the home of wholesome, flavored snacking
      </p>

      {/* Navigation */}
      <div className="space-x-4">
        <Link href="/products">Home</Link>
      {/*  <Link href="/about">About</Link>
        <Link href="/products">Products</Link>
        <Link href="/recipes">Recipes</Link>
        <Link href="/contact">Contact</Link>    */}
      </div>
    </nav>
  );
}
