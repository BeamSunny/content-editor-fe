// Lib
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

// Include in project
import type { RootState } from '@states/store'

type Props = {
  children: JSX.Element | JSX.Element[]
}

// This component for control theme of your website.
// You can save theme Day or Night in localStorage, redux for select style you want.
const StyleVariable: React.FC<Props> = ({ children }) => {
  const theme = useSelector((state: RootState) => state.theme.theme)

  const variable = {
    '--breakpoint-xs': '340px',
    '--breakpoint-sm': '500px',
    '--breakpoint-md': '767px',
    '--breakpoint-lg': '991px',
    '--breakpoint-xl': '1199px',

    '--border-radius-sm': '0.2em',
    '--border-radius-md': '0.7em',
    '--border-radius-lg': '1em',

    '--gap-sm': '0.2em',
    '--gap-md': '0.7em',
    '--gap-lg': '1em',

    '--z-index-normal': '1',
    '--z-index-menu': '500',
    '--z-index-nav': '800',
    '--z-index-backdrop': '900',
    '--z-index-modal': '1000',
    '--z-index-modalConfirm': '1500',
    '--z-index-loading': '2000',
  }

  const colorsLight = {
    '--color-primary-main': '#6F5EE0',
    '--color-primary-second': '#DBD7F7',
    '--color-primary-border': '#B7AFEF',
    '--color-primary-hover': '#5F4EC',
    '--color-primary-pressed': '#4032A1',
    '--color-secondary-main': '#DF3F69',
    '--color-secondary-second': '#F7CFD9',
    '--color-secondary-border': '#EF9FB4',
    '--color-secondary-hover': '#C9325',
    '--color-secondary-pressed': '#AF2448',
    '--color-state-info': '#2F80ED',
    '--color-state-info-second': '#C7DBF7',
    '--color-state-success': '#27AE60',
    '--color-state-success-second': '#C5E7D3',
    '--color-state-warning': '#FFD43E',
    '--color-state-warning-second': '#FBF1CB',
    '--color-state-error': '#EB5757',
    '--color-state-error-second': '#F6D1D1',
    '--color-black-1': '#1E1E1E',
    '--color-black-2': '#3D3D3D',
    '--color-black-3': '#555555',
    '--color-text': '#000000',
    '--color-background': '#FFFFFF',
    '--color-gray-1': '#FAFAFA',
    '--color-gray-2': '#E3E3E8',
    '--color-gray-3': '#C5C5C5',
    '--color-gray-4': '#7F7F85',
    '--color-gray-5': '#9E9E9E',
  } as React.CSSProperties

  const colorsDark = {
    '--color-primary-main': '#8273E4',
    '--color-primary-second': '#333455',
    '--color-primary-border': '#4F4781',
    '--color-primary-hover': '#6758C8',
    '--color-primary-pressed': '#4638A5',
    '--color-secondary-main': '#E3557B',
    '--color-secondary-second': '#4C2D3B',
    '--color-secondary-border': '#80384D',
    '--color-secondary-hover': '#C34063',
    '--color-secondary-pressed': '#AD2B4E',
    '--color-state-info': '#4794FD',
    '--color-state-info-second': '#253C5C',
    '--color-state-success': '#2CC36B',
    '--color-state-success-second': '#1E4837',
    '--color-state-warning': '#FFDB57',
    '--color-state-warning-second': '#524E32',
    '--color-state-error': '#EE6E6E',
    '--color-state-error-second': '#4F3338',
    '--color-black-1': '#FFFFFF',
    '--color-black-2': '#272727',
    '--color-black-3': '#121212',
    '--color-text': '#FFFFFF',
    '--color-background': '#1C1C1E',
    '--color-gray-1': '#000000',
    '--color-gray-2': '#1C1C1E',
    '--color-gray-3': '#AAAAAA',
    '--color-gray-4': '#98989F',
    '--color-gray-5': '#A9A9A9',
  } as React.CSSProperties

  function selectTheam() {
    switch (theme) {
      case 'LIGHT':
        return { ...colorsLight, ...variable }

      case 'DARK':
        return { ...colorsDark, ...variable }

      default:
        return { ...colorsLight, ...variable }
    }
  }

  useEffect(() => {
    const body = document.querySelector('body')
    if (body) {
      const selectedTheme: any = selectTheam()
      Object.keys(selectedTheme).forEach((key) => {
        body.style.setProperty(key, selectedTheme[key])
      })
    }
  }, [theme])

  return <>{children}</>
}

export default StyleVariable
