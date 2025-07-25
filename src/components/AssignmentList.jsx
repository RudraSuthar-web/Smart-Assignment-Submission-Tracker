function statusColor(status) {
  if (status === "pending") return "bg-red-100 text-red-700";
  if (status === "submitted") return "bg-green-100 text-green-700";
  return "bg-gray-200";
}

function AssignmentList({ assignments, onSelect }) {
  if (assignments.length === 0) {
    return <div className="p-6 text-gray-500">No assignments found.</div>;
  }
  return (
    <div className="bg-white shadow rounded divide-y">
      {assignments.map((a) => (
        <div
          key={a.id}
          className="flex items-center justify-between p-4 cursor-pointer hover:bg-blue-50"
          onClick={() => onSelect(a)}
        >
          <div>
            <div className="font-semibold">{a.title}</div>
            <div className="text-sm text-gray-600">{a.subject}</div>
          </div>
          <div>
            <span className="text-xs">{a.dueDate}</span>
            <span className={`ml-4 px-2 py-1 rounded text-xs ${statusColor(a.status)}`}>
              {a.status}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
export default AssignmentList;
