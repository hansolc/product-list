'use client'

import Button from '@/components/button/Button'
import React, { useState } from 'react'
import { button, input } from '../page.css'
import Form from '@/components/form/Form'
import { useRouter } from 'next/navigation'

const SearchWithButton = () => {
  const [q, setQ] = useState('')
  const router = useRouter()
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    router.push(`/search/${q}`)
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Input
        className={input}
        rounded
        placeholder="Search Products!"
        value={q}
        onChange={(e) => setQ(e.target.value)}
      />
      <Button className={button} rounded color="secondary">
        Search!
      </Button>
    </Form>
  )
}

export default SearchWithButton
