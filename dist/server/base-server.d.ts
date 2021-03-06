/// <reference types="node" />
import type { __ApiPreviewProps } from './api-utils';
import type { CustomRoutes } from '../lib/load-custom-routes';
import type { DomainLocale } from './config';
import type { DynamicRoutes, PageChecker, Params, Route } from './router';
import type { FetchEventResult } from './web/types';
import type { FontManifest } from './font-utils';
import type { IncomingMessage, ServerResponse } from 'http';
import type { LoadComponentsReturnType } from './load-components';
import type { MiddlewareManifest } from '../build/webpack/plugins/middleware-plugin';
import type { NextConfig, NextConfigComplete } from './config-shared';
import type { NextParsedUrlQuery, NextUrlWithParsedQuery } from './request-meta';
import type { ParsedNextUrl } from '../shared/lib/router/utils/parse-next-url';
import type { ParsedUrlQuery } from 'querystring';
import type { PrerenderManifest } from '../build';
import type { UrlWithParsedQuery } from 'url';
import type { CacheFs } from '../shared/lib/utils';
import { getRouteMatcher } from '../shared/lib/router/utils';
import Router from './router';
import './node-polyfill-fetch';
import { PagesManifest } from '../build/webpack/plugins/pages-manifest-plugin';
export declare type FindComponentsResult = {
    components: LoadComponentsReturnType;
    query: NextParsedUrlQuery;
};
interface RoutingItem {
    page: string;
    match: ReturnType<typeof getRouteMatcher>;
    ssr?: boolean;
}
export interface Options {
    /**
     * Object containing the configuration next.config.js
     */
    conf: NextConfig;
    /**
     * Set to false when the server was created by Next.js
     */
    customServer?: boolean;
    /**
     * Tells if Next.js is running in dev mode
     */
    dev?: boolean;
    /**
     * Where the Next project is located
     */
    dir?: string;
    /**
     * Tells if Next.js is running in a Serverless platform
     */
    minimalMode?: boolean;
    /**
     * Hide error messages containing server information
     */
    quiet?: boolean;
    /**
     * The hostname the server is running behind
     */
    hostname?: string;
    /**
     * The port the server is running behind
     */
    port?: number;
}
export interface RequestHandler {
    (req: IncomingMessage, res: ServerResponse, parsedUrl?: NextUrlWithParsedQuery | undefined): Promise<void>;
}
export default abstract class Server {
    protected dir: string;
    protected quiet: boolean;
    protected nextConfig: NextConfigComplete;
    protected distDir: string;
    protected pagesDir?: string;
    protected publicDir: string;
    protected hasStaticDir: boolean;
    protected serverBuildDir: string;
    protected pagesManifest?: PagesManifest;
    protected buildId: string;
    protected minimalMode: boolean;
    protected renderOpts: {
        poweredByHeader: boolean;
        buildId: string;
        generateEtags: boolean;
        runtimeConfig?: {
            [key: string]: any;
        };
        assetPrefix?: string;
        canonicalBase: string;
        dev?: boolean;
        previewProps: __ApiPreviewProps;
        customServer?: boolean;
        ampOptimizerConfig?: {
            [key: string]: any;
        };
        basePath: string;
        optimizeFonts: boolean;
        images: string;
        fontManifest: FontManifest;
        optimizeImages: boolean;
        disableOptimizedLoading?: boolean;
        optimizeCss: any;
        locale?: string;
        locales?: string[];
        defaultLocale?: string;
        domainLocales?: DomainLocale[];
        distDir: string;
        concurrentFeatures?: boolean;
        crossOrigin?: string;
    };
    private compression?;
    private incrementalCache;
    private responseCache;
    protected router: Router;
    protected dynamicRoutes?: DynamicRoutes;
    protected customRoutes: CustomRoutes;
    protected middlewareManifest?: MiddlewareManifest;
    protected middleware?: RoutingItem[];
    readonly hostname?: string;
    readonly port?: number;
    protected abstract getHasStaticDir(): boolean;
    protected abstract getPagesManifest(): PagesManifest | undefined;
    protected abstract getBuildId(): string;
    protected abstract generatePublicRoutes(): Route[];
    protected abstract getFilesystemPaths(): Set<string>;
    constructor({ dir, quiet, conf, dev, minimalMode, customServer, hostname, port, }: Options);
    logError(err: Error): void;
    private handleRequest;
    getRequestHandler(): RequestHandler;
    setAssetPrefix(prefix?: string): void;
    prepare(): Promise<void>;
    protected close(): Promise<void>;
    protected setImmutableAssetCacheControl(res: ServerResponse): void;
    protected getCustomRoutes(): CustomRoutes;
    private _cachedPreviewManifest;
    protected getPrerenderManifest(): PrerenderManifest;
    protected getPreviewProps(): __ApiPreviewProps;
    protected getMiddlewareManifest(): MiddlewareManifest | undefined;
    protected getMiddleware(): {
        match: (pathname: string | null | undefined) => false | {
            [paramName: string]: string | string[];
        };
        page: string;
    }[];
    protected hasMiddleware(pathname: string, _isSSR?: boolean): Promise<boolean>;
    protected ensureMiddleware(_pathname: string, _isSSR?: boolean): Promise<void>;
    private middlewareBetaWarning;
    protected runMiddleware(params: {
        request: IncomingMessage;
        response: ServerResponse;
        parsedUrl: ParsedNextUrl;
        parsed: UrlWithParsedQuery;
        onWarning?: (warning: Error) => void;
    }): Promise<FetchEventResult | null>;
    protected generateRoutes(): {
        basePath: string;
        headers: Route[];
        rewrites: {
            beforeFiles: Route[];
            afterFiles: Route[];
            fallback: Route[];
        };
        fsRoutes: Route[];
        redirects: Route[];
        catchAllRoute: Route;
        catchAllMiddleware?: Route;
        pageChecker: PageChecker;
        useFileSystemPublicRoutes: boolean;
        dynamicRoutes: DynamicRoutes | undefined;
        locales: string[];
    };
    private getPagePath;
    protected hasPage(pathname: string): Promise<boolean>;
    protected _beforeCatchAllRender(_req: IncomingMessage, _res: ServerResponse, _params: Params, _parsedUrl: UrlWithParsedQuery): Promise<boolean>;
    protected ensureApiPage(_pathname: string): Promise<void>;
    /**
     * Resolves `API` request, in development builds on demand
     * @param req http request
     * @param res http response
     * @param pathname path of request
     */
    private handleApiRequest;
    protected getDynamicRoutes(): Array<RoutingItem>;
    private handleCompression;
    protected run(req: IncomingMessage, res: ServerResponse, parsedUrl: UrlWithParsedQuery): Promise<void>;
    private pipe;
    private getStaticHTML;
    render(req: IncomingMessage, res: ServerResponse, pathname: string, query?: NextParsedUrlQuery, parsedUrl?: NextUrlWithParsedQuery): Promise<void>;
    protected findPageComponents(pathname: string, query?: NextParsedUrlQuery, params?: Params | null): Promise<FindComponentsResult | null>;
    protected getStaticPaths(pathname: string): Promise<{
        staticPaths: string[] | undefined;
        fallbackMode: 'static' | 'blocking' | false;
    }>;
    private renderToResponseWithComponents;
    private renderToResponse;
    renderToHTML(req: IncomingMessage, res: ServerResponse, pathname: string, query?: ParsedUrlQuery): Promise<string | null>;
    renderError(err: Error | null, req: IncomingMessage, res: ServerResponse, pathname: string, query?: NextParsedUrlQuery, setHeaders?: boolean): Promise<void>;
    private customErrorNo404Warn;
    private renderErrorToResponse;
    renderErrorToHTML(err: Error | null, req: IncomingMessage, res: ServerResponse, pathname: string, query?: ParsedUrlQuery): Promise<string | null>;
    protected getCacheFilesystem(): CacheFs;
    protected getFallbackErrorComponents(): Promise<LoadComponentsReturnType | null>;
    render404(req: IncomingMessage, res: ServerResponse, parsedUrl?: NextUrlWithParsedQuery, setHeaders?: boolean): Promise<void>;
    serveStatic(req: IncomingMessage, res: ServerResponse, path: string, parsedUrl?: UrlWithParsedQuery): Promise<void>;
    protected isServeableUrl(untrustedFileUrl: string): boolean;
    protected get _isLikeServerless(): boolean;
}
export declare class WrappedBuildError extends Error {
    innerError: Error;
    constructor(innerError: Error);
}
export {};
