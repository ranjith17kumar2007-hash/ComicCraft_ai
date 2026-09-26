import type { QueryKey, UseMutationOptions, UseMutationResult, UseQueryOptions, UseQueryResult } from '@tanstack/react-query';
import type { ApiError, ComicGenerateInput, ComicGeneration, HealthStatus } from './api.schemas';
import { customFetch } from '../custom-fetch';
import type { ErrorType, BodyType } from '../custom-fetch';
type AwaitedInput<T> = PromiseLike<T> | T;
type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;
type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];
export declare const getHealthCheckUrl: () => string;
/**
 * Returns server health status
 * @summary Health check
 */
export declare const healthCheck: (options?: Parameters<typeof customFetch>[1]) => Promise<HealthStatus>;
export declare const getHealthCheckQueryKey: () => readonly ["/api/healthz"];
export declare const getHealthCheckQueryOptions: <TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData> & {
    queryKey: QueryKey;
};
export type HealthCheckQueryResult = NonNullable<Awaited<ReturnType<typeof healthCheck>>>;
export type HealthCheckQueryError = ErrorType<unknown>;
/**
 * @summary Health check
 */
export declare function useHealthCheck<TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getGenerateComicUrl: () => string;
/**
 * @summary Generate an illustrated comic from a story idea
 */
export declare const generateComic: (comicGenerateInput: ComicGenerateInput, options?: Parameters<typeof customFetch>[1]) => Promise<ComicGeneration>;
export declare const getGenerateComicMutationKey: () => readonly ["generateComic"];
export declare const getGenerateComicMutationOptions: <TError = ErrorType<ApiError>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof generateComic>>, TError, GenerateComicMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof generateComic>>, TError, GenerateComicMutationVariables, TContext>;
export type GenerateComicMutationResult = NonNullable<Awaited<ReturnType<typeof generateComic>>>;
export type GenerateComicMutationBody = BodyType<ComicGenerateInput>;
export type GenerateComicMutationError = ErrorType<ApiError>;
export type GenerateComicMutationVariables = {
    data: BodyType<ComicGenerateInput>;
};
/**
* @summary Generate an illustrated comic from a story idea
*/
export declare const useGenerateComic: <TError = ErrorType<ApiError>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof generateComic>>, TError, GenerateComicMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof generateComic>>, TError, GenerateComicMutationVariables, TContext>;
export {};
//# sourceMappingURL=api.d.ts.map