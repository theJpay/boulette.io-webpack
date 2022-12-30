module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "plugin:vue/vue3-recommended",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "plugin:prettier/recommended",
    "plugin:storybook/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
  },
  overrides: [
    {
      files: ["*.vue"],
      rules: {
        "vue/attributes-order": [
          "error",
          {
            alphabetical: true,
          },
        ],
        "vue/require-default-prop": "off",
        "vue/sort-keys": ["error", "asc"],
      },
    },
    {
      files: ["*.stories.ts"],
      rules: {},
    },
  ],
};
