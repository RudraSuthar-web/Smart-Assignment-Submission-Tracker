// src/api/mockApi.js

// Example assignments
const assignments = [
  {
    id: 1,
    title: "Math Homework 1",
    subject: "Mathematics",
    dueDate: "2025-08-01",
    status: "pending",
    description: "Solve all integration problems from chapter 3.",
    pdfUrl: "/sample-math-hw1.pdf",
    submission: null,
  },
  {
    id: 2,
    title: "Physics Project",
    subject: "Physics",
    dueDate: "2025-08-10",
    status: "submitted",
    description: "Submit your group project as a PDF.",
    pdfUrl: "/physics-project.pdf",
    submission: {
      date: "2025-07-24",
      file: "project.pdf",
    },
  },
];

const notifications = [
  {
    id: 1,
    message: "Math Homework 1 is due in 2 days.",
    type: "reminder",
    assignmentId: 1,
    date: "2025-07-30",
  },
];

const submissionsMock = {
  1: [
    {
      studentId: "stu101",
      studentName: "John Doe",
      fileUrl: "/submissions/john_math_hw1.pdf",
      date: "2025-07-24",
      grade: "A",
      feedback: "Great job!",
    },
    {
      studentId: "stu102",
      studentName: "Jane Smith",
      fileUrl: "/submissions/jane_math_hw1.pdf",
      date: "2025-07-25",
      grade: null,
      feedback: null,
    },
  ],
  2: [],
};

export function fetchAssignments() {
  return new Promise((res) => setTimeout(() => res(assignments), 500));
}

export function fetchAssignmentById(id) {
  return new Promise((res) =>
    setTimeout(() => res(assignments.find((a) => a.id === Number(id))), 300)
  );
}

export function uploadSubmission(id, file) {
  return new Promise((res) =>
    setTimeout(
      () =>
        res({
          status: "success",
          receipt: `Submission received for #${id}`,
        }),
      800
    )
  );
}

export function fetchNotifications() {
  return new Promise((res) => setTimeout(() => res(notifications), 250));
}

export function fetchSubmissionsForAssignment(id) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(submissionsMock[id] || []), 500);
  });
}
