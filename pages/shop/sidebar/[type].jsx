import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import StickyBox from "react-sticky-box";

import ALink from "~/components/features/alink";
import PageHeader from "~/components/features/page-header";
import ShopListOne from "~/components/partials/shop/list/shop-list-one";
import Pagination from "~/components/features/pagination";
import ShopSidebarOne from "~/components/partials/shop/sidebar/shop-sidebar-one";

import { scrollToPageContent } from "~/utils";
import { axiosIns } from "~/utils/apihelper";

function ShopGrid(props) {
  const router = useRouter();
  const type = router.query.type;
  const query = router.query;
  const [products, setProducts] = useState([]);
  useEffect(()=>{
    async function fetchData(){
        const headers = {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_ACCESS_TOKEN}`,
          };
          let url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/gatsby/items`;
          const res = await fetch(url, {
            method: "GET",
            // mode: 'cors',
            headers,
          });
          const data = await res.json();

          setProducts(data);
        }
        fetchData();

  },[])
  // const [ getProducts, { data, loading, error } ] = useLazyQuery( GET_PRODUCTS );
//   console.log(props.data);
  const error = null;
  const loading = false;
  // const data={
  //     "products": {
  //         "data": [
  //             {
  //                 "id": 87,
  //                 "name": "Beige metal hoop tote bag",
  //                 "slug": "beige-metal-hoop-tote-bag",
  //                 "price": 76,
  //                 "sale_price": null,
  //                 "review": 2,
  //                 "ratings": 4,
  //                 "until": null,
  //                 "stock": 100,
  //                 "top": true,
  //                 "featured": null,
  //                 "new": null,
  //                 "category": [
  //                     {
  //                         "name": "Women",
  //                         "slug": "women"
  //                     }
  //                 ],
  //                 "sm_pictures": [
  //                     {
  //                         "width": 300,
  //                         "height": 300,
  //                         "url": "/uploads/product_1_1_300x300_a41bf80b40.jpg"
  //                     },
  //                     {
  //                         "width": 300,
  //                         "height": 300,
  //                         "url": "/uploads/product_1_2_300x300_4d585cfd35.jpg"
  //                     },
  //                     {
  //                         "width": 300,
  //                         "height": 300,
  //                         "url": "/uploads/product_1_3_300x300_0a0f9518be.jpg"
  //                     },
  //                     {
  //                         "width": 300,
  //                         "height": 300,
  //                         "url": "/uploads/product_1_4_300x300_48da39ab39.jpg"
  //                     }
  //                 ],
  //                 "variants": [
  //                     {
  //                         "color": "#333333",
  //                         "color_name": "Black",
  //                         "price": 75,
  //                         "size": [
  //                             {
  //                                 "name": "Small"
  //                             },
  //                             {
  //                                 "name": "Medium"
  //                             },
  //                             {
  //                                 "name": "Large"
  //                             },
  //                             {
  //                                 "name": "Extra Large"
  //                             }
  //                         ]
  //                     },
  //                     {
  //                         "color": "#3399cc",
  //                         "color_name": "Blue",
  //                         "price": 76,
  //                         "size": [
  //                             {
  //                                 "name": "Small"
  //                             },
  //                             {
  //                                 "name": "Medium"
  //                             },
  //                             {
  //                                 "name": "Extra Small"
  //                             }
  //                         ]
  //                     },
  //                     {
  //                         "color": "#669933",
  //                         "color_name": "Green",
  //                         "price": 76,
  //                         "size": [
  //                             {
  //                                 "name": "Large"
  //                             },
  //                             {
  //                                 "name": "Extra Large"
  //                             }
  //                         ]
  //                     },
  //                     {
  //                         "color": "#cc3333",
  //                         "color_name": "Red",
  //                         "price": 80,
  //                         "size": [
  //                             {
  //                                 "name": "Medium"
  //                             },
  //                             {
  //                                 "name": "Large"
  //                             },
  //                             {
  //                                 "name": "Extra Large"
  //                             },
  //                             {
  //                                 "name": "Extra Small"
  //                             }
  //                         ]
  //                     }
  //                 ]
  //             },
  //             {
  //                 "id": 88,
  //                 "name": "Beige ring handle circle cross body bag",
  //                 "slug": "beige-ring-handle-circle-cross-body-bag",
  //                 "price": 55,
  //                 "sale_price": null,
  //                 "review": 2,
  //                 "ratings": 3,
  //                 "until": null,
  //                 "stock": 100,
  //                 "top": null,
  //                 "featured": null,
  //                 "new": null,
  //                 "category": [
  //                     {
  //                         "name": "Women",
  //                         "slug": "women"
  //                     }
  //                 ],
  //                 "sm_pictures": [
  //                     {
  //                         "width": 820,
  //                         "height": 820,
  //                         "url": "/uploads/1_3df6114aa3.jpg"
  //                     },
  //                     {
  //                         "width": 820,
  //                         "height": 820,
  //                         "url": "/uploads/2_a2ee45417a.jpg"
  //                     },
  //                     {
  //                         "width": 820,
  //                         "height": 820,
  //                         "url": "/uploads/3_070f8cc732.jpg"
  //                     },
  //                     {
  //                         "width": 820,
  //                         "height": 820,
  //                         "url": "/uploads/4_0f662308da.jpg"
  //                     }
  //                 ],
  //                 "variants": []
  //             },
  //             {
  //                 "id": 89,
  //                 "name": "Beige V neck button cardigan",
  //                 "slug": "beige-v-neck-button-cardigan",
  //                 "price": 72,
  //                 "sale_price": null,
  //                 "review": 2,
  //                 "ratings": 0,
  //                 "until": null,
  //                 "stock": 100,
  //                 "top": null,
  //                 "featured": null,
  //                 "new": null,
  //                 "category": [
  //                     {
  //                         "name": "Women",
  //                         "slug": "women"
  //                     }
  //                 ],
  //                 "sm_pictures": [
  //                     {
  //                         "width": 300,
  //                         "height": 300,
  //                         "url": "/uploads/product_2_1_300x300_98e1548d0e.jpg"
  //                     },
  //                     {
  //                         "width": 300,
  //                         "height": 300,
  //                         "url": "/uploads/product_2_2_300x300_9f775cd8db.jpg"
  //                     },
  //                     {
  //                         "width": 300,
  //                         "height": 300,
  //                         "url": "/uploads/product_2_3_300x300_e7bf3012a7.jpg"
  //                     },
  //                     {
  //                         "width": 300,
  //                         "height": 300,
  //                         "url": "/uploads/product_2_4_300x300_55784f7cb0.jpg"
  //                     }
  //                 ],
  //                 "variants": []
  //             },
  //             {
  //                 "id": 90,
  //                 "name": "Black denim dungaree dress",
  //                 "slug": "black-denim-dungaree-dress",
  //                 "price": 60,
  //                 "sale_price": null,
  //                 "review": 2,
  //                 "ratings": 0,
  //                 "until": null,
  //                 "stock": 203,
  //                 "top": null,
  //                 "featured": null,
  //                 "new": null,
  //                 "category": [
  //                     {
  //                         "name": "Women",
  //                         "slug": "women"
  //                     }
  //                 ],
  //                 "sm_pictures": [
  //                     {
  //                         "width": 300,
  //                         "height": 327,
  //                         "url": "/uploads/product_5_2_300x190_7ec8c0ecc8.jpg"
  //                     },
  //                     {
  //                         "width": 300,
  //                         "height": 340,
  //                         "url": "/uploads/product_5_4_300x190_ae766268aa.jpg"
  //                     },
  //                     {
  //                         "width": 300,
  //                         "height": 190,
  //                         "url": "/uploads/product_5_1_300x190_787440f117.jpg"
  //                     },
  //                     {
  //                         "width": 300,
  //                         "height": 227,
  //                         "url": "/uploads/product_5_3_300x190_69a7d7e0db.jpg"
  //                     }
  //                 ],
  //                 "variants": []
  //             },
  //             {
  //                 "id": 91,
  //                 "name": "Black faux leather chain trim sandals",
  //                 "slug": "black-faux-leather-chain-trim-sandals",
  //                 "price": 90,
  //                 "sale_price": null,
  //                 "review": 2,
  //                 "ratings": 0,
  //                 "until": null,
  //                 "stock": 100,
  //                 "top": null,
  //                 "featured": null,
  //                 "new": null,
  //                 "category": [
  //                     {
  //                         "name": "Boots",
  //                         "slug": "boots"
  //                     },
  //                     {
  //                         "name": "Shoes",
  //                         "slug": "shoes"
  //                     },
  //                     {
  //                         "name": "Women",
  //                         "slug": "women"
  //                     }
  //                 ],
  //                 "sm_pictures": [
  //                     {
  //                         "width": 458,
  //                         "height": 458,
  //                         "url": "/uploads/5_12a3f8d877.jpg"
  //                     },
  //                     {
  //                         "width": 458,
  //                         "height": 458,
  //                         "url": "/uploads/6_6d9a6a354b.jpg"
  //                     },
  //                     {
  //                         "width": 458,
  //                         "height": 458,
  //                         "url": "/uploads/7_0ec91a9581.jpg"
  //                     },
  //                     {
  //                         "width": 458,
  //                         "height": 458,
  //                         "url": "/uploads/8_6919a9ac7f.jpg"
  //                     }
  //                 ],
  //                 "variants": []
  //             },
  //             {
  //                 "id": 92,
  //                 "name": "Brown faux fur longline coat",
  //                 "slug": "brown-faux-fur-longline-coat",
  //                 "price": 310,
  //                 "sale_price": 190,
  //                 "review": 2,
  //                 "ratings": 0,
  //                 "until": "2022-01-01",
  //                 "stock": 100,
  //                 "top": null,
  //                 "featured": null,
  //                 "new": null,
  //                 "category": [
  //                     {
  //                         "name": "Women",
  //                         "slug": "women"
  //                     }
  //                 ],
  //                 "sm_pictures": [
  //                     {
  //                         "width": 300,
  //                         "height": 300,
  //                         "url": "/uploads/product_3_1_300x300_c1c27f2eac.jpg"
  //                     },
  //                     {
  //                         "width": 300,
  //                         "height": 300,
  //                         "url": "/uploads/product_3_2_300x300_ce25066f39.jpg"
  //                     },
  //                     {
  //                         "width": 300,
  //                         "height": 300,
  //                         "url": "/uploads/product_3_3_300x300_7a52a367d8.jpg"
  //                     },
  //                     {
  //                         "width": 300,
  //                         "height": 300,
  //                         "url": "/uploads/product_3_4_300x300_da5b300369.jpg"
  //                     }
  //                 ],
  //                 "variants": []
  //             },
  //             {
  //                 "id": 93,
  //                 "name": "Dark yellow lace cut out swing dress",
  //                 "slug": "dark-yellow-lace-cut-out-swing-dress",
  //                 "price": 84,
  //                 "sale_price": null,
  //                 "review": 2,
  //                 "ratings": 0,
  //                 "until": null,
  //                 "stock": 100,
  //                 "top": null,
  //                 "featured": null,
  //                 "new": null,
  //                 "category": [
  //                     {
  //                         "name": "Dresses",
  //                         "slug": "dresses"
  //                     },
  //                     {
  //                         "name": "Women",
  //                         "slug": "women"
  //                     },
  //                     {
  //                         "name": "Clothing",
  //                         "slug": "clothing"
  //                     }
  //                 ],
  //                 "sm_pictures": [
  //                     {
  //                         "width": 458,
  //                         "height": 458,
  //                         "url": "/uploads/1_aa85a47653.jpg"
  //                     },
  //                     {
  //                         "width": 458,
  //                         "height": 458,
  //                         "url": "/uploads/2_5f037f660b.jpg"
  //                     },
  //                     {
  //                         "width": 458,
  //                         "height": 458,
  //                         "url": "/uploads/3_e34b30cfd8.jpg"
  //                     },
  //                     {
  //                         "width": 458,
  //                         "height": 458,
  //                         "url": "/uploads/4_3331bcfb46.jpg"
  //                     }
  //                 ],
  //                 "variants": [
  //                     {
  //                         "color": "#cc9966",
  //                         "color_name": "Brown",
  //                         "price": 80,
  //                         "size": [
  //                             {
  //                                 "name": "Small"
  //                             },
  //                             {
  //                                 "name": "Medium"
  //                             },
  //                             {
  //                                 "name": "Large"
  //                             },
  //                             {
  //                                 "name": "Extra Large"
  //                             }
  //                         ]
  //                     },
  //                     {
  //                         "color": "#9966cc",
  //                         "color_name": "Purple",
  //                         "price": 95,
  //                         "size": [
  //                             {
  //                                 "name": "Small"
  //                             },
  //                             {
  //                                 "name": "Large"
  //                             },
  //                             {
  //                                 "name": "Extra Small"
  //                             }
  //                         ]
  //                     },
  //                     {
  //                         "color": "#3399cc",
  //                         "color_name": "Blue",
  //                         "price": 76,
  //                         "size": [
  //                             {
  //                                 "name": "Medium"
  //                             },
  //                             {
  //                                 "name": "Large"
  //                             },
  //                             {
  //                                 "name": "Extra Large"
  //                             }
  //                         ]
  //                     }
  //                 ]
  //             },
  //             {
  //                 "id": 94,
  //                 "name": "Yellow tie strap block heel sandals",
  //                 "slug": "yellow-tie-strap-block-heel-sandals",
  //                 "price": 68,
  //                 "sale_price": null,
  //                 "review": 2,
  //                 "ratings": 1,
  //                 "until": null,
  //                 "stock": 100,
  //                 "top": null,
  //                 "featured": null,
  //                 "new": null,
  //                 "category": [
  //                     {
  //                         "name": "Shoes",
  //                         "slug": "shoes"
  //                     },
  //                     {
  //                         "name": "Women",
  //                         "slug": "women"
  //                     }
  //                 ],
  //                 "sm_pictures": [
  //                     {
  //                         "width": 575,
  //                         "height": 575,
  //                         "url": "/uploads/1_f8b683bd38.jpg"
  //                     },
  //                     {
  //                         "width": 575,
  //                         "height": 575,
  //                         "url": "/uploads/2_c5b26b1154.jpg"
  //                     },
  //                     {
  //                         "width": 575,
  //                         "height": 575,
  //                         "url": "/uploads/3_7f384e534d.jpg"
  //                     },
  //                     {
  //                         "width": 575,
  //                         "height": 575,
  //                         "url": "/uploads/4_51dfbbc880.jpg"
  //                     }
  //                 ],
  //                 "variants": [
  //                     {
  //                         "color": "#669933",
  //                         "color_name": "Green",
  //                         "price": 68,
  //                         "size": [
  //                             {
  //                                 "name": "Small"
  //                             },
  //                             {
  //                                 "name": "Large"
  //                             }
  //                         ]
  //                     },
  //                     {
  //                         "color": "#3399cc",
  //                         "color_name": "Blue",
  //                         "price": 68,
  //                         "size": [
  //                             {
  //                                 "name": "Medium"
  //                             },
  //                             {
  //                                 "name": "Large"
  //                             },
  //                             {
  //                                 "name": "Extra Large"
  //                             }
  //                         ]
  //                     },
  //                     {
  //                         "color": "#f2719c",
  //                         "color_name": "Red",
  //                         "price": 65,
  //                         "size": [
  //                             {
  //                                 "name": "Small"
  //                             },
  //                             {
  //                                 "name": "Medium"
  //                             },
  //                             {
  //                                 "name": "Large"
  //                             }
  //                         ]
  //                     }
  //                 ]
  //             },
  //             {
  //                 "id": 95,
  //                 "name": "Loafers",
  //                 "slug": "loafers",
  //                 "price": 67,
  //                 "sale_price": null,
  //                 "review": 2,
  //                 "ratings": 3,
  //                 "until": null,
  //                 "stock": 103,
  //                 "top": null,
  //                 "featured": null,
  //                 "new": true,
  //                 "category": [
  //                     {
  //                         "name": "Women",
  //                         "slug": "women"
  //                     },
  //                     {
  //                         "name": "Shoes",
  //                         "slug": "shoes"
  //                     },
  //                     {
  //                         "name": "Men",
  //                         "slug": "men"
  //                     }
  //                 ],
  //                 "sm_pictures": [
  //                     {
  //                         "width": 300,
  //                         "height": 408,
  //                         "url": "/uploads/1_90856a8f53.jpg"
  //                     },
  //                     {
  //                         "width": 600,
  //                         "height": 816,
  //                         "url": "/uploads/2_4d45fbbc96.jpg"
  //                     },
  //                     {
  //                         "width": 300,
  //                         "height": 408,
  //                         "url": "/uploads/3_780cc695ad.jpg"
  //                     }
  //                 ],
  //                 "variants": []
  //             },
  //             {
  //                 "id": 96,
  //                 "name": "Printed Sweatshirt",
  //                 "slug": "printed-sweatshirt",
  //                 "price": 12.99,
  //                 "sale_price": 7.99,
  //                 "review": 2,
  //                 "ratings": 1,
  //                 "until": null,
  //                 "stock": 100,
  //                 "top": false,
  //                 "featured": true,
  //                 "new": null,
  //                 "category": [
  //                     {
  //                         "name": "Women",
  //                         "slug": "women"
  //                     },
  //                     {
  //                         "name": "Clothing",
  //                         "slug": "clothing"
  //                     }
  //                 ],
  //                 "sm_pictures": [
  //                     {
  //                         "width": 300,
  //                         "height": 408,
  //                         "url": "/uploads/product_1_1_300x408_1f662c0197.jpg"
  //                     },
  //                     {
  //                         "width": 300,
  //                         "height": 408,
  //                         "url": "/uploads/product_1_2_300x408_9e213baa0a.jpg"
  //                     },
  //                     {
  //                         "width": 300,
  //                         "height": 408,
  //                         "url": "/uploads/product_1_3_300x408_21f126ec4b.jpg"
  //                     },
  //                     {
  //                         "width": 300,
  //                         "height": 408,
  //                         "url": "/uploads/product_1_4_300x408_a9d690bee3.jpg"
  //                     }
  //                 ],
  //                 "variants": []
  //             }
  //         ],
  //         "totalCount": 50
  //     }
  // }
  const [firstLoading, setFirstLoading] = useState(false);
  const [perPage, setPerPage] = useState(5);
  const [pageTitle, setPageTitle] = useState("List");
  const [toggle, setToggle] = useState(false);

  const totalCount = products && products?.length;

  useEffect(() => {
    window.addEventListener("resize", resizeHandle);
    resizeHandle();
    return () => {
      window.removeEventListener("resize", resizeHandle);
    };
  }, []);

  function resizeHandle() {
    if (document.querySelector("body").offsetWidth < 992) setToggle(true);
    else setToggle(false);
  }

  // x

  useEffect(() => {
    if (products) setFirstLoading(true);
  }, [products]);

  useEffect(() => {
    if (type == "list") {
      setPageTitle("List");
      setPerPage(5);
    } else if (type == "2cols") {
      setPageTitle("Grid 2 Columns");
      setPerPage(6);
    } else if (type == "3cols") {
      setPageTitle("Grid 3 Columns");
      setPerPage(9);
    } else if (type == "4cols") {
      setPageTitle("Grid 4 Columns");
      setPerPage(12);
    }
  }, [type]);

  function onSortByChange(e) {
    let queryObject = router.query;
    let url = router.pathname.replace("[type]", query.type) + "?";
    for (let key in queryObject) {
      if (key !== "type" && key !== "sortBy") {
        url += key + "=" + queryObject[key] + "&";
      }
    }

    router.push(url + "sortBy=" + e.target.value);
  }

  function toggleSidebar() {
    if (
      document.querySelector("body").classList.contains("sidebar-filter-active")
    ) {
      document.querySelector("body").classList.remove("sidebar-filter-active");
    } else {
      document.querySelector("body").classList.add("sidebar-filter-active");
    }
  }

  function hideSidebar() {
    document.querySelector("body").classList.remove("sidebar-filter-active");
  }

  if (error) {
    return <div></div>;
  }

  return (
    <main className="main shop">
      <PageHeader title={pageTitle} subTitle="Shop" />
      <nav className="breadcrumb-nav mb-2">
        <div className="container">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <ALink href="/">Home</ALink>
            </li>
            <li className="breadcrumb-item">
              <ALink href="/shop/sidebar/list">Shop</ALink>
            </li>
            <li className="breadcrumb-item active">{pageTitle}</li>
            {query.search ? (
              <li className="breadcrumb-item">
                <span>Search - {query.searchTerm}</span>
              </li>
            ) : (
              ""
            )}
          </ol>
        </div>
      </nav>

      <div className="page-content">
        <div className="container">
          <div className="row skeleton-body">
            <div
              className={`col-lg-9 skel-shop-products ${
                !loading ? "loaded" : ""
              }`}
            >
              <div className="toolbox">
                <div className="toolbox-left">
                  {!loading && products ? (
                    <div className="toolbox-info">
                      Showing
                      <span>
                        {" "}
                        {products.length} of {totalCount}
                      </span>{" "}
                      Products
                    </div>
                  ) : (
                    ""
                  )}
                </div>

                <div className="toolbox-right">
                  <div className="toolbox-sort">
                    <label htmlFor="sortby">Sort by:</label>
                    <div className="select-custom">
                      <select
                        name="sortby"
                        id="sortby"
                        className="form-control"
                        onChange={onSortByChange}
                        value={query.sortBy ? query.sortBy : "default"}
                      >
                        <option value="default">Default</option>
                        <option value="featured">Most Popular</option>
                        <option value="rating">Most Rated</option>
                        <option value="new">Date</option>
                      </select>
                    </div>
                  </div>
                  <div className="toolbox-layout">
                    <ALink
                      href="/shop/sidebar/list"
                      className={`btn-layout ${type == "list" ? "active" : ""}`}
                      scroll={false}
                    >
                      <svg width="16" height="10">
                        <rect x="0" y="0" width="4" height="4" />
                        <rect x="6" y="0" width="10" height="4" />
                        <rect x="0" y="6" width="4" height="4" />
                        <rect x="6" y="6" width="10" height="4" />
                      </svg>
                    </ALink>

                    <ALink
                      href="/shop/sidebar/2cols"
                      className={`btn-layout ${
                        type == "2cols" ? "active" : ""
                      }`}
                      scroll={false}
                    >
                      <svg width="10" height="10">
                        <rect x="0" y="0" width="4" height="4" />
                        <rect x="6" y="0" width="4" height="4" />
                        <rect x="0" y="6" width="4" height="4" />
                        <rect x="6" y="6" width="4" height="4" />
                      </svg>
                    </ALink>

                    <ALink
                      href="/shop/sidebar/3cols"
                      className={`btn-layout ${
                        type == "3cols" ? "active" : ""
                      }`}
                      scroll={false}
                    >
                      <svg width="16" height="10">
                        <rect x="0" y="0" width="4" height="4" />
                        <rect x="6" y="0" width="4" height="4" />
                        <rect x="12" y="0" width="4" height="4" />
                        <rect x="0" y="6" width="4" height="4" />
                        <rect x="6" y="6" width="4" height="4" />
                        <rect x="12" y="6" width="4" height="4" />
                      </svg>
                    </ALink>

                    <ALink
                      href="/shop/sidebar/4cols"
                      className={`btn-layout ${
                        type == "4cols" ? "active" : ""
                      }`}
                      scroll={false}
                    >
                      <svg width="22" height="10">
                        <rect x="0" y="0" width="4" height="4" />
                        <rect x="6" y="0" width="4" height="4" />
                        <rect x="12" y="0" width="4" height="4" />
                        <rect x="18" y="0" width="4" height="4" />
                        <rect x="0" y="6" width="4" height="4" />
                        <rect x="6" y="6" width="4" height="4" />
                        <rect x="12" y="6" width="4" height="4" />
                        <rect x="18" y="6" width="4" height="4" />
                      </svg>
                    </ALink>
                  </div>
                </div>
              </div>

              <ShopListOne
                products={products}
                perPage={perPage}
                loading={loading}
              ></ShopListOne>

              {totalCount > perPage ? (
                <Pagination perPage={perPage} total={totalCount}></Pagination>
              ) : (
                ""
              )}
            </div>

            <aside
              className={`col-lg-3 skel-shop-sidebar order-lg-first skeleton-body ${
                !loading || firstLoading ? "loaded" : ""
              }`}
            >
              <div className="skel-widget"></div>
              <div className="skel-widget"></div>
              <div className="skel-widget"></div>
              <div className="skel-widget"></div>
              <StickyBox className="sticky-content" offsetTop={70}>
                <ShopSidebarOne toggle={toggle}></ShopSidebarOne>
              </StickyBox>
              {toggle ? (
                <button
                  className="sidebar-fixed-toggler"
                  onClick={toggleSidebar}
                >
                  <i className="icon-cog"></i>
                </button>
              ) : (
                ""
              )}
              <div
                className="sidebar-filter-overlay"
                onClick={hideSidebar}
              ></div>
            </aside>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ShopGrid;

// export const getServerSideProps = async () => {
  

//   return {
//     props: { data: data },
//   };
// };

//   export const getServerSidePaths = async () => {

//     const paths = ['list','2cols']
//     return {
//       paths,
//       fallback: true,
//     };
//   };
