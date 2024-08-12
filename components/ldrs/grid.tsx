import Script from 'next/script'
import React from 'react'
import { grid } from 'ldrs'

const GridAnimation = () => {
  return (
    <>
      <Script type="module" src="https://cdn.jsdelivr.net/npm/ldrs/dist/auto/grid.js"></Script>

      <l-grid
        size="220"
        speed="4.5"
        color="black"
      ></l-grid>
    </>
  )
}

export default GridAnimation
