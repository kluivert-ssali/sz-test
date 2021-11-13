const withPWA = require('next-pwa');


module.exports = withPWA( {

  pwa: {
    dest: "public",
    register: true,
    skipWaitings: true,
    disable: process.env.NODE_ENV !== "development",


  },


  images: {
    domains: [
      "links.papareact.com",
      "platform-lookaside.fbsbx.com",
      "firebasestorage.googleapis.com",
    ],
  },
});
