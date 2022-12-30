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
    "plugin:import/errors",
    "plugin:import/warnings",
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    "import/order": [
      "warn",
      {
        groups: [
          ["builtin"],
          ["external"],
          ["parent", "sibling", "object", "internal", "index"],
          ["type"],
        ],
        "newlines-between": "ignore",
        pathGroups: [
          {
            pattern: "@/**",
            group: "external",
            position: "after",
          },
        ],
      },
    ],
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "sort-imports": ["error", { ignoreDeclarationSort: true }],
    "@typescript-eslint/consistent-type-imports": "warn",
    "@typescript-eslint/no-unused-vars": ["error"],
  },
  overrides: [
    {
      files: ["*.vue"],
      rules: {
        "vue/attribute-hyphenation": ["error", "never"],
        "vue/attributes-order": [
          "error",
          {
            alphabetical: true,
          },
        ],
        "vue/html-self-closing": [
          "error",
          {
            html: {
              void: "always",
              normal: "always",
              component: "always",
            },
            svg: "always",
            math: "always",
          },
        ],
        "vue/require-default-prop": "off",
        "vue/sort-keys": ["error", "asc"],
        "vue/v-on-event-hyphenation": [
          "error",
          "always",
          { ignore: ["update:modelValue"] },
        ],
      },
    },
    {
      files: ["*.stories.ts"],
      rules: {},
    },
  ],
  settings: {
    "import/resolver": {
      alias: {
        map: [["@", "./src"]],
        extensions: [".ts", ".vue"],
      },
    },
  },
};
