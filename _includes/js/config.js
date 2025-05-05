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

var ssiteConfig = {
    version: 2,
    routes: {
        enabledRoutes: ['occurrenceSearch', 'collectionSearch', 'collectionKey', 'institutionKey', 'datasetSearch', 'datasetKey', 'literatureSearch'],
    },
    occurrence: {
        excludedFilters: ['occurrenceStatus', 'networkKey', 'hostingOrganizationKey', 'protocol', 'publishingCountryCode', 'institutionCode', 'collectionCode'],
        highlightedFilters: ['taxonKey', 'verbatimScientificName', 'institutionKey', 'collectionKey', 'catalogNumber', 'recordedBy', 'identifiedBy'],
        defaultTableColumns: ['features', 'institutionKey', 'collectionKey', 'catalogNumber', 'country', 'year', 'recordedBy', 'identifiedBy'],
        availableCatalogues: ['INSTITUTION', 'COLLECTION', 'OCCURRENCE'],
        mapSettings: {
            lat: 0,
            lng: 0,
            zoom: 0
        },
        // You probably need help to configure the scope - so just ask
        // for his demo site we only show Fungi (taxonKey=5). It use the predicate structure known from GBIF download API. 
        // See https://www.gbif.org/developer/occurrence (long page without enough anchors - search for "Occurrence Download Predicates")
        // The format is however slightly different, in that is use camelCase for keys instead of CONSTANT_CASE. 
        rootPredicate: {
            "type": "and",
            "predicates": [
                {
                    "type": "or",
                    "predicates": [
                        {
                            "type": "isNotNull",
                            "key": "institutionKey"
                        },
                        {
                            "type": "isNotNull",
                            "key": "collectionKey"
                        }
                    ]
                },
                {
                    "type": "in",
                    "key": "basisOfRecord",
                    "values": [
                        "PRESERVED_SPECIMEN",
                        "FOSSIL_SPECIMEN",
                        "MATERIAL_SAMPLE",
                        "LIVING_SPECIMEN",
                        "MATERIAL_CITATION"
                    ]
                }
            ]
        },
        occurrenceSearchTabs: ['TABLE', 'GALLERY', 'MAP', 'CLUSTERS', 'DASHBOARD'] // what tabs should be shown
        // see https://hp-theme.gbif-staging.org/data-exploration-config for more options
    },
    collection: {
        excludedFilters: ['typeStatus'],
        rootFilter: {
            displayOnNHCPortal: true
        }
    },
    institution: {
        rootFilter: {
            displayOnNHCPortal: true
        },
        mapSettings: {
            enabled: true,
            lat: 0,
            lng: 0,
            zoom: 1
        },
    },
    apiKeys: {
        maptiler: "wFxbBf3Tv2e75QQfYOOW",
        mapbox: "pk.eyJ1IjoiZ2JpZiIsImEiOiJja3VmZm50Z3kxcm1vMnBtdnBmeGd5cm9hIn0.M2z2n9QP9fRHZUCw9vbgOA"
    },
    availableCatalogues: [
        "OCCURRENCE",
        "DATASET",
        "COLLECTION",
        "LITERATURE"
    ],
    maps: {
        // locale: 'ja',
        defaultProjection: 'MERCATOR',
        defaultMapStyle: 'BRIGHT',
        mapStyles: {
            ARCTIC: ['NATURAL', 'BRIGHT'],
            PLATE_CAREE: ['NATURAL', 'BRIGHT', 'DARK'],
            MERCATOR: ['NATURAL', 'BRIGHT', 'SATELLITE', 'DARK'],
            ANTARCTIC: ['NATURAL', 'BRIGHT', 'DARK']
        }
    },
    messages: {
        "catalogues.occurrences": "Specimens"
    }
};

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
            "key": "publishingOrg",
            "values": [
                "760d5f24-4c04-40da-9646-1b2c935da502",
                "2e7df380-8356-4533-bcb3-5459e23c794e",
                "8e1a97a0-3ca8-11d9-8439-b8a03c50a862"
            ]
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