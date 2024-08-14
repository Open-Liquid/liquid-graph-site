import Script from 'next/script'
import React from 'react'

const QuantumAnimation = () => {
  return (
    <>
      <Script type="module" src="https://cdn.jsdelivr.net/npm/ldrs/dist/auto/quantum.js"></Script>

      <l-quantum
        size="200"
        speed="4.75"
        color="#94a3b8"
      ></l-quantum>
    </>
  )
}

export default QuantumAnimation
