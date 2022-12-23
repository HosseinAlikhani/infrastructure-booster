export interface RoutesInterface
{
    getRoutes();
}

export type RouteType = {
    method: MethodEnum;
    route: String;
    middleware: Array<Object>;
    action;
}

export type GroupType = {
    route: String,
    middleware: Array<Object>,
    callback: Object;
}

export enum MethodEnum {
    get = 'get',
    post = 'post',
    patch = 'patch',
    delete = 'delete'
}