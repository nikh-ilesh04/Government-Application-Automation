import { Navbar } from '../components/Navbar';
import { VoiceAssistButton } from '../components/VoiceAssistButton';

export default function Dashboard() {
  return (
    <div>
      <Navbar />
      <main className="p-6 space-y-4">
        <h2 className="text-3xl font-semibold">Citizen Dashboard</h2>
        <p>Manage your government applications with workflow tracking and eSign simulation.</p>
        <VoiceAssistButton />
      </main>
    </div>
  );
}
