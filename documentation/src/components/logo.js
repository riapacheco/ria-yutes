import React from 'react';
import dark from '../../static/img/dark-logo.png';
import light from '../../static/img/light-logo.png';

// Example of using theme context to manage state

// Otherwise I am not using this component

function Logo({dark, light}) {
  return (
    <div>
      <img src={light | dark} />
    </div>
  );
}

export default Logo;
import React from 'react';
import useThemeContext from '@theme/hooks/useThemeContext';

const ThemedLogo = () => {
  const {isDarkTheme, setLightTheme, setDarkTheme} = useThemeContext();

  return isDarkTheme ? <Logo src={dark} /> : <Logo src={light} />;
};

export default ThemedLogo;
