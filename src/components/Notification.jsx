import { useState } from "react";

function Notification({ notifications = [] }) {
  const [show, setShow] = useState(false);

  return (
    <div className="relative">
      <button onClick={() => setShow((s) => !s)} className="relative">
        <span className="material-icons text-blue-700">notifications</span>
        {(notifications.length > 0) && (
          <span className="absolute -top-1 -right-1 text-xs bg-red-500 text-white rounded-full px-1">
            {notifications.length}
          </span>
        )}
      </button>
      {show && (
        <div className="absolute right-0 z-10 w-80 bg-white shadow-lg p-4 rounded mt-2">
          <div className="font-bold mb-2">Notifications</div>
          {notifications.length === 0 && <div className="text-gray-500">No new notifications.</div>}
          {notifications.map((n) =>
            <div key={n.id} className={`p-2 mb-2 rounded ${n.type === "reminder" ? "bg-yellow-100" : "bg-red-100"}`}>
              <div>{n.message}</div>
              <div className="text-xs text-gray-500">{n.date}</div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
export default Notification;
