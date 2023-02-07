import Card from "./Card";
// import "./Listings.css";

const Listings = ({searchResults}) => {
  const cardData = searchResults?.length > 0 ? searchResults : data.results

  return (
    <div className="listing_container">
      {cardData.map(result => (
        <Card name={result.name} city={result.city} price={result.price} rating={result.rating} img={result.images[0]} />
      ))}
    </div>
  );
};

export default Listings;

const data = {
  "error": false,
  "headers": {
    "response_time": 1417,
    "response_timestamp": "2023-01-24T06:09:33.402Z",
    "response_id": 22162314
  },
  "results": [
    {
      "id": "8955630",
      "url": "https://www.airbnb.com/rooms/8955630",
      "deeplink": "https://www.airbnb.com/rooms/8955630?check_in=2023-05-15&check_out=2023-05-16&adults=2&children=0&infants=0",
      "position": 1,
      "name": "Studio of 27m²",
      "bathrooms": 1,
      "bedrooms": 0,
      "beds": 1,
      "city": "Paris",
      "images": [
        "https://a0.muscache.com/im/pictures/91051b4f-a8b1-40b4-8fdc-a248cd0ab768.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/af8c7434-ca7e-4982-9a9f-c8a44de78c2f.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/3a1bd111-e7c0-4a48-a284-03a04e3420bb.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/81b1a486-2493-4086-a0cb-165718d482ad.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/913811b8-b57f-48a7-97c6-0de953589ceb.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/e6673183-d630-46c9-a208-b6b99399b283.jpg?im_w=720"
      ],
      "hostThumbnail": "https://a0.muscache.com/im/pictures/user/6cd9f6a6-8346-4826-bcd1-4260318a921a.jpg?aki_policy=profile_x_medium",
      "isSuperhost": true,
      "rareFind": false,
      "lat": 48.82504,
      "lng": 2.33611,
      "persons": 2,
      "reviewsCount": 211,
      "rating": 4.78,
      "type": "Entire rental unit",
      "userId": 46806462,
      "address": "Paris, Île-de-France, France",
      "amenityIds": [
        1,
        3,
        35,
        131,
        4,
        37,
        38,
        39,
        8,
        40,
        41,
        43,
        12,
        44,
        45,
        46,
        21,
        30
      ],
      "previewAmenities": [
        "Wifi",
        "Kitchen",
        "Heating"
      ],
      "cancelPolicy": "CANCEL_MODERATE",
      "price": {
        "rate": 139,
        "currency": "USD",
        "total": 139,
        "priceItems": [
          {
            "amount": 98
          },
          {
            "amount": 16
          },
          {
            "amount": 19
          },
          {
            "amount": 6
          }
        ]
      }
    },
    {
      "id": "22725995",
      "url": "https://www.airbnb.com/rooms/22725995",
      "deeplink": "https://www.airbnb.com/rooms/22725995?check_in=2023-05-15&check_out=2023-05-16&adults=2&children=0&infants=0",
      "position": 2,
      "name": "Beautiful Studio with Balcony Sacred Heart View",
      "bathrooms": 1,
      "bedrooms": 1,
      "beds": 1,
      "city": "Paris",
      "images": [
        "https://a0.muscache.com/im/pictures/a8b6587c-8573-452b-b4d7-c905eab0c8fd.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/203469d0-47aa-4e9f-8263-3a4a18d021d0.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/7017188c-90ce-45e1-97fd-acd0af018a08.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/28ff53dd-02eb-4088-a1fe-053f6f557cf2.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/3b71f26d-9754-4e48-b079-6a6080e722ba.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/17b76a79-a0a0-496d-97a3-febe26fd10a8.jpg?im_w=720"
      ],
      "hostThumbnail": "https://a0.muscache.com/im/pictures/user/3816d7ea-8514-415f-8642-9a69fa402c41.jpg?aki_policy=profile_x_medium",
      "isSuperhost": true,
      "rareFind": false,
      "lat": 48.88214,
      "lng": 2.34014,
      "persons": 2,
      "reviewsCount": 148,
      "rating": 4.83,
      "type": "Private room in rental unit",
      "userId": 9661414,
      "address": "Paris, Île-de-France, France",
      "amenityIds": [
        131,
        4,
        8,
        137,
        10,
        522,
        77,
        79,
        146,
        85,
        86,
        663,
        280,
        665,
        90,
        27,
        91,
        93,
        30,
        94,
        415,
        671,
        96,
        672,
        35,
        611,
        100,
        37,
        39,
        40,
        41,
        42,
        44,
        45,
        46,
        51,
        179,
        308,
        54,
        57
      ],
      "previewAmenities": [
        "Wifi",
        "Kitchen",
        "Heating"
      ],
      "cancelPolicy": "CANCEL_BETTER_STRICT_WITH_GRACE_PERIOD",
      "price": {
        "rate": 235,
        "currency": "USD",
        "total": 235,
        "priceItems": [
          {
            "amount": 170
          },
          {
            "amount": 22
          },
          {
            "amount": 32
          },
          {
            "amount": 11
          }
        ]
      }
    },
    {
      "id": "596242700130362222",
      "url": "https://www.airbnb.com/rooms/596242700130362222",
      "deeplink": "https://www.airbnb.com/rooms/596242700130362222?check_in=2023-05-15&check_out=2023-05-16&adults=2&children=0&infants=0",
      "position": 3,
      "name": "Small studio parisien -rue Saint Honoré, Concorde",
      "bathrooms": 1,
      "bedrooms": 1,
      "beds": 1,
      "city": "Paris",
      "images": [
        "https://a0.muscache.com/im/pictures/c8949cd8-4db3-44de-857d-a63dd2ccea37.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/bbf479a0-32ea-46ef-900d-e9e0a7c5c722.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/ef634d99-9148-4fb5-b72f-73b42f6c2f68.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/1234639d-245c-4a5e-b928-d3c426dcc0c5.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/10b39df8-9e05-42aa-ae68-db9f251acfcf.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/d4b2b9ba-85b1-44a0-a9b9-44b5ba83948a.jpg?im_w=720"
      ],
      "hostThumbnail": "https://a0.muscache.com/im/pictures/user/139c499e-a7e6-4d0e-8c43-65720dfd2aa3.jpg?aki_policy=profile_x_medium",
      "isSuperhost": false,
      "rareFind": false,
      "lat": 48.86905,
      "lng": 2.32583,
      "persons": 2,
      "reviewsCount": 35,
      "rating": 4.49,
      "userId": 413358277,
      "address": "Paris, Île-de-France, France",
      "amenityIds": [
        4,
        137,
        10,
        77,
        79,
        80,
        81,
        83,
        21,
        85,
        665,
        669,
        30,
        35,
        611,
        36,
        293,
        39,
        103,
        40,
        41,
        42,
        683,
        44,
        236,
        45
      ],
      "previewAmenities": [
        "Wifi",
        "Heating"
      ],
      "cancelPolicy": "CANCEL_FLEXIBLE",
      "price": {
        "rate": 119,
        "currency": "USD",
        "total": 119,
        "priceItems": [
          {
            "amount": 82
          },
          {
            "amount": 16
          },
          {
            "amount": 16
          },
          {
            "amount": 5
          }
        ]
      }
    },
    {
      "id": "19796151",
      "url": "https://www.airbnb.com/rooms/19796151",
      "deeplink": "https://www.airbnb.com/rooms/19796151?check_in=2023-05-15&check_out=2023-05-16&adults=2&children=0&infants=0",
      "position": 4,
      "name": "MAGNIFICENT VIEW EIFFEL TOWER PRIVATE STUDIO AND BALCONY",
      "bathrooms": 1,
      "bedrooms": 0,
      "beds": 2,
      "city": "Paris",
      "images": [
        "https://a0.muscache.com/im/pictures/miso/Hosting-19796151/original/e92d2f61-68b1-4977-ade9-e7bad78bd637.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/b1cc348d-d8f0-44f5-8184-274fd4123243.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/0af1875d-66e9-4fec-81e8-ca780fd52029.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/037a06ec-2e48-4d80-b237-6d5e8259478d.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/0840e149-cdf0-4157-87d2-be51a2f5e288.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/86dd3f67-37d1-49eb-8af3-a7c8bfd40a09.jpg?im_w=720"
      ],
      "hostThumbnail": "https://a0.muscache.com/im/pictures/user/a5c8da13-276a-4767-835a-4652c2eb9f6e.jpg?aki_policy=profile_x_medium",
      "isSuperhost": true,
      "rareFind": false,
      "lat": 48.8543,
      "lng": 2.29572,
      "persons": 2,
      "reviewsCount": 426,
      "rating": 4.86,
      "type": "Private room in rental unit",
      "userId": 8847681,
      "address": "Paris, Île-de-France, France",
      "amenityIds": [
        129,
        4,
        8,
        137,
        10,
        522,
        331,
        77,
        85,
        86,
        663,
        280,
        89,
        665,
        90,
        91,
        93,
        30,
        95,
        287,
        671,
        672,
        35,
        100,
        40,
        42,
        44,
        236,
        45,
        625,
        500
      ],
      "previewAmenities": [
        "Wifi",
        "Kitchen",
        "Heating"
      ],
      "cancelPolicy": "CANCEL_STRICT_14_WITH_GRACE_PERIOD",
      "price": {
        "rate": 594,
        "currency": "USD",
        "total": 594,
        "priceItems": [
          {
            "amount": 423
          },
          {
            "amount": 76
          },
          {
            "amount": 84
          },
          {
            "amount": 11
          }
        ]
      }
    },
    {
      "id": "794799103594313298",
      "url": "https://www.airbnb.com/rooms/794799103594313298",
      "deeplink": "https://www.airbnb.com/rooms/794799103594313298?check_in=2023-05-15&check_out=2023-05-16&adults=2&children=0&infants=0",
      "position": 5,
      "name": "Short-Term Studio Rentals - Paris 5th",
      "bathrooms": 1,
      "bedrooms": 1,
      "beds": 1,
      "city": "Paris",
      "images": [
        "https://a0.muscache.com/im/pictures/miso/Hosting-794799103594313298/original/cd0e5fe7-846a-4fee-b2de-0c362fe9af6e.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-794799103594313298/original/28e7a7a4-df25-4fb9-ba26-7d3d6d1fabf8.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-794799103594313298/original/878bd45a-99b4-4240-a85f-dd2b0668d993.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-794799103594313298/original/6182f7c6-8cd6-4791-aca7-956371b51a01.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-794799103594313298/original/1f74c5ec-55d6-4481-b1a5-620861c83206.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-794799103594313298/original/bdbc2943-2bb7-4c82-a285-d4cc9baee234.jpeg?im_w=720"
      ],
      "hostThumbnail": "https://a0.muscache.com/im/pictures/user/9ad3a9fc-0aa0-4620-8416-6de08a3bc3b8.jpg?aki_policy=profile_x_medium",
      "isSuperhost": false,
      "rareFind": false,
      "lat": 48.8421919,
      "lng": 2.3497802,
      "persons": 2,
      "reviewsCount": 5,
      "rating": 4.8,
      "type": "Entire rental unit",
      "userId": 243418170,
      "address": "Paris, Île-de-France, France",
      "amenityIds": [
        1,
        129,
        322,
        4,
        8,
        10,
        522,
        77,
        79,
        145,
        146,
        85,
        663,
        89,
        91,
        667,
        93,
        30,
        94,
        671,
        96,
        33,
        35,
        611,
        36,
        40,
        47,
        625,
        308
      ],
      "previewAmenities": [
        "Wifi",
        "Kitchen",
        "Washer",
        "Heating"
      ],
      "cancelPolicy": "CANCEL_BETTER_STRICT_WITH_GRACE_PERIOD",
      "price": {
        "rate": 114,
        "currency": "USD",
        "total": 114,
        "priceItems": [
          {
            "amount": 82
          },
          {
            "amount": 11
          },
          {
            "amount": 16
          },
          {
            "amount": 5
          }
        ]
      }
    },
    {
      "id": "26188730",
      "url": "https://www.airbnb.com/rooms/26188730",
      "deeplink": "https://www.airbnb.com/rooms/26188730?check_in=2023-05-15&check_out=2023-05-16&adults=2&children=0&infants=0",
      "position": 6,
      "name": "Romantic loft with hot tub in the Champs-Élysées",
      "bathrooms": 1,
      "bedrooms": 1,
      "beds": 1,
      "city": "Paris",
      "images": [
        "https://a0.muscache.com/im/pictures/b7401821-799f-494c-9f10-4b268f63e1c1.jpg?im_w=1200",
        "https://a0.muscache.com/im/pictures/b007a7db-ffb2-40e0-bbb5-fcbbbf8c1e71.jpg?im_w=1200",
        "https://a0.muscache.com/im/pictures/b2c0fc2d-6831-46aa-b4eb-3ad987ef777f.jpg?im_w=1200",
        "https://a0.muscache.com/im/pictures/2d3f7f3b-2bc7-43cc-b8f9-5513064474af.jpg?im_w=1200",
        "https://a0.muscache.com/im/pictures/4df73493-aa7f-4fc3-a1b8-2ee09caa60f4.jpg?im_w=1200",
        "https://a0.muscache.com/im/pictures/b007a7db-ffb2-40e0-bbb5-fcbbbf8c1e71.jpg?im_w=1200"
      ],
      "hostThumbnail": "https://a0.muscache.com/im/pictures/user/a2886f0c-d855-48f9-8f98-f498639ee332.jpg?aki_policy=profile_x_medium",
      "isSuperhost": true,
      "rareFind": false,
      "lat": 48.86826,
      "lng": 2.30343,
      "persons": 2,
      "reviewsCount": 363,
      "rating": 4.95,
      "type": "Entire loft",
      "userId": 63764217,
      "address": "Paris, Île-de-France, France",
      "amenityIds": [
        128,
        1,
        4,
        8,
        136,
        10,
        77,
        79,
        16,
        81,
        83,
        85,
        86,
        23,
        25,
        89,
        90,
        27,
        91,
        92,
        30,
        94,
        95,
        287,
        96,
        35,
        292,
        293,
        103,
        40,
        104,
        41,
        44,
        45,
        109,
        46,
        51,
        55,
        127
      ],
      "previewAmenities": [
        "Wifi",
        "Kitchen",
        "Heating"
      ],
      "cancelPolicy": "CANCEL_MODERATE",
      "price": {
        "rate": 309,
        "currency": "USD",
        "total": 309,
        "priceItems": [
          {
            "amount": 195
          },
          {
            "amount": 60
          },
          {
            "amount": 43
          },
          {
            "amount": 11
          }
        ]
      }
    },
    {
      "id": "624694219644882658",
      "url": "https://www.airbnb.com/rooms/624694219644882658",
      "deeplink": "https://www.airbnb.com/rooms/624694219644882658?check_in=2023-05-15&check_out=2023-05-16&adults=2&children=0&infants=0",
      "position": 7,
      "name": "Paris Tiny Apartment & Beautiful Eiffel Tower view",
      "bathrooms": 0.5,
      "bedrooms": 1,
      "beds": 1,
      "city": "Paris",
      "images": [
        "https://a0.muscache.com/im/pictures/miso/Hosting-624694219644882658/original/3f234722-11d6-4510-bc41-0e775212880a.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-624694219644882658/original/d58d3b11-70f8-4c62-9215-e15fc5190094.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-624694219644882658/original/85120a8e-0097-47e8-a995-cc53e904e14a.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-624694219644882658/original/7f26de9f-7a84-4b63-a144-e5634974cdc0.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-624694219644882658/original/2b9b9d3f-03b7-4fb9-9f26-6b1e7cc6ce23.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-624694219644882658/original/01295276-2a9e-4708-8992-7b76c7214d02.jpeg?im_w=720"
      ],
      "hostThumbnail": "https://a0.muscache.com/im/pictures/user/89fd837b-cd8a-4b04-90e6-6df8ac9ac498.jpg?aki_policy=profile_x_medium",
      "isSuperhost": false,
      "rareFind": false,
      "lat": 48.84885,
      "lng": 2.31726,
      "persons": 2,
      "reviewsCount": 51,
      "rating": 4.35,
      "type": "Entire rental unit",
      "userId": 170767271,
      "address": "Paris, Île-de-France, France",
      "amenityIds": [
        4,
        8,
        73,
        10,
        77,
        146,
        210,
        85,
        663,
        665,
        91,
        93,
        30,
        94,
        415,
        611,
        103,
        40,
        104,
        41,
        44,
        236,
        47,
        625,
        308
      ],
      "previewAmenities": [
        "Wifi",
        "Kitchen",
        "Heating"
      ],
      "cancelPolicy": "CANCEL_STRICT_14_WITH_GRACE_PERIOD",
      "price": {
        "rate": 122,
        "currency": "USD",
        "total": 122,
        "priceItems": [
          {
            "amount": 75
          },
          {
            "amount": 25
          },
          {
            "amount": 17
          },
          {
            "amount": 5
          }
        ]
      }
    },
    {
      "id": "680416622090870162",
      "url": "https://www.airbnb.com/rooms/680416622090870162",
      "deeplink": "https://www.airbnb.com/rooms/680416622090870162?check_in=2023-05-15&check_out=2023-05-16&adults=2&children=0&infants=0",
      "position": 8,
      "name": "Entire Studio Daguerre",
      "bathrooms": 1,
      "bedrooms": 1,
      "beds": 2,
      "city": "Paris",
      "images": [
        "https://a0.muscache.com/im/pictures/miso/Hosting-680416622090870162/original/8251cd84-cf10-40ea-a10f-9afc79bbadab.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-680416622090870162/original/d256a521-cb46-4d15-a3de-b3b398704b9b.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-680416622090870162/original/9864429d-c479-44f7-baa0-5f63d63981ee.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-680416622090870162/original/ff966dcc-0867-4186-82be-5fe7d4430c9c.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-680416622090870162/original/48cc73fb-9b1a-48d2-9495-68688909f749.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-680416622090870162/original/72df0293-ee60-4538-86c0-1ec1ba89e9e2.jpeg?im_w=720"
      ],
      "hostThumbnail": "https://a0.muscache.com/im/pictures/user/a051fa2a-c0eb-45eb-8d4f-cd40e9c32c50.jpg?aki_policy=profile_x_medium",
      "isSuperhost": false,
      "rareFind": false,
      "lat": 48.836341488283715,
      "lng": 2.3249966464717753,
      "persons": 2,
      "reviewsCount": 4,
      "rating": 4.5,
      "type": "Private room in bed and breakfast",
      "userId": 404093904,
      "address": "Paris, Île-de-France, France",
      "amenityIds": [
        1,
        35,
        4,
        8
      ],
      "previewAmenities": [
        "Wifi",
        "Kitchen"
      ],
      "cancelPolicy": "CANCEL_STRICT_14_WITH_GRACE_PERIOD",
      "price": {
        "rate": 94,
        "currency": "USD",
        "total": 94,
        "priceItems": [
          {
            "amount": 76
          },
          {
            "amount": 13
          },
          {
            "amount": 5
          }
        ]
      }
    },
    {
      "id": "35145338",
      "url": "https://www.airbnb.com/rooms/35145338",
      "deeplink": "https://www.airbnb.com/rooms/35145338?check_in=2023-05-15&check_out=2023-05-16&adults=2&children=0&infants=0",
      "position": 9,
      "name": "Nice Room for 2 people",
      "bathrooms": 1,
      "bedrooms": 1,
      "beds": 1,
      "city": "Paris",
      "images": [
        "https://a0.muscache.com/im/pictures/4cd839fc-ff00-4e8d-a3ac-d5a32d4eec06.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/8a2a9700-f181-463c-8236-e60acaaa064c.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/08e1ea27-be71-4adb-8f02-f37d13828065.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/6c72ca52-119d-4913-aa9c-11f1d9c8d49e.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/578e7e85-1166-4ec1-9afd-666a6ad03a72.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/494ea320-953e-4b1b-ae4b-ef12f0a7d0fd.jpg?im_w=720"
      ],
      "hostThumbnail": "https://a0.muscache.com/im/pictures/user/15078cee-c84d-4c9e-bd25-62c43e3c18e3.jpg?aki_policy=profile_x_medium",
      "isSuperhost": false,
      "rareFind": false,
      "lat": 48.88137,
      "lng": 2.36199,
      "persons": 2,
      "reviewsCount": 1245,
      "rating": 4.3,
      "type": "Room in boutique hotel",
      "userId": 264483496,
      "address": "Paris, Île-de-France, France",
      "amenityIds": [
        1,
        2,
        35,
        4,
        5,
        37,
        101,
        39,
        103,
        40,
        104,
        41,
        10,
        42,
        44,
        45,
        77,
        46,
        51,
        21,
        85,
        86,
        55,
        30
      ],
      "previewAmenities": [
        "Wifi",
        "Heating"
      ],
      "cancelPolicy": "CANCEL_FLEXIBLE",
      "price": {
        "rate": 154,
        "currency": "USD",
        "total": 154,
        "priceItems": [
          {
            "amount": 150
          },
          {
            "amount": 4
          }
        ]
      }
    },
    {
      "id": "46255907",
      "url": "https://www.airbnb.com/rooms/46255907",
      "deeplink": "https://www.airbnb.com/rooms/46255907?check_in=2023-05-15&check_out=2023-05-16&adults=2&children=0&infants=0",
      "position": 10,
      "name": "Studio Double - Break&Home Paris Italie (M 7)",
      "bathrooms": 1,
      "bedrooms": 0,
      "beds": 1,
      "city": "Ivry-sur-Seine",
      "images": [
        "https://a0.muscache.com/im/pictures/33d5dbfc-9aff-4ff6-8668-62e984e4c91f.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-46255907/original/056463f0-09f2-416e-93e3-81a5ac8f190c.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/d437ad5b-2b8a-4b92-98b7-0329ab12c3e9.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-46255907/original/14a687f0-054f-4169-bab5-c2986f89fa6a.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-46255907/original/72b953b0-7c77-4883-8ce1-d9b02ffbe6da.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-46255907/original/12437b2d-0ae4-4e4e-94d1-d44999fc3a92.jpeg?im_w=720"
      ],
      "hostThumbnail": "https://a0.muscache.com/im/pictures/user/7584d8bd-c7ea-44f0-8d30-88d1e078fff2.jpg?aki_policy=profile_x_medium",
      "isSuperhost": false,
      "rareFind": true,
      "lat": 48.81524,
      "lng": 2.36895,
      "persons": 2,
      "reviewsCount": 2157,
      "rating": 4.23,
      "type": "Entire serviced apartment",
      "userId": 374533732,
      "address": "Ivry-sur-Seine, Île-de-France, France",
      "amenityIds": [
        1,
        4,
        5,
        8,
        72,
        73,
        137,
        10,
        77,
        15,
        21,
        87,
        280,
        89,
        90,
        91,
        93,
        30,
        287,
        671,
        672,
        33,
        34,
        35,
        227,
        611,
        100,
        39,
        103,
        40,
        104,
        41,
        107,
        44,
        236,
        46,
        47,
        625,
        51,
        308,
        55
      ],
      "previewAmenities": [
        "Wifi",
        "Kitchen",
        "Washer",
        "Heating"
      ],
      "cancelPolicy": "CANCEL_FLEXIBLE",
      "price": {
        "rate": 100,
        "currency": "USD",
        "total": 100,
        "priceItems": [
          {
            "amount": 96
          },
          {
            "amount": 4
          }
        ]
      }
    },
    {
      "id": "795667622022012673",
      "url": "https://www.airbnb.com/rooms/795667622022012673",
      "deeplink": "https://www.airbnb.com/rooms/795667622022012673?check_in=2023-05-15&check_out=2023-05-16&adults=2&children=0&infants=0",
      "position": 11,
      "name": "Lovely appt Centra Paris- Next to Marais",
      "bathrooms": 1,
      "bedrooms": 1,
      "beds": 2,
      "city": "Paris",
      "images": [
        "https://a0.muscache.com/im/pictures/f2a0eee6-bbe3-4d0a-ac6a-60158f615d09.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/df5f8ebe-7ac4-4a8b-a7bb-0c7be0ef0a47.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/0d003815-65ab-49c8-9897-30214512a4e2.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/e16fb4f1-a0c0-4798-b2e8-4a26443eeaf8.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/a3b23d9e-209a-408e-9cd2-6b3e5a93ac80.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/4ac639a9-1128-4e2a-bb4d-37462a953fd1.jpg?im_w=720"
      ],
      "hostThumbnail": "https://a0.muscache.com/im/pictures/user/943397d4-d01b-4ad6-9bc9-1cec94f479d9.jpg?aki_policy=profile_x_medium",
      "isSuperhost": false,
      "rareFind": false,
      "lat": 48.86573611802537,
      "lng": 2.3521188387184875,
      "persons": 4,
      "reviewsCount": 0,
      "type": "Entire rental unit",
      "userId": 433425888,
      "address": "Paris, Île-de-France, France",
      "amenityIds": [
        4,
        8,
        137,
        77,
        80,
        89,
        665,
        91,
        93,
        669,
        30,
        94,
        671,
        96,
        33,
        611,
        40,
        41,
        299,
        683,
        44,
        236,
        45,
        47,
        315
      ],
      "previewAmenities": [
        "Wifi",
        "Kitchen",
        "Washer",
        "Heating"
      ],
      "cancelPolicy": "CANCEL_FLEXIBLE",
      "price": {
        "rate": 206,
        "currency": "USD",
        "total": 206,
        "priceItems": [
          {
            "amount": 147
          },
          {
            "amount": 22
          },
          {
            "amount": 28
          },
          {
            "amount": 9
          }
        ]
      }
    },
    {
      "id": "21902223",
      "url": "https://www.airbnb.com/rooms/21902223",
      "deeplink": "https://www.airbnb.com/rooms/21902223?check_in=2023-05-15&check_out=2023-05-16&adults=2&children=0&infants=0",
      "position": 12,
      "name": "Marsh Saint Paul Saint Antoine 16m2",
      "bathrooms": 1,
      "bedrooms": 0,
      "beds": 1,
      "city": "Paris-4E-Arrondissement",
      "images": [
        "https://a0.muscache.com/im/pictures/09633e2e-5f3b-4286-9d51-8a47ad470203.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-21902223/original/fa15ad03-5fdf-4bed-8c8d-9cea357adf8a.png?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-21902223/original/e668e965-178d-4882-acfb-ec5633a593bb.png?im_w=720",
        "https://a0.muscache.com/im/pictures/ebf9e83b-d663-4faa-93d7-c1765f45e272.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-21902223/original/63bbbdd7-aa45-4d9a-9220-4dfb571f1f14.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/716ede8f-ba2c-4272-9743-35659c9e2c0f.jpg?im_w=720"
      ],
      "hostThumbnail": "https://a0.muscache.com/im/pictures/user/e5924f56-d47d-4f89-9701-9b3436d7f616.jpg?aki_policy=profile_x_medium",
      "isSuperhost": false,
      "rareFind": false,
      "lat": 48.85491,
      "lng": 2.36477,
      "persons": 2,
      "reviewsCount": 387,
      "rating": 4.64,
      "type": "Entire condo",
      "userId": 54025728,
      "address": "Paris-4E-Arrondissement, Île-de-France, France",
      "amenityIds": [
        1,
        2,
        4,
        8,
        10,
        77,
        85,
        89,
        90,
        91,
        93,
        30,
        94,
        95,
        96,
        35,
        36,
        40,
        104,
        41,
        44,
        45,
        46,
        47,
        51,
        55
      ],
      "previewAmenities": [
        "Hosted by a business",
        "Wifi",
        "Kitchen",
        "Heating"
      ],
      "cancelPolicy": "CANCEL_FLEXIBLE",
      "price": {
        "rate": 139,
        "currency": "USD",
        "total": 139,
        "priceItems": [
          {
            "amount": 103
          },
          {
            "amount": 11
          },
          {
            "amount": 19
          },
          {
            "amount": 6
          }
        ]
      }
    },
    {
      "id": "638417370888514722",
      "url": "https://www.airbnb.com/rooms/638417370888514722",
      "deeplink": "https://www.airbnb.com/rooms/638417370888514722?check_in=2023-05-15&check_out=2023-05-16&adults=2&children=0&infants=0",
      "position": 13,
      "name": "STUDIO IN THE CENTER OF PARIS",
      "bathrooms": 1,
      "bedrooms": 0,
      "beds": 1,
      "city": "Paris",
      "images": [
        "https://a0.muscache.com/im/pictures/miso/Hosting-638417370888514722/original/c4ef5460-ab75-4114-8a75-4c1975852a2f.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-638417370888514722/original/15bd2c1b-c05a-4124-b3b8-e06da0065c34.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-638417370888514722/original/067273b9-427e-481e-8a87-0a325d1e8ddc.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-638417370888514722/original/5ab10a2a-899b-4476-8783-5f1a2b4f51c7.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-638417370888514722/original/37e8ed18-92b7-4a4f-a11b-27589fbaeb6d.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-638417370888514722/original/e9f3617c-4d27-4248-b25f-44f15390f831.jpeg?im_w=720"
      ],
      "hostThumbnail": "https://a0.muscache.com/im/users/3304669/profile_pic/1345377577/original.jpg?aki_policy=profile_x_medium",
      "isSuperhost": true,
      "rareFind": false,
      "lat": 48.86738,
      "lng": 2.34924,
      "persons": 2,
      "reviewsCount": 57,
      "rating": 4.88,
      "type": "Entire condo",
      "userId": 3304669,
      "address": "Paris, Île-de-France, France",
      "amenityIds": [
        1,
        4,
        8,
        137,
        10,
        77,
        85,
        663,
        89,
        665,
        90,
        91,
        93,
        30,
        94,
        671,
        672,
        98,
        35,
        100,
        40,
        232,
        44,
        236,
        45,
        46,
        625,
        308,
        185,
        251
      ],
      "previewAmenities": [
        "Wifi",
        "Kitchen",
        "Heating"
      ],
      "cancelPolicy": "CANCEL_MODERATE",
      "price": {
        "rate": 221,
        "currency": "USD",
        "total": 221,
        "priceItems": [
          {
            "amount": 133
          },
          {
            "amount": 49
          },
          {
            "amount": 31
          },
          {
            "amount": 8
          }
        ]
      }
    },
    {
      "id": "3371766",
      "url": "https://www.airbnb.com/rooms/3371766",
      "deeplink": "https://www.airbnb.com/rooms/3371766?check_in=2023-05-15&check_out=2023-05-16&adults=2&children=0&infants=0",
      "position": 14,
      "name": "Cosy Apartment in Rue des Rosiers ",
      "bathrooms": 1,
      "bedrooms": 0,
      "beds": 2,
      "city": "Paris",
      "images": [
        "https://a0.muscache.com/im/pictures/42721380/07defa90_original.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/43609328/d17d1407_original.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/42721699/7a89adba_original.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/5d32b8ad-8fd8-4e0a-bc1c-665dd2156a14.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/42721513/d3a5ad8e_original.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/43609584/2c86bfdb_original.jpg?im_w=720"
      ],
      "hostThumbnail": "https://a0.muscache.com/im/pictures/user/cda06c5a-9b29-4603-bf87-4077d7d2a00e.jpg?aki_policy=profile_x_medium",
      "isSuperhost": true,
      "rareFind": false,
      "lat": 48.85651,
      "lng": 2.35953,
      "persons": 4,
      "reviewsCount": 494,
      "rating": 4.81,
      "type": "Entire rental unit",
      "userId": 17009998,
      "address": "Paris, Île-de-France, France",
      "amenityIds": [
        1,
        2,
        3,
        4,
        8,
        137,
        522,
        139,
        77,
        79,
        146,
        85,
        87,
        663,
        89,
        665,
        90,
        93,
        30,
        94,
        31,
        415,
        672,
        35,
        611,
        36,
        40,
        104,
        41,
        43,
        44,
        45,
        46,
        625,
        51,
        54,
        61
      ],
      "previewAmenities": [
        "Hosted by a business",
        "Wifi",
        "Kitchen",
        "Heating"
      ],
      "cancelPolicy": "CANCEL_MODERATE",
      "price": {
        "rate": 255,
        "currency": "USD",
        "total": 255,
        "priceItems": [
          {
            "amount": 161
          },
          {
            "amount": 49
          },
          {
            "amount": 35
          },
          {
            "amount": 10
          }
        ]
      }
    },
    {
      "id": "51986213",
      "url": "https://www.airbnb.com/rooms/51986213",
      "deeplink": "https://www.airbnb.com/rooms/51986213?check_in=2023-05-15&check_out=2023-05-16&adults=2&children=0&infants=0",
      "position": 15,
      "name": "EXCEPTIONAL STUDIO IN THE HEART OF CLICHY",
      "bathrooms": 1,
      "bedrooms": 0,
      "beds": 1,
      "city": "Clichy",
      "images": [
        "https://a0.muscache.com/im/pictures/e22c9197-11b1-4fa2-8db3-2cea439eca8b.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/ad2b4f0e-91c2-4b23-aca1-22d808ecdd08.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/562095d4-0d98-4cfa-86e6-421a449a70bf.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/97d7e5ab-e1ee-49b8-9e16-5ee62b7a21e3.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/d1c7a8b8-e767-44a5-8e8f-0c506d79374b.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/e4827783-fb50-4716-9abf-2b0516bac6ef.jpg?im_w=720"
      ],
      "hostThumbnail": "https://a0.muscache.com/im/pictures/user/fa26685d-cb46-42e4-94bd-971c5860a59e.jpg?aki_policy=profile_x_medium",
      "isSuperhost": false,
      "rareFind": false,
      "lat": 48.89981,
      "lng": 2.30118,
      "persons": 2,
      "reviewsCount": 106,
      "rating": 4.49,
      "type": "Entire rental unit",
      "userId": 365978334,
      "address": "Clichy, Île-de-France, France",
      "amenityIds": [
        1,
        4,
        8,
        137,
        77,
        85,
        89,
        665,
        90,
        667,
        92,
        93,
        30,
        94,
        95,
        671,
        672,
        33,
        98,
        35,
        611,
        36,
        103,
        40,
        104,
        41,
        44,
        236,
        47,
        308
      ],
      "previewAmenities": [
        "Wifi",
        "Kitchen",
        "Washer",
        "Heating"
      ],
      "cancelPolicy": "CANCEL_FLEXIBLE",
      "price": {
        "rate": 124,
        "currency": "USD",
        "total": 124,
        "priceItems": [
          {
            "amount": 82
          },
          {
            "amount": 38
          },
          {
            "amount": 4
          }
        ]
      }
    },
    {
      "id": "681086270370697196",
      "url": "https://www.airbnb.com/rooms/681086270370697196",
      "deeplink": "https://www.airbnb.com/rooms/681086270370697196?check_in=2023-05-15&check_out=2023-05-16&adults=2&children=0&infants=0",
      "position": 16,
      "name": "Exceptional view of the Eiffel Tower",
      "bathrooms": 1,
      "bedrooms": 0,
      "beds": 1,
      "city": "Paris",
      "images": [
        "https://a0.muscache.com/im/pictures/miso/Hosting-681086270370697196/original/9daf6d45-956d-4ff3-a7ca-64fa75222ee6.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-681086270370697196/original/128b5732-5739-414f-9977-ea40a1266df3.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-681086270370697196/original/5bff38c6-0339-4623-a1e1-519e33683b46.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-681086270370697196/original/c904e4ee-671d-4a73-937a-c88e4f6acca5.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-681086270370697196/original/bdcee002-d6be-413f-9488-fb0a79616071.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-681086270370697196/original/2036089e-5ee5-4ab9-9ee4-16dbabb0301a.jpeg?im_w=720"
      ],
      "hostThumbnail": "https://a0.muscache.com/im/pictures/user/57aba707-86d2-442d-914e-ccac8e642786.jpg?aki_policy=profile_x_medium",
      "isSuperhost": true,
      "rareFind": false,
      "lat": 48.83626586841655,
      "lng": 2.2972704068153194,
      "persons": 2,
      "reviewsCount": 45,
      "rating": 4.82,
      "type": "Entire rental unit",
      "userId": 109842963,
      "address": "Paris, Île-de-France, France",
      "amenityIds": [
        1,
        129,
        4,
        8,
        11,
        12,
        77,
        79,
        21,
        85,
        280,
        89,
        665,
        91,
        93,
        30,
        94,
        287,
        415,
        671,
        672,
        33,
        35,
        611,
        100,
        103,
        40,
        41,
        44,
        236,
        625,
        510
      ],
      "previewAmenities": [
        "Wifi",
        "Kitchen",
        "Washer",
        "Heating"
      ],
      "cancelPolicy": "CANCEL_BETTER_STRICT_WITH_GRACE_PERIOD",
      "price": {
        "rate": 325,
        "currency": "USD",
        "total": 325,
        "priceItems": [
          {
            "amount": 269
          },
          {
            "amount": 45
          },
          {
            "amount": 11
          }
        ]
      }
    },
    {
      "id": "32518543",
      "url": "https://www.airbnb.com/rooms/32518543",
      "deeplink": "https://www.airbnb.com/rooms/32518543?check_in=2023-05-15&check_out=2023-05-16&adults=2&children=0&infants=0",
      "position": 17,
      "name": "Hotel Boronali *** - Double room in Montmartre",
      "bathrooms": 1,
      "bedrooms": 1,
      "beds": 1,
      "city": "Paris",
      "images": [
        "https://a0.muscache.com/im/pictures/365509ce-9119-40db-9fe8-7016db926003.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/38ac07db-6ba2-42b0-82d6-e6fd3078fb28.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/96a9d603-0677-49f6-8cbd-e033710f326e.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/1b974a1f-66ad-41da-8580-f01b0560b9ec.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/ae060a04-b780-442c-8ecf-0eff330e10c5.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/06355013-9a23-4a44-b4f2-4918d76357b8.jpg?im_w=720"
      ],
      "hostThumbnail": "https://a0.muscache.com/im/pictures/user/e7445918-956f-4c96-bda4-6a62af0ca732.jpg?aki_policy=profile_x_medium",
      "isSuperhost": false,
      "rareFind": false,
      "lat": 48.88869,
      "lng": 2.34793,
      "persons": 2,
      "reviewsCount": 1262,
      "rating": 4.44,
      "type": "Room in boutique hotel",
      "userId": 98087989,
      "address": "Paris, Île-de-France, France",
      "amenityIds": [
        1,
        35,
        4,
        36,
        37,
        38,
        39,
        71,
        103,
        40,
        41,
        10,
        42,
        44,
        45,
        77,
        46,
        47,
        51,
        21,
        55,
        89,
        91,
        30
      ],
      "previewAmenities": [
        "Wifi",
        "Heating"
      ],
      "cancelPolicy": "CANCEL_MODERATE",
      "price": {
        "rate": 177,
        "currency": "USD",
        "total": 177,
        "priceItems": [
          {
            "amount": 173
          },
          {
            "amount": 4
          }
        ]
      }
    },
    {
      "id": "564211617565288722",
      "url": "https://www.airbnb.com/rooms/564211617565288722",
      "deeplink": "https://www.airbnb.com/rooms/564211617565288722?check_in=2023-05-15&check_out=2023-05-16&adults=2&children=0&infants=0",
      "position": 18,
      "name": "PRIVATE STUDIO IN ARCHITECT HOUSE IN PARIS",
      "bathrooms": 1,
      "bedrooms": 1,
      "beds": 1,
      "city": "Paris",
      "images": [
        "https://a0.muscache.com/im/pictures/miso/Hosting-564211617565288722/original/ad75517f-efb1-454f-9fea-7627376bf0a9.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-564211617565288722/original/6631f934-f1df-4aef-ba55-98ee6aa9b4a3.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-564211617565288722/original/1f224173-179d-4832-8b83-506ffdae2c38.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-564211617565288722/original/3c7783c6-8bb8-4656-8146-414f3d9ca6bd.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-564211617565288722/original/e64b19a6-0e4b-49dc-9a30-04e1f1859aef.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-564211617565288722/original/fdc10570-d75d-4779-8061-6ddb5a399ea4.jpeg?im_w=720"
      ],
      "hostThumbnail": "https://a0.muscache.com/im/pictures/user/3a0b96fb-8dc9-4752-9edc-0922a173ab07.jpg?aki_policy=profile_x_medium",
      "isSuperhost": false,
      "rareFind": false,
      "lat": 48.87148,
      "lng": 2.39885,
      "persons": 2,
      "reviewsCount": 64,
      "rating": 4.88,
      "type": "Private room in rental unit",
      "userId": 156461073,
      "address": "Paris, Île-de-France, France",
      "amenityIds": [
        4,
        8,
        10,
        394,
        12,
        77,
        79,
        280,
        90,
        27,
        91,
        30,
        33,
        34,
        35,
        100,
        37,
        101,
        103,
        40,
        104,
        42,
        45,
        47,
        179,
        510
      ],
      "previewAmenities": [
        "Wifi",
        "Kitchen",
        "Washer",
        "Heating"
      ],
      "cancelPolicy": "CANCEL_FLEXIBLE",
      "price": {
        "rate": 94,
        "currency": "USD",
        "total": 94,
        "priceItems": [
          {
            "amount": 76
          },
          {
            "amount": 13
          },
          {
            "amount": 5
          }
        ]
      }
    },
    {
      "id": "16584190",
      "url": "https://www.airbnb.com/rooms/16584190",
      "deeplink": "https://www.airbnb.com/rooms/16584190?check_in=2023-05-15&check_out=2023-05-16&adults=2&children=0&infants=0",
      "position": 19,
      "name": "2 charming rooms in the heart of Paris with parking",
      "bathrooms": 1,
      "bedrooms": 1,
      "beds": 2,
      "city": "Paris",
      "images": [
        "https://a0.muscache.com/im/pictures/46a8b2a0-d662-452a-9ee5-7da5b4708e3c.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/ddfe77ff-5d38-4462-9fc1-2c2918781ee3.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/b51b82e4-1209-467a-918d-c8814dc30728.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/68169e5f-f65d-45eb-83c7-d51c7157e798.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/c773e335-3f00-4cd8-ae42-c8d1910ef23d.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/ba2bf8b2-ccb1-463b-8e67-6cc1f816ef10.jpg?im_w=720"
      ],
      "hostThumbnail": "https://a0.muscache.com/im/pictures/user/73adbaee-50f1-4fc3-b464-91d9d783ac0d.jpg?aki_policy=profile_x_medium",
      "isSuperhost": true,
      "rareFind": true,
      "lat": 48.86883,
      "lng": 2.35396,
      "persons": 4,
      "reviewsCount": 320,
      "rating": 4.86,
      "type": "Entire rental unit",
      "userId": 57765537,
      "address": "Paris, Île-de-France, France",
      "amenityIds": [
        1,
        2,
        4,
        5,
        8,
        137,
        10,
        11,
        12,
        21,
        30,
        31,
        671,
        672,
        33,
        34,
        35,
        36,
        38,
        40,
        41,
        44,
        45,
        46,
        47,
        51,
        55,
        61,
        71,
        72,
        77,
        85,
        86,
        88,
        89,
        90,
        91,
        92,
        93,
        94,
        95,
        96,
        98,
        611,
        103,
        104,
        236,
        500,
        251
      ],
      "previewAmenities": [
        "Wifi",
        "Kitchen",
        "Washer",
        "Heating"
      ],
      "cancelPolicy": "CANCEL_STRICT_14_WITH_GRACE_PERIOD",
      "price": {
        "rate": 250,
        "currency": "USD",
        "total": 250,
        "priceItems": [
          {
            "amount": 131
          },
          {
            "amount": 76
          },
          {
            "amount": 35
          },
          {
            "amount": 8
          }
        ]
      }
    },
    {
      "id": "662037729473928683",
      "url": "https://www.airbnb.com/rooms/662037729473928683",
      "deeplink": "https://www.airbnb.com/rooms/662037729473928683?check_in=2023-05-15&check_out=2023-05-16&adults=2&children=0&infants=0",
      "position": 20,
      "name": "Modern appt centre Paris",
      "bathrooms": 1,
      "bedrooms": 1,
      "beds": 2,
      "city": "Paris",
      "images": [
        "https://a0.muscache.com/im/pictures/d76428ce-030e-4f61-a03a-e4c774b44ced.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/cfbf2f26-3722-4f61-8866-9ff77e98b5cb.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/021d9c46-1267-4f45-bc57-2f915ac8670e.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/0214178e-fe57-4f78-8a4e-22e809682278.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/62c0e4cc-f65c-4914-8fa9-53d82136fa77.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/85f85a8c-710e-4d50-a35d-1766b5d8454f.jpg?im_w=720"
      ],
      "hostThumbnail": "https://a0.muscache.com/im/pictures/user/139c499e-a7e6-4d0e-8c43-65720dfd2aa3.jpg?aki_policy=profile_x_medium",
      "isSuperhost": false,
      "rareFind": false,
      "lat": 48.87747317543176,
      "lng": 2.3267718359353706,
      "persons": 3,
      "reviewsCount": 30,
      "rating": 4.6,
      "type": "Entire rental unit",
      "userId": 413358277,
      "address": "Paris, Île-de-France, France",
      "amenityIds": [
        4,
        8,
        137,
        10,
        77,
        80,
        665,
        91,
        93,
        669,
        30,
        94,
        671,
        96,
        33,
        611,
        103,
        40,
        41,
        299,
        683,
        44,
        236,
        45,
        46,
        47
      ],
      "previewAmenities": [
        "Wifi",
        "Kitchen",
        "Washer",
        "Heating"
      ],
      "cancelPolicy": "CANCEL_MODERATE",
      "price": {
        "rate": 166,
        "currency": "USD",
        "total": 166,
        "priceItems": [
          {
            "amount": 120
          },
          {
            "amount": 16
          },
          {
            "amount": 23
          },
          {
            "amount": 7
          }
        ]
      }
    },
    {
      "id": "744661794972004146",
      "url": "https://www.airbnb.com/rooms/744661794972004146",
      "deeplink": "https://www.airbnb.com/rooms/744661794972004146?check_in=2023-05-15&check_out=2023-05-16&adults=2&children=0&infants=0",
      "position": 21,
      "name": "Cozy and charming apartment in Montmartre.",
      "bathrooms": 1,
      "bedrooms": 1,
      "beds": 1,
      "city": "Paris",
      "images": [
        "https://a0.muscache.com/im/pictures/miso/Hosting-744661794972004146/original/90149b5f-ecea-45c8-bfac-a366ea918766.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-744661794972004146/original/f48e1cce-41c4-42ea-8b5c-20dafac6db52.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-744661794972004146/original/3c950d2f-1b48-46ac-b59b-f31073ee0eda.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-744661794972004146/original/ea2a11b5-c3cf-4694-a22f-dbad6b58d21a.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-744661794972004146/original/c7a9c31e-d37a-4003-bfcf-f6f3fc9bdc47.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-744661794972004146/original/2b4589c2-4cb2-4d51-84ad-173aa94558c9.jpeg?im_w=720"
      ],
      "hostThumbnail": "https://a0.muscache.com/im/pictures/user/9b8d5153-dc3f-47e6-ad86-1324cf85d7a3.jpg?aki_policy=profile_x_medium",
      "isSuperhost": false,
      "rareFind": false,
      "lat": 48.89418,
      "lng": 2.337,
      "persons": 2,
      "reviewsCount": 0,
      "type": "Entire rental unit",
      "userId": 7852412,
      "address": "Paris, Île-de-France, France",
      "amenityIds": [
        33,
        35,
        4,
        8,
        47
      ],
      "previewAmenities": [
        "Wifi",
        "Kitchen",
        "Washer"
      ],
      "cancelPolicy": "CANCEL_FLEXIBLE",
      "price": {
        "rate": 199,
        "currency": "USD",
        "total": 199,
        "priceItems": [
          {
            "amount": 141
          },
          {
            "amount": 22
          },
          {
            "amount": 27
          },
          {
            "amount": 9
          }
        ]
      }
    },
    {
      "id": "777975094761807588",
      "url": "https://www.airbnb.com/rooms/777975094761807588",
      "deeplink": "https://www.airbnb.com/rooms/777975094761807588?check_in=2023-05-15&check_out=2023-05-16&adults=2&children=0&infants=0",
      "position": 22,
      "name": "Room 1 min from Metro 14",
      "bathrooms": 1,
      "bedrooms": 1,
      "beds": 1,
      "city": "Saint-Ouen-sur-Seine",
      "images": [
        "https://a0.muscache.com/im/pictures/4979c6a6-3ffc-4b60-9ed8-6c9446770945.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/65156e7b-1ee6-4834-bff5-5c3c18aa0ce9.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/142d8458-8377-4e8b-a125-76206a31d78e.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/5d8b49d9-123a-46fa-b368-5be3ce5cf5fa.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/a80404cd-9887-4ef7-a084-795d7e70154e.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/901f397e-7323-4138-9043-943f0475b4a0.jpg?im_w=720"
      ],
      "hostThumbnail": "https://a0.muscache.com/im/pictures/user/d7fcd231-e379-437b-8046-d6146b6614fe.jpg?aki_policy=profile_x_medium",
      "isSuperhost": false,
      "rareFind": false,
      "lat": 48.91384,
      "lng": 2.33273,
      "persons": 2,
      "reviewsCount": 5,
      "rating": 5,
      "type": "Private room in rental unit",
      "userId": 14967185,
      "address": "Saint-Ouen-sur-Seine, Île-de-France, France",
      "amenityIds": [
        1,
        4,
        8,
        73,
        137,
        79,
        21,
        85,
        86,
        87,
        663,
        88,
        89,
        665,
        90,
        91,
        667,
        92,
        93,
        30,
        94,
        95,
        415,
        672,
        33,
        34,
        35,
        611,
        100,
        39,
        103,
        40,
        42,
        44,
        236,
        45,
        46,
        47,
        625,
        308,
        632,
        61
      ],
      "previewAmenities": [
        "Wifi",
        "Kitchen",
        "Washer",
        "Heating"
      ],
      "cancelPolicy": "CANCEL_MODERATE",
      "price": {
        "rate": 95,
        "currency": "USD",
        "total": 95,
        "priceItems": [
          {
            "amount": 62
          },
          {
            "amount": 19
          },
          {
            "amount": 14
          }
        ]
      }
    },
    {
      "id": "16745368",
      "url": "https://www.airbnb.com/rooms/16745368",
      "deeplink": "https://www.airbnb.com/rooms/16745368?check_in=2023-05-15&check_out=2023-05-16&adults=2&children=0&infants=0",
      "position": 23,
      "name": "BRIGHT PRIVATE ROOM",
      "bathrooms": 1,
      "bedrooms": 1,
      "beds": 1,
      "city": "Paris",
      "images": [
        "https://a0.muscache.com/im/pictures/ee0e6e55-c7bf-45f0-ba7e-c9637151abf3.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/7018882f-e155-404e-803f-132e2a9e1b96.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/2f913ef1-6358-4918-b573-f4d703bbbfa1.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/99846a02-7226-4c4a-af55-11b270ccd895.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/d7fa0dde-2e16-4e27-8d5d-0cb02753e6ca.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/f914a808-d3d0-4d3b-9e54-b6b1ee3e1488.jpg?im_w=720"
      ],
      "hostThumbnail": "https://a0.muscache.com/im/pictures/user/4edd456a-b875-4465-b039-9ddbd8e280a6.jpg?aki_policy=profile_x_medium",
      "isSuperhost": false,
      "rareFind": false,
      "lat": 48.8957,
      "lng": 2.34709,
      "persons": 2,
      "reviewsCount": 368,
      "rating": 4.68,
      "type": "Private room in rental unit",
      "userId": 111085403,
      "address": "Paris, Île-de-France, France",
      "amenityIds": [
        35,
        4,
        36,
        37,
        38,
        39,
        8,
        40,
        44,
        77,
        46,
        47,
        21,
        91,
        28,
        93,
        30
      ],
      "previewAmenities": [
        "Wifi",
        "Kitchen",
        "Heating"
      ],
      "cancelPolicy": "CANCEL_BETTER_STRICT_WITH_GRACE_PERIOD",
      "price": {
        "rate": 72,
        "currency": "USD",
        "total": 72,
        "priceItems": [
          {
            "amount": 48
          },
          {
            "amount": 11
          },
          {
            "amount": 10
          },
          {
            "amount": 3
          }
        ]
      }
    },
    {
      "id": "49654749",
      "url": "https://www.airbnb.com/rooms/49654749",
      "deeplink": "https://www.airbnb.com/rooms/49654749?check_in=2023-05-15&check_out=2023-05-16&adults=2&children=0&infants=0",
      "position": 24,
      "name": "Au cœur ❤❤des Champs-Élysées.In the heart of Paris",
      "bathrooms": 1,
      "bedrooms": 1,
      "beds": 1,
      "city": "Paris",
      "images": [
        "https://a0.muscache.com/im/pictures/miso/Hosting-49654749/original/59383403-9c56-43ba-a833-31bf01d142f0.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/ddb24bf2-eb49-4660-8f65-57c5b33acf11.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/dd6f3116-e744-414c-b89d-d62068dc2ebe.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/62f216e9-ba6a-40a6-aa04-1c14a5b66e1a.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/50f270da-1ea6-47b3-be47-0f4303627165.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/6a9bce58-b426-454c-b394-809f510f7b01.jpg?im_w=720"
      ],
      "hostThumbnail": "https://a0.muscache.com/im/pictures/user/d6bc57d2-e459-4936-8b38-f1dc86f94062.jpg?aki_policy=profile_x_medium",
      "isSuperhost": false,
      "rareFind": false,
      "lat": 48.86983,
      "lng": 2.31206,
      "persons": 2,
      "reviewsCount": 107,
      "rating": 4.55,
      "type": "Private room in loft",
      "userId": 261232142,
      "address": "Paris, Île-de-France, France",
      "amenityIds": [
        1,
        322,
        4,
        5,
        8,
        73,
        137,
        522,
        11,
        77,
        79,
        80,
        81,
        146,
        83,
        21,
        85,
        86,
        23,
        663,
        665,
        90,
        91,
        93,
        30,
        94,
        415,
        671,
        96,
        672,
        611,
        36,
        37,
        293,
        39,
        40,
        41,
        42,
        44,
        236,
        45,
        46,
        308,
        57
      ],
      "previewAmenities": [
        "Wifi",
        "Kitchen",
        "Heating"
      ],
      "cancelPolicy": "CANCEL_MODERATE",
      "price": {
        "rate": 178,
        "currency": "USD",
        "total": 178,
        "priceItems": [
          {
            "amount": 98
          },
          {
            "amount": 49
          },
          {
            "amount": 25
          },
          {
            "amount": 6
          }
        ]
      }
    },
    {
      "id": "50933663",
      "url": "https://www.airbnb.com/rooms/50933663",
      "deeplink": "https://www.airbnb.com/rooms/50933663?check_in=2023-05-15&check_out=2023-05-16&adults=2&children=0&infants=0",
      "position": 25,
      "name": "Charming Eiffel Tower Apartment",
      "bathrooms": 1.5,
      "bedrooms": 1,
      "beds": 1,
      "city": "Paris",
      "images": [
        "https://a0.muscache.com/im/pictures/3cde02b6-00e5-48ff-9bdb-c36349b38d28.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/68138974-1eaa-4adb-8ecc-0f4793a79339.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/f73963e8-5328-4c03-b63a-5bf4b77e5915.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/67fde337-42b4-492c-8352-9f286713d044.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/13089f40-8198-4eac-9b7d-51e67843ae33.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/f1e8bddb-e0e3-47d2-a23c-fe7ae332dd7d.jpg?im_w=720"
      ],
      "hostThumbnail": "https://a0.muscache.com/im/pictures/user/e11c88c4-7ffd-4942-af86-673aa971f0c9.jpg?aki_policy=profile_x_medium",
      "isSuperhost": true,
      "rareFind": false,
      "lat": 48.8592,
      "lng": 2.27582,
      "persons": 3,
      "reviewsCount": 41,
      "rating": 4.98,
      "type": "Entire condo",
      "userId": 411881311,
      "address": "Paris, Île-de-France, France",
      "amenityIds": [
        1,
        4,
        8,
        73,
        137,
        10,
        522,
        77,
        79,
        657,
        146,
        85,
        86,
        663,
        89,
        665,
        90,
        91,
        667,
        93,
        30,
        94,
        95,
        415,
        671,
        96,
        672,
        33,
        34,
        98,
        611,
        37,
        103,
        40,
        104,
        41,
        44,
        236,
        45,
        46,
        47,
        308,
        57
      ],
      "previewAmenities": [
        "Wifi",
        "Kitchen",
        "Washer",
        "Heating"
      ],
      "cancelPolicy": "CANCEL_FLEXIBLE",
      "price": {
        "rate": 221,
        "currency": "USD",
        "total": 221,
        "priceItems": [
          {
            "amount": 180
          },
          {
            "amount": 30
          },
          {
            "amount": 11
          }
        ]
      }
    },
    {
      "id": "588873970908396321",
      "url": "https://www.airbnb.com/rooms/588873970908396321",
      "deeplink": "https://www.airbnb.com/rooms/588873970908396321?check_in=2023-05-15&check_out=2023-05-16&adults=2&children=0&infants=0",
      "position": 26,
      "name": "Beaugrennel Quarter Studio",
      "bathrooms": 1,
      "bedrooms": 1,
      "beds": 2,
      "city": "Paris",
      "images": [
        "https://a0.muscache.com/im/pictures/miso/Hosting-588873970908396321/original/725c73e5-0aa3-4650-9f3c-9b2245aec040.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/1e7b4781-d061-4a17-a9ce-59c184b40809.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-588873970908396321/original/9cc3c1af-593e-444d-a14f-138c1a80bcc1.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-588873970908396321/original/3459edf6-6739-4af5-a3da-f4afee205e9f.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-588873970908396321/original/379f8385-6d9f-4299-a572-34903baab1b9.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/dbaff85a-0fb2-4e6a-a024-6ae44e5707c2.jpg?im_w=720"
      ],
      "hostThumbnail": "https://a0.muscache.com/im/pictures/user/25634d75-7a69-41b0-8d41-583e9a3e9d47.jpg?aki_policy=profile_x_medium",
      "isSuperhost": false,
      "rareFind": false,
      "lat": 48.8424,
      "lng": 2.28921,
      "persons": 3,
      "reviewsCount": 50,
      "rating": 4.6,
      "type": "Entire rental unit",
      "userId": 147137134,
      "address": "Paris, Île-de-France, France",
      "amenityIds": [
        1,
        4,
        8,
        137,
        394,
        77,
        79,
        85,
        86,
        87,
        663,
        665,
        90,
        91,
        93,
        30,
        94,
        415,
        671,
        34,
        35,
        611,
        100,
        37,
        40,
        104,
        41,
        44,
        236,
        45,
        46,
        625,
        179,
        308,
        61
      ],
      "previewAmenities": [
        "Wifi",
        "Kitchen",
        "Heating"
      ],
      "cancelPolicy": "CANCEL_FLEXIBLE",
      "price": {
        "rate": 186,
        "currency": "USD",
        "total": 186,
        "priceItems": [
          {
            "amount": 120
          },
          {
            "amount": 33
          },
          {
            "amount": 26
          },
          {
            "amount": 7
          }
        ]
      }
    },
    {
      "id": "805570658396429169",
      "url": "https://www.airbnb.com/rooms/805570658396429169",
      "deeplink": "https://www.airbnb.com/rooms/805570658396429169?check_in=2023-05-15&check_out=2023-05-16&adults=2&children=0&infants=0",
      "position": 27,
      "name": "Modern Loft in Latin Quarter !",
      "bathrooms": 1,
      "bedrooms": 1,
      "beds": 1,
      "city": "Paris",
      "images": [
        "https://a0.muscache.com/im/pictures/prohost-api/Hosting-805570658396429169/original/6bc3fbbe-9e7f-41c2-b0d9-9bf3a260cd74.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/prohost-api/Hosting-805570658396429169/original/d695e226-8f34-47b1-87fd-602a8998b58a.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/prohost-api/Hosting-805570658396429169/original/c9cc4116-5e76-489f-8701-eddd88ea783c.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/prohost-api/Hosting-805570658396429169/original/12fbc058-8b0c-4563-b6fd-79c4ef1f3259.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/prohost-api/Hosting-805570658396429169/original/15b5e94d-c837-4628-9cc6-89dbeaa335c3.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/prohost-api/Hosting-805570658396429169/original/21fef38a-977c-4334-a781-3159419562c7.jpeg?im_w=720"
      ],
      "hostThumbnail": "https://a0.muscache.com/im/pictures/user/5cb37f66-73d9-4251-9ee8-7cf3ef97350b.jpg?aki_policy=profile_x_medium",
      "isSuperhost": false,
      "rareFind": false,
      "lat": 48.844943793164475,
      "lng": 2.348800935254169,
      "persons": 2,
      "reviewsCount": 0,
      "type": "Entire rental unit",
      "userId": 413323924,
      "address": "Paris, Île-de-France, France",
      "amenityIds": [
        1,
        4,
        8,
        73,
        77,
        85,
        86,
        89,
        90,
        91,
        93,
        30,
        94,
        96,
        98,
        35,
        36,
        40,
        104,
        41,
        44,
        109,
        46,
        47,
        118,
        57,
        125,
        126
      ],
      "previewAmenities": [
        "Wifi",
        "Kitchen",
        "Heating"
      ],
      "cancelPolicy": "CANCEL_FLEXIBLE",
      "price": {
        "rate": 184,
        "currency": "USD",
        "total": 184,
        "priceItems": [
          {
            "amount": 173
          },
          {
            "amount": 11
          }
        ]
      }
    },
    {
      "id": "770331968728342345",
      "url": "https://www.airbnb.com/rooms/770331968728342345",
      "deeplink": "https://www.airbnb.com/rooms/770331968728342345?check_in=2023-05-15&check_out=2023-05-16&adults=2&children=0&infants=0",
      "position": 28,
      "name": "Beautiful room completely renovated",
      "bathrooms": 1.5,
      "bedrooms": 1,
      "beds": 1,
      "city": "Paris",
      "images": [
        "https://a0.muscache.com/im/pictures/miso/Hosting-770331968728342345/original/13c7eb1a-b301-471c-90c7-b93cd7590d20.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-770331968728342345/original/302f9e51-e4ff-417c-90ae-2e61e0a34168.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-770331968728342345/original/3d8cdcc7-63d2-4127-94bc-f73bfa1bb883.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-770331968728342345/original/d1b97940-aacc-436a-9d22-cf833426a7fc.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-770331968728342345/original/c0191351-0be2-4659-ba39-46f07464b5bd.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-770331968728342345/original/e11d10f1-b9c1-413b-9f72-d2334a04ffbb.jpeg?im_w=720"
      ],
      "hostThumbnail": "https://a0.muscache.com/im/pictures/user/51f74d87-b019-4cd2-a502-067b5b34f60e.jpg?aki_policy=profile_x_medium",
      "isSuperhost": false,
      "rareFind": false,
      "lat": 48.840212503630745,
      "lng": 2.3290130920654217,
      "persons": 2,
      "reviewsCount": 6,
      "rating": 5,
      "type": "Private room in rental unit",
      "userId": 467026723,
      "address": "Paris, Île-de-France, France",
      "amenityIds": [
        1,
        129,
        4,
        8,
        392,
        137,
        10,
        394,
        522,
        15,
        657,
        21,
        663,
        665,
        667,
        30,
        287,
        415,
        671,
        672,
        33,
        34,
        40,
        41,
        42,
        44,
        45,
        46,
        47,
        308,
        61,
        66,
        77,
        79,
        210,
        85,
        86,
        87,
        88,
        89,
        90,
        91,
        92,
        93,
        94,
        95,
        98,
        611,
        103,
        104,
        236,
        625,
        500
      ],
      "previewAmenities": [
        "Wifi",
        "Kitchen",
        "Washer",
        "Heating"
      ],
      "cancelPolicy": "CANCEL_MODERATE",
      "price": {
        "rate": 158,
        "currency": "USD",
        "total": 158,
        "priceItems": [
          {
            "amount": 118
          },
          {
            "amount": 11
          },
          {
            "amount": 22
          },
          {
            "amount": 7
          }
        ]
      }
    },
    {
      "id": "12627491",
      "url": "https://www.airbnb.com/rooms/12627491",
      "deeplink": "https://www.airbnb.com/rooms/12627491?check_in=2023-05-15&check_out=2023-05-16&adults=2&children=0&infants=0",
      "position": 29,
      "name": "Studio in Bastille",
      "bathrooms": 1,
      "bedrooms": 1,
      "beds": 1,
      "city": "Paris",
      "images": [
        "https://a0.muscache.com/im/pictures/60a6fce9-ed93-4447-93a6-c8acbf0b693e.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/c9d89a15-db61-401b-ae54-8ecea8b2ee6f.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/c049c042-020b-45ac-9a7c-242c35bfc2a6.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/38b85b40-b52c-4d87-9648-0013b5d53fae.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/727dbe66-a2be-4c56-8bd5-22d8e79be1a6.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/fd074ef5-5471-4482-b7ad-101087021772.jpg?im_w=720"
      ],
      "hostThumbnail": "https://a0.muscache.com/im/users/7639868/profile_pic/1435222305/original.jpg?aki_policy=profile_x_medium",
      "isSuperhost": true,
      "rareFind": false,
      "lat": 48.8556,
      "lng": 2.36868,
      "persons": 2,
      "reviewsCount": 312,
      "rating": 4.82,
      "type": "Entire rental unit",
      "userId": 7639868,
      "address": "Paris, Île-de-France, France",
      "amenityIds": [
        96,
        1,
        35,
        4,
        8,
        40,
        104,
        41,
        107,
        44,
        45,
        77,
        46,
        51,
        85,
        54,
        88,
        89,
        90,
        91,
        93,
        30,
        94
      ],
      "previewAmenities": [
        "Wifi",
        "Kitchen",
        "Heating"
      ],
      "cancelPolicy": "CANCEL_STRICT_14_WITH_GRACE_PERIOD",
      "price": {
        "rate": 165,
        "currency": "USD",
        "total": 165,
        "priceItems": [
          {
            "amount": 103
          },
          {
            "amount": 33
          },
          {
            "amount": 23
          },
          {
            "amount": 6
          }
        ]
      }
    },
    {
      "id": "43803337",
      "url": "https://www.airbnb.com/rooms/43803337",
      "deeplink": "https://www.airbnb.com/rooms/43803337?check_in=2023-05-15&check_out=2023-05-16&adults=2&children=0&infants=0",
      "position": 30,
      "name": "Charming apartment, exam houses, Paris",
      "bathrooms": 1,
      "bedrooms": 0,
      "beds": 2,
      "city": "Gentilly",
      "images": [
        "https://a0.muscache.com/im/pictures/a174b5b6-73c9-403d-a0df-419dd1e17d31.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-43803337/original/8d34bb7b-414c-4f17-8734-d771f24651f1.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-43803337/original/269ca398-9fe6-4dee-8b8a-36504dcc6caf.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-43803337/original/f0936272-ac83-4c07-a278-b7758754dd6a.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-43803337/original/39358d80-0653-403b-bbf0-aa4f8c600be6.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-43803337/original/87bae1a6-c0cb-41b0-a981-19ba53f1b655.jpeg?im_w=720"
      ],
      "hostThumbnail": "https://a0.muscache.com/im/pictures/user/a6fb746d-d25e-4d43-b4bf-31354adb3d5a.jpg?aki_policy=profile_x_medium",
      "isSuperhost": false,
      "rareFind": false,
      "lat": 48.81366,
      "lng": 2.34375,
      "persons": 3,
      "reviewsCount": 280,
      "rating": 4.67,
      "type": "Entire rental unit",
      "userId": 348347925,
      "address": "Gentilly, Île-de-France, France",
      "amenityIds": [
        1,
        4,
        71,
        8,
        72,
        73,
        137,
        10,
        522,
        331,
        12,
        77,
        146,
        85,
        86,
        663,
        280,
        89,
        665,
        90,
        91,
        667,
        93,
        30,
        94,
        95,
        415,
        671,
        672,
        33,
        35,
        611,
        100,
        40,
        104,
        44,
        236,
        45,
        46,
        47,
        625,
        51,
        54
      ],
      "previewAmenities": [
        "Wifi",
        "Kitchen",
        "Washer",
        "Heating"
      ],
      "cancelPolicy": "CANCEL_FLEXIBLE",
      "price": {
        "rate": 112,
        "currency": "USD",
        "total": 112,
        "priceItems": [
          {
            "amount": 91
          },
          {
            "amount": 15
          },
          {
            "amount": 6
          }
        ]
      }
    },
    {
      "id": "50876115",
      "url": "https://www.airbnb.com/rooms/50876115",
      "deeplink": "https://www.airbnb.com/rooms/50876115?check_in=2023-05-15&check_out=2023-05-16&adults=2&children=0&infants=0",
      "position": 31,
      "name": "Nice and Cheap Apartment in Paris Center",
      "bathrooms": 1,
      "bedrooms": 1,
      "beds": 2,
      "city": "Paris",
      "images": [
        "https://a0.muscache.com/im/pictures/miso/Hosting-50876115/original/dbcbd522-fe48-4477-bfd4-887cb9d47e1c.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-50876115/original/49acbd0c-1a90-488a-b9eb-7606c0134ae8.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-50876115/original/66e78e13-9469-466b-88bd-724b10ef8143.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-50876115/original/825280a1-4cde-46d4-a6ee-7e3470a9b55a.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-50876115/original/8acd545a-1ca2-456d-ba59-284b6a5e1476.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-50876115/original/9289bbd0-0a30-4a52-8e71-83911b240229.jpeg?im_w=720"
      ],
      "hostThumbnail": "https://a0.muscache.com/im/pictures/user/e5de7ec9-d3a1-4f5d-a41f-4c1953c96639.jpg?aki_policy=profile_x_medium",
      "isSuperhost": false,
      "rareFind": true,
      "lat": 48.8483,
      "lng": 2.36966,
      "persons": 3,
      "reviewsCount": 111,
      "rating": 4.67,
      "type": "Entire rental unit",
      "userId": 411347366,
      "address": "Paris, Île-de-France, France",
      "amenityIds": [
        1,
        5,
        8,
        137,
        10,
        77,
        79,
        145,
        146,
        85,
        86,
        89,
        665,
        93,
        30,
        94,
        35,
        611,
        40,
        104,
        107,
        44,
        236,
        45,
        625,
        51,
        53
      ],
      "previewAmenities": [
        "Kitchen",
        "Heating"
      ],
      "cancelPolicy": "CANCEL_STRICT_14_WITH_GRACE_PERIOD",
      "price": {
        "rate": 134,
        "currency": "USD",
        "total": 134,
        "priceItems": [
          {
            "amount": 109
          },
          {
            "amount": 18
          },
          {
            "amount": 7
          }
        ]
      }
    },
    {
      "id": "765765805288261481",
      "url": "https://www.airbnb.com/rooms/765765805288261481",
      "deeplink": "https://www.airbnb.com/rooms/765765805288261481?check_in=2023-05-15&check_out=2023-05-16&adults=2&children=0&infants=0",
      "position": 32,
      "name": "Souplex Jacuzzi suite",
      "bathrooms": 1,
      "bedrooms": 1,
      "beds": 1,
      "city": "Paris",
      "images": [
        "https://a0.muscache.com/im/pictures/032cd3ab-72a9-4364-a654-fa3948c9d072.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/3edd00f8-1c1a-45c3-a248-eeddcedd69be.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/11809397-d2d6-4abc-a9d6-cb494f351e66.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/5bae14ff-89d4-4e81-b055-d175be1d485f.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/f6dc114d-1bb5-440b-828a-e95b5daac495.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/c87da92e-7757-4f02-b618-8ad7eac359dd.jpg?im_w=720"
      ],
      "hostThumbnail": "https://a0.muscache.com/im/pictures/user/a91edcd0-19ee-4cad-8045-17465fa29557.jpg?aki_policy=profile_x_medium",
      "isSuperhost": false,
      "rareFind": false,
      "lat": 48.8739399,
      "lng": 2.3755377,
      "persons": 2,
      "reviewsCount": 24,
      "rating": 4.71,
      "type": "Private room in bed and breakfast",
      "userId": 441795050,
      "address": "Paris, Île-de-France, France",
      "amenityIds": [
        1,
        2,
        4,
        71,
        8,
        137,
        77,
        79,
        85,
        25,
        89,
        665,
        90,
        93,
        30,
        287,
        415,
        33,
        34,
        98,
        35,
        611,
        36,
        40,
        104,
        41,
        42,
        45,
        47,
        51,
        53,
        61
      ],
      "previewAmenities": [
        "Wifi",
        "Kitchen",
        "Washer",
        "Heating"
      ],
      "cancelPolicy": "CANCEL_BETTER_STRICT_WITH_GRACE_PERIOD",
      "price": {
        "rate": 133,
        "currency": "USD",
        "total": 133,
        "priceItems": [
          {
            "amount": 132
          },
          {
            "amount": 7
          },
          {
            "amount": 8
          }
        ]
      }
    },
    {
      "id": "47500759",
      "url": "https://www.airbnb.com/rooms/47500759",
      "deeplink": "https://www.airbnb.com/rooms/47500759?check_in=2023-05-15&check_out=2023-05-16&adults=2&children=0&infants=0",
      "position": 33,
      "name": "Room in large apartment - Paris center",
      "bathrooms": 1,
      "bedrooms": 1,
      "beds": 1,
      "city": "Paris",
      "images": [
        "https://a0.muscache.com/im/pictures/d91d2e0a-76a2-4a75-97c5-98acbbfd44cc.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/f6c8ba92-8d64-4924-a5d7-5726165b8a53.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/cdde3ff3-975a-4aa7-964f-1d79ec931b8a.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/8b68751e-7aea-4b2a-9542-ba0ae43c7ae8.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/79041eeb-7933-4693-9cc8-a7c6caf03943.jpg?im_w=720"
      ],
      "hostThumbnail": "https://a0.muscache.com/im/pictures/user/e579935a-3a40-4922-bc00-bebbf81b5239.jpg?aki_policy=profile_x_medium",
      "isSuperhost": false,
      "rareFind": false,
      "lat": 48.88,
      "lng": 2.37486,
      "persons": 2,
      "reviewsCount": 56,
      "rating": 4.71,
      "type": "Private room in rental unit",
      "userId": 382459826,
      "address": "Paris, Île-de-France, France",
      "amenityIds": [
        64,
        4,
        71,
        73,
        137,
        10,
        77,
        79,
        16,
        85,
        86,
        23,
        87,
        665,
        90,
        91,
        93,
        30,
        94,
        95,
        671,
        96,
        672,
        33,
        98,
        35,
        611,
        100,
        37,
        103,
        40,
        41,
        44,
        236,
        46,
        47,
        51,
        54,
        59,
        61,
        62
      ],
      "previewAmenities": [
        "Wifi",
        "Washer",
        "Heating"
      ],
      "cancelPolicy": "CANCEL_MODERATE",
      "price": {
        "rate": 65,
        "currency": "USD",
        "total": 65,
        "priceItems": [
          {
            "amount": 46
          },
          {
            "amount": 8
          },
          {
            "amount": 9
          },
          {
            "amount": 2
          }
        ]
      }
    },
    {
      "id": "784732681196426083",
      "url": "https://www.airbnb.com/rooms/784732681196426083",
      "deeplink": "https://www.airbnb.com/rooms/784732681196426083?check_in=2023-05-15&check_out=2023-05-16&adults=2&children=0&infants=0",
      "position": 34,
      "name": "Private room in pleasant house 110 m2",
      "bathrooms": 1.5,
      "bedrooms": 1,
      "beds": 1,
      "city": "Sevran",
      "images": [
        "https://a0.muscache.com/im/pictures/miso/Hosting-739587937365769766/original/d60e9b0f-f95d-4d3b-91a4-afebd04a5afd.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-784732681196426083/original/4d316fa4-8249-43aa-9004-85a72b48646b.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-784732681196426083/original/01de439b-559f-45d1-843c-d08e8ed8f75c.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-739587937365769766/original/5bdc094c-53e8-41f6-b625-a54fda01444a.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-739587937365769766/original/2e608485-c71b-41ee-b23e-6a1aaf3b192f.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-739587937365769766/original/c538ab1e-2e09-497a-8543-2a922cbe03aa.jpeg?im_w=720"
      ],
      "hostThumbnail": "https://a0.muscache.com/im/pictures/user/f4c4dfbe-32c4-4cc2-a72a-1ad5db1d156f.jpg?aki_policy=profile_x_medium",
      "isSuperhost": false,
      "rareFind": false,
      "lat": 48.94688,
      "lng": 2.54632,
      "persons": 2,
      "reviewsCount": 4,
      "rating": 4.75,
      "type": "Private room in townhouse",
      "userId": 420668115,
      "address": "Sevran, Île-de-France, France",
      "amenityIds": [
        1,
        4,
        8,
        9,
        137,
        394,
        16,
        146,
        23,
        280,
        665,
        27,
        667,
        30,
        415,
        671,
        33,
        35,
        36,
        37,
        40,
        41,
        44,
        45,
        46,
        686,
        47,
        51,
        179,
        308,
        55,
        56,
        57,
        322,
        73,
        75,
        77,
        79,
        85,
        86,
        87,
        88,
        89,
        90,
        91,
        92,
        93,
        94,
        95,
        99,
        227,
        611,
        100,
        101,
        103,
        104,
        107,
        236,
        364,
        625,
        626,
        632,
        251,
        510
      ],
      "previewAmenities": [
        "Wifi",
        "Kitchen",
        "Washer",
        "Heating"
      ],
      "cancelPolicy": "CANCEL_FLEXIBLE",
      "price": {
        "rate": 63,
        "currency": "USD",
        "total": 63,
        "priceItems": [
          {
            "amount": 49
          },
          {
            "amount": 5
          },
          {
            "amount": 9
          }
        ]
      }
    },
    {
      "id": "29406522",
      "url": "https://www.airbnb.com/rooms/29406522",
      "deeplink": "https://www.airbnb.com/rooms/29406522?check_in=2023-05-15&check_out=2023-05-16&adults=2&children=0&infants=0",
      "position": 35,
      "name": "Modern Loft, Free Indoor Parking",
      "bathrooms": 1,
      "bedrooms": 2,
      "beds": 2,
      "city": "Les Lilas",
      "images": [
        "https://a0.muscache.com/im/pictures/miso/Hosting-29406522/original/6b4ce990-175f-46da-8158-77dc0cd8cc81.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-29406522/original/fa236c1e-82fa-4ca1-9760-c113afae7dab.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-29406522/original/f1eb49f9-6acb-49fa-9c60-fe18cd1e7808.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-29406522/original/e12cac10-f206-4bfd-aaba-7b8bbeb1318a.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-29406522/original/3cb188d0-e2b0-4195-bf91-7468e80b5a0a.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-29406522/original/d6268f12-4f91-4a91-8fee-e7e1987117ce.jpeg?im_w=720"
      ],
      "hostThumbnail": "https://a0.muscache.com/im/pictures/user/18361cb2-baed-4067-9402-e2f283ae10a3.jpg?aki_policy=profile_x_medium",
      "isSuperhost": true,
      "rareFind": false,
      "lat": 48.88163,
      "lng": 2.42879,
      "persons": 3,
      "reviewsCount": 16,
      "rating": 4.88,
      "type": "Entire loft",
      "userId": 17752958,
      "address": "Les Lilas, Île-de-France, France",
      "amenityIds": [
        1,
        65,
        4,
        8,
        72,
        9,
        73,
        74,
        394,
        77,
        21,
        85,
        86,
        89,
        665,
        91,
        347,
        667,
        92,
        93,
        30,
        94,
        95,
        415,
        671,
        672,
        33,
        34,
        35,
        40,
        104,
        44,
        236,
        45,
        46,
        625,
        308,
        59,
        251,
        61
      ],
      "previewAmenities": [
        "Wifi",
        "Kitchen",
        "Washer",
        "Heating"
      ],
      "cancelPolicy": "CANCEL_MODERATE",
      "price": {
        "rate": 197,
        "currency": "USD",
        "total": 197,
        "priceItems": [
          {
            "amount": 120
          },
          {
            "amount": 49
          },
          {
            "amount": 28
          }
        ]
      }
    },
    {
      "id": "35564841",
      "url": "https://www.airbnb.com/rooms/35564841",
      "deeplink": "https://www.airbnb.com/rooms/35564841?check_in=2023-05-15&check_out=2023-05-16&adults=2&children=0&infants=0",
      "position": 36,
      "name": "Whole private studio in garden «Sweet Home»",
      "bathrooms": 1,
      "bedrooms": 1,
      "beds": 1,
      "city": "Boulogne-Billancourt",
      "images": [
        "https://a0.muscache.com/im/pictures/miso/Hosting-35564841/original/eca29016-82ee-488f-83bf-3b1f6f6decd2.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-35564841/original/939adfdf-8157-4f2f-b19f-93492ffad8a7.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-35564841/original/a233dc16-f1a4-4674-97a7-cd93646a7099.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-35564841/original/1f68ac22-d801-4631-b128-2b955cc756d4.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-35564841/original/c307fc94-b79c-4b78-b0ee-3b79ab4da7d0.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-35564841/original/3ab03b1c-fbd1-4f47-bda8-02f42edf2345.jpeg?im_w=720"
      ],
      "hostThumbnail": "https://a0.muscache.com/im/pictures/user/cac6b217-7d43-453c-aaaa-b16e0ddce40d.jpg?aki_policy=profile_x_medium",
      "isSuperhost": true,
      "rareFind": false,
      "lat": 48.83532,
      "lng": 2.23452,
      "persons": 2,
      "reviewsCount": 270,
      "rating": 4.98,
      "type": "Private room in guesthouse",
      "userId": 62362964,
      "address": "Boulogne-Billancourt, Île-de-France, France",
      "amenityIds": [
        4,
        8,
        73,
        137,
        10,
        522,
        77,
        79,
        657,
        85,
        86,
        663,
        89,
        665,
        90,
        91,
        667,
        93,
        30,
        94,
        415,
        671,
        672,
        33,
        35,
        611,
        101,
        103,
        40,
        41,
        44,
        236,
        45,
        46,
        51,
        308,
        54,
        251
      ],
      "previewAmenities": [
        "Wifi",
        "Kitchen",
        "Washer",
        "Heating"
      ],
      "cancelPolicy": "CANCEL_FLEXIBLE",
      "price": {
        "rate": 106,
        "currency": "USD",
        "total": 106,
        "priceItems": [
          {
            "amount": 71
          },
          {
            "amount": 16
          },
          {
            "amount": 15
          },
          {
            "amount": 4
          }
        ]
      }
    },
    {
      "id": "731769758052344543",
      "url": "https://www.airbnb.com/rooms/731769758052344543",
      "deeplink": "https://www.airbnb.com/rooms/731769758052344543?check_in=2023-05-15&check_out=2023-05-16&adults=2&children=0&infants=0",
      "position": 37,
      "name": "Cozy studio in Bagneux RER B 500 m",
      "bathrooms": 1,
      "bedrooms": 1,
      "beds": 1,
      "city": "Bagneux",
      "images": [
        "https://a0.muscache.com/im/pictures/miso/Hosting-731769758052344543/original/57b0cd9d-a074-4c00-9a8a-05de86978664.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-731769758052344543/original/36b57f06-37b7-41b8-8ce0-e350cd94d620.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-731769758052344543/original/a8140c60-c9ba-4abf-8ebe-f56228d65e3b.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-731769758052344543/original/f91d36c6-2593-45f2-8388-efbad85fc2af.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-731769758052344543/original/bfe6035b-cbe0-4e23-93bf-552cb71ba806.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-731769758052344543/original/10ff45bf-40ed-4a09-8c15-a0f3b38ff7fb.jpeg?im_w=720"
      ],
      "hostThumbnail": "https://a0.muscache.com/im/pictures/user/68a2fee2-75c1-41f5-8e84-9d6eb2b75ee4.jpg?aki_policy=profile_x_medium",
      "isSuperhost": false,
      "rareFind": false,
      "lat": 48.78987499999999,
      "lng": 2.319331,
      "persons": 3,
      "reviewsCount": 1,
      "type": "Entire rental unit",
      "userId": 320975594,
      "address": "Bagneux, Île-de-France, France",
      "amenityIds": [
        1,
        4,
        8,
        72,
        137,
        10,
        77,
        79,
        145,
        146,
        85,
        663,
        89,
        665,
        90,
        91,
        93,
        30,
        94,
        287,
        415,
        671,
        35,
        611,
        103,
        40,
        104,
        107,
        236,
        45,
        46,
        625,
        500,
        315
      ],
      "previewAmenities": [
        "Wifi",
        "Kitchen",
        "Heating"
      ],
      "cancelPolicy": "CANCEL_MODERATE",
      "price": {
        "rate": 72,
        "currency": "USD",
        "total": 72,
        "priceItems": [
          {
            "amount": 49
          },
          {
            "amount": 11
          },
          {
            "amount": 10
          },
          {
            "amount": 2
          }
        ]
      }
    },
    {
      "id": "577921375167935083",
      "url": "https://www.airbnb.com/rooms/577921375167935083",
      "deeplink": "https://www.airbnb.com/rooms/577921375167935083?check_in=2023-05-15&check_out=2023-05-16&adults=2&children=0&infants=0",
      "position": 38,
      "name": "Apartment room with terrace",
      "bathrooms": 1,
      "bedrooms": 1,
      "beds": 1,
      "city": "Le Plessis-Robinson",
      "images": [
        "https://a0.muscache.com/im/pictures/9cc8e91f-717f-4fd5-acdc-822e40d32455.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/d5595174-bed1-47cb-ac7f-f7835ea49a0f.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/cda519f1-eac7-4e69-a10e-b56e3bf96c0a.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/a5912c0b-3d25-4453-894f-4b380558999b.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/0ab3c291-4713-4b09-ab7a-92442bc78398.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/64efcb85-c75b-431c-899f-ac5f7f6c1745.jpg?im_w=720"
      ],
      "hostThumbnail": "https://a0.muscache.com/im/pictures/user/a7620a1f-66ab-4998-98dd-680bd45772fc.jpg?aki_policy=profile_x_medium",
      "isSuperhost": true,
      "rareFind": false,
      "lat": 48.77428,
      "lng": 2.26076,
      "persons": 2,
      "reviewsCount": 41,
      "rating": 4.93,
      "type": "Private room in rental unit",
      "userId": 10177869,
      "address": "Le Plessis-Robinson, Île-de-France, France",
      "amenityIds": [
        1,
        129,
        4,
        8,
        9,
        11,
        77,
        79,
        657,
        85,
        280,
        665,
        90,
        91,
        93,
        30,
        94,
        671,
        35,
        227,
        611,
        100,
        103,
        40,
        104,
        41,
        44,
        45,
        46,
        179,
        61
      ],
      "previewAmenities": [
        "Wifi",
        "Kitchen",
        "Heating"
      ],
      "cancelPolicy": "CANCEL_MODERATE",
      "price": {
        "rate": 89,
        "currency": "USD",
        "total": 89,
        "priceItems": [
          {
            "amount": 76
          },
          {
            "amount": 13
          }
        ]
      }
    },
    {
      "id": "781772751208499557",
      "url": "https://www.airbnb.com/rooms/781772751208499557",
      "deeplink": "https://www.airbnb.com/rooms/781772751208499557?check_in=2023-05-15&check_out=2023-05-16&adults=2&children=0&infants=0",
      "position": 39,
      "name": "Appartement lumineux Paris15",
      "bathrooms": 1,
      "bedrooms": 1,
      "beds": 1,
      "city": "Paris",
      "images": [
        "https://a0.muscache.com/im/pictures/miso/Hosting-781772751208499557/original/bc57677f-ddbc-4358-8f6f-3980d22f94c7.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-781772751208499557/original/a245ab7d-a8fe-4433-ad0b-2a02918d1e9c.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-781772751208499557/original/4361c910-0e85-45ff-b110-5a497979057e.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-781772751208499557/original/c39e5862-8ce7-4aa9-aa3f-9bf19861ff2a.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-781772751208499557/original/ea81fcb6-de54-4aa5-a709-f102193f8e8b.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-781772751208499557/original/9f990ef8-63a9-4232-bc3c-a69d31a15deb.jpeg?im_w=720"
      ],
      "hostThumbnail": "https://a0.muscache.com/im/pictures/user/50e8c1ee-d9fb-4df3-bc1e-fe3e4b7898fa.jpg?aki_policy=profile_x_medium",
      "isSuperhost": false,
      "rareFind": false,
      "lat": 48.838610456023304,
      "lng": 2.2986625134944916,
      "persons": 2,
      "reviewsCount": 0,
      "type": "Entire rental unit",
      "userId": 220069371,
      "address": "Paris, Île-de-France, France",
      "amenityIds": [
        1,
        4,
        8,
        394,
        77,
        79,
        146,
        21,
        85,
        86,
        88,
        665,
        90,
        91,
        93,
        30,
        94,
        95,
        415,
        671,
        611,
        40,
        41,
        44,
        236,
        45,
        46,
        625,
        308
      ],
      "previewAmenities": [
        "Wifi",
        "Kitchen",
        "Heating"
      ],
      "cancelPolicy": "CANCEL_FLEXIBLE",
      "price": {
        "rate": 86,
        "currency": "USD",
        "total": 86,
        "priceItems": [
          {
            "amount": 70
          },
          {
            "amount": 12
          },
          {
            "amount": 4
          }
        ]
      }
    },
    {
      "id": "9975524",
      "url": "https://www.airbnb.com/rooms/9975524",
      "deeplink": "https://www.airbnb.com/rooms/9975524?check_in=2023-05-15&check_out=2023-05-16&adults=2&children=0&infants=0",
      "position": 40,
      "name": "Shared space",
      "bathrooms": 1,
      "bedrooms": 1,
      "beds": 1,
      "city": "Saint-Denis",
      "images": [
        "https://a0.muscache.com/im/pictures/d29592d6-1ae6-443c-b9fc-1333ae4b38b0.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/43f160c7-585d-4441-b6d3-cd4fbdeb6a43.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/ecbd505f-92c1-4f0c-a1ab-3a3f2eabd553.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/b837618f-700a-429e-99fe-573bb04b3a0d.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/074755ab-384d-4ce2-8211-7503ebcb9f26.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/a7e446f1-f9b8-4b2f-ad87-98cfa08c2364.jpg?im_w=720"
      ],
      "hostThumbnail": "https://a0.muscache.com/im/pictures/user/7c08ab4b-1889-4b48-8a06-875373c7a1ff.jpg?aki_policy=profile_x_medium",
      "isSuperhost": false,
      "rareFind": false,
      "lat": 48.90553,
      "lng": 2.35935,
      "persons": 2,
      "reviewsCount": 656,
      "rating": 4.62,
      "type": "Shared room in rental unit",
      "userId": 51258167,
      "address": "Saint-Denis, Île-de-France, France",
      "amenityIds": [
        1,
        3,
        131,
        4,
        5,
        6,
        8,
        10,
        11,
        12,
        77,
        16,
        21,
        23,
        280,
        89,
        153,
        90,
        91,
        28,
        92,
        93,
        30,
        94,
        31,
        95,
        287,
        96,
        33,
        34,
        35,
        36,
        100,
        40,
        41,
        44,
        45,
        109,
        47,
        179,
        127
      ],
      "previewAmenities": [
        "Wifi",
        "Kitchen",
        "Washer",
        "Heating"
      ],
      "cancelPolicy": "CANCEL_STRICT_14_WITH_GRACE_PERIOD",
      "price": {
        "rate": 54,
        "currency": "USD",
        "total": 54,
        "priceItems": [
          {
            "amount": 44
          },
          {
            "amount": 7
          },
          {
            "amount": 3
          }
        ]
      }
    }
  ]
}