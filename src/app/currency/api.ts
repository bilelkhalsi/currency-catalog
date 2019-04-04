export class Currency {
    code: string;
    symbol: string;
    name: string;

    public constructor(raw: any) {
        if (raw) {
            this.code = raw.code;
            this.symbol = raw.symbol;
            this.name = raw.name;
        }
    }
}

export const CURRENCIES_MOCK = [

    {
        'symbol': '$',
        'name': 'US Dollar',
        'symbol_native': '$',
        'decimal_digits': 2,
        'rounding': 0,
        'code': 'USD',
        'name_plural': 'US dollars'
    },
    {
        'symbol': 'CA$',
        'name': 'Canadian Dollar',
        'symbol_native': '$',
        'decimal_digits': 2,
        'rounding': 0,
        'code': 'CAD',
        'name_plural': 'Canadian dollars'
    },
    {
        'symbol': '€',
        'name': 'Euro',
        'symbol_native': '€',
        'decimal_digits': 2,
        'rounding': 0,
        'code': 'EUR',
        'name_plural': 'euros'
    },
    {
        'symbol': 'AED',
        'name': 'United Arab Emirates Dirham',
        'symbol_native': 'د.إ.‏',
        'decimal_digits': 2,
        'rounding': 0,
        'code': 'AED',
        'name_plural': 'UAE dirhams'
    },
    {
        'symbol': 'Af',
        'name': 'Afghan Afghani',
        'symbol_native': '؋',
        'decimal_digits': 0,
        'rounding': 0,
        'code': 'AFN',
        'name_plural': 'Afghan Afghanis'
    },
    {
        'symbol': 'ALL',
        'name': 'Albanian Lek',
        'symbol_native': 'Lek',
        'decimal_digits': 0,
        'rounding': 0,
        'code': 'ALL',
        'name_plural': 'Albanian lekë'
    }
];
