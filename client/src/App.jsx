import Header from "./components/Header";
import Form from "@/components/Form"

function App() {
  return (
    <div className="app bg-opaque-black">
      <Header />
      <div className="flex justify-center items-center h-screen">
        <h1 className="font-playfair text-5xl font-bold text-green">
          Making Readmes Just Got Simpler
        </h1>
      </div>
      <Form />
    </div>
  );
}

export default App;
