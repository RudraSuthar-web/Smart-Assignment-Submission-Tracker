import { useState } from "react";
import StudentDashboard from "./components/StudentDashboard";
import FacultyDashboard from "./components/FacultyDashboard";
import AssignmentDetail from "./components/AssignmentDetail";
import Notification from "./components/Notification";

function App() {
  const [role, setRole] = useState("student"); // or "faculty"
  const [page, setPage] = useState("dashboard");
  const [selectedAssignment, setSelectedAssignment] = useState(null);

  const handleAssignmentSelect = (assignment) => {
    setSelectedAssignment(assignment);
    setPage("detail");
  };

  const goBack = () => {
    setSelectedAssignment(null);
    setPage("dashboard");
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="flex items-center justify-between bg-white px-6 py-4 shadow">
        <h1
          className="font-bold text-xl text-blue-800 cursor-pointer"
          onClick={() => {
            setPage("dashboard");
            setSelectedAssignment(null);
          }}>
          Smart Assignment Tracker
        </h1>
        <div>
          <button
            onClick={() => setRole(role === "student" ? "faculty" : "student")}
            className="mr-4 px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
          >
            Switch to {role === "student" ? "Faculty" : "Student"} View
          </button>
          <Notification />
        </div>
      </div>
      <main className="max-w-3xl mx-auto mt-8">
        {page === "dashboard" && (
          <>
            {role === "student" && (
              <StudentDashboard onAssignmentSelect={handleAssignmentSelect} />
            )}
            {role === "faculty" && (
              <FacultyDashboard onAssignmentSelect={handleAssignmentSelect} />
            )}
          </>
        )}
        {page === "detail" && selectedAssignment && (
          <AssignmentDetail assignmentId={selectedAssignment.id} goBack={goBack} />
        )}
      </main>
    </div>
  );
}
export default App;
