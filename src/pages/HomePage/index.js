import React from 'react'
import styled from 'styled-components'

import banner from '../../assets/banner.png'

const Banner = styled.img`
  width: 100%;
`

function HomePage() {
  return (
    <div>
      <Banner src={banner} alt="banner" />
    </div>
  )
}

export default HomePage
