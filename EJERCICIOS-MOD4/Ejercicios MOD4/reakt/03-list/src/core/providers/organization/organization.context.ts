import { createContext, useState } from 'react';
import { OrganizationContextModel } from './organization.vm';

export const OrganizationContext = createContext<OrganizationContextModel>({
  organization: '',
  setOrganization: () => {},
});