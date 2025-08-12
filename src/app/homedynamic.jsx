'use client';

import dynamic from 'next/dynamic';

// This new client component dynamically imports HomeClient.js
// The `ssr: false` is now safely inside a client component.
const HomeClient = dynamic(() => import('./homeclient'), { ssr: false });

export default function HomeDynamic() {
  return <HomeClient />;
}
