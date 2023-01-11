module.exports = {
    parserOptions: {
        project: ['./tsconfig.json'],
    },
    rules: {
        'react/jsx-props-no-spreading': 'off',
    },
    extends: [
        'next/core-web-vitals',
        'airbnb',
        'airbnb-typescript',
        'plugin:prettier/recommended',
    ],
};
