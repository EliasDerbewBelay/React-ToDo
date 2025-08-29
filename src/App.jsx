export default function App() {
  return (
    <div>
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
        <input type="text" placeholder="Enter your task here . . ." />
        <button>Add</button>
      </form>
    </div>
  );
}

function Footer() {
  return <div>
    <div></div>
  </div>;
}
