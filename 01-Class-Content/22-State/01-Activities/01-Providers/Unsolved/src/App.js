import React, { useEffect } from 'react';
import { StudentProvider } from './utils/StudentContext';
import StudentList from './components/StudentList';
import './jass.css';
import './app.css';

function App() {
  const title = ' Providers';
  useEffect(() => {
    document.title = title;
  }, []);

  return (
    <div className="app">
      <h1>State</h1>
      <h4 style={{ color: 'lightseagreen' }}>{title}</h4>

      <StudentProvider>
        <StudentList />
      </StudentProvider>
    </div>
  );
}

export default App;
