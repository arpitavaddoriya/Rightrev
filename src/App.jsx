import Content from "./Components/Content";
import Entrysection from "./Components/Entrysection";
import Navbar from "./Components/Navbar";
import Revenusection from "./Components/Revenusection";
import Section from "./Components/Section";
import Sectioncontent from "./Components/Sectioncontent";
import Solutionsection from "./Components/Solutionsection";

function App() {
  return (
    <div>
      <Navbar />
      <Section />
      <Sectioncontent />
      <Content />
      <Entrysection />
      <Revenusection />
      <Solutionsection />
    </div>
  );
}

export default App;
