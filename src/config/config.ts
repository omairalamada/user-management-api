export default () => ({
    version: process.env.VERSION || '0.0.1',
    port: parseInt(process.env.PORT, 10) || 3000,
  });