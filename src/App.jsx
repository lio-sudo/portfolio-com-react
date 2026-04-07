import { useState } from "react";
import Header from "./components/Header";
import ProjectsSection from "./components/ProjectsSection";

const initialForm = {
  nome: "",
  email: "",
  msg: "",
};

export default function App() {
  const [formData, setFormData] = useState(initialForm);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  }

  function validarFormulario(event) {
    event.preventDefault();

    const nome = formData.nome.trim();
    const email = formData.email.trim();
    const msg = formData.msg.trim();

    if (!nome || !email || !msg) {
      window.alert("Por favor, preencha todos os campos antes de enviar.");
      return;
    }

    window.alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`);
    setFormData(initialForm);
  }

  return (
    <div className="page-shell">
      <Header />

      <main id="topo">
        <section id="sobre" className="hero-section">
          <div className="hero-copy">
            <p className="eyebrow">Portfólio pessoal</p>
            <h1>Interfaces simples, claras e prontas para funcionar bem em qualquer tela.</h1>
            <p className="hero-text">
              Sou João Leonis, estudante de Sistemas para a Internet pela UESPI.
              Este é o meu primeiro projeto e marca o início da minha jornada no
              desenvolvimento web.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projetos">Ver projetos</a>
              <a className="button button-secondary" href="#contato">Falar comigo</a>
            </div>

            <ul className="hero-highlights" aria-label="Destaques profissionais">
              <li>HTML, CSS e JavaScript</li>
              <li>Foco em front-end e usabilidade</li>
              <li>Layouts responsivos</li>
            </ul>
          </div>

          <div className="hero-card">
            <img src="/assets/img/perfil.jpg" alt="Foto de João Leonis" />
            <div className="hero-card-content">
              <p className="hero-card-label">Disponível para</p>
              <h2>Projetos web e colaborações em tecnologia</h2>
              <p>
                Desenvolvimento com base sólida, boa comunicação e atenção
                especial à usabilidade no celular.
              </p>
            </div>
          </div>
        </section>

        <ProjectsSection />

        <section id="contato" className="content-section contact-section">
          <div className="section-heading">
            <p className="eyebrow">Vamos conversar</p>
            <h2>Contato</h2>
            <p>
              Se você quer tirar uma ideia do papel ou desenvolver uma solução
              para web, envie uma mensagem.
            </p>
          </div>

          <div className="contact-layout">
            <article className="contact-card">
              <h3>Como posso ajudar</h3>
              <p>
                Posso contribuir com páginas institucionais, portfólios,
                pequenos sistemas web e melhorias de interface para produtos
                digitais.
              </p>

              <ul className="contact-list">
                <li>Landing pages e sites pessoais</li>
                <li>Projetos acadêmicos e demonstrativos</li>
                <li>Melhorias de interface e responsividade</li>
              </ul>
            </article>

            <form
              action="#"
              method="post"
              id="meu-formulario"
              className="contact-form"
              onSubmit={validarFormulario}
            >
              <div className="campo">
                <label htmlFor="nome">Nome</label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  required
                  value={formData.nome}
                  onChange={handleChange}
                />
              </div>

              <div className="campo">
                <label htmlFor="email">E-mail</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="campo">
                <label htmlFor="msg">Mensagem</label>
                <textarea
                  id="msg"
                  name="msg"
                  required
                  value={formData.msg}
                  onChange={handleChange}
                />
              </div>

              <button className="button button-primary submit-button" type="submit">
                Enviar mensagem
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>&copy; 2026 - Desenvolvido por João Leonis</p>
      </footer>
    </div>
  );
}
