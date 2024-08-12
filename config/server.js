module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS',['9a0799921cc397336a4ea66ecf471f61237f73d841882103f3b656bb698ee66c9195186fa13f4c1168b267a9048311c9716c5dd253e97eb2545c4cdb2f51e176']),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
