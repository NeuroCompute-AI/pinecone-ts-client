/* tslint:disable */
/* eslint-disable */
/**
 * Pinecone Control Plane API
 * Pinecone is a vector database that makes it easy to search and retrieve billions of high-dimensional vectors.
 *
 * The version of the OpenAPI document: 2024-07
 * Contact: support@pinecone.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { Embedding } from './Embedding';
import {
  EmbeddingFromJSON,
  EmbeddingFromJSONTyped,
  EmbeddingToJSON,
} from './Embedding';
import type { EmbeddingsListUsage } from './EmbeddingsListUsage';
import {
  EmbeddingsListUsageFromJSON,
  EmbeddingsListUsageFromJSONTyped,
  EmbeddingsListUsageToJSON,
} from './EmbeddingsListUsage';

/**
 * Embeddings generated for the input
 * @export
 * @interface EmbeddingsList
 */
export interface EmbeddingsList {
  /**
   *
   * @type {string}
   * @memberof EmbeddingsList
   */
  model?: string;
  /**
   *
   * @type {Array<Embedding>}
   * @memberof EmbeddingsList
   */
  data?: Array<Embedding>;
  /**
   *
   * @type {EmbeddingsListUsage}
   * @memberof EmbeddingsList
   */
  usage?: EmbeddingsListUsage;
}

/**
 * Check if a given object implements the EmbeddingsList interface.
 */
export function instanceOfEmbeddingsList(value: object): boolean {
  let isInstance = true;

  return isInstance;
}

export function EmbeddingsListFromJSON(json: any): EmbeddingsList {
  return EmbeddingsListFromJSONTyped(json, false);
}

export function EmbeddingsListFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): EmbeddingsList {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    model: !exists(json, 'model') ? undefined : json['model'],
    data: !exists(json, 'data')
      ? undefined
      : (json['data'] as Array<any>).map(EmbeddingFromJSON),
    usage: !exists(json, 'usage')
      ? undefined
      : EmbeddingsListUsageFromJSON(json['usage']),
  };
}

export function EmbeddingsListToJSON(value?: EmbeddingsList | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    model: value.model,
    data:
      value.data === undefined
        ? undefined
        : (value.data as Array<any>).map(EmbeddingToJSON),
    usage: EmbeddingsListUsageToJSON(value.usage),
  };
}
