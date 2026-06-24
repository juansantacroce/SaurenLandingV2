import logo from '../../assets/images/logoBlanco.webp';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-6 py-10 pb-28 md:pb-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 text-center md:flex-row md:items-center md:justify-between md:text-left">
        <img src={logo} alt="Sauren" className="h-6 w-auto opacity-80" />
        <p className="text-sm text-white/40">
          © {new Date().getFullYear()} Sauren — Innovando la excelencia tecnológica.
        </p>
        <p className="text-sm text-white/40">Córdoba, Argentina</p>
      </div>
    </footer>
  );
}
