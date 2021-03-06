import Router from '../shared/lib/router/router';
import type { NextRouter } from '../shared/lib/router/router';
declare type ClassArguments<T> = T extends new (...args: infer U) => any ? U : any;
declare type RouterArgs = ClassArguments<typeof Router>;
declare type SingletonRouterBase = {
    router: Router | null;
    readyCallbacks: Array<() => any>;
    ready(cb: () => any): void;
};
export { Router };
export type { NextRouter };
export declare type SingletonRouter = SingletonRouterBase & NextRouter;
declare const routerEvents: readonly ["routeChangeStart", "beforeHistoryChange", "routeChangeComplete", "routeChangeError", "hashChangeStart", "hashChangeComplete"];
export declare type RouterEvent = typeof routerEvents[number];
declare const _default: SingletonRouter;
export default _default;
export { default as withRouter } from './with-router';
export declare function useRouter(): NextRouter;
export declare function createRouter(...args: RouterArgs): Router;
export declare function makePublicRouterInstance(router: Router): NextRouter;
