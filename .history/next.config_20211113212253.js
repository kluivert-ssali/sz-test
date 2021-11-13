const withPWA = require('next-pwa');


module.exports = withPWA( {
  images: {
    domains: [
      "links.papareact.com",
      "platform-lookaside.fbsbx.com",
      "firebasestorage.googleapis.com",

    ],
  },
};
