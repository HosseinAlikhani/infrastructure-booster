let _routes = [];

let app = {
    _routes,
    listen,
    get,
    post,
    patch
};

function Application(){
    return app;
}

function Router(){
    // application router mock
}


// inner methods and property

function listen(port, callback){
    // run application mock
}

function get(route, middleware, action){
    _routes.push({
        method: 'get',
        route,
        middleware,
        action
    });
}

function post(route, middleware, action){
    _routes.push({
        method: 'post',
        route,
        middleware,
        action
    });
}

function patch(route, middleware, action){
    _routes.push({
        method: 'patch',
        route,
        middleware,
        action
    });
}


exports = module.exports = Application;
exports.Router = Router;