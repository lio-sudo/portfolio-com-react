const meusProjetos = [
  {
    titulo: "Projeto 01 - Portfólio em HTML, CSS e JavaScript",
    descricao:
      "Este portfólio foi desenvolvido com HTML, CSS e JavaScript puro, com foco em estrutura, estilo e responsividade.",
    categoria: "Frontend",
    links: [
      {
        label: "Ver projeto",
        url: "https://lio-sudo.github.io/meu-portifolio-html-css-js/#projetos",
      },
      {
        label: "Ver repositório",
        url: "https://github.com/lio-sudo/meu-portifolio-html-css-js",
      },
    ],
  },
  {
    titulo: "Projeto 02 - Portfólio com React",
    descricao:
      "Uma evolução deste mesmo projeto, mantendo a base visual e adicionando React para componentização e melhor organização da interface.",
    categoria: "React",
    links: [
      {
        label: "Ver no GitHub",
        url: "https://github.com/pedroalex/portfolio-react",
      },
    ],
  },
];

export default function ProjectsSection() {
  return (
    <section id="projetos" className="content-section">
      <div className="section-heading">
        <p className="eyebrow">Trabalhos em destaque</p>
        <h2>Projetos</h2>
        <p>
          Cada card abaixo apresenta uma entrega com foco em clareza,
          funcionalidade e boa experiência de uso.
        </p>
      </div>

      <div className="projetos-container">
        {meusProjetos.map((projeto) => (
          <article className="card-projeto" key={projeto.titulo}>
            <p className="eyebrow">{projeto.categoria}</p>
            <h3>{projeto.titulo}</h3>
            <p>{projeto.descricao}</p>
            <div className="card-links">
              {projeto.links.map((link) => (
                <a href={link.url} key={link.url} target="_blank" rel="noreferrer">
                  {link.label}
                </a>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
