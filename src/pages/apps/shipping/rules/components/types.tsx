export type PropMeta = {
  operators: string[];
  valueType: 'text' | 'number' | 'percent' | 'boolean';
};

// Metadata for shipping rule properties
export const PROPERTY_META: Record<string, PropMeta> = {
  // Altezza pacco
  'Altezza pacco': { operators: ['maggiore di', 'maggiore o uguale a', 'minore di', 'minore o uguale a'], valueType: 'number' },
  // Codice postale
  'Codice postale': { operators: ['contiene', 'corrispondenza modello', 'finisce con', 'in', 'inizia con', 'non contiene', 'non in', 'non è', 'è'], valueType: 'text' },
  // Contanti alla consegna
  'Contanti alla consegna': { operators: ['è', 'non è'], valueType: 'boolean' },
  // Corriere
  'Corriere': { operators: ['è', 'non è'], valueType: 'text' },
  // Dal paese
  'Dal paese': { operators: ['è', 'non è'], valueType: 'text' },
  // Email cliente
  'Email cliente': { operators: ['contiene', 'corrispondenza modello', 'non contiene', 'è vuoto'], valueType: 'text' },
  // Indirizzo mittente
  'Indirizzo mittente': { operators: ['è', 'non è'], valueType: 'text' },
  // Larghezza
  'Larghezza (cm)': { operators: ['maggiore di', 'maggiore o uguale a', 'minore di', 'minore o uguale a'], valueType: 'number' },
  // Lunghezza
  'Lunghezza (cm)': { operators: ['maggiore di', 'maggiore o uguale a', 'minore di', 'minore o uguale a'], valueType: 'number' },
  // Metodo di dynamic checkout
  'Metodo di dynamic checkout': { operators: ['è', 'non è'], valueType: 'text' },
  // Metodo di spedizione al checkout
  'Metodo di spedizione al checkout': { operators: ['contiene', 'corrispondenza modello', 'finisce con', 'in', 'inizia con', 'non contiene', 'non in', 'non è', 'è'], valueType: 'text' },
  // Nome articolo
  'Nome articolo': { operators: ['contiene', 'corrispondenza modello', 'finisce con', 'in', 'inizia con', 'non contiene', 'non in', 'non è', 'è'], valueType: 'text' },
  // Numero di telefono
  'Numero di telefono': { operators: ['corrispondenza modello', 'inizia con', 'non inizia con', 'è vuoto'], valueType: 'text' },
  // Numero ordine
  'Numero ordine': { operators: ['contiene', 'corrispondenza modello', 'finisce con', 'in', 'inizia con', 'non contiene', 'non in', 'non è', 'è'], valueType: 'text' },
  // Ordine creato il giorno della settimana
  'Ordine creato il': { operators: ['in', 'non in'], valueType: 'text' },
  // Intervallo orario
  'Ordine creato il orario': { operators: ['tra', 'non tra'], valueType: 'text' },
  // Paese di destinazione
  'Paese di destinazione': { operators: ['in', 'non in', 'è', 'non è'], valueType: 'text' },
  // Peso
  'Peso (Kg)': { operators: ['maggiore di', 'maggiore o uguale a', 'minore di', 'minore o uguale a'], valueType: 'number' },
  // Quantità prodotti
  'Quantità prodotti': { operators: ['maggiore di', 'maggiore o uguale a', 'minore di', 'minore o uguale a'], valueType: 'number' },
  // Ragione sociale
  'Ragione sociale': { operators: ['contiene', 'corrispondenza modello', 'finisce con', 'in', 'inizia con', 'non contiene', 'non in'], valueType: 'text' },
  // SKU articolo
  'SKU articolo': { operators: ['contiene', 'corrispondenza modello', 'finisce con', 'in', 'inizia con', 'non contiene', 'non in'], valueType: 'text' },
  // Tag dell'ordine
  'Tag dell\'ordine': { operators: ['finisce con', 'in', 'inizia con', 'non contiene', 'non in', 'è', 'non è'], valueType: 'text' },
  // Valore totale degli articoli
  'Valore totale degli articoli': { operators: ['maggiore di', 'maggiore o uguale a', 'minore di', 'minore o uguale a', 'è', 'non è'], valueType: 'number' },
  // Valore totale dell'ordine
  'Valore totale dell\'ordine': { operators: ['maggiore di', 'maggiore o uguale a', 'minore di', 'minore o uguale a', 'è', 'non è'], valueType: 'number' },
};

export type ActionMeta = {
  requiresValue: boolean;
  valueType?: 'text' | 'number' | 'percent';
};

// Metadata for shipping rule actions
export const ACTION_META: Record<string, ActionMeta> = {
  // Aggiungi la dichiarazione doganale
  'Aggiungi la dichiarazione doganale': { requiresValue: true, valueType: 'text' },
  // Usa scatola
  'Usa scatola': { requiresValue: false },  //scatole
  // Diminuisci il valore dell'articolo del %
  'Diminuisci il valore dell\'articolo del %': { requiresValue: true, valueType: 'percent' },
  // Assicura il valore della spedizione per
  'Assicura il valore della spedizione per': { requiresValue: true, valueType: 'number' },
  // Assicura il valore della spedizione per %
  'Assicura il valore della spedizione per %': { requiresValue: true, valueType: 'percent' },
  // Scegli il pagamento in contanti alla consegna
  'Scegli il pagamento in contanti alla consegna': { requiresValue: true, valueType: 'number' }, //boolean
  // Imposta le note generali doganali
  'Imposta le note generali doganali': { requiresValue: true, valueType: 'text' },
  // Imposta email cliente
  'Imposta email cliente': { requiresValue: true, valueType: 'text' },
  // Imposta HS code
  'Imposta HS code': { requiresValue: true, valueType: 'text' },
  // Set item name
  'Set item name': { requiresValue: true, valueType: 'text' },
  // Imposta il paese di origine dell'articolo
  'Imposta il paese di origine dell\'articolo': { requiresValue: true, valueType: 'text' },
  // Imposta il valore dell'articolo
  'Imposta il valore dell\'articolo': { requiresValue: true, valueType: 'number' },
  // Imposta peso articolo
  'Imposta peso articolo': { requiresValue: true, valueType: 'number' },
  // Imposta numero di pacchi
  'Imposta numero di pacchi': { requiresValue: true, valueType: 'number' },
  // Restituisci con
  'Restituisci con': { requiresValue: true, valueType: 'text' },
  // Spedisci con indirizzo
  'Spedisci con indirizzo': { requiresValue: true, valueType: 'text' },
  // Imposta peso
  'Imposta peso (kg)': { requiresValue: true, valueType: 'number' },
  // Usa contratto di spedizione
  'Usa contratto di spedizione': { requiresValue: true, valueType: 'text' },  //altro
};

// Export lists for easy import
export const PROPERTIES = Object.keys(PROPERTY_META);
export const OPERATORS = ['>', '>=', '<', '<=', '=', '!='];
export const ACTIONS = Object.keys(ACTION_META);




