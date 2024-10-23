import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'nx-dashboard',
  exposes: {
    './Module': 'apps/nx-dashboard/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
