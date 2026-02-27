import { env } from '../config/env';

export function submitToGovernmentPortal() {
  const failed = Math.random() < env.portalFailureRate;
  return failed ? { ok: false, message: 'Portal temporary failure' } : { ok: true, message: 'Submission accepted' };
}
