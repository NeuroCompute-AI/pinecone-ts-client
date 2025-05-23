/* tslint:disable */
/* eslint-disable */
/**
 * Pinecone Inference API
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
import type { EmbedRequestInputsInner } from './EmbedRequestInputsInner';
import {
    EmbedRequestInputsInnerFromJSON,
    EmbedRequestInputsInnerFromJSONTyped,
    EmbedRequestInputsInnerToJSON,
} from './EmbedRequestInputsInner';

/**
 * 
 * @export
 * @interface EmbedRequest
 */
export interface EmbedRequest {
    /**
     * The [model](https://docs.pinecone.io/guides/index-data/create-an-index#embedding-models) to use for embedding generation.
     * @type {string}
     * @memberof EmbedRequest
     */
    model: string;
    /**
     * Additional model-specific parameters. Refer to the [model guide](https://docs.pinecone.io/guides/index-data/create-an-index#embedding-models) for available model parameters.
     * @type {{ [key: string]: any; }}
     * @memberof EmbedRequest
     */
    parameters?: { [key: string]: any; };
    /**
     * List of inputs to generate embeddings for.
     * @type {Array<EmbedRequestInputsInner>}
     * @memberof EmbedRequest
     */
    inputs: Array<EmbedRequestInputsInner>;
}

/**
 * Check if a given object implements the EmbedRequest interface.
 */
export function instanceOfEmbedRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "model" in value;
    isInstance = isInstance && "inputs" in value;

    return isInstance;
}

export function EmbedRequestFromJSON(json: any): EmbedRequest {
    return EmbedRequestFromJSONTyped(json, false);
}

export function EmbedRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmbedRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'model': json['model'],
        'parameters': !exists(json, 'parameters') ? undefined : json['parameters'],
        'inputs': ((json['inputs'] as Array<any>).map(EmbedRequestInputsInnerFromJSON)),
    };
}

export function EmbedRequestToJSON(value?: EmbedRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'model': value.model,
        'parameters': value.parameters,
        'inputs': ((value.inputs as Array<any>).map(EmbedRequestInputsInnerToJSON)),
    };
}

