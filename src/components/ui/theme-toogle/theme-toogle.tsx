import { useState } from 'react'
import * as RadixToggle from '@radix-ui/react-toggle'
import { Sun } from '../../../assets/icons/Sun.tsx'
import { Moon } from '../../../assets/icons/Moon.tsx'

import s from './theme-toogle.module.scss'

export const ThemeToogle = () => {
  const [isLight, setIsLignt] = useState<boolean>(false)

  const handleThemeChanged = (isDark: boolean) => {
    document.body.classList.toggle('dark-mode', isDark)
    setIsLignt(!isLight)
  }

  return (
    <>
      <RadixToggle.Root
        onPressedChange={handleThemeChanged}
        className={s.Toggle}
        aria-label="Toggle italic"
      >
        {isLight ? <Moon /> : <Sun />}
      </RadixToggle.Root>
    </>
  )
}