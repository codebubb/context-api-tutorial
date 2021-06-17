import { useContext } from "react";
import { ThemeContext } from "../App";
import { AppTheme } from "../AppTheme";

const Strapline = () => {
    const { theme } = useContext(ThemeContext);

    const straplineStyle: AppTheme = {
        dark: {
            color: '#aaa',
        },
        light: {
            color: '#111',
        },
        common: {
            fontWeight: 400,
            transition: 'all 1s ease',
            fontSize: '1.5rem',
        }
    };

    const themeStyle = {
        ...(theme === 'light' ? straplineStyle.light : straplineStyle.dark),
        ...straplineStyle.common,
    };

    return <p style={themeStyle}>
        Enjoy our <strong>premium coffee</strong> at one of our relaxing city locations.
    </p>
};

export default Strapline;