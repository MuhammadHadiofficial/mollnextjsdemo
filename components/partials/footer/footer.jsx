import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';

import ALink from '~/components/features/alink';

function Footer () {
    const router = useRouter( "" );
    const [ isBottomSticky, setIsBottomSticky ] = useState( false );
    const [ containerClass, setContainerClass ] = useState( 'container' );

    useEffect( () => {
        handleBottomSticky();
        setContainerClass( router.asPath.includes( 'fullwidth' ) ? 'container-fluid' : 'container' );
    }, [ router.asPath ] );

    useEffect( () => {
        window.addEventListener( 'resize', handleBottomSticky, { passive: true } );
        return () => {
            window.removeEventListener( 'resize', handleBottomSticky );
        }
    }, [] )

    function handleBottomSticky () {
        setIsBottomSticky( router.pathname.includes( 'product/default' ) && ( window.innerWidth > 991 ) );
    }

    return (
        <footer className="footer footer-dark">
            <div className="footer-middle">
                <div className={ containerClass }>
                    <div className="row">
                        <div className="col-sm-6 col-lg-3">
                            <div className="widget widget-about">
                                <img src="images/logo-footer.png" className="footer-logo" alt="Footer Logo" width="105" height="25" />
                                <p>Praesent dapibus, neque id cursus ucibus, tortor neque egestas augue, eu vulputate magna eros eu erat.</p>

                                <div className="social-icons">
                                    <ALink href="#" className="social-icon" title="Facebook">
                                        <i className="icon-facebook-f"></i>
                                    </ALink>
                                    <ALink href="#" className="social-icon" title="Twitter">
                                        <i className="icon-twitter"></i>
                                    </ALink>
                                    <ALink href="#" className="social-icon" title="Instagram">
                                        <i className="icon-instagram"></i>
                                    </ALink>
                                    <ALink href="#" className="social-icon" title="Youtube">
                                        <i className="icon-youtube"></i>
                                    </ALink>
                                    <ALink href="#" className="social-icon" title="Pinterest">
                                        <i className="icon-pinterest"></i>
                                    </ALink>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-3">
                            <div className="widget">
                                <h4 className="widget-title">Useful Links</h4>

                                <ul className="widget-list">
                                    <li>
                                        <ALink href="/pages/about">About Molla</ALink>
                                    </li>
                                    <li>
                                        <ALink href="#">How to shop on Molla</ALink>
                                    </li>
                                    <li>
                                        <ALink href="#">FAQ</ALink>
                                    </li>
                                    <li>
                                        <ALink href="/pages/contact">Contact us</ALink>
                                    </li>
                                    <li>
                                        <ALink href="/pages/login">Log in</ALink>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-3">
                            <div className="widget">
                                <h4 className="widget-title">Customer Service</h4>

                                <ul className="widget-list">
                                    <li>
                                        <ALink href="#">Payment Methods</ALink>
                                    </li>
                                    <li>
                                        <ALink href="#">Money-back guarantee!</ALink>
                                    </li>
                                    <li>
                                        <ALink href="#">Returns</ALink>
                                    </li>
                                    <li>
                                        <ALink href="#">Shipping</ALink>
                                    </li>
                                    <li>
                                        <ALink href="#">Terms and conditions</ALink>
                                    </li>
                                    <li>
                                        <ALink href="#">Privacy Policy</ALink>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-3">
                            <div className="widget">
                                <h4 className="widget-title">My Account</h4>

                                <ul className="widget-list">
                                    <li>
                                        <ALink href="#">Sign In</ALink>
                                    </li>
                                    <li>
                                        <ALink href="/shop/cart">View Cart</ALink>
                                    </li>
                                    <li>
                                        <ALink href="/shop/wishlist">My Wishlist</ALink>
                                    </li>
                                    <li>
                                        <ALink href="/shop/dashboard">Track My Order</ALink>
                                    </li>
                                    <li>
                                        <ALink href="#">Help</ALink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className={ `pb-2 pt-2 ${containerClass}` }>
                    <p
                        className="footer-copyright"
                    >Copyright © { new Date().getFullYear() } Molla Store. All Rights Reserved.</p>

                    <figure className="footer-payments">
                        <img src="images/payments.png" alt="Payment methods" width="272" height="20" />
                    </figure>
                </div>
            </div>

            {
                isBottomSticky ?
                    <div className="mb-10"></div>
                    : ""
            }
        </footer>
    );
}

export default React.memo( Footer );