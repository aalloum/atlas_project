import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id       : 'applications',
        title    : 'Applications',
        translate: 'NAV.APPLICATIONS',
        type     : 'group',
        children : [
            {
                id       : 'sample',
                title    : 'Sample',
                translate: 'NAV.SAMPLE.TITLE',
                type     : 'item',
                icon     : 'email',
                url      : '/sample',
                badge    : {
                    title    : '25',
                    translate: 'NAV.SAMPLE.BADGE',
                    bg       : '#F44336',
                    fg       : '#FFFFFF'
                }
            },
            {
                id       : 'e-commerce',
                title    : 'E-Commerce',
                translate: 'NAV.ECOMMERCE',
                type     : 'collapsable',
                icon     : 'shopping_cart',
                children : [
                    {
                        id        : 'products',
                        title     : 'Products',
                        type      : 'item',
                        url       : '/e-commerce/products',
                        exactMatch: true
                    },
                    {
                        id        : 'productDetail',
                        title     : 'Product Detail',
                        type      : 'item',
                        url       : '/e-commerce/products/1/printed-dress',
                        // exactMatch: true
                    },
                    {
                        id        : 'orders',
                        title     : 'Orders',
                        type      : 'item',
                        url       : '/e-commerce/orders',
                        exactMatch: true
                    },
                    {
                        id        : 'orderDetail',
                        title     : 'Order Detail',
                        type      : 'item',
                        url       : '/e-commerce/orders/1',
                        exactMatch: true
                    }
                ]
            },
            {
                id       : 'cabinet',
                title    : 'Cabinet',
                translate: 'NAV.CABINET',
                type     : 'collapsable',
                icon     : 'home',
                children : [
                    {
                        id        : 'comptables',
                        title     : 'Comptables',
                        type      : 'item',
                        url       : '/cabinets/comptables',
                        exactMatch: true
                    },
                    {
                        id        : 'cabinets',
                        title     : 'Cabinets',
                        type      : 'item',
                        url       : '/cabinets/cabinets',
                        // exactMatch: true
                    },
                    {
                        id        : 'clients',
                        title     : 'Clients',
                        type      : 'item',
                        url       : '/cabinets/clients',
                        // exactMatch: true
                    }
                ]
            },
        ]
    }
];
