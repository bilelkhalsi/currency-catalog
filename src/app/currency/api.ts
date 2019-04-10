class Attributes {
    code: string;
    name: string;
    currencyType: string;
    symbol: string;
    isoNum3: string;
    isoAlpha3: string;
    constructor(raw: any) {
        if (raw) {
            this.code = raw.code;
            this.name = raw.name;
            this.currencyType = raw.currency_type;
            this.symbol = raw.symbol;
            this.isoNum3 = raw.code_iso_numeric3;
            this.isoAlpha3 = raw.code_iso_alpha3;
        }
    }
}
export class Currency {
    id: string;
    attributes: Attributes;

    public constructor(raw: any) {
        if (raw) {
            this.id = raw.id;
            this.attributes = new Attributes(raw.attributes);
        }
    }
}

export const CURRENCIES_MOCK = [
    {
        'id': 'USD',
        'attributes': {
            'code': 'USD',
            'name': 'US Dollar',
            'currency_type': 'national',
            'code_iso_numeric3': '840',
            'code_iso_alpha3': 'USD',
            'symbol': '$',
            'native_symbol': '$',
            'category': 'others'
        },
    },
    {
        'id': 'EUR',
        'attributes': {
            'code': 'EUR',
            'name': 'Euro',
            'currency_type': 'national',
            'code_iso_numeric3': '978',
            'code_iso_alpha3': 'EUR',
            'symbol': '€',
            'native_symbol': '€',
            'category': 'others'
        }
    },
    {
        'id': 'JPY',
        'attributes': {
            'code': 'JPY',
            'name': 'Yen',
            'currency_type': 'national',
            'code_iso_numeric3': '392',
            'code_iso_alpha3': 'JPY',
            'symbol': '¥',
            'native_symbol': '￥',
            'category': 'others'
        }
    },
    {
        'id': 'ARS',
        'attributes': {
            'code': 'ARS',
            'name': 'Argentine Peso',
            'currency_type': 'national',
            'code_iso_numeric3': '032',
            'code_iso_alpha3': 'ARS',
            'symbol': 'AR$',
            'native_symbol': '$',
            'category': 'others'
        }
    },
    {
        'id': 'CUC',
        'attributes': {
            'code': 'CUC',
            'name': 'Peso Convertible',
            'currency_type': 'national',
            'code_iso_numeric3': '931',
            'code_iso_alpha3': 'CUC',
            'symbol': null,
            'native_symbol': null,
            'category': 'others'
        }
    },
    {
        'id': 'CHF',
        'attributes': {
            'code': 'CHF',
            'name': 'Swiss Franc',
            'currency_type': 'national',
            'code_iso_numeric3': '756',
            'code_iso_alpha3': 'CHF',
            'symbol': 'CHF',
            'native_symbol': 'CHF',
            'category': 'others'
        }
    },
    {
        'id': 'USD',
        'attributes': {
            'code': 'USD',
            'name': 'US Dollar',
            'currency_type': 'national',
            'code_iso_numeric3': '840',
            'code_iso_alpha3': 'USD',
            'symbol': '$',
            'native_symbol': '$',
            'category': 'others'
        },
    },
    {
        'id': 'EUR',
        'attributes': {
            'code': 'EUR',
            'name': 'Euro',
            'currency_type': 'national',
            'code_iso_numeric3': '978',
            'code_iso_alpha3': 'EUR',
            'symbol': '€',
            'native_symbol': '€',
            'category': 'others'
        }
    },
    {
        'id': 'JPY',
        'attributes': {
            'code': 'JPY',
            'name': 'Yen',
            'currency_type': 'national',
            'code_iso_numeric3': '392',
            'code_iso_alpha3': 'JPY',
            'symbol': '¥',
            'native_symbol': '￥',
            'category': 'others'
        }
    },
    {
        'id': 'ARS',
        'attributes': {
            'code': 'ARS',
            'name': 'Argentine Peso',
            'currency_type': 'national',
            'code_iso_numeric3': '032',
            'code_iso_alpha3': 'ARS',
            'symbol': 'AR$',
            'native_symbol': '$',
            'category': 'others'
        }
    },
    {
        'id': 'CUC',
        'attributes': {
            'code': 'CUC',
            'name': 'Peso Convertible',
            'currency_type': 'national',
            'code_iso_numeric3': '931',
            'code_iso_alpha3': 'CUC',
            'symbol': null,
            'native_symbol': null,
            'category': 'others'
        }
    },
    {
        'id': 'CHF',
        'attributes': {
            'code': 'CHF',
            'name': 'Swiss Franc',
            'currency_type': 'national',
            'code_iso_numeric3': '756',
            'code_iso_alpha3': 'CHF',
            'symbol': 'CHF',
            'native_symbol': 'CHF',
            'category': 'others'
        }
    },
    {
        'id': 'USD',
        'attributes': {
            'code': 'USD',
            'name': 'US Dollar',
            'currency_type': 'national',
            'code_iso_numeric3': '840',
            'code_iso_alpha3': 'USD',
            'symbol': '$',
            'native_symbol': '$',
            'category': 'others'
        },
    },
    {
        'id': 'EUR',
        'attributes': {
            'code': 'EUR',
            'name': 'Euro',
            'currency_type': 'national',
            'code_iso_numeric3': '978',
            'code_iso_alpha3': 'EUR',
            'symbol': '€',
            'native_symbol': '€',
            'category': 'others'
        }
    },
    {
        'id': 'JPY',
        'attributes': {
            'code': 'JPY',
            'name': 'Yen',
            'currency_type': 'national',
            'code_iso_numeric3': '392',
            'code_iso_alpha3': 'JPY',
            'symbol': '¥',
            'native_symbol': '￥',
            'category': 'others'
        }
    },
    {
        'id': 'ARSS',
        'attributes': {
            'code': 'ARSS',
            'name': 'Argentine Peso',
            'currency_type': 'national',
            'code_iso_numeric3': '032',
            'code_iso_alpha3': 'ARS',
            'symbol': 'AR$',
            'native_symbol': '$',
            'category': 'others'
        }
    },
    {
        'id': 'CUS',
        'attributes': {
            'code': 'CUS',
            'name': 'Peso Convertible',
            'currency_type': 'national',
            'code_iso_numeric3': '931',
            'code_iso_alpha3': 'CUC',
            'symbol': null,
            'native_symbol': null,
            'category': 'others'
        }
    },
    {
        'id': 'CHS',
        'attributes': {
            'code': 'CHS',
            'name': 'Swiss Franc',
            'currency_type': 'national',
            'code_iso_numeric3': '756',
            'code_iso_alpha3': 'CHF',
            'symbol': 'CHF',
            'native_symbol': 'CHF',
            'category': 'others'
        }
    }
];
