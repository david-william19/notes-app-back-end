/* eslint-disable import/no-extraneous-dependencies */
const Hapi = require('@hapi/hapi');
const routes = require('./routes');

async function init() {
    // config server
    const server = Hapi.server({
        port: 8080,
        host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
        routes: {
            cors: {
                origin: ['*'],
            },
        },
    });

    // set some route for api
    server.route(routes);

    // run the server
    await server.start();

    console.log(`server berjalan pada ${server.info.uri}`);
}

// initialized the function
init();
