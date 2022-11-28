import UniversityPage from "./pages/UniversityPage";
import Sidebar from "./components/Sidebar/Sidebar";
import Modal from "./components/Modal/Modal"

function App() {
  return (
    <div className="App">
      <Sidebar />
      <UniversityPage />
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>
      <Modal/>
    </div>
  );
}

export default App;
