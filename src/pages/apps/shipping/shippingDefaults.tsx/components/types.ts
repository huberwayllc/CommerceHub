// src/types.ts
export interface ShippingDefaults {
  peso: number | ''
  metodo: string
  motivo:
    | 'nessuno'
    | 'regalo'
    | 'documenti'
    | 'beni-commerciali'
    | 'campione-commerciale'
    | 'merce-restituita'
  options: {
    orderReference: boolean
    prepaidLogo: boolean
    qrCode: boolean
    invoiceNumber: boolean
  }
  preferences: {
    pickup: boolean
    deliveryPoint: boolean
    homeDelivery: boolean
    lockerPickup: boolean
    mailbox: boolean
    postBox: boolean
    letter: boolean
    package: boolean
    pallet: boolean
    longPackage: boolean
    ageNone: boolean
    age16: boolean
    age18: boolean
    signatureRequired: boolean
    signatureNotRequired: boolean
  }
  maxDays: string
}


export const defaultValues: ShippingDefaults = {
  peso: '',
  metodo: '',
  motivo: 'nessuno',
  options: {
    orderReference: false,
    prepaidLogo: false,
    qrCode: false,
    invoiceNumber: false,
  },
  preferences: {
    pickup: false,
    deliveryPoint: false,
    homeDelivery: false,
    lockerPickup: false,
    mailbox: false,
    postBox: false,
    letter: false,
    package: false,
    pallet: false,
    longPackage: false,
    ageNone: false,
    age16: false,
    age18: false,
    signatureRequired: false,
    signatureNotRequired: false,
  },
  maxDays: '',
}