import React from "react";
import ReactDOM from "react-dom/client";


// const head = React.createElement("h1" , {id : "head"} , "hello from React")

// const Jsxhead = <h1> hello from jsx </h1>

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://imgs.search.brave.com/SA3xQ5mXrfg0AvfWvM6kARdfg4ilDwWNdGMVfbfJVSo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMjE5/NzYwNDAwMi92ZWN0/b3IvZm9vZC1kZWxp/dmVyeS1mb29kLWRl/bGl2ZXJ5LXNpZ24t/c3RpY2tlci1pbGx1/c3RyYXRpb24uanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPXNX/bUh6MTNoZGYtbFc3/aXJNei1VMXBtRVk0/YnUzNVJoME1RR0Fv/OU1LSDg9" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart </li>
                </ul>
            </div>
        </div>
    )
}

const ResCard = (dets) => {
    const { resData } = dets;

    const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } = resData?.card.card.info;
    return (
        <div className="res-card">
            <img className="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{resData?.card.card.info.sla.slaString}</h4>
        </div>
    )
}

const resList = [


    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "104421",
                    "name": "Domino's Pizza",
                    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/3/3/01de0904-8d45-48ad-8060-3e933c3f26c1_104421.JPG",
                    "locality": "Dampier Nagar",
                    "areaName": "Shankar Vihar",
                    "costForTwo": "₹400 for two",
                    "cuisines": [
                        "Pizzas",
                        "Italian",
                        "Pastas",
                        "Desserts"
                    ],
                    "avgRating": 4.5,
                    "parentId": "2456",
                    "avgRatingString": "4.5",
                    "totalRatingsString": "2.3K+",
                    "promoted": true,
                    "adTrackingId": "cid=dced4c22-dcf8-44f1-b13f-d6afe92bb7c3~p=0~adgrpid=dced4c22-dcf8-44f1-b13f-d6afe92bb7c3#ag129~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=104421~plpr=COLLECTION~eid=1bb5635a-bb3c-4c01-b80e-214922158e30~srvts=1772730509221~collid=83631",
                    "sla": {
                        "deliveryTime": 25,
                        "lastMileTravel": 2,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-25 mins",
                        "lastMileTravelString": "2.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2026-03-05 23:59:00",
                        "opened": true
                    },
                    "badges": {
                        "imageBadges": [
                            {
                                "imageId": "Rxawards/_CATEGORY-Pizza.png",
                                "description": "Delivery!"
                            }
                        ]
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "imageBased": {
                                "badgeObject": [
                                    {
                                        "attributes": {
                                            "imageId": "Rxawards/_CATEGORY-Pizza.png",
                                            "description": "Delivery!"
                                        }
                                    }
                                ]
                            },
                            "textExtendedBadges": {

                            },
                            "textBased": {

                            }
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹49",
                        "logoCtx": {
                            "text": "BENEFITS"
                        }
                    },
                    "orderabilityCommunication": {
                        "title": {

                        },
                        "subTitle": {

                        },
                        "message": {

                        },
                        "customIcon": {

                        },
                        "commsStyling": {

                        }
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {

                            },
                            "video": {

                            }
                        }
                    },
                    "reviewsSummary": {

                    },
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {

                    },
                    "externalRatings": {
                        "aggregatedRating": {
                            "rating": "--"
                        }
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    "campaignId": "dced4c22-dcf8-44f1-b13f-d6afe92bb7c3"
                },
                "analytics": {

                },
                "cta": {
                    "link": "swiggy://menu?restaurant_id=104421&source=collection&query=Pizza",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    },
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "1005073",
                    "name": "Pizza Hut",
                    "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2025/5/7/e4a3d9a3-9997-4b73-accc-b029abeb1cc9_83eb91d8-7d3d-4463-8e7e-9188ba95bcf7.jpg_compressed",
                    "locality": "Dwarka Puri",
                    "areaName": "Shankar_Vihar",
                    "costForTwo": "₹350 for two",
                    "cuisines": [
                        "Pizzas"
                    ],
                    "avgRating": 4.1,
                    "parentId": "721",
                    "avgRatingString": "4.1",
                    "totalRatingsString": "1.6K+",
                    "sla": {
                        "deliveryTime": 14,
                        "lastMileTravel": 0.8,
                        "serviceability": "SERVICEABLE",
                        "slaString": "10-15 mins",
                        "lastMileTravelString": "0.8 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2026-03-06 04:00:00",
                        "opened": true
                    },
                    "badges": {
                        "imageBadges": [
                            {
                                "imageId": "Rxawards/_CATEGORY-Pizza.png",
                                "description": "Delivery!"
                            }
                        ]
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "imageBased": {
                                "badgeObject": [
                                    {
                                        "attributes": {
                                            "description": "Delivery!",
                                            "imageId": "Rxawards/_CATEGORY-Pizza.png"
                                        }
                                    }
                                ]
                            },
                            "textExtendedBadges": {

                            },
                            "textBased": {

                            }
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "60% OFF",
                        "subHeader": "UPTO ₹110",
                        "logoCtx": {
                            "text": "BENEFITS"
                        }
                    },
                    "orderabilityCommunication": {
                        "title": {

                        },
                        "subTitle": {

                        },
                        "message": {

                        },
                        "customIcon": {

                        },
                        "commsStyling": {

                        }
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {

                            },
                            "video": {

                            }
                        }
                    },
                    "reviewsSummary": {

                    },
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {

                    },
                    "externalRatings": {
                        "aggregatedRating": {
                            "rating": "--"
                        }
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {

                },
                "cta": {
                    "link": "swiggy://menu?restaurant_id=1005073&source=collection&query=Pizza",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    },
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "1173635",
                    "name": "Veg Meals By LunchBox",
                    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/3/b9a99e91-24d0-4f4e-9ebe-0d36e31d5d5d_1173635.JPG",
                    "locality": "Radhika Vihar- 1",
                    "areaName": "Krishna Nagar",
                    "costForTwo": "₹400 for two",
                    "cuisines": [
                        "Pizzas",
                        "Italian",
                        "Desserts",
                        "Beverages"
                    ],
                    "avgRating": 3.9,
                    "parentId": "21938",
                    "avgRatingString": "3.9",
                    "totalRatingsString": "10",
                    "promoted": true,
                    "adTrackingId": "cid=0a8f666d-3505-4ef1-853e-9d2dc767d50f~p=1~adgrpid=0a8f666d-3505-4ef1-853e-9d2dc767d50f#ag87~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=1173635~plpr=COLLECTION~eid=5a0bb45c-7262-4dd7-a7f5-156fe8db1574~srvts=1772730509221~collid=83631",
                    "sla": {
                        "deliveryTime": 22,
                        "lastMileTravel": 2.1,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-25 mins",
                        "lastMileTravelString": "2.1 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2026-03-05 23:59:00",
                        "opened": true
                    },
                    "badges": {

                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "textBased": {

                            },
                            "imageBased": {

                            },
                            "textExtendedBadges": {

                            }
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "₹66 OFF",
                        "subHeader": "ABOVE ₹249",
                        "discountTag": "FLAT DEAL",
                        "headerTypeV2": "HEADER_TYPE_V2_CRICKET_MATCH",
                        "logoCtx": {
                            "text": "BENEFITS"
                        }
                    },
                    "orderabilityCommunication": {
                        "title": {

                        },
                        "subTitle": {

                        },
                        "message": {

                        },
                        "customIcon": {

                        },
                        "commsStyling": {

                        }
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {

                            },
                            "video": {

                            }
                        }
                    },
                    "reviewsSummary": {

                    },
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "isNewlyOnboarded": true,
                    "restaurantOfferPresentationInfo": {

                    },
                    "externalRatings": {
                        "aggregatedRating": {
                            "rating": "--"
                        }
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    "campaignId": "0a8f666d-3505-4ef1-853e-9d2dc767d50f"
                },
                "analytics": {

                },
                "cta": {
                    "link": "swiggy://menu?restaurant_id=1173635&source=collection&query=Pizza",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    },
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "1099838",
                    "name": "Popular Veg Biryani",
                    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/5/23/41a72954-5744-47ff-a040-24fa7e2f874a_1099838 (1).jpg",
                    "locality": "All Wards,Nagar Palika",
                    "areaName": "Vrindavan",
                    "costForTwo": "₹250 for two",
                    "cuisines": [
                        "Pizzas"
                    ],
                    "avgRating": 3.2,
                    "veg": true,
                    "parentId": "638895",
                    "avgRatingString": "3.2",
                    "totalRatingsString": "328",
                    "sla": {
                        "deliveryTime": 32,
                        "lastMileTravel": 8.3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "8.3 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2026-03-06 03:00:00",
                        "opened": true
                    },
                    "badges": {

                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "textExtendedBadges": {

                            },
                            "textBased": {

                            },
                            "imageBased": {

                            }
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹29",
                        "logoCtx": {
                            "text": "BENEFITS"
                        }
                    },
                    "orderabilityCommunication": {
                        "title": {

                        },
                        "subTitle": {

                        },
                        "message": {

                        },
                        "customIcon": {

                        },
                        "commsStyling": {

                        }
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {

                            },
                            "video": {

                            }
                        }
                    },
                    "reviewsSummary": {

                    },
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {

                    },
                    "externalRatings": {
                        "aggregatedRating": {
                            "rating": "--"
                        }
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {

                },
                "cta": {
                    "link": "swiggy://menu?restaurant_id=1099838&source=collection&query=Pizza",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    },
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "821073",
                    "name": "New Vip Pizza",
                    "cloudinaryImageId": "1806e71add667be562d8fc63d3e36d3a",
                    "locality": "Shankar_Vihar",
                    "areaName": "Shankar_Vihar",
                    "costForTwo": "₹300 for two",
                    "cuisines": [
                        "Pizzas"
                    ],
                    "avgRating": 3.7,
                    "veg": true,
                    "parentId": "560757",
                    "avgRatingString": "3.7",
                    "totalRatingsString": "69",
                    "promoted": true,
                    "adTrackingId": "cid=f44be37f-f42b-4fec-9323-61251cdb6210~p=3~adgrpid=f44be37f-f42b-4fec-9323-61251cdb6210#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=821073~plpr=COLLECTION~eid=720c95f7-a150-4b71-8545-7939df90726a~srvts=1772730509221~collid=83631",
                    "sla": {
                        "deliveryTime": 35,
                        "lastMileTravel": 4.4,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "4.4 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2026-03-06 04:00:00",
                        "opened": true
                    },
                    "badges": {
                        "imageBadges": [
                            {
                                "imageId": "v1695133679/badges/Pure_Veg111.png",
                                "description": "pureveg"
                            }
                        ]
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "imageBased": {
                                "badgeObject": [
                                    {
                                        "attributes": {
                                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                                            "description": "pureveg"
                                        }
                                    }
                                ]
                            },
                            "textExtendedBadges": {

                            },
                            "textBased": {

                            }
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "20% OFF",
                        "subHeader": "UPTO ₹50",
                        "logoCtx": {
                            "text": "BENEFITS"
                        }
                    },
                    "orderabilityCommunication": {
                        "title": {

                        },
                        "subTitle": {

                        },
                        "message": {

                        },
                        "customIcon": {

                        },
                        "commsStyling": {

                        }
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {

                            },
                            "video": {

                            }
                        }
                    },
                    "reviewsSummary": {

                    },
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {

                    },
                    "externalRatings": {
                        "aggregatedRating": {
                            "rating": "--"
                        }
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    "campaignId": "f44be37f-f42b-4fec-9323-61251cdb6210"
                },
                "analytics": {

                },
                "cta": {
                    "link": "swiggy://menu?restaurant_id=821073&source=collection&query=Pizza",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    },
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "1044465",
                    "name": "Green Gourmet",
                    "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2025/4/3/b024f6f0-7b73-43e2-8a4f-858ba8255a53_62a707da-9727-4167-9c58-7daa1d465aad.jpeg",
                    "locality": "Vrindavan",
                    "areaName": "Vrindavan",
                    "costForTwo": "₹300 for two",
                    "cuisines": [
                        "North Indian",
                        "Pizzas",
                        "Thalis",
                        "Chinese",
                        "Burgers",
                        "Fast Food",
                        "Beverages",
                        "Sweets"
                    ],
                    "avgRating": 3.6,
                    "parentId": "607590",
                    "avgRatingString": "3.6",
                    "totalRatingsString": "778",
                    "sla": {
                        "deliveryTime": 31,
                        "lastMileTravel": 9.3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "9.3 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2026-03-06 03:00:00",
                        "opened": true
                    },
                    "badges": {

                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "textBased": {

                            },
                            "imageBased": {

                            },
                            "textExtendedBadges": {

                            }
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹99",
                        "logoCtx": {
                            "text": "BENEFITS"
                        }
                    },
                    "orderabilityCommunication": {
                        "title": {

                        },
                        "subTitle": {

                        },
                        "message": {

                        },
                        "customIcon": {

                        },
                        "commsStyling": {

                        }
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {

                            },
                            "video": {

                            }
                        }
                    },
                    "reviewsSummary": {

                    },
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {

                    },
                    "externalRatings": {
                        "aggregatedRating": {
                            "rating": "--"
                        }
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {

                },
                "cta": {
                    "link": "swiggy://menu?restaurant_id=1044465&source=collection&query=Pizza",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    },
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "881187",
                    "name": "La Pino'z Pizza",
                    "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2025/5/26/3b842985-2d4c-4b3f-ab26-4213f1a72172_0ebff1b2-5815-41bd-9937-115a7d91cd48.JPG",
                    "locality": "Phase 2",
                    "areaName": "City Center Mall",
                    "costForTwo": "₹250 for two",
                    "cuisines": [
                        "Pizzas",
                        "Pastas",
                        "Italian",
                        "Desserts",
                        "Beverages"
                    ],
                    "avgRating": 4.2,
                    "parentId": "4961",
                    "avgRatingString": "4.2",
                    "totalRatingsString": "1.1K+",
                    "promoted": true,
                    "adTrackingId": "cid=8ffabbaf-3843-4c04-b27c-2d3f8d317b4d~p=4~adgrpid=8ffabbaf-3843-4c04-b27c-2d3f8d317b4d#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=881187~plpr=COLLECTION~eid=5f2eb895-54b9-451f-9d01-5e6a02d650a2~srvts=1772730509221~collid=83631",
                    "sla": {
                        "deliveryTime": 20,
                        "lastMileTravel": 1.7,
                        "serviceability": "SERVICEABLE",
                        "slaString": "15-20 mins",
                        "lastMileTravelString": "1.7 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2026-03-06 00:00:00",
                        "opened": true
                    },
                    "badges": {
                        "imageBadges": [
                            {
                                "imageId": "android/static-assets/icons/big_rx.png",
                                "description": "bolt!"
                            },
                            {
                                "imageId": "Rxawards/_CATEGORY-Pizza.png",
                                "description": "Delivery!"
                            },
                            {
                                "imageId": "v1695133679/badges/Pure_Veg111.png",
                                "description": "pureveg"
                            }
                        ]
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "imageBased": {
                                "badgeObject": [
                                    {
                                        "attributes": {
                                            "imageId": "android/static-assets/icons/big_rx.png",
                                            "description": "bolt!"
                                        }
                                    },
                                    {
                                        "attributes": {
                                            "description": "Delivery!",
                                            "imageId": "Rxawards/_CATEGORY-Pizza.png"
                                        }
                                    },
                                    {
                                        "attributes": {
                                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                                            "description": "pureveg"
                                        }
                                    }
                                ]
                            },
                            "textExtendedBadges": {

                            },
                            "textBased": {

                            }
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "₹100 OFF",
                        "subHeader": "ABOVE ₹249",
                        "discountTag": "FLAT DEAL",
                        "logoCtx": {
                            "text": "BENEFITS"
                        }
                    },
                    "orderabilityCommunication": {
                        "title": {

                        },
                        "subTitle": {

                        },
                        "message": {

                        },
                        "customIcon": {

                        },
                        "commsStyling": {

                        }
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {

                            },
                            "video": {

                            }
                        }
                    },
                    "reviewsSummary": {

                    },
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {

                    },
                    "externalRatings": {
                        "aggregatedRating": {
                            "rating": "--"
                        }
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    "campaignId": "8ffabbaf-3843-4c04-b27c-2d3f8d317b4d"
                },
                "analytics": {

                },
                "cta": {
                    "link": "swiggy://menu?restaurant_id=881187&source=collection&query=Pizza",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    }
]

const Body = () => {
    return (
        <div className="body">
            <div className="search">
                Search
            </div>
            <div className="rest-container">
                {resList.map((restaurant) => (
                    <ResCard
                        key={restaurant.card.card.info.id}
                        resData={restaurant}
                    />
                ))}
            </div>
        </div>
    )
}

const Applayout = () => {
    return (
        <div className="app" >
            <Header />
            <Body />
        </div>
    )
}



const root = ReactDOM.createRoot(document.getElementById("root"))

// root.render(Jsxhead)
root.render(<Applayout />)