import { AppState } from '../utils/constants';

const transitions: Record<AppState, AppState[]> = {
  Draft: ['DataCollected', 'Failed'],
  DataCollected: ['Validated', 'Failed'],
  Validated: ['Submitted', 'Failed'],
  Submitted: ['Approved', 'Rejected', 'Failed'],
  Failed: ['Retrying'],
  Retrying: ['DataCollected', 'Failed'],
  Approved: [],
  Rejected: []
};

export function canTransition(from: AppState, to: AppState) {
  return transitions[from].includes(to);
}
