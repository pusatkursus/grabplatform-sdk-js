export interface GrabConfig {
  clientId: string;
  redirectUri: string;
  scope: string;
  acrValues?: string | AcrValues;
  request?: string;
  login_hint?: string;
  ui_locales?: string;
  state?: string;
}

export interface AcrValues {
  service?: string,
  consentContext?: {
    countryCode?: string,
    currency?: string,
    [x: string]: string,
  },
  additionalValues?: {
    [x: string]: string
  }
}
