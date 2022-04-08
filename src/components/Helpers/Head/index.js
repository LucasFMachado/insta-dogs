import React, { useEffect } from 'react'

const Head = ({ title }) => {
  useEffect(() => {
    document.title = `${title} | Dogs`
  }, [title])

  return <></>
}

export default Head
