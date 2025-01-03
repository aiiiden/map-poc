/// <reference types="vite/client" />

interface ImportMetaEnv {
  VITE_ENVIRONMENT: 'development' | 'production';
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
