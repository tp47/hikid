module.exports = {
  trailingComma: "all",
  importOrder: [
    "^@app/(.*)$",
    "^@processes/(.*)$",
    "^@pages/(.*)$",
    "^@widgets/(.*)$",
    "^@features/(.*)$",
    "^@entities/(.*)$",
    "^@shared/(.*)$",
    "^[./]",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  plugins: [
    require("prettier-plugin-tailwindcss"),
    require("@trivago/prettier-plugin-sort-imports"),
  ],
};
