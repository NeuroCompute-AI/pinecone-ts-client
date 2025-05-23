/* tslint:disable */
/* eslint-disable */
/**
 * Pinecone Data Plane API
 * Pinecone is a vector database that makes it easy to search and retrieve billions of high-dimensional vectors.
 *
 * The version of the OpenAPI document: 2025-04
 * Contact: support@pinecone.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { QueryVector } from './QueryVector';
import {
    QueryVectorFromJSON,
    QueryVectorFromJSONTyped,
    QueryVectorToJSON,
} from './QueryVector';
import type { SparseValues } from './SparseValues';
import {
    SparseValuesFromJSON,
    SparseValuesFromJSONTyped,
    SparseValuesToJSON,
} from './SparseValues';

/**
 * The request for the `query` operation.
 * @export
 * @interface QueryRequest
 */
export interface QueryRequest {
    /**
     * The namespace to query.
     * @type {string}
     * @memberof QueryRequest
     */
    namespace?: string;
    /**
     * The number of results to return for each query.
     * @type {number}
     * @memberof QueryRequest
     */
    topK: number;
    /**
     * The filter to apply. You can use vector metadata to limit your search. See [Understanding metadata](https://docs.pinecone.io/guides/index-data/indexing-overview#metadata).
     * @type {object}
     * @memberof QueryRequest
     */
    filter?: object;
    /**
     * Indicates whether vector values are included in the response.
     * @type {boolean}
     * @memberof QueryRequest
     */
    includeValues?: boolean;
    /**
     * Indicates whether metadata is included in the response as well as the ids.
     * @type {boolean}
     * @memberof QueryRequest
     */
    includeMetadata?: boolean;
    /**
     * DEPRECATED. Use `vector` or `id` instead.
     * @type {Array<QueryVector>}
     * @memberof QueryRequest
     * @deprecated
     */
    queries?: Array<QueryVector>;
    /**
     * The query vector. This should be the same length as the dimension of the index being queried. Each `query` request can contain only one of the parameters `id` or `vector`.
     * @type {Array<number>}
     * @memberof QueryRequest
     */
    vector?: Array<number>;
    /**
     * 
     * @type {SparseValues}
     * @memberof QueryRequest
     */
    sparseVector?: SparseValues;
    /**
     * The unique ID of the vector to be used as a query vector. Each request  can contain either the `vector` or `id` parameter.
     * @type {string}
     * @memberof QueryRequest
     */
    id?: string;
}

/**
 * Check if a given object implements the QueryRequest interface.
 */
export function instanceOfQueryRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "topK" in value;

    return isInstance;
}

export function QueryRequestFromJSON(json: any): QueryRequest {
    return QueryRequestFromJSONTyped(json, false);
}

export function QueryRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): QueryRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'namespace': !exists(json, 'namespace') ? undefined : json['namespace'],
        'topK': json['topK'],
        'filter': !exists(json, 'filter') ? undefined : json['filter'],
        'includeValues': !exists(json, 'includeValues') ? undefined : json['includeValues'],
        'includeMetadata': !exists(json, 'includeMetadata') ? undefined : json['includeMetadata'],
        'queries': !exists(json, 'queries') ? undefined : ((json['queries'] as Array<any>).map(QueryVectorFromJSON)),
        'vector': !exists(json, 'vector') ? undefined : json['vector'],
        'sparseVector': !exists(json, 'sparseVector') ? undefined : SparseValuesFromJSON(json['sparseVector']),
        'id': !exists(json, 'id') ? undefined : json['id'],
    };
}

export function QueryRequestToJSON(value?: QueryRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'namespace': value.namespace,
        'topK': value.topK,
        'filter': value.filter,
        'includeValues': value.includeValues,
        'includeMetadata': value.includeMetadata,
        'queries': value.queries === undefined ? undefined : ((value.queries as Array<any>).map(QueryVectorToJSON)),
        'vector': value.vector,
        'sparseVector': SparseValuesToJSON(value.sparseVector),
        'id': value.id,
    };
}

