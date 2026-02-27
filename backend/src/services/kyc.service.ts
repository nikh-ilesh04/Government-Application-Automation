export function verifyAadhaar(aadhaar: string) {
  return { valid: /^\d{12}$/.test(aadhaar), providerRef: `AAD-${Date.now()}` };
}

export function verifyPan(pan: string) {
  return { valid: /^[A-Z]{5}[0-9]{4}[A-Z]$/.test(pan), providerRef: `PAN-${Date.now()}` };
}
