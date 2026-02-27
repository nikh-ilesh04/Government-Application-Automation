import { Navbar } from '../components/Navbar';
import { StepIndicator } from '../components/StepIndicator';
import { StatusTimeline } from '../components/StatusTimeline';

export default function ApplicationStatus() {
  const steps = [
    { stepName: 'start', status: 'COMPLETED' },
    { stepName: 'validate', status: 'PENDING' }
  ];

  return (
    <div>
      <Navbar />
      <main className="p-6 space-y-4">
        <h2 className="text-2xl font-bold">Application Status</h2>
        <StepIndicator state="Draft" />
        <StatusTimeline steps={steps} />
      </main>
    </div>
  );
}
