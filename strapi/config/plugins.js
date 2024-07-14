module.exports = ({ env }) => ({
    email: {
        config: {
            provider: 'strapi-provider-email-smtp',
            providerOptions: {
                host: 'smtp.yandex.ru', //SMTP Host
                port: 465, //SMTP Port
                secure: true,
                username: 'robot@rocktver.ru',
                password: 'avkpqecbzlrnykcr',
                rejectUnauthorized: true,
                requireTLS: true,
                connectionTimeout: 1,
            },
        },
        settings: {
            from: 'robot@rocktver.ru',
            replyTo: 'noreplay@rocktver.ru',
        },
    },
    graphql: {
        endpoint: '/graphql',
        shadowCRUD: true,
        playgroundAlways: false,
        depthLimit: 7,
        amountLimit: 1000,
        apolloServer: {
          tracing: false,
        },
      },
});

//module.exports = ({ env }) => ({
//    // ...
//    email: {
//        config: {
//            provider: 'sendmail',
//            providerOptions: {
//                smtpHost: 'smtp.yandex.ru', //SMTP Host
//                smtpPort: 465, //SMTP Port
//                secure: true,
//                username: 'robot@rocktver.ru',
//                password: 'avkpqecbzlrnykcr',
//                rejectUnauthorized: true,
//                requireTLS: true,
//                connectionTimeout: 1,
//            },
//            settings: {
//                defaultFrom: 'robot@rocktver.ru',
//                defaultReplyTo: 'robot@rocktver.ru',
//            },
//        },
//    },
//    // ...
//});

