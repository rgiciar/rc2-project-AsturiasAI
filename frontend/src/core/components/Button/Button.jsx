import "../Button/Button.css"; 
import { Link } from 'react-router-dom';

export const Button = () => {
  const handleScrollToTop = (event) => {
    event.preventDefault(); 
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Link
      to="/"
      className="scroll-to-top-button"
      onClick={handleScrollToTop}
      activeClassName="scroll-to-top-button--active" 
    >
      Volver Arriba
    </Link>
  );
};
