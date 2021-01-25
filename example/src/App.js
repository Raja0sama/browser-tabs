import React, { useEffect, useState } from 'react'

import { ExampleComponent } from 'browser-tabs'
import 'browser-tabs/dist/index.css'

const App = () => {
  const defaultTabs = [
    {
      title: 'Google ',
      url: 'https://google.com/',
      id: 'one'
    },
    {
      title: 'Raja Osama',
      url: 'https://rajaosama.me/',
      id: 'one'
    }
  ]
  const tabs = useState(defaultTabs)
  const activeTab = useState(1)

  return <ExampleComponent activeTab={activeTab} tabs={tabs} />
}

export default App
