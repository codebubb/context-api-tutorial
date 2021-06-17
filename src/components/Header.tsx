import { useContext } from "react";
import { ThemeContext } from "../App";
import { AppTheme } from "../AppTheme";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
    const { theme } = useContext(ThemeContext);
    const headerStyle: AppTheme = {
        dark: {
            backgroundColor: 'black',
            color: 'white',
        },
        light: {
            backgroundColor: '#e0e0e0',
            color: 'black',
        },
        common: {
            transition: 'all 1s ease',
        }
    };

    const themeStyle = {
        ...(theme === 'light' ? headerStyle.light : headerStyle.dark),
        ...headerStyle.common,
    };
    return <header style={themeStyle}>
        <span>My App [{theme}]</span>
        <ThemeToggle />
    </header>
};

export default Header;