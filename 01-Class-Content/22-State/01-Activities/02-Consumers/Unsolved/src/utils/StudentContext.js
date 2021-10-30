import React, { createContext, useContext, useState } from 'react';

// Initialize new context for students
const StudentContext = createContext();

// We create a custom hook to provide immediate usage of the student context value (students) in other components
export const useStudentContext = () => useContext(StudentContext);

// The provider is responsible for creating our state, updating the state, and persisting values to the children
export const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState([
    {
      id: 1,
      name: 'Sayid',
      major: 'Computer Science',
    },
    {
      id: 2,
      name: 'Sun-Hwa',
      major: 'Data Science',
    },
  ]);

  // Function to add a student
  const addStudent = (student) => {
    // Check if the user forgot to enter a name
    if (!student.name) {
      return;
    }
    const id = students.length + 1;

    // We use the spread operator to fill in the details from the student object that was passed while adding the new `id`
    const newStudent = { ...student, id };

    // Update state with the students array with the newStudent
    setStudents([...students, newStudent]);
  };

  // Function to remove a student
  const removeStudent = (id) => {
    // Copy the content of the students array into our new list with the spread operator, then filter out the student that matches the `id` that was passed
    const newStudentsList = [
      ...students.filter((student) => student.id !== id),
    ];

    setStudents(newStudentsList);
  };

  // List of options for the student major
  const majors = [
    'Mathematics',
    'Computer Science',
    'Art',
    'English',
    'Political Science',
    'Journalism',
    'Engineering',
  ];

  return (
    <StudentContext.Provider
      value={{ students, addStudent, removeStudent, majors }}
    >
      {/* We render children in our component so that any descendent can access the value from the provider */}
      {children}
    </StudentContext.Provider>
  );
};
