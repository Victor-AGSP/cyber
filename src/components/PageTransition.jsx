import React, { useEffect, useState } from 'react';

export default function PageTransition({ children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // trigger entry animation
    setMounted(true);
    return () => setMounted(false);
  }, []);

  return (
    <div className={`page-transition ${mounted ? 'enter' : ''}`}>
      {children}
    </div>
  );
}
