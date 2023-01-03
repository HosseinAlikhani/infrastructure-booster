let app = {
    listen
};

function Application(){
    return app;
}

function Router(){
    // application router mock
}


// inner methods and property
var routes = [];

function listen(port, callback){
    // run application mock
}

function get(route, middleware, action){
    routes.push({
        method: 'get',
        route,
        middleware,
        action
    });
}

function post(route, middleware, action){
    routes.push({
        method: 'post',
        route,
        middleware,
        action
    });
}

function patch(route, middleware, action){
    routes.push({
        method: 'patch',
        route,
        middleware,
        action
    });
}



exports = module.exports = Application;
exports.Router = Router;