import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navlink from "./components/Navlink";
import Projects from "./components/Projects";

function App() {
	return (
		<>
			<Navlink />
			<Hero />
			<About />
			<Projects />
			<Contact />
			<Footer />
		</>
	);
}

export default App;
