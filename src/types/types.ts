/* eslint-disable @typescript-eslint/naming-convention */
export type InstalledPackage = {
  name: string;
  description: string;
  authors: any;
  source: {
    url: string;
  };
  version: string;
  version_normalized: string;
};

export type Package = {
  name: string;
  description: string;
  url: string;
  repository: string;
  downloads: number;
  favers: number;
};

export type PackageResponse = {
  results: Package[];
};

export type P2Package = {
  name: string;
  description: string;
  authors: any;
  version: string;
  version_normalized: string;
  homepage: string;
  source: {
    url: string;
    type: string;
  };
};
