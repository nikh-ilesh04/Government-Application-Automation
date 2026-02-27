export function StatusTimeline({ steps }: { steps: Array<{ stepName: string; status: string }> }) {
  return (
    <ul className="space-y-2">
      {steps.map((s, i) => (
        <li key={i} className="border p-2 rounded">{s.stepName} - {s.status}</li>
      ))}
    </ul>
  );
}
