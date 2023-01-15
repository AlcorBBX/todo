const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@components": path.resolve(__dirname, "src/components/"),
      "@config": path.resolve(__dirname, "src/config/"),
      "@contexts": path.resolve(__dirname, "src/contexts/"),
      "@helpers": path.resolve(__dirname, "src/helpers/"),
      "@hooks": path.resolve(__dirname, "src/hooks/"),
      "@pages": path.resolve(__dirname, "src/pages/"),
      "@providers": path.resolve(__dirname, "src/providers/"),
      "@routes": path.resolve(__dirname, "src/routes/"),
      "@scss": path.resolve(__dirname, "src/scss/"),
      "@store": path.resolve(__dirname, "src/store/"),
      "@types": path.resolve(__dirname, "src/types/"),
      "@utils": path.resolve(__dirname, "src/utils/"),
    },
  },
};
