import React from 'react'
import { loader, loaderContainer } from './Loader.css'

interface LoaderProps {
  msg?: string
}

const Loader = ({ msg = 'Please wait...' }: LoaderProps) => {
  return (
    <div className={loaderContainer}>
      <div className={loader}></div>
      {msg && <span style={{ paddingLeft: '1%' }}>{msg}</span>}
    </div>
  )
}

export default Loader
