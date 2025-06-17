import Details from "./components/Details";
import Image from "./components/Image";
import Links from "./components/Links";

function App() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-white p-4">
      <div className="w-full max-w-5xl bg-gradient-to-b from-purple-900 to-gray-800 bg-white rounded-2xl shadow-xl p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Profile Image */}
        <Image />

        <div>
          {/* Name & Title */}
          <Details />

          {/* Links */}
          <Links />
        </div>
      </div>
    </main>
  );
}

export default App;
