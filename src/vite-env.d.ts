/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly NL_API_BASE_URL: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
