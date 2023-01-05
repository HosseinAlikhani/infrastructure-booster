let _routes = [];

let app = {
    _routes,
    listen,
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