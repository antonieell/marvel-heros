module.exports = {
  "env": {
    "test": {
      "presets": [
        "@babel/preset-env",
        "@babel/react",
         '@babel/preset-typescript',
        "next/babel"
      ]
    },
    "development": {
      "presets": [
        "next/babel"
      ]
    }
  }
}
