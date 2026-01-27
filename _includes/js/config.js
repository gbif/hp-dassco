var siteTheme = gbifReactComponents.themeBuilder.extend({
    baseTheme: 'light', extendWith: {
        primary: themeStyle.colors.primary
    }
});

var publisherKeys = [
    '760d5f24-4c04-40da-9646-1b2c935da502',
    '2e7df380-8356-4533-bcb3-5459e23c794e',
    '8e1a97a0-3ca8-11d9-8439-b8a03c50a862',
];

var institutionKeys = [
    '68fcaba0-61fe-4e78-a460-4f37654d025d',
    '59f46093-8fae-47f3-a9ef-e5fd1d38e4fe',
    '44e7a331-0270-4c39-ad64-91c0d8416480',
];

var datasetKeys = [
    'ab38a0f2-fe39-42d8-92e1-97d2e0a5e2f6', // NHMA Entomology
    '6015b708-235e-43d2-aa8e-aced24f57e0a', // NHMA Freshwater
    '8f67f5f4-69ee-4ddb-bd16-cb727d384eda', // NHMA Invertebrates wet
    '137fbdbd-3c31-4fba-b6b6-4489ad39a6c4', // NHMA Malacology
    '6b524ea4-2593-49de-8e38-cbd87965265b', // NHMA Vertebrate
    '833db434-f762-11e1-a439-00145eb45e9a', // AU herbarium
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
            "cmsLocale": "en-GB",
            "gbifOrgLocalePrefix": "",
            "mapTileLocale": "en"
        }
    ],
    "messages": {},
    "occurrenceSearch": {
        "scope": {
            "type": "in",
            "key": "datasetKey",
            "values": datasetKeys
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
            "recordedBy",
            "identifiedBy"
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
            "clusters",
            "dashboard",
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
        // defaultTableColumns: ['title', 'description', 'publisher', 'type', 'occurrenceCount', 'literatureCount'],
        scope: {
            publishingOrg: publisherKeys
        },
    },
    "publisherSearch": {},
    "literatureSearch": {
        "scope": {
            "type": "in",
            "key": "publishingOrganizationKey",
            "values": [
                "760d5f24-4c04-40da-9646-1b2c935da502",
                "2e7df380-8356-4533-bcb3-5459e23c794e",
                "8e1a97a0-3ca8-11d9-8439-b8a03c50a862"
            ]
        }
    }
}