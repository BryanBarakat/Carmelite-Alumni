import React from 'react'
import Carousel from '../Carousel/Carousel';
import { Info } from '../Info/Info';
import Form from '../Form/Form';

export const Landing = () => {
  return (
    <div>
        <Carousel></Carousel>
        <Info></Info>
        <Form></Form>
    </div>
  )
}

export default Landing;