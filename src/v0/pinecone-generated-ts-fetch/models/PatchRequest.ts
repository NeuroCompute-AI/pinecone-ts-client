/* tslint:disable */
/* eslint-disable */
/**
 * Pinecone API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: version not set
 * Contact: support@pinecone.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface PatchRequest
 */
export interface PatchRequest {
    /**
     * The desired number of replicas for the index.
     * @type {number}
     * @memberof PatchRequest
     */
    replicas?: number;
    /**
     * The new pod type for the index. One of `s1`, `p1`, or `p2` appended with `.` and one of `x1`, `x2`, `x4`, or `x8`.
     * @type {string}
     * @memberof PatchRequest
     */
    podType?: string;
}

/**
 * Check if a given object implements the PatchRequest interface.
 */
export function instanceOfPatchRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PatchRequestFromJSON(json: any): PatchRequest {
    return PatchRequestFromJSONTyped(json, false);
}

export function PatchRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'replicas': !exists(json, 'replicas') ? undefined : json['replicas'],
        'podType': !exists(json, 'pod_type') ? undefined : json['pod_type'],
    };
}

export function PatchRequestToJSON(value?: PatchRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'replicas': value.replicas,
        'pod_type': value.podType,
    };
}
