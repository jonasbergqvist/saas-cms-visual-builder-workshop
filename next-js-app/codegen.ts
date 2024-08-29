import { CodegenConfig  } from '@graphql-codegen/cli'

const config : CodegenConfig = {
    schema: "https://cg.optimizely.com/content/v2?auth=nSabkbOsWUA55R2YBSYvuGCOgfAnEqE5Zah5fTHsaKlm1kQi",
    documents: ["src/**/*.{ts,tsx}"],
    ignoreNoDocuments: true,
    generates: {
        './src/graphql/': {
            preset: 'client',
            plugins: [],
        }
    }
}

export default config