'use client'; 
import React from 'react';
import PreferenceContent from '../../components/quiz/preference';

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
