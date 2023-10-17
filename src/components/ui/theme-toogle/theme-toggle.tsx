import { useState } from 'react'
import * as ToggleRoot from '@radix-ui/react-toggle'
import { Sun } from '../../../assets/icons/Sun.tsx'
import { Moon } from '../../../assets/icons/Moon.tsx'

import s from './theme-toogle.module.scss'

export const ThemeToggle = () => {
  const [isLight, setIsLight] = useState<boolean>(false)

  const handleThemeChanged = (isDark: boolean) => {
    document.body.classList.toggle('dark-mode', isDark)
    setIsLight(!isLight)
  }

  return (
    <>
      <ToggleRoot.Root
        onPressedChange={handleThemeChanged}
        className={s.Toggle}
        aria-label="Toggle italic"
      >
        {isLight ? <Moon /> : <Sun />}
      </ToggleRoot.Root>
    </>
  )
}
