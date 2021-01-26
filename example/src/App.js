import React, { useCallback, useEffect, useState } from 'react'

import { BrowserTabs } from 'browser-tabs'
import 'browser-tabs/dist/index.css'
import { Dark, Light } from 'browser-tabs/src/theme'

const App = () => {
  const [isDark, setisDark] = useState(false)
  const toggle = useCallback(() => {
    setisDark(!isDark)
  }, [isDark])

  const defaultTabs = [
    {
      title: 'Welcome to React Browser',
      url: 'https://google.com/',
      id: 'one',
      content: (props) => {
        return (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              padding: '40px 0px'
            }}
          >
            <span
              style={{
                fontWeight: 800,
                fontSize: 75,
                lineHeight: '57px',
                color: 'rgb(2 74 179)'
              }}
            >
              RO
            </span>
            <span
              style={{
                fontSize: '21px',
                color: props.isDark ? 'rgb(193 193 193)' : '#4a4a4a'
              }}
            >
              Made with 💖
            </span>
            <span
              style={{
                textAlign: 'center',
                color: props.isDark ? 'rgb(255 255 255 / 72%)' : '#000000b8'
              }}
            >
              This Project was created for Electron and React.js, a well
              designed Browser tabs component build with REACT + Love.{' '}
            </span>
            <div style={{ display: 'flex' }}>
              <a href={'https://github.com/'}>
                <button
                  style={{
                    background: 'white',
                    height: 30,
                    width: 120,
                    letterSpacing: 2,
                    fontSize: 12
                  }}
                >
                  GITHUB
                </button>
              </a>
              <div style={{ width: 10 }} />
              <a href={'https://rajaosama.me/'}>
                <button
                  style={{
                    background: 'white',
                    height: 30,
                    width: 120,
                    letterSpacing: 2,
                    fontSize: 12
                  }}
                >
                  RAJA OSAMA
                </button>
              </a>
            </div>
          </div>
        )
      }
    },
    {
      title: 'Looking for Contributors',
      url: 'https://github.com/',
      id: 'one',
      content: (props) => (
        <div
          style={{
            height: 200,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <span
            style={{
              textAlign: 'center',
              color: props.isDark ? 'white' : 'black'
            }}
          >
            Looking for contributor to work on this project and make it better.
          </span>
        </div>
      )
    }
  ]
  const tabs = useState(defaultTabs)
  const activeTab = useState(0)

  const addTab = () => {
    activeTab[1](tabs[0].length)
    tabs[1]([
      ...tabs[0],
      {
        title: 'New Tab ',
        url: 'https://rajaosama.me/',
        id: 'tab1',
        content: (props) => (
          <span style={{ color: props.isDark ? 'white' : 'black' }}>
            New Tab Opened
          </span>
        )
      }
    ])
  }

  return (
    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
      <div
        style={{
          padding: 20,
          height: '100%',
          backgroundColor: isDark ? '#1c1c1c' : '#f1f3f4'
        }}
      >
        <BrowserTabs
          onAddTabPress={addTab}
          theme={isDark ? Dark : Light}
          style={{}}
          injectProps={{ isDark, setisDark }}
          activeTab={activeTab}
          tabs={tabs}
        />
        <div
          style={{
            position: 'absolute',
            bottom: 30,
            right: 30
          }}
        >
          <button
            onClick={toggle}
            style={{ background: 'white', height: 30, width: 100 }}
          >
            {isDark ? 'Light theme' : 'Dark Theme'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
