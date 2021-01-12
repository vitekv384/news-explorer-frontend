const presets = [
  [
    "@babel/env",
    {
      targets: {
        edge: "15",
        ie: "11",
        firefox: "50",
        chrome: "64",
        safari: "11.1",
      },
      useBuiltIns: "usage",
      corejs: "3.4.1"
    }
  ],
];
const plugins = [
  "@babel/plugin-proposal-class-properties"
]
module.exports = { presets, plugins };
