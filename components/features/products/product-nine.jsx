import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { connect } from 'react-redux';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import ALink from '~/components/features/alink';

import { actions as wishlistAction } from '~/store/wishlist';
import { actions as cartAction } from '~/store/cart';
import { actions as compareAction } from '~/store/compare';
import { actions as demoAction } from '~/store/demo';

import { isInWishlist, isInCompare } from '~/utils';

function ProductSix ( props ) {
    const router = useRouter();
    const { product, wishlist } = props;
    const [ maxPrice, setMaxPrice ] = useState( 0 );
    const [ minPrice, setMinPrice ] = useState( 99999 );

    useEffect( () => {
        let min = minPrice;
        let max = maxPrice;
        // product.variants.map( item => {
        //     if ( min > item.price ) min = item.price;
        //     if ( max < item.price ) max = item.price;
        // }, [] );

        // if ( product.variants.length == 0 ) {
        //     min = product.sale_price
        //         ? product.sale_price
        //         : product.price;
        //     max = product.price;
        // }

        setMinPrice( min );
        setMaxPrice( max );
    }, [] )

    function onCartClick ( e ) {
        e.preventDefault();
        props.addToCart( product );
    }

    function onWishlistClick ( e ) {
        e.preventDefault();
        if ( !isInWishlist( props.wishlist, product ) ) {
            props.addToWishlist( product );
        } else {
            router.push( '/pages/wishlist' );
        }
    }

    function onCompareClick ( e ) {
        e.preventDefault();
        if ( !isInCompare( props.comparelist, product ) ) {
            props.addToCompare( product );
        }
    }

    function onQuickView ( e ) {
        e.preventDefault();
        props.showQuickView( product.slug );
    }
    console.log(product)

    return (
        <div className="product product-list">
            <div className="row pr-2">
                <div className="col-lg-3 col-md-3 col-6">
                    <figure className="product-media">
                        {
                            product.new ?
                                <span className="product-label label-new">New</span>
                                : ""
                        }

                        {
                            product.sale_price ?
                                <span className="product-label label-sale">Sale</span>
                                : ""
                        }

                        {
                            product.top ?
                                <span className="product-label label-top">Top</span>
                                : ""
                        }

                        {
                            !product.stock || product.stock == 0 ?
                                <span className="product-label label-out">Out of Stock</span>
                                : ""
                        }

                        <ALink href={ `/product/default/${product.slug}` }>
                            <LazyLoadImage
                                alt="product"
                                src={ process.env.NEXT_PUBLIC_AWS_S3_BASE_URL+"/" + product.images[ 0 ].url }
                                threshold={ 500 }
                                effect="black and white"
                                wrapperClassName="product-image"
                            />
                            {
                                product.images.length >= 2 ?
                                    <LazyLoadImage
                                        alt="product"
                                        src={ process.env.NEXT_PUBLIC_AWS_S3_BASE_URL +"/"+ product.images[ 1 ].url }
                                        threshold={ 500 }
                                        effect="black and white"
                                        wrapperClassName="product-image-hover"
                                    />
                                    : ""
                            }
                        </ALink>
                    </figure>
                </div>
                <div className="col-md-6 order-last">
                    <div className="product-body product-action-inner">
                        <div className="product-cat">
                            {
                                product.categories.map( ( item, index ) => (
                                    <React.Fragment key={ item + '-' + index }>
                                        <ALink href={ { pathname: '/shop/sidebar/list', query: { category: item } } }>
                                            { item }
                                        </ALink>
                                        { index < product.categories.length - 1 ? ', ' : "" }
                                    </React.Fragment>
                                ) )
                            }
                        </div>

                        <h3 className="product-title">
                            <ALink href={ `/product/default/${product._id}` }>{ product.title }</ALink>
                        </h3>

                        <div className="product-content">
                            <p>{ product.short_desc }</p>
                        </div>

                        {/* {
                            product.variants.length > 0 ?
                                <div className="product-nav product-nav-dots">
                                    <div className="row no-gutters">
                                        {
                                            product.variants.map( ( item, index ) => (
                                                <ALink href="#" style={ { backgroundColor: item.color } } key={ index }><span className="sr-only">Color Name</span></ALink>
                                            ) )
                                        }
                                    </div>
                                </div>
                                : ""
                        } */}
                    </div>
                </div>

                <div className="col-md-3 col-6 order-md-last order-lg-last">
                    <div className="product-list-action">
                        {
                            !product.stock || product.stock == 0 ?
                                <div className="product-price">
                                    <span className="out-price">${ parseFloat(product.price).toFixed( 2 ) }</span>
                                </div>
                                :
                                minPrice == maxPrice ?
                                    <div className="product-price">${ minPrice.toFixed( 2 ) }</div>
                                    :
                                    product?.variants?.length == 0 ?
                                        <div className="product-price">
                                            <span className="new-price">${ minPrice.toFixed( 2 ) }</span>
                                            <span className="old-price">${ maxPrice.toFixed( 2 ) }</span>
                                        </div>
                                        :
                                        <div className="product-price">${ minPrice.toFixed( 2 ) }&ndash;${ maxPrice.toFixed( 2 ) }</div>
                        }

                        <div className="ratings-container">
                            <div className="ratings">
                                <div className="ratings-val" style={ { width: product.ratings * 20 + '%' } }></div>
                                <span className="tooltip-text">{ product.ratings}</span>
                            </div>
                            <span className="ratings-text">( { product.review } Reviews )</span>
                        </div>

                        <div className="product-action">
                            <button className="btn-product btn-quickview" title="Quick View" onClick={ onQuickView }>
                                <span>quick view</span>
                            </button>
                            {
                                isInWishlist( wishlist, product ) ?
                                    <ALink href="/shop/wishlist" className="btn-product btn-wishlist added-to-wishlist"><span>wishlist</span></ALink>
                                    :
                                    <a href="#" className="btn-product btn-wishlist" onClick={ onWishlistClick }><span>wishlist</span></a>
                            }
                        </div>
                        {
                            product.stock > 0 ?
                                product?.variants?.length > 0 ?
                                    <ALink href={ `/product/default/${product.slug}` } className="btn-product btn-cart btn-select">
                                        <span>select options</span>
                                    </ALink>
                                    :
                                    <button className="btn-product btn-cart" onClick={ onCartClick }>
                                        <span>add to cart</span>
                                    </button>
                                : ""
                        }
                    </div>
                </div>
            </div>
        </div >
    )
}

const mapStateToProps = ( state ) => {
    return {
        wishlist: state.wishlist.data,
        comparelist: state.comparelist.data
    }
}

export default connect( mapStateToProps, { ...wishlistAction, ...cartAction, ...compareAction, ...demoAction } )( ProductSix );
