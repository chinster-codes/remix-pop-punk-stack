/** @type {import("prettier").Config} */
export default {
  overrides: [
    {
      files: "*.json",
      options: {
        trailingComma: "none",
      },
    },
  ],
};
