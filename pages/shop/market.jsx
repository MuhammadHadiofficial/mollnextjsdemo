import StickyBox from 'react-sticky-box';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import { useLazyQuery } from '@apollo/react-hooks';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import ALink from '~/components/features/alink';
import PageHeader from '~/components/features/page-header';
import OwlCarousel from '~/components/features/owl-carousel';
import ShopListTwo from '~/components/partials/shop/list/shop-list-two';
import Pagination from '~/components/features/pagination';
import ShopSidebarThree from '~/components/partials/shop/sidebar/shop-sidebar-three';

import withApollo from '~/server/apollo';
import { GET_PRODUCTS } from '~/server/queries';
import { homeData, mainSlider11, mainSlider10 } from '~/utils/data';

function ShopMarket () {
    const router = useRouter();
    const query = router.query;
    // const [ getProducts, { data, loading, error } ] = useLazyQuery( GET_PRODUCTS );
    const data={
        "products": {
            "data": [
                {
                    "id": 87,
                    "name": "Beige metal hoop tote bag",
                    "slug": "beige-metal-hoop-tote-bag",
                    "price": 76,
                    "sale_price": null,
                    "review": 2,
                    "ratings": 4,
                    "until": null,
                    "stock": 100,
                    "top": true,
                    "featured": null,
                    "new": null,
                    "category": [
                        {
                            "name": "Women",
                            "slug": "women"
                        }
                    ],
                    "sm_pictures": [
                        {
                            "width": 300,
                            "height": 300,
                            "url": "/uploads/product_1_1_300x300_a41bf80b40.jpg"
                        },
                        {
                            "width": 300,
                            "height": 300,
                            "url": "/uploads/product_1_2_300x300_4d585cfd35.jpg"
                        },
                        {
                            "width": 300,
                            "height": 300,
                            "url": "/uploads/product_1_3_300x300_0a0f9518be.jpg"
                        },
                        {
                            "width": 300,
                            "height": 300,
                            "url": "/uploads/product_1_4_300x300_48da39ab39.jpg"
                        }
                    ],
                    "variants": [
                        {
                            "color": "#333333",
                            "color_name": "Black",
                            "price": 75,
                            "size": [
                                {
                                    "name": "Small"
                                },
                                {
                                    "name": "Medium"
                                },
                                {
                                    "name": "Large"
                                },
                                {
                                    "name": "Extra Large"
                                }
                            ]
                        },
                        {
                            "color": "#3399cc",
                            "color_name": "Blue",
                            "price": 76,
                            "size": [
                                {
                                    "name": "Small"
                                },
                                {
                                    "name": "Medium"
                                },
                                {
                                    "name": "Extra Small"
                                }
                            ]
                        },
                        {
                            "color": "#669933",
                            "color_name": "Green",
                            "price": 76,
                            "size": [
                                {
                                    "name": "Large"
                                },
                                {
                                    "name": "Extra Large"
                                }
                            ]
                        },
                        {
                            "color": "#cc3333",
                            "color_name": "Red",
                            "price": 80,
                            "size": [
                                {
                                    "name": "Medium"
                                },
                                {
                                    "name": "Large"
                                },
                                {
                                    "name": "Extra Large"
                                },
                                {
                                    "name": "Extra Small"
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": 88,
                    "name": "Beige ring handle circle cross body bag",
                    "slug": "beige-ring-handle-circle-cross-body-bag",
                    "price": 55,
                    "sale_price": null,
                    "review": 2,
                    "ratings": 3,
                    "until": null,
                    "stock": 100,
                    "top": null,
                    "featured": null,
                    "new": null,
                    "category": [
                        {
                            "name": "Women",
                            "slug": "women"
                        }
                    ],
                    "sm_pictures": [
                        {
                            "width": 820,
                            "height": 820,
                            "url": "/uploads/1_3df6114aa3.jpg"
                        },
                        {
                            "width": 820,
                            "height": 820,
                            "url": "/uploads/2_a2ee45417a.jpg"
                        },
                        {
                            "width": 820,
                            "height": 820,
                            "url": "/uploads/3_070f8cc732.jpg"
                        },
                        {
                            "width": 820,
                            "height": 820,
                            "url": "/uploads/4_0f662308da.jpg"
                        }
                    ],
                    "variants": []
                },
                {
                    "id": 89,
                    "name": "Beige V neck button cardigan",
                    "slug": "beige-v-neck-button-cardigan",
                    "price": 72,
                    "sale_price": null,
                    "review": 2,
                    "ratings": 0,
                    "until": null,
                    "stock": 100,
                    "top": null,
                    "featured": null,
                    "new": null,
                    "category": [
                        {
                            "name": "Women",
                            "slug": "women"
                        }
                    ],
                    "sm_pictures": [
                        {
                            "width": 300,
                            "height": 300,
                            "url": "/uploads/product_2_1_300x300_98e1548d0e.jpg"
                        },
                        {
                            "width": 300,
                            "height": 300,
                            "url": "/uploads/product_2_2_300x300_9f775cd8db.jpg"
                        },
                        {
                            "width": 300,
                            "height": 300,
                            "url": "/uploads/product_2_3_300x300_e7bf3012a7.jpg"
                        },
                        {
                            "width": 300,
                            "height": 300,
                            "url": "/uploads/product_2_4_300x300_55784f7cb0.jpg"
                        }
                    ],
                    "variants": []
                },
                {
                    "id": 90,
                    "name": "Black denim dungaree dress",
                    "slug": "black-denim-dungaree-dress",
                    "price": 60,
                    "sale_price": null,
                    "review": 2,
                    "ratings": 0,
                    "until": null,
                    "stock": 203,
                    "top": null,
                    "featured": null,
                    "new": null,
                    "category": [
                        {
                            "name": "Women",
                            "slug": "women"
                        }
                    ],
                    "sm_pictures": [
                        {
                            "width": 300,
                            "height": 327,
                            "url": "/uploads/product_5_2_300x190_7ec8c0ecc8.jpg"
                        },
                        {
                            "width": 300,
                            "height": 340,
                            "url": "/uploads/product_5_4_300x190_ae766268aa.jpg"
                        },
                        {
                            "width": 300,
                            "height": 190,
                            "url": "/uploads/product_5_1_300x190_787440f117.jpg"
                        },
                        {
                            "width": 300,
                            "height": 227,
                            "url": "/uploads/product_5_3_300x190_69a7d7e0db.jpg"
                        }
                    ],
                    "variants": []
                },
                {
                    "id": 91,
                    "name": "Black faux leather chain trim sandals",
                    "slug": "black-faux-leather-chain-trim-sandals",
                    "price": 90,
                    "sale_price": null,
                    "review": 2,
                    "ratings": 0,
                    "until": null,
                    "stock": 100,
                    "top": null,
                    "featured": null,
                    "new": null,
                    "category": [
                        {
                            "name": "Boots",
                            "slug": "boots"
                        },
                        {
                            "name": "Shoes",
                            "slug": "shoes"
                        },
                        {
                            "name": "Women",
                            "slug": "women"
                        }
                    ],
                    "sm_pictures": [
                        {
                            "width": 458,
                            "height": 458,
                            "url": "/uploads/5_12a3f8d877.jpg"
                        },
                        {
                            "width": 458,
                            "height": 458,
                            "url": "/uploads/6_6d9a6a354b.jpg"
                        },
                        {
                            "width": 458,
                            "height": 458,
                            "url": "/uploads/7_0ec91a9581.jpg"
                        },
                        {
                            "width": 458,
                            "height": 458,
                            "url": "/uploads/8_6919a9ac7f.jpg"
                        }
                    ],
                    "variants": []
                },
                {
                    "id": 92,
                    "name": "Brown faux fur longline coat",
                    "slug": "brown-faux-fur-longline-coat",
                    "price": 310,
                    "sale_price": 190,
                    "review": 2,
                    "ratings": 0,
                    "until": "2022-01-01",
                    "stock": 100,
                    "top": null,
                    "featured": null,
                    "new": null,
                    "category": [
                        {
                            "name": "Women",
                            "slug": "women"
                        }
                    ],
                    "sm_pictures": [
                        {
                            "width": 300,
                            "height": 300,
                            "url": "/uploads/product_3_1_300x300_c1c27f2eac.jpg"
                        },
                        {
                            "width": 300,
                            "height": 300,
                            "url": "/uploads/product_3_2_300x300_ce25066f39.jpg"
                        },
                        {
                            "width": 300,
                            "height": 300,
                            "url": "/uploads/product_3_3_300x300_7a52a367d8.jpg"
                        },
                        {
                            "width": 300,
                            "height": 300,
                            "url": "/uploads/product_3_4_300x300_da5b300369.jpg"
                        }
                    ],
                    "variants": []
                },
                {
                    "id": 93,
                    "name": "Dark yellow lace cut out swing dress",
                    "slug": "dark-yellow-lace-cut-out-swing-dress",
                    "price": 84,
                    "sale_price": null,
                    "review": 2,
                    "ratings": 0,
                    "until": null,
                    "stock": 100,
                    "top": null,
                    "featured": null,
                    "new": null,
                    "category": [
                        {
                            "name": "Dresses",
                            "slug": "dresses"
                        },
                        {
                            "name": "Women",
                            "slug": "women"
                        },
                        {
                            "name": "Clothing",
                            "slug": "clothing"
                        }
                    ],
                    "sm_pictures": [
                        {
                            "width": 458,
                            "height": 458,
                            "url": "/uploads/1_aa85a47653.jpg"
                        },
                        {
                            "width": 458,
                            "height": 458,
                            "url": "/uploads/2_5f037f660b.jpg"
                        },
                        {
                            "width": 458,
                            "height": 458,
                            "url": "/uploads/3_e34b30cfd8.jpg"
                        },
                        {
                            "width": 458,
                            "height": 458,
                            "url": "/uploads/4_3331bcfb46.jpg"
                        }
                    ],
                    "variants": [
                        {
                            "color": "#cc9966",
                            "color_name": "Brown",
                            "price": 80,
                            "size": [
                                {
                                    "name": "Small"
                                },
                                {
                                    "name": "Medium"
                                },
                                {
                                    "name": "Large"
                                },
                                {
                                    "name": "Extra Large"
                                }
                            ]
                        },
                        {
                            "color": "#9966cc",
                            "color_name": "Purple",
                            "price": 95,
                            "size": [
                                {
                                    "name": "Small"
                                },
                                {
                                    "name": "Large"
                                },
                                {
                                    "name": "Extra Small"
                                }
                            ]
                        },
                        {
                            "color": "#3399cc",
                            "color_name": "Blue",
                            "price": 76,
                            "size": [
                                {
                                    "name": "Medium"
                                },
                                {
                                    "name": "Large"
                                },
                                {
                                    "name": "Extra Large"
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": 94,
                    "name": "Yellow tie strap block heel sandals",
                    "slug": "yellow-tie-strap-block-heel-sandals",
                    "price": 68,
                    "sale_price": null,
                    "review": 2,
                    "ratings": 1,
                    "until": null,
                    "stock": 100,
                    "top": null,
                    "featured": null,
                    "new": null,
                    "category": [
                        {
                            "name": "Shoes",
                            "slug": "shoes"
                        },
                        {
                            "name": "Women",
                            "slug": "women"
                        }
                    ],
                    "sm_pictures": [
                        {
                            "width": 575,
                            "height": 575,
                            "url": "/uploads/1_f8b683bd38.jpg"
                        },
                        {
                            "width": 575,
                            "height": 575,
                            "url": "/uploads/2_c5b26b1154.jpg"
                        },
                        {
                            "width": 575,
                            "height": 575,
                            "url": "/uploads/3_7f384e534d.jpg"
                        },
                        {
                            "width": 575,
                            "height": 575,
                            "url": "/uploads/4_51dfbbc880.jpg"
                        }
                    ],
                    "variants": [
                        {
                            "color": "#669933",
                            "color_name": "Green",
                            "price": 68,
                            "size": [
                                {
                                    "name": "Small"
                                },
                                {
                                    "name": "Large"
                                }
                            ]
                        },
                        {
                            "color": "#3399cc",
                            "color_name": "Blue",
                            "price": 68,
                            "size": [
                                {
                                    "name": "Medium"
                                },
                                {
                                    "name": "Large"
                                },
                                {
                                    "name": "Extra Large"
                                }
                            ]
                        },
                        {
                            "color": "#f2719c",
                            "color_name": "Red",
                            "price": 65,
                            "size": [
                                {
                                    "name": "Small"
                                },
                                {
                                    "name": "Medium"
                                },
                                {
                                    "name": "Large"
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": 95,
                    "name": "Loafers",
                    "slug": "loafers",
                    "price": 67,
                    "sale_price": null,
                    "review": 2,
                    "ratings": 3,
                    "until": null,
                    "stock": 103,
                    "top": null,
                    "featured": null,
                    "new": true,
                    "category": [
                        {
                            "name": "Women",
                            "slug": "women"
                        },
                        {
                            "name": "Shoes",
                            "slug": "shoes"
                        },
                        {
                            "name": "Men",
                            "slug": "men"
                        }
                    ],
                    "sm_pictures": [
                        {
                            "width": 300,
                            "height": 408,
                            "url": "/uploads/1_90856a8f53.jpg"
                        },
                        {
                            "width": 600,
                            "height": 816,
                            "url": "/uploads/2_4d45fbbc96.jpg"
                        },
                        {
                            "width": 300,
                            "height": 408,
                            "url": "/uploads/3_780cc695ad.jpg"
                        }
                    ],
                    "variants": []
                },
                {
                    "id": 96,
                    "name": "Printed Sweatshirt",
                    "slug": "printed-sweatshirt",
                    "price": 12.99,
                    "sale_price": 7.99,
                    "review": 2,
                    "ratings": 1,
                    "until": null,
                    "stock": 100,
                    "top": false,
                    "featured": true,
                    "new": null,
                    "category": [
                        {
                            "name": "Women",
                            "slug": "women"
                        },
                        {
                            "name": "Clothing",
                            "slug": "clothing"
                        }
                    ],
                    "sm_pictures": [
                        {
                            "width": 300,
                            "height": 408,
                            "url": "/uploads/product_1_1_300x408_1f662c0197.jpg"
                        },
                        {
                            "width": 300,
                            "height": 408,
                            "url": "/uploads/product_1_2_300x408_9e213baa0a.jpg"
                        },
                        {
                            "width": 300,
                            "height": 408,
                            "url": "/uploads/product_1_3_300x408_21f126ec4b.jpg"
                        },
                        {
                            "width": 300,
                            "height": 408,
                            "url": "/uploads/product_1_4_300x408_a9d690bee3.jpg"
                        }
                    ],
                    "variants": []
                }
            ],
            "totalCount": 50
        }
    }
    const [ perPage, setPerPage ] = useState( 8 );
    const [ toggle, setToggle ] = useState( false );
    const products = data && data.products.data;
    const totalCount = data && data.products.totalCount;

    useEffect( () => {
        window.addEventListener( "resize", resizeHandle );
        resizeHandle();
        return () => {
            window.removeEventListener( "resize", resizeHandle );
        }
    }, [] )

    function resizeHandle () {
        if ( document.querySelector( "body" ).offsetWidth < 992 )
            setToggle( true );
        else
            setToggle( false );
    }

    // useEffect( () => {
    //     getProducts( {
    //         variables: {
    //             searchTerm: query.searchTerm,
    //             color: query.color ? query.color.split( ',' ) : [],
    //             size: query.size ? query.size.split( ',' ) : [],
    //             brand: query.brand ? query.brand.split( ',' ) : [],
    //             minPrice: parseInt( query.minPrice ),
    //             maxPrice: parseInt( query.maxPrice ),
    //             category: query.category,
    //             sortBy: query.sortBy ? query.sortBy : 'default',
    //             page: query.page ? parseInt( query.page ) : 1,
    //             perPage: perPage,
    //             rating: query.rating ? query.rating.split( ',' ) : []
    //         }
    //     } );
    // }, [ query, perPage ] )

    function onSortByChange ( e ) {
        let queryObject = router.query;
        let url = router.pathname.replace( '[type]', query.type ) + '?';
        for ( let key in queryObject ) {
            if ( key !== "type" && key !== "sortBy" ) {
                url += key + '=' + queryObject[ key ] + '&';
            }
        }

        router.push( url + 'sortBy=' + e.target.value );
    }

    function toggleSidebar () {
        if (
            document
                .querySelector( 'body' )
                .classList.contains( 'sidebar-filter-active' )
        ) {
            document
                .querySelector( 'body' )
                .classList.remove( 'sidebar-filter-active' );
        } else {
            document
                .querySelector( 'body' )
                .classList.add( 'sidebar-filter-active' );
        }
    }

    function hideSidebar () {
        document
            .querySelector( 'body' )
            .classList.remove( 'sidebar-filter-active' );
    }

    if ( error ) {
        return <div></div>
    }

    return (
        <main className="main shop-market">
            <PageHeader title="Shop Market" subTitle="Shop" />
            <nav className="breadcrumb-nav mb-3">
                <div className="container">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <ALink href="/">Home</ALink>
                        </li>
                        <li className="breadcrumb-item">
                            <ALink href="/shop/sidebar/list">Shop</ALink>
                        </li>
                        <li className="breadcrumb-item active">Market</li>
                    </ol>
                </div>
            </nav>

            <div className="page-content">
                <div className="container">
                    <div className="row">
                        <div
                            className="col-lg-9 col-xl-4-5col"
                        >
                            <OwlCarousel adClass="category-banners-slider owl-simple owl-nav-inside cols-1" options={ mainSlider10 }>
                                <div className="banner banner-poster">
                                    <ALink href="#">
                                        <div className="lazy-overlay"></div>

                                        <LazyLoadImage
                                            src="images/market/slider/slider-1.jpg"
                                            alt="Banner"
                                            effect="blur"
                                            width={ 400 }
                                            height={ 260 }
                                        />
                                    </ALink>

                                    <div className="banner-content banner-content-right">
                                        <h3 className="banner-subtitle"><ALink href="#">Amazing Value</ALink></h3>
                                        <h2 className="banner-title"><ALink href="#">High Performance 4K TVs</ALink></h2>
                                        <ALink href="/shop/sidebar/list" className="banner-link">Shop Now <i className="icon-long-arrow-right"></i></ALink>
                                    </div>
                                </div>

                                <div className="banner banner-poster">
                                    <ALink href="#">
                                        <div className="lazy-overlay"></div>

                                        <LazyLoadImage
                                            src="images/market/slider/slider-2.jpg"
                                            alt="Banner"
                                            effect="blur"
                                            width={ 400 }
                                            height={ 260 }
                                        />
                                    </ALink>

                                    <div className="banner-content">
                                        <h3 className="banner-subtitle"><ALink href="#">Weekend Deal</ALink></h3>
                                        <h2 className="banner-title"><ALink href="#">Apple & Accessories</ALink></h2>
                                        <ALink href="/shop/sidebar/list" className="banner-link">Shop Now <i className="icon-long-arrow-right"></i></ALink>
                                    </div>
                                </div>
                            </OwlCarousel>

                            <OwlCarousel adClass="owl-carousel owl-simple owl-nav-align brand-carousel cols-xl-7 cols-lg-5 cols-md-4 cols-sm-3 cols-2 pt-2 pb-2" options={ mainSlider11 }>
                                {
                                    homeData.brands.slice( 0, 7 ).map( ( brand, index ) => {
                                        return (
                                            <ALink href="#" className="brand mr-0" key={ index } >
                                                <img src={ brand.image } alt="brand" width={ brand.width } height={ brand.height } />
                                            </ALink>
                                        )
                                    } )
                                }
                            </OwlCarousel>
                            <div className="cat-blocks-container">
                                <div className="row">
                                    <div className="col-6 col-md-4 col-lg-3">
                                        <ALink href="/shop/market?category=computers" className="cat-block" scroll={ false }>
                                            <figure>
                                                <span>
                                                    <img src="images/market/cats/1.jpg" alt="Category" />
                                                </span>
                                            </figure>

                                            <h3 className="cat-block-title">Desktop Computers</h3>
                                        </ALink>
                                    </div>

                                    <div className="col-6 col-md-4 col-lg-3">
                                        <ALink href="/shop/market?category=monitors" className="cat-block" scroll={ false }>
                                            <figure>
                                                <span>
                                                    <img src="images/market/cats/2.jpg" alt="Category" />
                                                </span>
                                            </figure>

                                            <h3 className="cat-block-title">Monitors</h3>
                                        </ALink>
                                    </div>

                                    <div className="col-6 col-md-4 col-lg-3">
                                        <ALink href="/shop/market?category=laptops" className="cat-block" scroll={ false }>
                                            <figure>
                                                <span>
                                                    <img src="images/market/cats/3.jpg" alt="Category" />
                                                </span>
                                            </figure>

                                            <h3 className="cat-block-title">Laptops</h3>
                                        </ALink>
                                    </div>

                                    <div className="col-6 col-md-4 col-lg-3">
                                        <ALink href="/shop/market?category=tablets" className="cat-block" scroll={ false }>
                                            <figure>
                                                <span>
                                                    <img src="images/market/cats/4.jpg" alt="Category" />
                                                </span>
                                            </figure>

                                            <h3 className="cat-block-title">iPads & Tablets</h3>
                                        </ALink>
                                    </div>

                                    <div className="col-6 col-md-4 col-lg-3">
                                        <ALink href="/shop/market?category=storage" className="cat-block" scroll={ false }>
                                            <figure>
                                                <span>
                                                    <img src="images/market/cats/5.jpg" alt="Category" />
                                                </span>
                                            </figure>

                                            <h3 className="cat-block-title">Hard Drives & Storage</h3>
                                        </ALink>
                                    </div>

                                    <div className="col-6 col-md-4 col-lg-3">
                                        <ALink href="/shop/market?category=printers" className="cat-block" scroll={ false }>
                                            <figure>
                                                <span>
                                                    <img src="images/market/cats/6.jpg" alt="Category" />
                                                </span>
                                            </figure>

                                            <h3 className="cat-block-title">Printers & Supplies</h3>
                                        </ALink>
                                    </div>

                                    <div className="col-6 col-md-4 col-lg-3">
                                        <ALink href="/shop/market?category=accessories" className="cat-block" scroll={ false }>
                                            <figure>
                                                <span>
                                                    <img src="images/market/cats/7.jpg" alt="Category" />
                                                </span>
                                            </figure>

                                            <h3 className="cat-block-title">Computer Accessories</h3>
                                        </ALink>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-2"></div>

                            <div className="toolbox">
                                <div className="toolbox-left">
                                    {
                                        !loading && products ?
                                            <div className="toolbox-info">
                                                Showing
                                                <span> { products.length } of { totalCount }</span> Products
                                            </div>
                                            : ""
                                    }
                                </div>

                                <div className="toolbox-right">
                                    <div className="toolbox-sort">
                                        <label htmlFor="sortby">Sort by:</label>
                                        <div className="select-custom">
                                            <select
                                                name="sortby"
                                                id="sortby"
                                                className="form-control bg-white"
                                                onChange={ onSortByChange }
                                                value={ query.sortBy ? query.sortBy : 'default' }
                                            >
                                                <option value="default">Default</option>
                                                <option value="featured">Most Popular</option>
                                                <option value="rating">Most Rated</option>
                                                <option value="new">Date</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div >

                            <ShopListTwo products={ products } perPage={ perPage } loading={ loading } />

                            {
                                totalCount > perPage ?
                                    <Pagination perPage={ perPage } total={ totalCount } />
                                    : ""
                            }
                        </div >

                        <aside className="col-lg-3 col-xl-5col order-lg-first">
                            <StickyBox className="sticky-market-sidebar" offsetTop={ 70 }>
                                <ShopSidebarThree toggle={ toggle } />
                            </StickyBox>
                            {
                                toggle ?
                                    <button className="sidebar-fixed-toggler" onClick={ toggleSidebar }>
                                        <i className="icon-cog"></i>
                                    </button>
                                    : ''
                            }
                            <div className="sidebar-filter-overlay" onClick={ hideSidebar }></div>
                        </aside >
                    </div >
                </div >
            </div >
        </main >
    )
}

export default withApollo( { ssr: typeof window == 'undefined' } )( ShopMarket );