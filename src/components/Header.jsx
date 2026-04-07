export default function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#topo">
        <span className="brand-mark">JL</span>
        <span className="brand-text">
          <strong>João Leonis</strong>
          <small>Dev Web</small>
        </span>
      </a>

      <nav className="site-nav" aria-label="Principal">
        <ul>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#projetos">Projetos</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
}
