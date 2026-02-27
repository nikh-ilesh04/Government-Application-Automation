import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export function Navbar() {
  const { logout, role } = useAuth();
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <div className="space-x-4">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/start">Start Application</Link>
        {role === 'Agent' && <Link to="/agent">Agent</Link>}
        {role === 'Admin' && <Link to="/admin">Admin</Link>}
      </div>
      <button onClick={logout}>Logout</button>
    </nav>
  );
}
