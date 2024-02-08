module.exports = {
    extends: [
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:import/recommended',
        'standard-with-typescript',
        'prettier',
    ],
    rules: {
        'react/react-in-jsx-scope': 'off',
        'react/jsx-uses-react': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/triple-slash-reference': 'off',
    },
    ignorePatterns: ['vite.config.ts', 'vite-env.d.ts'],
}
