export const APP_STATES = [
  'Draft',
  'DataCollected',
  'Validated',
  'Submitted',
  'Failed',
  'Retrying',
  'Approved',
  'Rejected'
] as const;

export type AppState = (typeof APP_STATES)[number];
