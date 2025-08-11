'use client'; 
import React, { Suspense } from 'react';
import PreferenceContent from '@/components/quiz/preference.jsx';
const Preferences = () => {
  return (
    <main>
        <Suspense fallback={<div>Loading preferences...</div>}>
        <PreferenceContent />
      </Suspense>
    </main>
  );
};

export default Preferences;
