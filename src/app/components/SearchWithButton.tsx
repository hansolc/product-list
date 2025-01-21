'use client'

import Button from '@/components/button/Button'
import Input from '@/components/input/Input'
import React from 'react'
import { button, input } from '../page.css'

const SearchWithButton = () => {
  return (
    <>
      <Input className={input} rounded placeholder="Search Products!" />
      <Button className={button} rounded color="secondary">
        Search!
      </Button>
    </>
  )
}

export default SearchWithButton
