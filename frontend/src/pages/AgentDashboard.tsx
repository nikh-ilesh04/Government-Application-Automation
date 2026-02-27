import { Navbar } from '../components/Navbar';

export default function AgentDashboard() {
  return (
    <div>
      <Navbar />
      <main className="p-6">
        <h2 className="text-2xl font-bold">Agent Dashboard</h2>
        <p>Monitor assisted submissions and applicant workflows.</p>
      </main>
    </div>
  );
}
