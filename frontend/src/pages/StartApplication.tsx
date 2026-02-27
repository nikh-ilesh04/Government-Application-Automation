import { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { applicationService } from '../services/application.service';

export default function StartApplication() {
  const [result, setResult] = useState<any>(null);
  return (
    <div>
      <Navbar />
      <main className="p-6 space-y-4">
        <h2 className="text-2xl font-bold">Start New Application</h2>
        <button className="bg-green-600 text-white px-4 py-2 rounded" onClick={async () => setResult((await applicationService.start('Scholarship')).data)}>Create Draft</button>
        {result && <pre className="bg-slate-100 p-3 rounded">{JSON.stringify(result, null, 2)}</pre>}
      </main>
    </div>
  );
}
