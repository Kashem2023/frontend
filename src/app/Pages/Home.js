import React from 'react'
import Brand from '../Components/Brand'
import Categories from '../Components/Categories'
import Cms from '../Components/Cms'
import Products from '../Components/Product/Products'
import Services from '../Components/Services'
import Slider from '../Components/Slider'
import View from '../Components/View'

const Home = () => {

    return (
        <React.Fragment>
            <View />
            <Slider />
            <Categories />
            <Services />
            <Products />
            <Cms />
            <Brand />
        </React.Fragment>
    )
}

export default Home