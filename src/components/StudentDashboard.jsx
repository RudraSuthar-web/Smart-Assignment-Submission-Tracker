import { useState, useEffect } from "react";
import { fetchAssignments, fetchNotifications } from "../api/mockapi";
import AssignmentList from "./AssignmentList";
// import AssignmentDetail from "./AssignmentDetail";
import Notification from "./Notification";

function StudentDashboard({ onAssignmentSelect }) {
  const [assignments, setAssignments] = useState([]);
  const [filter, setFilter] = useState({ subject: "", status: "", sort: "dueDate" });
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    fetchAssignments().then(setAssignments);
    fetchNotifications().then(setNotifications);
  }, []);

  const subjects = Array.from(new Set(assignments.map(a => a.subject)));

  let filtered = assignments
    .filter((a) => (!filter.subject || a.subject === filter.subject))
    .filter((a) => (!filter.status || a.status === filter.status))
    .sort((a, b) =>
      filter.sort === "dueDate"
        ? new Date(a.dueDate) - new Date(b.dueDate)
        : a.title.localeCompare(b.title)
    );

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-blue-800">My Assignments</h2>
        <Notification notifications={notifications} />
      </div>
      <div className="mb-4 flex gap-3 flex-wrap">
        <select className="p-2 border rounded" value={filter.subject}
          onChange={e => setFilter({ ...filter, subject: e.target.value })}>
          <option value="">All Subjects</option>
          {subjects.map(sub => <option key={sub} value={sub}>{sub}</option>)}
        </select>
        <select className="p-2 border rounded" value={filter.status}
          onChange={e => setFilter({ ...filter, status: e.target.value })}>
          <option value="">All Statuses</option>
          <option value="pending">Pending</option>
          <option value="submitted">Submitted</option>
        </select>
        <select className="p-2 border rounded" value={filter.sort}
          onChange={e => setFilter({ ...filter, sort: e.target.value })}>
          <option value="dueDate">Sort by Due Date</option>
          <option value="title">Sort by Title</option>
        </select>
      </div>
      <AssignmentList assignments={filtered} onSelect={onAssignmentSelect} />
    </div>
  );
}
export default StudentDashboard;
