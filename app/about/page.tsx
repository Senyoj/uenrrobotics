import PageHero from '@/components/PageHero'
import { breadcrumbs } from '@/data/data'
import React from 'react'

const AboutUs = () => {
  return (
    <div>
       <PageHero
        title="About Us"
        breadcrumbs={breadcrumbs}
        imageUrl="/cta-bg.webp"
      />


      <div></div>
    </div>
  )
}

export default AboutUs
