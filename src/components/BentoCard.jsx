// src/components/BentoCard.js
import { Card } from 'primereact/card';

export default function BentoCard({ title, content }) {
  return (
    <div className="p-4 m-2 bg-white rounded-lg shadow-lg">
      <Card title={title} className="w-full">
        <p className="text-gray-700">{content}</p>
      </Card>
    </div>
  );
}
