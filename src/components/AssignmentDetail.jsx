import { useEffect, useState } from "react";
import { fetchAssignmentById, uploadSubmission } from "../api/mockapi";
import FileUpload from "./FileUpload";

function AssignmentDetail({ assignmentId, goBack }) {
  const [assignment, setAssignment] = useState(null);
  const [statusMsg, setStatusMsg] = useState("");

  useEffect(() => {
    fetchAssignmentById(assignmentId).then(setAssignment);
  }, [assignmentId]);

  if (!assignment) return <div>Loading...</div>;

  return (
    <div className="bg-white shadow rounded p-6">
      <button onClick={goBack} className="mb-4 px-3 py-1 bg-gray-100 rounded hover:bg-gray-200">&larr; Back</button>
      <h2 className="text-lg font-semibold text-blue-800">{assignment.title}</h2>
      <div className="text-gray-600">{assignment.subject}</div>
      <div className="text-sm text-gray-500 mb-2">Due: {assignment.dueDate}</div>
      <div className="mb-3">{assignment.description}</div>
      <div className="mb-3">
        <a href={assignment.pdfUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
          View Assignment PDF
        </a>
      </div>
      <div className="mb-4">
        <FileUpload
          initialStatus={assignment.submission}
          onUpload={async (file) => {
            setStatusMsg("Uploading...");
            const resp = await uploadSubmission(assignment.id, file);
            setStatusMsg(resp.receipt);
          }}
        />
      </div>
      {statusMsg && (
        <div className="p-2 bg-green-100 text-green-800 rounded">{statusMsg}</div>
      )}
    </div>
  );
}
export default AssignmentDetail;
