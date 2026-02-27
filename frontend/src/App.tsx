import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import StartApplication from './pages/StartApplication';
import UploadDocuments from './pages/UploadDocuments';
import ApplicationStatus from './pages/ApplicationStatus';
import AgentDashboard from './pages/AgentDashboard';
import AdminDashboard from './pages/AdminDashboard';
import { AuthProvider } from './context/AuthContext';
import { ProtectedRoute } from './components/ProtectedRoute';

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/start" element={<ProtectedRoute><StartApplication /></ProtectedRoute>} />
          <Route path="/upload" element={<ProtectedRoute><UploadDocuments /></ProtectedRoute>} />
          <Route path="/status" element={<ProtectedRoute><ApplicationStatus /></ProtectedRoute>} />
          <Route path="/agent" element={<ProtectedRoute roles={['Agent']}><AgentDashboard /></ProtectedRoute>} />
          <Route path="/admin" element={<ProtectedRoute roles={['Admin']}><AdminDashboard /></ProtectedRoute>} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
