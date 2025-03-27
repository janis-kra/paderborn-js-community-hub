/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_MEETUP_API_KEY: string;
  readonly VITE_LINKEDIN_API_TOKEN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
