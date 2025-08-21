const { DefinePlugin } = require("webpack");

module.exports = {
  // ... your existing config
  plugins: [
    new DefinePlugin({
      __VUE_OPTIONS_API__: JSON.stringify(true),
      __VUE_PROD_DEVTOOLS__: JSON.stringify(false),
      __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: JSON.stringify(false), // 👈 important
    }),
  ],
};