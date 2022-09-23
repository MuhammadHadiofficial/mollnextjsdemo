import { LazyLoadImage } from 'react-lazy-load-image-component';
import Reveal from 'react-awesome-reveal';

import ALink from '~/components/features/alink';
import OwlCarousel from '~/components/features/owl-carousel';
import TrendyCollection from '~/components/partials/home/trendy-collection';
import NewCollection from '~/components/partials/home/new-collection';
import BlogCollection from '~/components/partials/home/blog-collection';
import NewsletterModal from "~/components/features/modals/newsletter-modal";



import { homeData, introSlider, brandSlider, fadeInUpShorter, fadeInLeftShorter, fadeInRightShorter, fadeIn } from '~/utils/data';

function Home () {
    console.log(process.env.NEXT_PUBLIC_API_BASE_URL)
    // const { data, loading, error } = useQuery( GET_HOME_DATA );
    const error=null;
    const loading=false;
    const data={
        "homeData": {
            "products": [
                {
                    "id": 122,
                    "name": "Apple – 11” iPad Pro with Wi-Fi 256 GB",
                    "slug": "apple-11\"-ipad-pro-with-wi-fi-256-gb",
                    "price": 899.99,
                    "sale_price": null,
                    "review": 2,
                    "ratings": 5,
                    "until": "2022-05-01",
                    "stock": 100,
                    "top": null,
                    "featured": null,
                    "new": null,
                    "category": [
                        {
                            "name": "Computers",
                            "slug": "computers"
                        },
                        {
                            "name": "Tablets",
                            "slug": "tablets"
                        },
                        {
                            "name": "Cell Phone",
                            "slug": "cell-phone"
                        },
                        {
                            "name": "TV",
                            "slug": "tv"
                        }
                    ],
                    "sm_pictures": [
                        {
                            "width": 300,
                            "height": 300,
                            "url": "/uploads/product_1_2_300x300_23e5807726.jpg"
                        },
                        {
                            "width": 300,
                            "height": 300,
                            "url": "/uploads/product_1_1_300x300_efb79f650f.jpg"
                        }
                    ],
                    "variants": []
                },
                {
                    "id": 123,
                    "name": "Apple – Smart Folio for 11-inch iPad Pro",
                    "slug": "apple-smart-folio-for-11-inch-ipad-pro",
                    "price": 150.99,
                    "sale_price": null,
                    "review": 2,
                    "ratings": 4,
                    "until": null,
                    "stock": 100,
                    "top": null,
                    "featured": null,
                    "new": null,
                    "category": [
                        {
                            "name": "Computers",
                            "slug": "computers"
                        },
                        {
                            "name": "Tablets",
                            "slug": "tablets"
                        }
                    ],
                    "sm_pictures": [
                        {
                            "width": 300,
                            "height": 300,
                            "url": "/uploads/product_2_2_300x300_8f533fffc2.jpg"
                        },
                        {
                            "width": 300,
                            "height": 300,
                            "url": "/uploads/product_2_1_300x300_fa1dabe59f.jpg"
                        }
                    ],
                    "variants": [
                        {
                            "color": "#3399cc",
                            "color_name": "Blue",
                            "price": 160.99,
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
                            "color": "#ebebeb",
                            "color_name": "Grey",
                            "price": 150.99,
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
                    "id": 124,
                    "name": "Apple – Watch Series 3 with White Sport Band",
                    "slug": "apple-watch-series-3-with-white-sport-band",
                    "price": 214.99,
                    "sale_price": 167.99,
                    "review": 2,
                    "ratings": 4,
                    "until": null,
                    "stock": 100,
                    "top": true,
                    "featured": true,
                    "new": null,
                    "category": [
                        {
                            "name": "Accessories",
                            "slug": "accessories"
                        },
                        {
                            "name": "Smartwatches",
                            "slug": "smartwatches"
                        }
                    ],
                    "sm_pictures": [
                        {
                            "width": 300,
                            "height": 300,
                            "url": "/uploads/product_3_1_300x300_8581e4797e.jpg"
                        },
                        {
                            "width": 300,
                            "height": 300,
                            "url": "/uploads/product_3_2_300x300_1953e6bf05.jpg"
                        }
                    ],
                    "variants": [
                        {
                            "color": "#f2719c",
                            "color_name": "Red",
                            "price": 214.99,
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
                        },
                        {
                            "color": "#669933",
                            "color_name": "Green",
                            "price": 217.99,
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
                    "id": 125,
                    "name": "GoPro – HERO7 Black HD Waterproof Action",
                    "slug": "gopro-hero7-black-hd-waterproof-action",
                    "price": 360.99,
                    "sale_price": 130,
                    "review": 2,
                    "ratings": 4,
                    "until": null,
                    "stock": 100,
                    "top": null,
                    "featured": null,
                    "new": true,
                    "category": [
                        {
                            "name": "Accessories",
                            "slug": "accessories"
                        },
                        {
                            "name": "Camcorders",
                            "slug": "camcorders"
                        },
                        {
                            "name": "Cameras",
                            "slug": "cameras"
                        }
                    ],
                    "sm_pictures": [
                        {
                            "width": 300,
                            "height": 300,
                            "url": "/uploads/product_4_1_300x300_ba8482c604.jpg"
                        },
                        {
                            "width": 300,
                            "height": 300,
                            "url": "/uploads/product_4_2_300x300_d8952e6e3d.jpg"
                        },
                        {
                            "width": 300,
                            "height": 300,
                            "url": "/uploads/product_4_3_300x300_b96bb64a64.jpg"
                        }
                    ],
                    "variants": []
                },
                {
                    "id": 126,
                    "name": "Microsoft – Refurbish Xbox One S 500GB",
                    "slug": "microsoft-refurbish-xbox-one-s-500gb",
                    "price": 279.99,
                    "sale_price": null,
                    "review": 2,
                    "ratings": 0,
                    "until": null,
                    "stock": 100,
                    "top": true,
                    "featured": true,
                    "new": true,
                    "category": [
                        {
                            "name": "Accessories",
                            "slug": "accessories"
                        },
                        {
                            "name": "Video Games",
                            "slug": "video-games"
                        },
                        {
                            "name": "Entertainment",
                            "slug": "entertainment"
                        }
                    ],
                    "sm_pictures": [
                        {
                            "width": 300,
                            "height": 300,
                            "url": "/uploads/product_5_1_300x300_3dbc9b1611.jpg"
                        },
                        {
                            "width": 300,
                            "height": 300,
                            "url": "/uploads/product_5_2_300x300_100e169228.jpg"
                        },
                        {
                            "width": 300,
                            "height": 300,
                            "url": "/uploads/product_5_3_300x300_39035ca6ee.jpg"
                        }
                    ],
                    "variants": []
                },
                {
                    "id": 127,
                    "name": "Sony – Alpha a5100 Mirrorless Camera",
                    "slug": "sony-alpha-a5100-mirrorless-camera",
                    "price": 499.99,
                    "sale_price": null,
                    "review": 2,
                    "ratings": 4,
                    "until": null,
                    "stock": 100,
                    "top": true,
                    "featured": true,
                    "new": null,
                    "category": [
                        {
                            "name": "Camcorders",
                            "slug": "camcorders"
                        },
                        {
                            "name": "Cameras",
                            "slug": "cameras"
                        }
                    ],
                    "sm_pictures": [
                        {
                            "width": 300,
                            "height": 300,
                            "url": "/uploads/product_6_1_300x300_7baa1cb292.jpg"
                        },
                        {
                            "width": 300,
                            "height": 300,
                            "url": "/uploads/product_6_2_300x300_b12d6f87d6.jpg"
                        },
                        {
                            "width": 300,
                            "height": 300,
                            "url": "/uploads/product_6_3_300x300_4fca36ffef.jpg"
                        }
                    ],
                    "variants": []
                },
                {
                    "id": 128,
                    "name": "Canon – EOS 5D Mark IV DSLR Camera",
                    "slug": "canon-eos-5d-mark-iv-dslr-camera",
                    "price": 399.99,
                    "sale_price": 359.99,
                    "review": 2,
                    "ratings": 0,
                    "until": null,
                    "stock": 100,
                    "top": true,
                    "featured": true,
                    "new": true,
                    "category": [
                        {
                            "name": "Cameras",
                            "slug": "cameras"
                        },
                        {
                            "name": "Camcorders",
                            "slug": "camcorders"
                        }
                    ],
                    "sm_pictures": [
                        {
                            "width": 300,
                            "height": 300,
                            "url": "/uploads/product_15_1_300x300_5a77c6dd85.jpg"
                        },
                        {
                            "width": 300,
                            "height": 300,
                            "url": "/uploads/product_15_2_300x300_264b8b9e00.jpg"
                        }
                    ],
                    "variants": []
                },
                {
                    "id": 129,
                    "name": "Google – Pixel 6.2-Inch 3 XL 128GB",
                    "slug": "google-pixel-6.2-inch-3-xl-128gb",
                    "price": 40,
                    "sale_price": null,
                    "review": 2,
                    "ratings": 5,
                    "until": null,
                    "stock": 100,
                    "top": true,
                    "featured": true,
                    "new": null,
                    "category": [
                        {
                            "name": "Tablets",
                            "slug": "tablets"
                        },
                        {
                            "name": "Entertainment",
                            "slug": "entertainment"
                        },
                        {
                            "name": "Cell Phone",
                            "slug": "cell-phone"
                        },
                        {
                            "name": "Computers",
                            "slug": "computers"
                        }
                    ],
                    "sm_pictures": [
                        {
                            "width": 300,
                            "height": 300,
                            "url": "/uploads/product_14_1_300x300_efbf227b95.jpg"
                        },
                        {
                            "width": 300,
                            "height": 300,
                            "url": "/uploads/product_14_2_300x300_aa41f75b41.jpg"
                        }
                    ],
                    "variants": []
                },
                {
                    "id": 130,
                    "name": "Home Smart Speaker with Google Assistant",
                    "slug": "home-smart-speaker-with-google-assistant",
                    "price": 150.99,
                    "sale_price": 129.99,
                    "review": 2,
                    "ratings": 3,
                    "until": "2022-01-01",
                    "stock": 100,
                    "top": null,
                    "featured": null,
                    "new": true,
                    "category": [
                        {
                            "name": "Accessories",
                            "slug": "accessories"
                        },
                        {
                            "name": "Audio",
                            "slug": "audio"
                        }
                    ],
                    "sm_pictures": [
                        {
                            "width": 300,
                            "height": 300,
                            "url": "/uploads/product_11_1_300x300_c7664ff065.jpg"
                        },
                        {
                            "width": 300,
                            "height": 300,
                            "url": "/uploads/product_11_2_300x300_563c9a4c7f.jpg"
                        },
                        {
                            "width": 300,
                            "height": 300,
                            "url": "/uploads/product_11_3_300x300_1cbe3af5cb.jpg"
                        }
                    ],
                    "variants": []
                },
                {
                    "id": 131,
                    "name": "Sony – Class LED 2160p Smart 4K Ultra HD",
                    "slug": "sony-class-led-2160p-smart-4k-ultra-hd",
                    "price": 999.99,
                    "sale_price": 899.99,
                    "review": 2,
                    "ratings": 5,
                    "until": null,
                    "stock": 100,
                    "top": null,
                    "featured": null,
                    "new": true,
                    "category": [
                        {
                            "name": "Entertainment",
                            "slug": "entertainment"
                        },
                        {
                            "name": "TV",
                            "slug": "tv"
                        }
                    ],
                    "sm_pictures": [
                        {
                            "width": 300,
                            "height": 300,
                            "url": "/uploads/product_7_1_300x300_7d52e44699.jpg"
                        },
                        {
                            "width": 300,
                            "height": 300,
                            "url": "/uploads/product_7_2_300x300_141620b1d4.jpg"
                        }
                    ],
                    "variants": []
                },
                {
                    "id": 132,
                    "name": "MacBook Pro 13″ laptop Display, i5",
                    "slug": "macbook-pro-13-laptop-display-i5",
                    "price": 199.99,
                    "sale_price": null,
                    "review": 2,
                    "ratings": 2,
                    "until": null,
                    "stock": 100,
                    "top": null,
                    "featured": null,
                    "new": true,
                    "category": [
                        {
                            "name": "Tablets",
                            "slug": "tablets"
                        },
                        {
                            "name": "Computers",
                            "slug": "computers"
                        },
                        {
                            "name": "Laptops",
                            "slug": "laptops"
                        }
                    ],
                    "sm_pictures": [
                        {
                            "width": 300,
                            "height": 300,
                            "url": "/uploads/product_9_1_300x300_3bcf580b2b.jpg"
                        },
                        {
                            "width": 300,
                            "height": 300,
                            "url": "/uploads/product_9_2_300x300_dc60e9079f.jpg"
                        },
                        {
                            "width": 300,
                            "height": 300,
                            "url": "/uploads/product_9_3_300x300_a6904bf7ba.jpg"
                        }
                    ],
                    "variants": []
                },
                {
                    "id": 133,
                    "name": "Apple Watch Series 4 Gold Aluminum Case",
                    "slug": "apple-watch-series-4-gold-aluminum-case",
                    "price": 499.99,
                    "sale_price": 300.99,
                    "review": 2,
                    "ratings": 5,
                    "until": null,
                    "stock": 100,
                    "top": true,
                    "featured": null,
                    "new": null,
                    "category": [
                        {
                            "name": "Entertainment",
                            "slug": "entertainment"
                        },
                        {
                            "name": "Accessories",
                            "slug": "accessories"
                        },
                        {
                            "name": "Smartwatches",
                            "slug": "smartwatches"
                        }
                    ],
                    "sm_pictures": [
                        {
                            "width": 300,
                            "height": 300,
                            "url": "/uploads/product_13_1_300x300_0fbdf2ba54.jpg"
                        },
                        {
                            "width": 300,
                            "height": 300,
                            "url": "/uploads/product_13_2_300x300_8ee25c33ec.jpg"
                        }
                    ],
                    "variants": []
                },
                {
                    "id": 134,
                    "name": "Samsung – 55″ Class LED 2160p Smart",
                    "slug": "samsung-55-class-led-2160p-smart",
                    "price": 899.99,
                    "sale_price": null,
                    "review": 2,
                    "ratings": 5,
                    "until": null,
                    "stock": 100,
                    "top": null,
                    "featured": null,
                    "new": null,
                    "category": [
                        {
                            "name": "Entertainment",
                            "slug": "entertainment"
                        }
                    ],
                    "sm_pictures": [
                        {
                            "width": 300,
                            "height": 300,
                            "url": "/uploads/product_8_1_300x300_8f56b6b2cf.jpg"
                        },
                        {
                            "width": 300,
                            "height": 300,
                            "url": "/uploads/product_8_2_300x300_0f3131e54f.jpg"
                        }
                    ],
                    "variants": [
                        {
                            "color": "#333333",
                            "color_name": "Grey",
                            "price": 899.99,
                            "size": [
                                {
                                    "name": "Small"
                                },
                                {
                                    "name": "Medium"
                                }
                            ]
                        },
                        {
                            "color": "#3399cc",
                            "color_name": "Blue",
                            "price": 1099.99,
                            "size": [
                                {
                                    "name": "Small"
                                },
                                {
                                    "name": "Medium"
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": 135,
                    "name": "Lenovo – Laptop 330-15IKBR Pro 15.6″",
                    "slug": "lenovo-laptop-330-15ikbr-pro-15.6",
                    "price": 339.99,
                    "sale_price": null,
                    "review": 2,
                    "ratings": 0,
                    "until": null,
                    "stock": 0,
                    "top": null,
                    "featured": null,
                    "new": null,
                    "category": [
                        {
                            "name": "Tablets",
                            "slug": "tablets"
                        },
                        {
                            "name": "Computers",
                            "slug": "computers"
                        },
                        {
                            "name": "Laptops",
                            "slug": "laptops"
                        }
                    ],
                    "sm_pictures": [
                        {
                            "width": 300,
                            "height": 300,
                            "url": "/uploads/product_10_1_300x300_fde9949208.jpg"
                        },
                        {
                            "width": 300,
                            "height": 300,
                            "url": "/uploads/product_10_2_300x300_a0afeaad6e.jpg"
                        },
                        {
                            "width": 300,
                            "height": 300,
                            "url": "/uploads/product_10_3_300x300_6ee66bdd87.jpg"
                        },
                        {
                            "width": 300,
                            "height": 300,
                            "url": "/uploads/product_10_4_300x300_b47fe44862.jpg"
                        }
                    ],
                    "variants": []
                },
                {
                    "id": 136,
                    "name": "Bose – SoundSport wireless headphones",
                    "slug": "bose-soundsport-wireless-headphones",
                    "price": 199,
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
                            "name": "Accessories",
                            "slug": "accessories"
                        },
                        {
                            "name": "Headphones",
                            "slug": "headphones"
                        }
                    ],
                    "sm_pictures": [
                        {
                            "width": 300,
                            "height": 300,
                            "url": "/uploads/product_12_1_300x300_c593ef09c9.jpg"
                        },
                        {
                            "width": 300,
                            "height": 300,
                            "url": "/uploads/product_12_2_300x300_29499be6c4.jpg"
                        }
                    ],
                    "variants": []
                }
            ],
            "posts": []
        }
    }
    const products = data && data.homeData.products;
    const posts = data && data.homeData.posts;

    if ( error ) {
        return <div></div>
    }

    return (
        <div className="main home-page skeleton-body">
            <div className="intro-section pt-5 pb-4" style={ { backgroundImage: 'url(images/home/sliders/intro-bg.jpg)' } }>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div
                                className="intro-slider-container slider-container-ratio slider-container-1 mb-2 mb-lg-0"
                            >
                                <OwlCarousel adClass="intro-slider intro-slider-1 owl-simple owl-light owl-nav-inside" options={ introSlider }>
                                    <div className="intro-slide" style={ { backgroundColor: '#C29763', backgroundImage: 'url(images/home/sliders/slide-1-1.png)' } }>
                                        <figure className="slide-image mb-0">
                                            <picture>
                                                <img
                                                    src="images/home/sliders/slide-1-2.png"
                                                    alt="Banner"
                                                />
                                            </picture>
                                        </figure>

                                        <div className="intro-content">
                                            <Reveal keyframes={ fadeInUpShorter } delay={ 100 } duration={ 1000 }>
                                                <>
                                                    <h3 className="intro-subtitle">Topsale Collection</h3>

                                                    <h1 className="intro-title">
                                                        Best Lighting
                                                        <br />Collection
                                                    </h1>

                                                    <ALink
                                                        href="/shop/sidebar/list"
                                                        className="btn btn-outline-white"
                                                    >
                                                        <span>SHOP NOW</span>
                                                        <i className="icon-long-arrow-right"></i>
                                                    </ALink>
                                                </>
                                            </Reveal>
                                        </div>
                                    </div>

                                    <div className="intro-slide" style={ { backgroundColor: '#9AC5CB', backgroundImage: 'url(images/home/sliders/slide-2-1.png)' } }>
                                        <figure className="slide-image mb-0">
                                            <picture>
                                                <img
                                                    src="images/home/sliders/slide-2-2.png"
                                                    alt="Banner"
                                                    style={ { marginLeft: '55%', marginTop: '10%' } }
                                                />
                                            </picture>
                                        </figure>

                                        <div className="intro-content">
                                            <Reveal keyframes={ fadeInUpShorter } delay={ 100 } duration={ 1000 }>
                                                <>
                                                    <h3 className="intro-subtitle">Topsale Collection</h3>

                                                    <h1 className="intro-title">Wood Cabinet<br />Collection</h1>

                                                    <ALink
                                                        href="/shop/sidebar/list"
                                                        className="btn btn-outline-white"
                                                    >
                                                        <span>SHOP NOW</span>
                                                        <i className="icon-long-arrow-right"></i>
                                                    </ALink>
                                                </>
                                            </Reveal>
                                        </div>
                                    </div>
                                </OwlCarousel>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <Reveal keyframes={ fadeInLeftShorter } delay={ 150 } duration={ 1000 } triggerOnce>
                                <div className="intro-banners">
                                    <div className="row row-sm">
                                        <div className="col-md-6 col-lg-12">
                                            <div className="banner lazy-media">
                                                <div className="lazy-overlay" style={ { backgroundColor: 'rgb(243, 235, 218)' } }></div>

                                                <LazyLoadImage
                                                    alt="banner"
                                                    src="images/home/banners/intro/banner-1.jpg"
                                                    threshold={ 200 }
                                                    width="370"
                                                    height="auto"
                                                    effect="blur"
                                                />

                                                <div className="banner-content">
                                                    <h4 className="banner-subtitle">
                                                        Clearence
                                                </h4>

                                                    <h3 className="banner-title">
                                                        <ALink href="#">
                                                            Chairs & Chaises
                                                        <br />Up to 40% off
                                                    </ALink>
                                                    </h3>

                                                    <ALink
                                                        href="/shop/sidebar/3cols"
                                                        className="banner-link"
                                                    >
                                                        Shop Now
                                                </ALink>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-6 col-lg-12">
                                            <div className="banner lazy-media">
                                                <div className="lazy-overlay" style={ { backgroundColor: 'rgb(229, 231, 218)' } }></div>

                                                <LazyLoadImage
                                                    alt="banner"
                                                    src="images/home/banners/intro/banner-2.jpg"
                                                    threshold={ 200 }
                                                    width="370"
                                                    height="auto"
                                                    effect="blur"
                                                />

                                                <div className="banner-content">
                                                    <h4 className="banner-subtitle">
                                                        New in
                                                </h4>

                                                    <h3 className="banner-title">
                                                        <ALink href="#">
                                                            Kitchen & Dinning
                                                        <br />Collection
                                                    </ALink>
                                                    </h3>

                                                    <ALink
                                                        href="/shop/sidebar/3cols"
                                                        className="banner-link"
                                                    >
                                                        Discover Now
                                                </ALink>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Reveal>
                        </div>
                    </div>

                    <div className="mb-3"></div>

                    <OwlCarousel adClass="owl-simple owl-nav-align brand-carousel cols-xl-7 cols-lg-5 cols-md-4 cols-sm-3 cols-2" options={ brandSlider }>
                        {
                            homeData.brands.map( ( brand, index ) => {
                                return (
                                    <ALink href="#" className="brand mr-0" key={ index } >
                                        <img src={ brand.image } alt="brand" width={ brand.width } height={ brand.height } />
                                    </ALink>
                                )
                            } )
                        }
                    </OwlCarousel>
                </div>
            </div>
            <div className="mb-6"></div>
            <Reveal keyframes={ fadeIn } delay={ 100 } duration={ 500 } triggerOnce>
                <TrendyCollection products={ products } loading={ loading } />
            </Reveal>
            <div className="container pt-6">
                <h2 className="title-lg text-center mb-4">Shop by Categories</h2>

                <div className="row">
                    <div className="col-sm-6 col-lg-4">
                        <Reveal keyframes={ fadeInLeftShorter } delay={ 150 } duration={ 1000 } triggerOnce>
                            <div className="banner banner-display banner-badge lazy-media banner-lg">
                                <figure className="mb-0">
                                    <div className="lazy-overlay"></div>

                                    <LazyLoadImage
                                        alt="banner"
                                        src="images/home/banners/banner-1.jpg"
                                        threshold={ 200 }
                                        width="376"
                                        height="auto"
                                        effect="blur"
                                    />
                                </figure>

                                <div className="banner-content banner-content-center">
                                    <ALink className="banner-link" href="/shop/sidebar/3cols?category=decoration">
                                        <h3 className="banner-title mb-0">Home Decor</h3>
                                        <span className="banner-link-text">Shop Now<i className="icon-long-arrow-right ml-2"></i> </span>
                                    </ALink>
                                </div>
                            </div>
                        </Reveal>
                    </div>

                    <div className="col-sm-6 col-lg-4 order-lg-last">
                        <Reveal keyframes={ fadeInRightShorter } delay={ 150 } duration={ 1000 } triggerOnce>
                            <div className="banner banner-display banner-lg banner-badge lazy-media">
                                <figure className="mb-0">
                                    <div className="lazy-overlay"></div>

                                    <LazyLoadImage
                                        alt="banner"
                                        src="images/home/banners/banner-4.jpg"
                                        threshold={ 200 }
                                        width="376"
                                        height="auto"
                                        effect="blur"
                                    />
                                </figure>
                                <div className="banner-content banner-content-center">
                                    <ALink className="banner-link" href="/shop/sidebar/3cols?category=living-room">
                                        <h3 className="banner-title mb-0">Living Room</h3>
                                        <span className="banner-link-text">Shop Now<i className="icon-long-arrow-right ml-2"></i></span>
                                    </ALink>
                                </div>
                            </div>
                        </Reveal>
                    </div>

                    <div className="col-sm-12 col-lg-4">
                        <Reveal keyframes={ fadeIn } delay={ 150 } duration={ 1000 } triggerOnce>
                            <div className="row">
                                <div className="col-lg-12 col-sm-6 col-xs-12">
                                    <div
                                        className="banner banner-display banner-badge banner-sm lazy-media"
                                    >
                                        <figure className="mb-0">
                                            <div className="lazy-overlay"></div>

                                            <LazyLoadImage
                                                alt="banner"
                                                src="images/home/banners/banner-2.jpg"
                                                threshold={ 200 }
                                                width="376"
                                                height="auto"
                                                effect="blur"
                                            />
                                        </figure>

                                        <div className="banner-content banner-content-center">
                                            <div className="banner-content banner-content-center">
                                                <ALink className="banner-link" href="/shop/sidebar/3cols?category=kitchen-and-utensil">
                                                    <h3 className="banner-title mb-0">Kitchen & Utensil</h3>
                                                    <span className="banner-link-text">Shop Now<i className="icon-long-arrow-right ml-2"></i></span>
                                                </ALink>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-12 col-sm-6 col-xs-12">
                                    <div
                                        className="banner banner-display banner-badge banner-sm lazy-media"
                                    >
                                        <figure className="mb-0">
                                            <div className="lazy-overlay"></div>

                                            <LazyLoadImage
                                                alt="banner"
                                                src="images/home/banners/banner-3.jpg"
                                                threshold={ 200 }
                                                width="376"
                                                height="auto"
                                                effect="blur"
                                            />
                                        </figure>

                                        <div className="banner-content banner-content-center">
                                            <ALink className="banner-link" href="/shop/sidebar/3cols?category=lighting">
                                                <h3 className="banner-title mb-0">Lighting</h3>
                                                <span className="banner-link-text">Shop Now<i className="icon-long-arrow-right ml-2"></i></span>
                                            </ALink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </div>

            <div className="mb-5"></div>

            <Reveal keyframes={ fadeIn } delay={ 150 } duration={ 1000 } triggerOnce>
                <NewCollection products={ products } loading={ loading }></NewCollection>
            </Reveal>

            <div className="container">
                <hr />
                <div className="row justify-content-center">
                    <div className="col-md-4 col-sm-6">
                        <Reveal keyframes={ fadeInRightShorter } delay={ 150 } duration={ 1000 } triggerOnce>
                            <div className="icon-box px-0 icon-box-card text-center bg-white">
                                <span className="icon-box-icon text-dark">
                                    <i className="icon-rocket"></i>
                                </span>
                                <div className="icon-box-content">
                                    <h3 className="icon-box-title">Payment & Delivery</h3>

                                    <p>Free shipping for orders over $50</p>
                                </div>
                            </div>
                        </Reveal>
                    </div>

                    <div className="col-md-4 col-sm-6">
                        <Reveal keyframes={ fadeIn } delay={ 150 } duration={ 1000 } triggerOnce>
                            <div className="icon-box px-0 icon-box-card text-center bg-white">
                                <span className="icon-box-icon text-dark">
                                    <i className="icon-rotate-left"></i>
                                </span>
                                <div className="icon-box-content">
                                    <h3 className="icon-box-title">Return & Refund</h3>

                                    <p>Free 100% money back guarantee</p>
                                </div>
                            </div>
                        </Reveal>
                    </div>

                    <div className="col-md-4 col-sm-6">
                        <Reveal keyframes={ fadeInLeftShorter } delay={ 150 } duration={ 1000 } triggerOnce>
                            <div className="icon-box px-0 icon-box-card text-center bg-white">
                                <span className="icon-box-icon text-dark">
                                    <i className="icon-life-ring"></i>
                                </span>
                                <div className="icon-box-content">
                                    <h3 className="icon-box-title">Quality Support</h3>

                                    <p>Alway online feedback 24/7</p>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </div>

            <BlogCollection posts={ posts } loading={ loading } />

            <Reveal keyframes={ fadeIn } delay={ 150 } duration={ 1000 } triggerOnce>
                <div className="cta cta-display bg-image pt-4 pb-4" style={ { backgroundImage: 'url(images/backgrounds/cta/bg-6.jpg)' } }>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-10 col-lg-9 col-xl-8">
                                <div className="row no-gutters flex-column flex-sm-row align-items-sm-center">
                                    <div className="col text-center text-sm-left">
                                        <h3 className="cta-title text-white">Sign Up & Get 10% Off</h3>
                                        <p className="cta-desc text-white">Molla presents the best in interior design</p>
                                    </div>
                                    <div className="col-auto d-flex justify-content-center">
                                        <ALink href="/pages/login" className="btn btn-outline-white"><span>SIGN UP</span><i className="icon-long-arrow-right"></i></ALink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Reveal>

            <NewsletterModal />
        </div>
    )
}

export default  Home;