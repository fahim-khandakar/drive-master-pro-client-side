import logo from "../../assets/download.png";
const Footer = () => {
  return (
    <div className="bg-[var(--bg)] text-[var(--text)]">
      <footer className="footer pt-24 p-10  max-w-6xl mx-auto">
        <aside>
          <img src={logo} alt="" />
          <p>
            Drive Master Pro
            <br />
            Providing reliable tech since 2012
          </p>
        </aside>
        <nav>
          <header className="footer-title">Services</header>
          <a className="link link-hover">Car Wash</a>
          <a className="link link-hover">Car Service</a>
        </nav>
        <nav>
          <header className="footer-title">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav>
          <header className="footer-title">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
