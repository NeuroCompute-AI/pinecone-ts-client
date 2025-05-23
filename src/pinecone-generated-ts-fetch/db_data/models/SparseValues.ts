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
/**
 * Vector sparse data. Represented as a list of indices and a list of  corresponded values, which must be with the same length.
 * @export
 * @interface SparseValues
 */
export interface SparseValues {
    /**
     * The indices of the sparse data.
     * @type {Array<number>}
     * @memberof SparseValues
     */
    indices: Array<number>;
    /**
     * The corresponding values of the sparse data, which must be with the same length as the indices.
     * @type {Array<number>}
     * @memberof SparseValues
     */
    values: Array<number>;
}

/**
 * Check if a given object implements the SparseValues interface.
 */
export function instanceOfSparseValues(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "indices" in value;
    isInstance = isInstance && "values" in value;

    return isInstance;
}

export function SparseValuesFromJSON(json: any): SparseValues {
    return SparseValuesFromJSONTyped(json, false);
}

export function SparseValuesFromJSONTyped(json: any, ignoreDiscriminator: boolean): SparseValues {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'indices': json['indices'],
        'values': json['values'],
    };
}

export function SparseValuesToJSON(value?: SparseValues | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'indices': value.indices,
        'values': value.values,
    };
}

