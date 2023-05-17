const Navigation = () => {
    const handleNavigationClick = (section) => {
      // Handle navigation click logic
    };
  
    return (
      <nav>
        <ul>
          <li onClick={() => handleNavigationClick('about')}>About Me</li>
          <li onClick={() => handleNavigationClick('portfolio')}>Portfolio</li>
          <li onClick={() => handleNavigationClick('contact')}>Contact</li>
          <li onClick={() => handleNavigationClick('resume')}>Resume</li>
        </ul>
      </nav>
    );
  };
  
  export default Navigation;