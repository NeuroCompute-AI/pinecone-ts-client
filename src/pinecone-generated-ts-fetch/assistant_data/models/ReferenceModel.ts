/* tslint:disable */
/* eslint-disable */
/**
 * Pinecone Assistant Data Plane API
 * Pinecone Assistant Engine is a context engine to store and retrieve relevant knowledge from millions of documents at scale. This API supports interactions with assistants.
 *
 * The version of the OpenAPI document: 2025-04
 * Contact: support@pinecone.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { AssistantFileModel } from './AssistantFileModel';
import {
    AssistantFileModelFromJSON,
    AssistantFileModelFromJSONTyped,
    AssistantFileModelToJSON,
} from './AssistantFileModel';
import type { HighlightModel } from './HighlightModel';
import {
    HighlightModelFromJSON,
    HighlightModelFromJSONTyped,
    HighlightModelToJSON,
} from './HighlightModel';

/**
 * The ReferenceModel describes a single reference in a citation.
 * @export
 * @interface ReferenceModel
 */
export interface ReferenceModel {
    /**
     * 
     * @type {AssistantFileModel}
     * @memberof ReferenceModel
     */
    file?: AssistantFileModel;
    /**
     * 
     * @type {Array<number>}
     * @memberof ReferenceModel
     */
    pages?: Array<number>;
    /**
     * 
     * @type {HighlightModel}
     * @memberof ReferenceModel
     */
    highlight?: HighlightModel | null;
}

/**
 * Check if a given object implements the ReferenceModel interface.
 */
export function instanceOfReferenceModel(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ReferenceModelFromJSON(json: any): ReferenceModel {
    return ReferenceModelFromJSONTyped(json, false);
}

export function ReferenceModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReferenceModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'file': !exists(json, 'file') ? undefined : AssistantFileModelFromJSON(json['file']),
        'pages': !exists(json, 'pages') ? undefined : json['pages'],
        'highlight': !exists(json, 'highlight') ? undefined : HighlightModelFromJSON(json['highlight']),
    };
}

export function ReferenceModelToJSON(value?: ReferenceModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'file': AssistantFileModelToJSON(value.file),
        'pages': value.pages,
        'highlight': HighlightModelToJSON(value.highlight),
    };
}

