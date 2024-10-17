import React, { useEffect } from 'react'
import { Toggle } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import {useTheme} from "./../context/ThemeContext";


function ThemeBtn() {

    const {themeMode, setThemeMode} = useTheme();

    const handleChange = (checked, event) => {
        if(checked) {
            setThemeMode('dark');
        } else {
            setThemeMode('light')
        }
    }

    useEffect(() => {
        document.querySelector('html').classList.remove("light", "dark");
        document.querySelector('html').classList.add(themeMode);
    }, [themeMode])


  return (
    <>
        <Toggle size="lg" checkedChildren="Dark" unCheckedChildren="Light" defaultUnchecked onChange={handleChange} className="absolute top-2 right-2" />
    </>
  )
}

export default ThemeBtn