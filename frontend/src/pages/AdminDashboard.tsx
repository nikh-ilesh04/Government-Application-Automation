import { Navbar } from '../components/Navbar';

export default function AdminDashboard() {
  return (
    <div>
      <Navbar />
      <main className="p-6">
        <h2 className="text-2xl font-bold">Admin Dashboard</h2>
        <p>View analytics, retry statistics, and submission trends.</p>
      </main>
    </div>
  );
}
