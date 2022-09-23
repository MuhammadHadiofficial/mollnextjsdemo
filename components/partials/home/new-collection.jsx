import React, { useState, useEffect } from 'react';
import { Tab, Tabs, TabPanel, TabList } from 'react-tabs';

import ProductTwelve from '~/components/features/products/product-twelve';

import { catFilter } from '~/utils';

function NewCollection ( props ) {
    const { products = [], loading } = props;
    const [ items, setItems ] = useState( [] );
    const [ hasMore, setHasMore ] = useState( true );
    const [ loadMoreLoading, setLoadMoreLoading ] = useState( false );

    useEffect( () => {
        if ( products.length > 0 ) {
            if ( hasMore ) {
                setItems( products.slice( 0, 8 ) )
            } else setItems( products.slice( 0, 12 ) );
        }
    }, [ products, hasMore ] )

    function loadMore ( e ) {
        e.preventDefault();
        setLoadMoreLoading( true );

        setTimeout( () => {
            setHasMore( false );
            setLoadMoreLoading( false );
        }, 500 );
    }

    return (
        <Tabs defaultIndex={ 0 } selectedTabClassName="show">
            <div className="container">
                <div className="heading heading-center mb-2">
                    <h2 className="title">Recent Arrivals</h2>
                    <TabList className="nav nav-pills nav-border-anim justify-content-center">
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

                <TabPanel>
                    <div className="products">
                        <div className="row justify-content-center">
                            {
                                ( loading || items.length == 0 ) ?
                                    [ 1, 2, 3, 4, 5, 6, 7, 8 ].map( ( item, index ) =>
                                        <div className="col-6 col-md-4 col-lg-3" key={ index }>
                                            <div className="skel-pro"></div>
                                        </div>
                                    )
                                    :
                                    items.map( ( item, index ) =>
                                        <div className="col-6 col-md-4 col-lg-3" key={ index }>
                                            <ProductTwelve
                                                product={ item } />
                                        </div>
                                    )
                            }
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="products">
                        <div className="row justify-content-center">
                            {
                                ( loading || items.length == 0 ) ?
                                    [ 1, 2, 3, 4, 5, 6, 7, 8 ].map( ( item, index ) =>
                                        <div className="col-6 col-md-4 col-lg-3" key={ index }>
                                            <div className="skel-pro"></div>
                                        </div>
                                    )
                                    :
                                    catFilter( items, [ 'furniture' ] ).map( ( item, index ) =>
                                        <div className="col-6 col-md-4 col-lg-3" key={ index }>
                                            <ProductTwelve
                                                product={ item } />
                                        </div>
                                    )
                            }
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="products">
                        <div className="row justify-content-center">
                            {
                                ( loading || items.length == 0 ) ?
                                    [ 1, 2, 3, 4, 5, 6, 7, 8 ].map( ( item, index ) =>
                                        <div className="col-6 col-md-4 col-lg-3" key={ index }>
                                            <div className="skel-pro"></div>
                                        </div>
                                    )
                                    :
                                    catFilter( items, [ 'decoration' ] ).map( ( item, index ) =>
                                        <div className="col-6 col-md-4 col-lg-3" key={ index }>
                                            <ProductTwelve
                                                product={ item } />
                                        </div>
                                    )
                            }
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="products">
                        <div className="row justify-content-center">
                            {
                                ( loading || items.length == 0 ) ?
                                    [ 1, 2, 3, 4, 5, 6, 7, 8 ].map( ( item, index ) =>
                                        <div className="col-6 col-md-4 col-lg-3" key={ index }>
                                            <div className="skel-pro"></div>
                                        </div>
                                    )
                                    :
                                    catFilter( items, [ 'lighting' ] ).map( ( item, index ) =>
                                        <div className="col-6 col-md-4 col-lg-3" key={ index }>
                                            <ProductTwelve
                                                product={ item } />
                                        </div>
                                    )
                            }
                        </div>
                    </div>
                </TabPanel>
                {
                    ( loadMoreLoading || hasMore ) ?
                        <div className="load-more-container text-center mt-0 mb-7">
                            <a href="#" className="btn btn-outline-darker btn-load-more" onClick={ loadMore }>
                                <span className="mr-3">Load more products</span>
                                <i className={ `icon-refresh ${loadMoreLoading ? 'load-more-rotating' : ''}` }></i>
                            </a>
                        </div>
                        : ""
                }
            </div>
        </Tabs >
    )
}

export default NewCollection;
