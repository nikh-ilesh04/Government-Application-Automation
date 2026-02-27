import { api } from './api';

export const applicationService = {
  start: (type: string) => api.post('/applications/start', { type }),
  getById: (id: number) => api.get(`/applications/${id}`),
  validate: (id: number) => api.post(`/applications/${id}/validate`),
  submit: (id: number) => api.post(`/applications/${id}/submit`),
  retry: (id: number) => api.post(`/applications/${id}/retry`)
};
