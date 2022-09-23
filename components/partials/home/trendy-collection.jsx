import { Tab, Tabs, TabPanel, TabList } from 'react-tabs';

import OwlCarousel from '~/components/features/owl-carousel';
import ProductTwelve from '~/components/features/products/product-twelve';

import { catFilter } from '~/utils';
import { productSlider } from '~/utils/data';

function TrendyCollection ( props ) {
    const { products = [], loading = false } = props;

    return (
        <Tabs defaultIndex={ 0 } selectedTabClassName="show" >
            <div className="container trendy-collection">
                <div className="heading heading-center mb-3">
                    <h2 className="title-lg">Trendy Products</h2>
                    <TabList className="nav nav-pills nav-border-anim nav-big justify-content-center mb-3">
                        <Tab className="nav-item">
                            <span className="nav-link">All</span>
                        </Tab>

                        <Tab className="nav-item">
                            <span className="nav-link">Furniture</span>
                        </Tab>

                        <Tab className="nav-item">
                            <span className="nav-link">Decoration</span>
                        </Tab>
                        <Tab className="nav-item">
                            <span className="nav-link">Lighting</span>
                        </Tab>
                    </TabList>
                </div>
            </div>

            <div className="container">
                <TabPanel>
                    {
                        loading ?
                            <OwlCarousel adClass="owl-simple carousel-with-shadow" options={ productSlider }>
                                {
                                    [ 1, 2, 3, 4, 5, 6 ].map( ( item, index ) =>
                                        <div className="skel-pro" key={ index }></div>
                                    )
                                }
                            </OwlCarousel>
                            :
                            <OwlCarousel adClass="owl-simple carousel-with-shadow" options={ productSlider }>
                                {
                                    products.slice( 0, 6 ).map( ( item, index ) =>
                                        <ProductTwelve
                                            product={ item }
                                            key={ index }
                                        />
                                    )
                                }
                            </OwlCarousel>
                    }
                </TabPanel>
                <TabPanel>
                    {
                        loading ?
                            <OwlCarousel adClass="owl-simple carousel-with-shadow" options={ productSlider }>
                                {
                                    [ 1, 2, 3, 4, 5, 6 ].map( ( item, index ) =>
                                        <div className="skel-pro" key={ index }></div>
                                    )
                                }
                            </OwlCarousel>
                            :
                            <OwlCarousel adClass="owl-simple carousel-with-shadow" options={ productSlider }>
                                {
                                    catFilter( products, [ 'furniture' ] ).map( ( item, index ) =>
                                        <ProductTwelve
                                            product={ item }
                                            key={ index } />
                                    )
                                }
                            </OwlCarousel>
                    }
                </TabPanel>

                <TabPanel>
                    {
                        loading ?
                            <OwlCarousel adClass="owl-simple carousel-with-shadow" options={ productSlider }>
                                {
                                    [ 1, 2, 3, 4, 5, 6 ].map( ( item, index ) =>
                                        <div className="skel-pro" key={ index }></div>
                                    )
                                }
                            </OwlCarousel>
                            :
                            <OwlCarousel adClass="owl-simple carousel-with-shadow" options={ productSlider }>
                                {
                                    catFilter( products, [ 'decoration' ] ).map( ( item, index ) =>
                                        <ProductTwelve
                                            product={ item }
                                            key={ index } />
                                    )
                                }
                            </OwlCarousel>
                    }
                </TabPanel>

                <TabPanel>
                    {
                        loading ?
                            <OwlCarousel adClass="owl-simple carousel-with-shadow" options={ productSlider }>
                                {
                                    [ 1, 2, 3, 4, 5, 6 ].map( ( item, index ) =>
                                        <div className="skel-pro" key={ index }></div>
                                    )
                                }
                            </OwlCarousel>
                            :
                            <OwlCarousel adClass="owl-simple carousel-with-shadow" options={ productSlider }>
                                {
                                    catFilter( products, [ 'lighting' ] ).map( ( item, index ) =>
                                        <ProductTwelve
                                            product={ item }
                                            key={ index } />
                                    )
                                }
                            </OwlCarousel>
                    }
                </TabPanel>
            </div>
        </Tabs>
    )
}

export default TrendyCollection;
