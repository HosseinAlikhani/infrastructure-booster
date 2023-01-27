let _routes = [];

let app = {
    _routes,
    listen,
    use
};

function Application(){
    return app;
}

function Router(){
    return {use, ...routeMethods};
}

// inner methods and property

function listen(port, callback){
    // run application mock
}

function use(arg, action){
    //
}

let routeMethods = {};

['get', 'post', 'patch', 'delete'].forEach( (httpVerb) =>{
    routeMethods = { ...routeMethods, [httpVerb]: (route, middleware, action) => {
        _routes.push({
            method: httpVerb,
            route,
            middleware,
            action
        });
    }};
});

app = {...app, ...routeMethods};

exports = module.exports = Application;
exports.Router = Router;