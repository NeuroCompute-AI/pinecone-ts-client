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
 * @interface IndexMetaStatus
 */
export interface IndexMetaStatus {
    /**
     * 
     * @type {boolean}
     * @memberof IndexMetaStatus
     */
    ready?: boolean;
    /**
     * 
     * @type {string}
     * @memberof IndexMetaStatus
     */
    state?: IndexMetaStatusStateEnum;
}


/**
 * @export
 */
export const IndexMetaStatusStateEnum = {
    Initializing: 'Initializing',
    ScalingUp: 'ScalingUp',
    ScalingDown: 'ScalingDown',
    Terminating: 'Terminating',
    Ready: 'Ready'
} as const;
export type IndexMetaStatusStateEnum = typeof IndexMetaStatusStateEnum[keyof typeof IndexMetaStatusStateEnum];


/**
 * Check if a given object implements the IndexMetaStatus interface.
 */
export function instanceOfIndexMetaStatus(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function IndexMetaStatusFromJSON(json: any): IndexMetaStatus {
    return IndexMetaStatusFromJSONTyped(json, false);
}

export function IndexMetaStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): IndexMetaStatus {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'ready': !exists(json, 'ready') ? undefined : json['ready'],
        'state': !exists(json, 'state') ? undefined : json['state'],
    };
}

export function IndexMetaStatusToJSON(value?: IndexMetaStatus | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ready': value.ready,
        'state': value.state,
    };
}

