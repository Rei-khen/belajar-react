import "../style-components/navbar.css"

export default function Navbar() {
  return (
    <nav>
      <p id="icon">Untitle UI</p>
      <div className="right-content">
        <ul>
          <li>Feauters</li>
          <li>Pricing</li>
          <li>FAQs</li>
          <li>Producst</li>
          <li>Blog</li>
          <li>Contact us</li>
        </ul>
      </div>
      <div className="left-content">
        <button id="login-button">Log in</button>
        <button id="get-started-button">Get started</button>
      </div>
    </nav>
  );
}
