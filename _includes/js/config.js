var siteTheme = gbifReactComponents.themeBuilder.extend({
    baseTheme: 'light', extendWith: {
        primary: themeStyle.colors.primary
    }
});

var publisherKeys = [
    '760d5f24-4c04-40da-9646-1b2c935da502', // NHMA
    '2e7df380-8356-4533-bcb3-5459e23c794e', // NHMD
    '8e1a97a0-3ca8-11d9-8439-b8a03c50a862', // AU Herbarium
];

// Remember to also change the list in assets/js/fetchFrontpageStats.js
var institutionKeys = [
    '68fcaba0-61fe-4e78-a460-4f37654d025d', // NHMD
    '59f46093-8fae-47f3-a9ef-e5fd1d38e4fe', // NHMA
    '44e7a331-0270-4c39-ad64-91c0d8416480', // AU Herbarium
];

var hostingOrgKeys = [
    '2e7df380-8356-4533-bcb3-5459e23c794e', // NHMD
    '8e1a97a0-3ca8-11d9-8439-b8a03c50a862', // AU Herbarium
];

// Remember to also change the list in assets/js/fetchFrontpageStats.js
var datasetKeys = [
    'f506ae89-e503-414a-9e4c-fefee5b5a07b', // NHMD Amber
    'acf5050c-3a41-4345-a660-652cb9462379', // NHMD Biocultural Botany
    '5b5305ae-35d1-4992-9d1a-f447db84b471', // NHMD Danekrae
    'e0459621-92c2-40ac-9934-72b3b1384dc3', // NHMD Entomology
    '8c834f97-c5df-4280-9623-86594979f91a', // NHMD Herpetology
    '84dbaec2-f762-11e1-a439-00145eb45e9a', // NHMD Ichthyology
    '58fc397b-eee4-4138-8a5f-50f9dfb00216', // NHMD Ivertebrate Zoology
    '78b270c5-a5fe-4f1d-b87e-eb0dd7b7ae02', // NHMD Mammalogy
    '84d13eba-f762-11e1-a439-00145eb45e9a', // NHMD Mycology
    'e5c5cad9-b987-4bb4-b07b-85488c5fdd80', // NHMD Ornithology
    '51f8bbe4-36e9-44c2-9f66-eaa5c7017a5c', // NHMD Quaternary Zoology
    '0d1f9cee-7cb7-4d3a-a8c4-d2ca6edcd23b', // NHMD Vascular Plants
    '8e1b54db-ce7f-402e-a36e-c1382f0b7b97', // NHMD Vertebrate Paleontology
    'ab38a0f2-fe39-42d8-92e1-97d2e0a5e2f6', // NHMA Entomology
    '6015b708-235e-43d2-aa8e-aced24f57e0a', // NHMA Freshwater
    '8f67f5f4-69ee-4ddb-bd16-cb727d384eda', // NHMA Invertebrates wet
    '137fbdbd-3c31-4fba-b6b6-4489ad39a6c4', // NHMA Malacology
    '6b524ea4-2593-49de-8e38-cbd87965265b', // NHMA Vertebrate
    '833db434-f762-11e1-a439-00145eb45e9a', // AU Herbarium
];

var siteConfig = {
    "version": 3,
    "pages": [
        {
            "id": "occurrenceSearch"
        },
        {
            "id": "collectionSearch"
        },
        {
            "id": "collectionKey"
        },
        {
            "id": "datasetSearch"
        },
        {
            "id": "datasetKey"
        },
        {
            "id": "institutionKey"
        },
        {
            "id": "literatureSearch"
        }
    ],
    "disableInlineTableFilterButtons": false,
    "availableCatalogues": [
        "OCCURRENCE",
        "DATASET",
        "COLLECTION",
        "LITERATURE"
    ],
    "dataHeader": {
        "enableApiPopup": false,
        "enableInfoPopup": false
    },
    "theme": {
        "primary": "#001972",
        "borderRadius": 3,
        "stickyOffset": "0px"
    },
    "maps": {
        "mapStyles": {
            "defaultProjection": "MERCATOR",
            "defaultMapStyle": "BRIGHT",
            "options": {
                "MERCATOR": [
                    "BRIGHT",
                    "NATURAL"
                ]
            }
        }
    },
    "languages": [
        {
            "code": "en",
            "localeCode": "en",
            "label": "English",
            "default": true,
            "textDirection": "ltr",
            "iso3LetterCode": "eng",
            "cmsLocale": "en-GB",
            "gbifOrgLocalePrefix": "",
            "mapTileLocale": "en"
        },
        {
            "code": "da",
            "localeCode": "da",
            "label": "Dansk",
            "default": false,
            "textDirection": "ltr",
            "iso3LetterCode": "dan",
            "cmsLocale": "en-GB",   // TODO: Should this be changed to da-DK?
            "gbifOrgLocalePrefix": "",
            "mapTileLocale": "en"   // TODO: Should this be changed to da?
        }
    ],
    "messages": {},
    "occurrenceSearch": {
        "scope": {
            "type": "in",
            "key": "datasetKey",
            "values": datasetKeys,
            /*"key": "publishingOrg",
            "values": [
                "760d5f24-4c04-40da-9646-1b2c935da502",
                "2e7df380-8356-4533-bcb3-5459e23c794e",
                "8e1a97a0-3ca8-11d9-8439-b8a03c50a862"
            ]*/
        },
        "highlightedFilters": [
            "taxonKey",
            "verbatimScientificName",
            "institutionKey",
            "collectionKey",
            "catalogNumber",
            //"recordedBy",
            //"identifiedBy"
        ],
        "excludedFilters": [
            "occurrenceStatus",
            "networkKey",
            "hostingOrganizationKey",
            "protocol",
            "publishingCountry",
            "institutionCode",
            "collectionCode"
        ],
        "defaultEnabledTableColumns": [
            "features",
            "institutionKey",
            "collectionKey",
            "catalogNumber",
            "country",
            "year",
            "recordedBy",
            "identifiedBy"
        ],
        "tabs": [
            "table",
            "gallery",
            "map",
            //"clusters",
            //"dashboard",
            "download"
        ],
        "mapSettings": {
            "lat": 52,
            "lng": 12,
            "zoom": 4.911544076366507
        }
    },
    "collectionSearch": {
        excludedFilters: ['country', 'active'],
        // highlightedFilters: ['q', 'type', 'publishingOrg', 'license'],
        // defaultTableColumns: ['title', 'description', 'publisher', 'type', 'occurrenceCount', 'literatureCount'],
        scope: {
            institutionKey: institutionKeys,
            active: true
        },
    },
    "institutionSearch": {},
    "datasetSearch": {
        excludedFilters: ['publishingCountry', 'networkKey', 'projectId', 'hostingOrg'],
        highlightedFilters: ['q', 'type', 'publishingOrg', 'license'],
        defaultTableColumns: ['title', 'description', 'publisher', 'type', 'occurrenceCount', 'literatureCount'],
        scope: {
            //"type": "in",
            //publishingOrg: publisherKeys,
            hostingOrg: hostingOrgKeys,
        },
    },
    "publisherSearch": {
        "scope": {
            "type": "in",
            /*"key": "datasetKey",
            "values": datasetKeys
            */
            "key": "publishingOrganizationKey",
            "values": publisherKeys,
        }
    },
    "literatureSearch": {
        "scope": {
            "type": "in",
            "key": "gbifDatasetKey",
            "values": datasetKeys,
        },
        //defaultTableColumns: ['title', 'description', 'publisher', 'type', 'occurrenceCount', 'literatureCount'],
    }
}