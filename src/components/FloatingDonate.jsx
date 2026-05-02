import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { FaHeart } from 'react-icons/fa';

/**
 * Floating donation shortcut that hides while the donation section is visible.
 */
function FloatingDonate() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const donation = document.getElementById('donation');
    if (!donation) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => setHidden(entry.isIntersecting),
      { threshold: 0.35 },
    );

    observer.observe(donation);
    return () => observer.disconnect();
  }, []);

  if (hidden) return null;

  return (
    <Link to="donation" smooth duration={500} offset={-78} className="floating-donate" aria-label="Donate Now">
      <FaHeart />
      <span>Donate Now</span>
    </Link>
  );
}

export default FloatingDonate;
