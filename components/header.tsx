
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between">
        <Link href="/" className="text-lg font-bold">
          My App
        </Link>
        <div>
          <Link href="/" className="mr-4">
            Home
          </Link>
          <Link href="/about">
            About
          </Link>
        </div>
      </nav>
    </header>
  );
}
