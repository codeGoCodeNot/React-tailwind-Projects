const App = () => {
  return (
    <div className="container bg-zinc-400 min-w-screen">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

const Header = () => {
  return (
    <header>
      <h1 className="text-2xl font-black py-[0.8em]">My ReactDOM website</h1>
    </header>
  );
};

const Main = () => {
  return (
    <main>
      <div className="rounded-md py-[1em] w-[700px] bg-stone-600 flex items-center justify-center">
        <h1 className="text-center text-3xl font-black text-neutral-900 m-0">
          Welcome to my First React Project
        </h1>
        <span className="ml-10">
          <img
            className="animate-spin"
            src="/react.svg"
            alt="React Logo"
            width={40}
            height={40}
          />
        </span>
      </div>
    </main>
  );
};

const Footer = () => {
  return (
    <footer className="bg-stone-900 text-white py-[1.4em] text-[.7rem] leading-[1.5]">
      <p>Johnsen's Corp</p>
      <p>All rights reserved</p>
    </footer>
  );
};

export default App;
