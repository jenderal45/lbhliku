import { useEffect, useState, useRef } from "react";

const stats = [
  { value: 12, suffix: "", label: "KANTOR & POS LBH LIKU" },
  { value: 180, suffix: "+", label: "PENGABDI BANTUAN HUKUM" },
  { value: 5000, suffix: "+", label: "KLIEN PENCARI KEADILAN" },
];

function useCountUp(end: number, duration: number, start: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setCount(Math.floor(eased * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, start]);

  return count;
}

function StatItem({
  value,
  suffix,
  label,
  start,
}: {
  value: number;
  suffix: string;
  label: string;
  start: boolean;
}) {
  const count = useCountUp(value, 2000, start);

  return (
    <div className="text-center">
      <div className="text-5xl lg:text-6xl font-bold text-white mb-2">
        {count.toLocaleString()}
        {suffix}
      </div>
      <p className="text-white/80 text-sm font-medium tracking-wider">
        {label}
      </p>
    </div>
  );
}

export default function Statistik() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="statistik"
      ref={sectionRef}
      className="py-16 lg:py-20 bg-[#1B5E3B]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10 lg:gap-16">
          {stats.map((stat) => (
            <StatItem
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              start={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
