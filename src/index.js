import React, { useEffect, useState } from 'react'
import './styles.css'

export const BrowserTabs = ({
  tabs,
  activeTab,
  style = {},
  theme,
  onAddTabPress,
  injectProps
}) => {
  const [currTabs, setNewTabs] = tabs
  const {
    tabStyle = {},
    tabsStyle = {},
    contentStyle = {},
    activeTabsStyle = {},
    activeTabBoxStyle = {},
    tabBoxStyle = {},
    labelStyle = {}
  } = style
  const [activeTabIndex, setActiveTabIndex] = activeTab
  const styles = themedStyle(theme)
  console.log({ injectProps })
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 7,
        overflow: 'hidden'
      }}
    >
      <style>
        {`     .tabs::-webkit-scrollbar {
  display: none;
}`}
      </style>
      <div className={'tabs'} style={{ ...styles.tabs, tabsStyle }}>
        {tabsLoop(
          currTabs,
          activeTabIndex,
          tabStyle,
          activeTabsStyle,
          tabBoxStyle,
          activeTabBoxStyle,
          setActiveTabIndex,
          setNewTabs,
          onAddTabPress,
          theme
        )}
      </div>
      {currTabs.map((tabs, index) => (
        <div
          style={{
            ...styles.content,
            display: index != activeTabIndex && 'none'
          }}
        >
          {<tabs.content {...injectProps} />}
        </div>
      ))}
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
          style={{ fill: props.theme.addButton }}
          d='M392.533,187.733H221.867V17.067C221.867,7.641,214.226,0,204.8,0s-17.067,7.641-17.067,17.067v170.667H17.067
C7.641,187.733,0,195.374,0,204.8s7.641,17.067,17.067,17.067h170.667v170.667c0,9.426,7.641,17.067,17.067,17.067
s17.067-7.641,17.067-17.067V221.867h170.667c9.426,0,17.067-7.641,17.067-17.067S401.959,187.733,392.533,187.733z'
        />
      </g>
    </g>
  </svg>
)

const themedStyle = (theme) => ({
  tabs: {
    height: '34px',
    display: 'flex',
    padding: '0 0 0 0',
    overflow: 'hidden',
    overflowX: 'auto',
    backgroundColor: theme.topBarColor,
    paddingLeft: 4,
    paddingTop: 4
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
    display: 'flex',
    backgroundColor: theme.tabColor

    // boxShadow: '0 0 2px #fff inset'
  },
  activeTabBox: {
    // border: '1px solid #ccc',
    flex: 1,

    display: 'flex',
    marginBottom: -4,
    backgroundColor: theme.activeTabColor,
    // borderTopLeftRadius: '5px',
    // borderTopRightRadius: '5px',
    borderRadius: 5
    // boxShadow: '0 0 2px 0 #fff inset'
  },
  content: {
    zIndex: '1',
    background: theme.contentColor,
    position: 'relative',
    padding: 20
  },
  border: {
    margin: '8px 0',
    height: 19,
    borderRight: '1px solid rgb(0 0 0 / 6%)'
  },
  title: {
    color: theme.labelColor,
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
})

function tabsLoop(
  currTabs,
  activeTabIndex,
  tabStyle,
  activeTabsStyle,
  tabBoxStyle,
  activeTabBoxStyle,
  setActiveTabIndex,
  setNewTabs,
  onAddTabPress,
  theme
) {
  return currTabs.map((tabs, index) => {
    const styles = themedStyle(theme)
    const isLast = index == currTabs.length - 1
    const lastStyle = isLast && { maxWidth: 280 + 45 }
    const active =
      activeTabIndex == index
        ? {
            ...styles.tab,
            ...styles.activeTab,
            ...lastStyle,
            ...tabStyle,
            ...activeTabsStyle
          }
        : { ...styles.tab, ...lastStyle, ...tabStyle }
    const activeTabBox =
      activeTabIndex == index
        ? {
            ...styles.tabbox,
            ...styles.activeTabBox,
            ...tabBoxStyle,
            ...activeTabBoxStyle
          }
        : { ...styles.tabBox, ...tabBoxStyle }

    return (
      <div key={'tabs' + index} style={active}>
        <Tab
          activeTabBox={activeTabBox}
          setActiveTabIndex={setActiveTabIndex}
          index={index}
          tabs={tabs}
          theme={theme}
          currTabs={currTabs}
          activeTabIndex={activeTabIndex}
          setNewTabs={setNewTabs}
        />
        {activeTabIndex - 1 != index && activeTabIndex != index && !isLast && (
          <div style={styles.border}></div>
        )}
        {isLast && (
          <AddButton
            theme={theme}
            setActiveTabIndex={setActiveTabIndex}
            setNewTabs={setNewTabs}
            currTabs={currTabs}
            index={index}
            onAddTabPress={onAddTabPress}
          />
        )}
      </div>
    )
  })
}

function Cross({ active, theme }) {
  const styles = themedStyle(theme)
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'>
      <path
        stroke={
          active ? theme.cancelActiveButtonColor : theme.cancelButtonColor
        }
        className={'cross'}
        strokeLinecap='square'
        strokeWidth='1.5'
        d='M0 0 L8 8 M8 0 L0 8'
      />
    </svg>
  )
}

function AddButton({
  setActiveTabIndex,
  setNewTabs,
  currTabs,
  index,
  theme,
  onAddTabPress
}) {
  const [hover, sethover] = useState(false)
  const styles = themedStyle(theme)
  return (
    <div
      onMouseEnter={() => sethover(true)}
      onMouseLeave={() => sethover(false)}
      onClick={onAddTabPress}
      style={{
        width: 45,
        height: 'calc(100% - 8px)',
        background: hover ? theme.addButtonHoverColor : theme.addButtonColor
      }}
    >
      <PlusSvg
        theme={theme}
        style={{
          transform: 'scale(0.35)'
        }}
      />
    </div>
  )
}

function Tab({
  activeTabBox,
  setActiveTabIndex,
  index,
  tabs,
  theme,
  activeTabIndex,
  setNewTabs,
  currTabs
}) {
  const styles = themedStyle(theme)
  const [hover, sethover] = useState(false)
  // useEffect(() => {
  //   console.log({ hover })
  // }, [hover])

  const hovered = () =>
    activeTabIndex != index &&
    hover && {
      backgroundColor: theme.tabHoverColor,
      borderRadius: 4
    }
  return (
    <div
      onMouseEnter={() => sethover(true)}
      onMouseLeave={() => sethover(false)}
      style={{ ...activeTabBox, borderRadius: 5, ...hovered() }}
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
        <div
          onClick={() => setActiveTabIndex(index)}
          style={{
            cursor: 'pointer',
            display: 'flex',
            flex: 1,
            height: '100%',
            alignItems: 'center'
          }}
        >
          <img
            src={'https://www.google.com/s2/favicons?domain=' + tabs.url}
            style={{
              padding: '0 8px'
            }}
          />
          <span
            style={{
              ...styles.title,
              color: 'rgb(113 113 113)',
              lineHeight: '22px',
              height: 19,
              overflow: 'hidden'
            }}
          >
            {tabs.title}
          </span>
        </div>
        <style>
          {`.cross:hover {
                      stroke : red

                    }`}
        </style>
        <div
          onClick={() => {
            if (currTabs.length == 1) return
            const tabs = currTabs.filter((e, i) => i != index)
            setActiveTabIndex(
              activeTabIndex == 0 ? activeTabIndex + 1 : activeTabIndex - 1
            )
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
          <Cross theme={theme} active={activeTabIndex == index} />
        </div>
      </div>
    </div>
  )
}
