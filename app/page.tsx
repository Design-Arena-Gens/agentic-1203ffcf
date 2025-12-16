import Logo from "./components/Logo";

const Page = () => (
  <main className="page">
    <section className="card">
      <div className="badge">Agentic Business</div>
      <Logo className="logo" />
      <h1>Professional Agent Identity</h1>
      <p>
        A modern and trustworthy emblem capturing an agile business leader with a briefcase in blue and
        silver gradients. Crafted for scalable corporate branding across digital and print touchpoints.
      </p>
      <a className="download" href="/agentic-logo.svg" download>
        Download SVG
      </a>
    </section>
  </main>
);

export default Page;
