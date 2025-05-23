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
import type { SparseValues } from './SparseValues';
import {
    SparseValuesFromJSON,
    SparseValuesFromJSONTyped,
    SparseValuesToJSON,
} from './SparseValues';

/**
 * 
 * @export
 * @interface Vector
 */
export interface Vector {
    /**
     * This is the vector's unique id.
     * @type {string}
     * @memberof Vector
     */
    id: string;
    /**
     * This is the vector data included in the request.
     * @type {Array<number>}
     * @memberof Vector
     */
    values?: Array<number>;
    /**
     * 
     * @type {SparseValues}
     * @memberof Vector
     */
    sparseValues?: SparseValues;
    /**
     * This is the metadata included in the request.
     * @type {object}
     * @memberof Vector
     */
    metadata?: object;
}

/**
 * Check if a given object implements the Vector interface.
 */
export function instanceOfVector(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function VectorFromJSON(json: any): Vector {
    return VectorFromJSONTyped(json, false);
}

export function VectorFromJSONTyped(json: any, ignoreDiscriminator: boolean): Vector {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'values': !exists(json, 'values') ? undefined : json['values'],
        'sparseValues': !exists(json, 'sparseValues') ? undefined : SparseValuesFromJSON(json['sparseValues']),
        'metadata': !exists(json, 'metadata') ? undefined : json['metadata'],
    };
}

export function VectorToJSON(value?: Vector | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'values': value.values,
        'sparseValues': SparseValuesToJSON(value.sparseValues),
        'metadata': value.metadata,
    };
}

