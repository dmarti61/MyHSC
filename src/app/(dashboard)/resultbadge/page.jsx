'use client'; 
import React, { Suspense } from 'react';
import ResultContent from '../../../components/quiz/resultbadge';

const Results = () => {
  return (
    <main>
         <Suspense fallback={<div>Loading preferences...</div>}>
      <ResultContent />
    </Suspense>
    </main>
  );
};

export default Results;
