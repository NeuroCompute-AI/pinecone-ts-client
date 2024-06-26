/* tslint:disable */
/* eslint-disable */
/**
 * Pinecone Control Plane API
 * Pinecone is a vector database that makes it easy to search and retrieve billions of high-dimensional vectors.
 *
 * The version of the OpenAPI document: v1
 * Contact: support@pinecone.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { CreateIndexRequestSpecPod } from './CreateIndexRequestSpecPod';
import {
    CreateIndexRequestSpecPodFromJSON,
    CreateIndexRequestSpecPodFromJSONTyped,
    CreateIndexRequestSpecPodToJSON,
} from './CreateIndexRequestSpecPod';
import type { ServerlessSpec } from './ServerlessSpec';
import {
    ServerlessSpecFromJSON,
    ServerlessSpecFromJSONTyped,
    ServerlessSpecToJSON,
} from './ServerlessSpec';

/**
 * The spec object defines how the index should be deployed. For serverless indexes, you define only the cloud and region 
 * where the index should be hosted. For pod-based indexes, you define the environment where the index should be hosted, 
 * the pod type and size to use, and other index characteristics. For more information on creating indexes, 
 * see [Understanding indexes](https://docs.pinecone.io/guides/indexes/understanding-indexes).
 * 
 * @export
 * @interface CreateIndexRequestSpec
 */
export interface CreateIndexRequestSpec {
    /**
     * 
     * @type {ServerlessSpec}
     * @memberof CreateIndexRequestSpec
     */
    serverless?: ServerlessSpec;
    /**
     * 
     * @type {CreateIndexRequestSpecPod}
     * @memberof CreateIndexRequestSpec
     */
    pod?: CreateIndexRequestSpecPod;
}

/**
 * Check if a given object implements the CreateIndexRequestSpec interface.
 */
export function instanceOfCreateIndexRequestSpec(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CreateIndexRequestSpecFromJSON(json: any): CreateIndexRequestSpec {
    return CreateIndexRequestSpecFromJSONTyped(json, false);
}

export function CreateIndexRequestSpecFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateIndexRequestSpec {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'serverless': !exists(json, 'serverless') ? undefined : ServerlessSpecFromJSON(json['serverless']),
        'pod': !exists(json, 'pod') ? undefined : CreateIndexRequestSpecPodFromJSON(json['pod']),
    };
}

export function CreateIndexRequestSpecToJSON(value?: CreateIndexRequestSpec | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'serverless': ServerlessSpecToJSON(value.serverless),
        'pod': CreateIndexRequestSpecPodToJSON(value.pod),
    };
}

