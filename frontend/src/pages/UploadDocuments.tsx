import { Navbar } from '../components/Navbar';

export default function UploadDocuments() {
  return (
    <div>
      <Navbar />
      <main className="p-6">
        <h2 className="text-2xl font-bold">Upload Documents</h2>
        <p>Connect this page with /api/ocr/upload to complete OCR workflow.</p>
      </main>
    </div>
  );
}
