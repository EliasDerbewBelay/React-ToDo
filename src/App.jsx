export default function App() {
  return (
    <div className="h-screen bg-indigo-950 text-white">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <div>
      <div>
        <h1>ToDo List</h1>
      </div>

      <div>
        <h3>Your Daily Manager</h3>
      </div>
    </div>
  );
}

function Main() {
  return (
    <div>
      <form>
        <input className="border" type="text" placeholder="Enter your task here . . ." />
        <button>Add</button>
      </form>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-indigo-700 flex justify-center p-2 gap-4">
      <a
        href="https://t.me/Eliasdevstack"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="h-8 transition-transform duration-300 hover:scale-110 hover:rotate-6 cursor-pointer"
          src="/telegram.png"
          alt="telegram icon"
        />
      </a>

      <a
        href="https://github.com/EliasDerbewBelay"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="h-8 transition-transform duration-300 hover:scale-110 hover:rotate-6 cursor-pointer"
          src="/github.png"
          alt="github icon"
        />
      </a>

      <a href="mailto:eliasderbewbly@gmail.com">
        <img
          className="h-8 transition-transform duration-300 hover:scale-110 hover:rotate-6 cursor-pointer"
          src="/email.png"
          alt="email icon"
        />
      </a>
    </div>
  );
}
