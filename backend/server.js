const { build } = require('./src/app');

const a = 0;
const app = build({
  logger: {
    level: 'info',
    prettyPrint: true,
  },
});
const start = async () => {
  try {
    await app.listen(process.env.PORT || '5000');
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};
start();
