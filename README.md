# react-browser-tabs 🖥

> Browser like tabs for you custom browser, you can use this in Electron App. 🎉

![react-browser-tab](https://i.imgur.com/ZiK6XbQ.png)

### when to use this ?

If one day you wake up 🌄 and decided to create your own browser 💻 with some javascript frameworks 🦾, this library will come in handy 🤟.

[![NPM](https://img.shields.io/npm/v/browser-tabs.svg)](https://www.npmjs.com/package/browser-tabs) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-browser-tabs
```

## Usage

```jsx
import React, { useState } from 'react'

import MyComponent from 'react-browser-tabs'

const Example = () => {
  const defaultTabs = [
    {
      title: 'getting started',
      url: 'https://google.com/', // auto fetch url
      id: 'tab1',
      content: (props) => <span>Hello World</span>
    }
  ]
  const tabs = useState(defaultTabs)
  const activeTab = useState(0)

  return (
    <BrowserTabs
      onAddTabPress={addTab} // CallBack for a Tab Add
      theme={isDark ? Dark : Light} // Theming
      injectProps={{ isDark, setisDark }} // custom props that you needed it to be injected.
      activeTab={activeTab} // keep a track of active index via state.
      tabs={tabs} // tabs
    />
  )
}
```

## Add Tabs

```jsx
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
```

it automatically get the favicon for your desire app, just pass the url as it is.

## License

MIT © [rajaosama](https://github.com/rajaosama)
