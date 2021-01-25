import React from 'react'
import './styles.css'

export const ExampleComponent = ({ tabs, activeTab }) => {
  const [currTabs, setNewTabs] = tabs
  const [activeTabIndex, setActiveTabIndex] = activeTab
  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <style>
        {`     .tabs::-webkit-scrollbar {
  display: none;
}`}
      </style>
      <div className={'tabs'} style={styles.tabs}>
        {currTabs.map((tabs, index) => {
          const isLast = index == currTabs.length - 1
          const lastStyle = isLast && { maxWidth: 280 + 45 }
          const active =
            activeTabIndex == index
              ? { ...styles.tab, ...styles.activeTab, ...lastStyle }
              : { ...styles.tab, ...lastStyle }
          const activeTabBox =
            activeTabIndex == index
              ? { ...styles.tabbox, ...styles.activeTabBox }
              : styles.tabBox

          return (
            <div
              onClick={() => setActiveTabIndex(index)}
              key={'tabs' + index}
              style={active}
            >
              <style>{`.tab-box:hover { background-color: #eeeeee14; },`}</style>
              <div
                className={'tab-box'}
                style={{ ...activeTabBox, borderRadius: 5 }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    paddingBottom: 12
                  }}
                >
                  <img
                    src={
                      'https://www.google.com/s2/favicons?domain=' + tabs.url
                    }
                    style={{ padding: '0 8px' }}
                  />
                  <span style={styles.title}>{tabs.title}</span>
                  <style>
                    {`.cross:hover {
                      stroke : red

                    }`}
                  </style>
                  <div
                    onClick={() => {
                      const tabs = currTabs.filter((e, i) => i != index)
                      setActiveTabIndex(activeTabIndex - 1)
                      setNewTabs(tabs)
                    }}
                    style={{
                      width: 10,
                      display: 'flex',
                      height: 10,
                      marginRight: 10,
                      alignSelf: 'center'
                    }}
                  >
                    <Cross active={activeTabIndex == index} />
                  </div>
                </div>
              </div>
              {activeTabIndex - 1 != index &&
                activeTabIndex != index &&
                !isLast && <div style={styles.border}></div>}
              {isLast && (
                <div
                  onClick={() => {
                    setNewTabs([
                      ...currTabs,
                      {
                        title: 'New Tab ',
                        url: 'https://rajaosama.me/',
                        id: 'tab' + index
                      }
                    ])
                  }}
                  className={'addButton'}
                  style={{ width: 45, height: 'calc(100% - 8px)' }}
                >
                  <style>
                    {`.addButton:hover{
                      background : #ffffff26
                    }`}
                  </style>
                  <PlusSvg style={{ transform: 'scale(0.35)' }} />
                </div>
              )}
            </div>
          )
        })}
      </div>
      <div style={styles.content}>H</div>
    </div>
  )
}

const PlusSvg = (props) => (
  <svg
    version='1.1'
    id='Capa_1'
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    x='0px'
    y='0px'
    viewBox='0 0 409.6 409.6'
    style={{ enableBackground: 'new 0 0 409.6 409.6' }}
    xmlSpace='preserve'
    style={{ transform: 'scale(0.35)', height: '100%', width: '100%' }}
  >
    <g>
      <g>
        <path
          style={{ fill: 'white' }}
          d='M392.533,187.733H221.867V17.067C221.867,7.641,214.226,0,204.8,0s-17.067,7.641-17.067,17.067v170.667H17.067
C7.641,187.733,0,195.374,0,204.8s7.641,17.067,17.067,17.067h170.667v170.667c0,9.426,7.641,17.067,17.067,17.067
s17.067-7.641,17.067-17.067V221.867h170.667c9.426,0,17.067-7.641,17.067-17.067S401.959,187.733,392.533,187.733z'
        />
      </g>
    </g>
  </svg>
)

const styles = {
  tabs: {
    height: '37px',
    display: 'flex',
    padding: '0 0 0 0',
    overflow: 'hidden',
    backgroundColor: 'black'
  },
  tab: {
    display: 'flex',
    flex: '1',
    minWidth: '110px',
    maxWidth: '280px',
    height: '45px',
    overflow: 'hidden'
  },
  activeTab: { zIndex: '40', position: 'relative', paddingBottom: '1px' },
  tabBox: {
    height: '50px',
    flex: '1',
    minWidth: '100px',
    borderRadius: '4px',
    display: 'flex'

    // boxShadow: '0 0 2px #fff inset'
  },
  activeTabBox: {
    border: '1px solid #ccc',
    flex: 1,

    display: 'flex',
    marginBottom: -4,
    backgroundColor: '#eee',
    borderTopLeftRadius: '5px',
    borderTopRightRadius: '5px',
    borderRadius: 5,
    boxShadow: '0 0 2px 0 #fff inset'
  },
  content: {
    zIndex: '1',
    background: '#eee',
    position: 'relative',
    height: '100%'
  },
  border: { margin: '10px 0', borderRight: '1px solid rgba(255,255,255,0.06)' },
  title: {
    color: '#45474a',
    fontSize: 12,
    flex: 1
  },
  cross: {
    flexGrow: '0',
    flexShrink: '0',
    position: 'relative',
    width: '16px',
    height: '16px',
    borderRadius: '50%',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '8px 8px'
  }
}

function Cross({ active }) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'>
      <path
        stroke={active ? 'rgba(0, 0, 0, .65)' : '#ffffffa1'}
        className={'cross'}
        strokeLinecap='square'
        strokeWidth='1.5'
        d='M0 0 L8 8 M8 0 L0 8'
      />
    </svg>
  )
}
