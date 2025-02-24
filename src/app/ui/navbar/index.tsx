import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white py-4 shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/">
          <span className="cursor-pointer font-bold text-xl">
            Cod<span className="text-blue-400">Teech</span>
          </span>
        </Link>

        {/* Links */}
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="hover:text-blue-400">
              Home
            </Link>
          </li>
          <li>
            <Link href="/servicos" className="hover:text-blue-400">
              Serviços
            </Link>
          </li>
          <li>
            <Link href="/sobre" className="hover:text-blue-400">
              Sobre
            </Link>
          </li>
          <li>
            <Link href="/contato" className="hover:text-blue-400">
              Contato
            </Link>
          </li>
        </ul>

      </div>
    </nav>
  );
}
