export default defineConfig({
  server: {
    allowedHosts: [
      process.env.ALLOWED_HOST,
      "localhost"
    ]
  }
});
