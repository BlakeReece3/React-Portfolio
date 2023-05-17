const Navigation = () => {
    const handleNavigationClick = (section) => {
      // Handle navigation click logic
    };
  
    return (
      <nav>
        <ul>
          <li onClick={() => handleNavigationClick('About')}>About Me</li>
          <li onClick={() => handleNavigationClick('Portfolio')}>Portfolio</li>
          <li onClick={() => handleNavigationClick('Contact')}>Contact</li>
          <li onClick={() => handleNavigationClick('Resume')}>Resume</li>
        </ul>
      </nav>
    );
  };
  
  export default Navigation;