const featureFlags = {
  dashboard: true,
  deposit: false,
  withdrawal: false,
  transfers: true,
  history: false,
  trade: false,
  verification: false,
  tokenCreation: false,
  ticketCreation: true,
  issuanceCreation: false,
  saleCreation: false,
  preIssuanceUpload: false,
  settings: true,
  tfa: false,
  tokens: false,
  sales: false,
  requests: true,
  massTransfers: false,
  tickets: true
}

export default Object.assign(
  {
    HORIZON_SERVER: '',
    FILE_STORAGE: '',
    NETWORK_PASSPHRASE: '',
    TRANSACTIONS_PER_PAGE: 12,
    REQUESTS_PER_PAGE: 10,
    DECIMAL_POINTS: 6,
    MINIMAL_NUMBER_INPUT_STEP: 0.000001,
    VALIDATE_EMAILS: process.env.NODE_ENV === 'production',
    FEATURE_FLAGS: featureFlags,
    NULL_ASSET_SIGNER: 'GAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHV4',
    LOCAL_STORAGE_KEY: 'tokend-client',
    DEFAULT_QUOTE_ASSET: 'USD',
    DEFAULT_TRADE_PAIRS_RE: [
      // Descending priority
      /BTC.*\/.*ETH/,
      /ETH.*\/.*BTC/
    ]
  },
  process.env,
  document.ENV
)
