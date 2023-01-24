export interface RoutesInterface
{
    getRoutes();
}

export type RouteType = {
    method: MethodEnum;
    route: string;
    middleware: Array<Object>;
    action;
}

export type GroupType = {
    route: string,
    middleware: Array<Object>,
    callback: Object;
}

export enum MethodEnum {
    get = 'get',
    post = 'post',
    patch = 'patch',
    delete = 'delete'
}