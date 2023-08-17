import "./App.css";
import Form from "./components/Form";
import { FormProvider } from "./context/FormContext";
import Billing from "./components/Billing";
import Contact from "./components/Contact";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Personal from "./components/Personal";
import Preview from "./components/Preview";


function App() {
  return (
    <Router>
      <FormProvider>
        <Routes>
          <Route path="/" element={<Form />}>
            <Route path="/Personal" element={<Personal />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Billing" element={<Billing />} />
            <Route path="/Preview" element={<Preview />} />
          </Route>
          <Route element={<Form />} />
        </Routes>
      </FormProvider>
    </Router>
  );
}

export default App;
