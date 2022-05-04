import React from 'react';
import App from './components/App';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { createRoot } from 'react-dom/client';
import AddMovie from './components/AddMovie';
import EditMovie from './components/EditMovie';

createRoot(document.getElementById('root')).render(<BrowserRouter>
 <Routes>
      <Route path="/" element={<App />} />
      <Route path="add" element={<AddMovie />} />
      <Route path="edit" element={<EditMovie />} >
      <Route path=":id" element={<EditMovie />} />
      </Route>
      <Route
      path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
      }
    />
    </Routes>
</BrowserRouter>);
