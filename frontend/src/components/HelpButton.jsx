import React from 'react';
import { HelpCircle } from 'lucide-react';

export default function HelpButton() {
  return (
    <button
      type="button"
      className="aurora-btn fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium"
    >
      <HelpCircle className="h-4 w-4" />
      Help &amp; answers
    </button>
  );
}
