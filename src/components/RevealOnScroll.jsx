import React, { useEffect, useRef, useState } from 'react';

export default function RevealOnScroll({
  children,
  rootMargin = '0px 0px -10% 0px',
  threshold = 0.1,
  stagger = false,
  staggerDelay = 100,
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setVisible(true);
          else setVisible(false);
        });
      },
      { root: null, rootMargin, threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [rootMargin, threshold]);

  const renderChildren = () => {
    if (!stagger) return children;
    const childArray = React.Children.toArray(children);
    return childArray.map((child, idx) => {
      const delay = visible ? `${idx * staggerDelay}ms` : '0ms';
      const existingStyle = child?.props?.style || {};
      const newStyle = { ...existingStyle, transitionDelay: delay };
      return React.cloneElement(child, { style: newStyle, key: child.key || idx });
    });
  };

  const className = `reveal-on-scroll ${visible ? 'visible' : ''} ${stagger ? 'stagger' : ''}`.trim();

  return (
    <div ref={ref} className={className}>
      {renderChildren()}
    </div>
  );
}
