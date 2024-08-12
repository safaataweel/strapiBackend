module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET','04sDR74LubhXM3HOYKK0Gp3qmRyNgh8tF1a3y+Mqzvk='),
  },
  apiToken: {
    salt: process.env.API_TOKEN_SALT || 'vme6YdCxw1pk+I2NdxvF9A==',
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT','R1dPFeQMI+fDEZ2iHxL4j6refUZBLkWQomkN/8+BDmw='),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
