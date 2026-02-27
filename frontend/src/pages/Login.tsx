import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const { login } = useAuth();
  const nav = useNavigate();
  const [email, setEmail] = useState('admin@govassist.local');
  const [password, setPassword] = useState('admin123');

  return (
    <div className="max-w-md mx-auto mt-16 p-6 border rounded space-y-4">
      <h1 className="text-2xl font-bold">GovAssist Login</h1>
      <input className="w-full border p-2" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input className="w-full border p-2" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={async () => { await login(email, password); nav('/dashboard'); }}>Login</button>
    </div>
  );
}
