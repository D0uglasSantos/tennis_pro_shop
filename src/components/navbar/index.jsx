const Navbar = (isScrolled) => {
  return (
    <>
      <header
        className={`${
          isScrolled ? "bg-white shadow-md" : "bg-transparent"
        } flex justify-around p-3 fixed w-full z-10 transition-colors ease-out`}
      >
        <img src="/images/logos/logo.svg" alt="Logo" />

        <ul className="flex items-center gap-4 font-bold text-sm">
          <li
            className={`${
              isScrolled
                ? "text-black hover:text-bg-green"
                : "text-gray-300 hover:text-white"
            }`}
          >
            Home
          </li>
          <li
            className={`${
              isScrolled
                ? "text-black hover:text-bg-green"
                : "text-gray-300 hover:text-white"
            }`}
          >
            Sobre Nós
          </li>
          <li
            className={`${
              isScrolled
                ? "text-black hover:text-bg-green"
                : "text-gray-300 hover:text-white"
            }`}
          >
            Contato
          </li>
          <li
            className={`${
              isScrolled
                ? "text-black hover:text-bg-green"
                : "text-gray-300 hover:text-white"
            }`}
          >
            Loja
          </li>
        </ul>
      </header>
    </>
  );
};

export default Navbar;
