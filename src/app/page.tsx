import { Metadata } from 'next'
import SearchWithButton from './components/SearchWithButton'
import Main from '@/components/main/Main'
import Section from '@/components/section/Section'
import Title from './components/Title'

export const metadata: Metadata = {
  title: 'Product Sharing Helper',
  description: 'you can search products, products from Dummy Json',
  openGraph: {
    title: 'Product Sharing Helper',
    description: 'you can search products, products from Dummy Json',
    url: 'https://ff29-222-232-109-6.ngrok-free.app/',
    images: 'https://ff29-222-232-109-6.ngrok-free.app/images/test3.jpg',
  },
}

const HomePage = () => {
  return (
    <Main centered>
      <Section maxWidth={584}>
        <Title>Product Search Helper</Title>
        <SearchWithButton />
      </Section>
    </Main>
  )
}

export default HomePage
