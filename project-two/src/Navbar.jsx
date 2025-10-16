import { useState } from "react";

export default function Navbar() {
  const [switcher, setSwitcher] = useState(true);

  const imgUrlLight = `https://res.cloudinary.com/dbfn5lnvx/image/upload/v1732813039/react-tutorial/superm-v2/light.svg`;

  const imgUrlDark = `https://res.cloudinary.com/dbfn5lnvx/image/upload/v1732813039/react-tutorial/superm-v2/dark.svg`;

  const handleToggle = () => {
    setSwitcher((s) => !s);
    if (!switcher) {
      document.body.classList.remove("dark");
    } else {
      document.body.classList.add("dark");
    }
  };
  return (
    <div className="navbar flex justify-between items-center py-8">
      <a className="logo text-[2.6rem] font-normal no-underline text-inherit">
        Market
      </a>
      <nav className="nav-wrapper flex items-center gap-3">
        <button
          onClick={handleToggle}
          className="theme-switcher flex rounded-full bg-white p-2 cursor-pointer box-border outline-auto"
        >
          <img
            src={switcher ? imgUrlLight : imgUrlDark}
            width="24"
            height="24"
            alt={switcher ? "Light theme" : "Dark theme"}
          />
        </button>
        <ul className="nav list-none pl-0 flex bg-white rounded-tl-[132px] rounded-bl-[132px] rounded-tr-[132px] rounded-br-[132px]">
          <li className="nav-item">
            <a>Home</a>
          </li>
          <li className="nav-item">
            <a>Login</a>
          </li>
          <li className="nav-item">
            <a>Products</a>
          </li>
        </ul>
        <a className="btn btn-nav">Cart (0)</a>
      </nav>
    </div>
  );
}
