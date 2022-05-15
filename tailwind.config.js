module.exports = {
  mode: "jit",
  content: [
    "./screens/*",
    "./components/**",
    "./layouts/**",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: require('tailwind-rn/unsupported-core-plugins'),
}
