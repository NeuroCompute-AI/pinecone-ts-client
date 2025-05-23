/* tslint:disable */
/* eslint-disable */
/**
 * Pinecone Control Plane API
 * Pinecone is a vector database that makes it easy to search and retrieve billions of high-dimensional vectors.
 *
 * The version of the OpenAPI document: 2025-04
 * Contact: support@pinecone.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  BackupList,
  BackupModel,
  CollectionList,
  CollectionModel,
  ConfigureIndexRequest,
  CreateBackupRequest,
  CreateCollectionRequest,
  CreateIndexForModelRequest,
  CreateIndexFromBackupRequest,
  CreateIndexFromBackupResponse,
  CreateIndexRequest,
  ErrorResponse,
  IndexList,
  IndexModel,
  RestoreJobList,
  RestoreJobModel,
} from '../models/index';
import {
    BackupListFromJSON,
    BackupListToJSON,
    BackupModelFromJSON,
    BackupModelToJSON,
    CollectionListFromJSON,
    CollectionListToJSON,
    CollectionModelFromJSON,
    CollectionModelToJSON,
    ConfigureIndexRequestFromJSON,
    ConfigureIndexRequestToJSON,
    CreateBackupRequestFromJSON,
    CreateBackupRequestToJSON,
    CreateCollectionRequestFromJSON,
    CreateCollectionRequestToJSON,
    CreateIndexForModelRequestFromJSON,
    CreateIndexForModelRequestToJSON,
    CreateIndexFromBackupRequestFromJSON,
    CreateIndexFromBackupRequestToJSON,
    CreateIndexFromBackupResponseFromJSON,
    CreateIndexFromBackupResponseToJSON,
    CreateIndexRequestFromJSON,
    CreateIndexRequestToJSON,
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
    IndexListFromJSON,
    IndexListToJSON,
    IndexModelFromJSON,
    IndexModelToJSON,
    RestoreJobListFromJSON,
    RestoreJobListToJSON,
    RestoreJobModelFromJSON,
    RestoreJobModelToJSON,
} from '../models/index';

export interface ConfigureIndexOperationRequest {
    indexName: string;
    configureIndexRequest: ConfigureIndexRequest;
}

export interface CreateBackupOperationRequest {
    indexName: string;
    createBackupRequest: CreateBackupRequest;
}

export interface CreateCollectionOperationRequest {
    createCollectionRequest: CreateCollectionRequest;
}

export interface CreateIndexOperationRequest {
    createIndexRequest: CreateIndexRequest;
}

export interface CreateIndexForModelOperationRequest {
    createIndexForModelRequest: CreateIndexForModelRequest;
}

export interface CreateIndexFromBackupOperationRequest {
    backupId: string;
    createIndexFromBackupRequest: CreateIndexFromBackupRequest;
}

export interface DeleteBackupRequest {
    backupId: string;
}

export interface DeleteCollectionRequest {
    collectionName: string;
}

export interface DeleteIndexRequest {
    indexName: string;
}

export interface DescribeBackupRequest {
    backupId: string;
}

export interface DescribeCollectionRequest {
    collectionName: string;
}

export interface DescribeIndexRequest {
    indexName: string;
}

export interface DescribeRestoreJobRequest {
    jobId: string;
}

export interface ListIndexBackupsRequest {
    indexName: string;
    limit?: number;
    paginationToken?: string;
}

export interface ListProjectBackupsRequest {
    limit?: number;
    paginationToken?: string;
}

export interface ListRestoreJobsRequest {
    limit?: number;
    paginationToken?: string;
}

/**
 * 
 */
export class ManageIndexesApi extends runtime.BaseAPI {

    /**
     * Configure an existing index. For serverless indexes, you can configure index deletion protection, tags, and integrated inference embedding settings for the index. For pod-based indexes, you can configure the pod size, number of replicas, tags, and index deletion protection.  It is not possible to change the pod type of a pod-based index. However, you can create a collection from a pod-based index and then [create a new pod-based index with a different pod type](http://docs.pinecone.io/guides/indexes/pods/create-a-pod-based-index#create-a-pod-index-from-a-collection) from the collection. For guidance and examples, see [Configure an index](http://docs.pinecone.io/guides/indexes/pods/manage-pod-based-indexes).
     * Configure an index
     */
    async configureIndexRaw(requestParameters: ConfigureIndexOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<IndexModel>> {
        if (requestParameters.indexName === null || requestParameters.indexName === undefined) {
            throw new runtime.RequiredError('indexName','Required parameter requestParameters.indexName was null or undefined when calling configureIndex.');
        }

        if (requestParameters.configureIndexRequest === null || requestParameters.configureIndexRequest === undefined) {
            throw new runtime.RequiredError('configureIndexRequest','Required parameter requestParameters.configureIndexRequest was null or undefined when calling configureIndex.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Api-Key"] = this.configuration.apiKey("Api-Key"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/indexes/{index_name}`.replace(`{${"index_name"}}`, encodeURIComponent(String(requestParameters.indexName))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: ConfigureIndexRequestToJSON(requestParameters.configureIndexRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => IndexModelFromJSON(jsonValue));
    }

    /**
     * Configure an existing index. For serverless indexes, you can configure index deletion protection, tags, and integrated inference embedding settings for the index. For pod-based indexes, you can configure the pod size, number of replicas, tags, and index deletion protection.  It is not possible to change the pod type of a pod-based index. However, you can create a collection from a pod-based index and then [create a new pod-based index with a different pod type](http://docs.pinecone.io/guides/indexes/pods/create-a-pod-based-index#create-a-pod-index-from-a-collection) from the collection. For guidance and examples, see [Configure an index](http://docs.pinecone.io/guides/indexes/pods/manage-pod-based-indexes).
     * Configure an index
     */
    async configureIndex(requestParameters: ConfigureIndexOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<IndexModel> {
        const response = await this.configureIndexRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create a backup of an index. 
     * Create a backup of an index
     */
    async createBackupRaw(requestParameters: CreateBackupOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BackupModel>> {
        if (requestParameters.indexName === null || requestParameters.indexName === undefined) {
            throw new runtime.RequiredError('indexName','Required parameter requestParameters.indexName was null or undefined when calling createBackup.');
        }

        if (requestParameters.createBackupRequest === null || requestParameters.createBackupRequest === undefined) {
            throw new runtime.RequiredError('createBackupRequest','Required parameter requestParameters.createBackupRequest was null or undefined when calling createBackup.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Api-Key"] = this.configuration.apiKey("Api-Key"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/indexes/{index_name}/backups`.replace(`{${"index_name"}}`, encodeURIComponent(String(requestParameters.indexName))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateBackupRequestToJSON(requestParameters.createBackupRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BackupModelFromJSON(jsonValue));
    }

    /**
     * Create a backup of an index. 
     * Create a backup of an index
     */
    async createBackup(requestParameters: CreateBackupOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BackupModel> {
        const response = await this.createBackupRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create a Pinecone collection.    Serverless indexes do not support collections. 
     * Create a collection
     */
    async createCollectionRaw(requestParameters: CreateCollectionOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CollectionModel>> {
        if (requestParameters.createCollectionRequest === null || requestParameters.createCollectionRequest === undefined) {
            throw new runtime.RequiredError('createCollectionRequest','Required parameter requestParameters.createCollectionRequest was null or undefined when calling createCollection.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Api-Key"] = this.configuration.apiKey("Api-Key"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/collections`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateCollectionRequestToJSON(requestParameters.createCollectionRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CollectionModelFromJSON(jsonValue));
    }

    /**
     * Create a Pinecone collection.    Serverless indexes do not support collections. 
     * Create a collection
     */
    async createCollection(requestParameters: CreateCollectionOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CollectionModel> {
        const response = await this.createCollectionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create a Pinecone index. This is where you specify the measure of similarity, the dimension of vectors to be stored in the index, which cloud provider you would like to deploy with, and more.    For guidance and examples, see [Create an index](https://docs.pinecone.io/guides/index-data/create-an-index). 
     * Create an index
     */
    async createIndexRaw(requestParameters: CreateIndexOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<IndexModel>> {
        if (requestParameters.createIndexRequest === null || requestParameters.createIndexRequest === undefined) {
            throw new runtime.RequiredError('createIndexRequest','Required parameter requestParameters.createIndexRequest was null or undefined when calling createIndex.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Api-Key"] = this.configuration.apiKey("Api-Key"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/indexes`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateIndexRequestToJSON(requestParameters.createIndexRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => IndexModelFromJSON(jsonValue));
    }

    /**
     * Create a Pinecone index. This is where you specify the measure of similarity, the dimension of vectors to be stored in the index, which cloud provider you would like to deploy with, and more.    For guidance and examples, see [Create an index](https://docs.pinecone.io/guides/index-data/create-an-index). 
     * Create an index
     */
    async createIndex(requestParameters: CreateIndexOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<IndexModel> {
        const response = await this.createIndexRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create an index with integrated embedding.  With this type of index, you provide source text, and Pinecone uses a [hosted embedding model](https://docs.pinecone.io/guides/index-data/create-an-index#embedding-models) to convert the text automatically during [upsert](https://docs.pinecone.io/reference/api/2025-01/data-plane/upsert_records) and [search](https://docs.pinecone.io/reference/api/2025-01/data-plane/search_records).  For guidance and examples, see [Create an index](https://docs.pinecone.io/guides/index-data/create-an-index#integrated-embedding).
     * Create an index with integrated embedding
     */
    async createIndexForModelRaw(requestParameters: CreateIndexForModelOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<IndexModel>> {
        if (requestParameters.createIndexForModelRequest === null || requestParameters.createIndexForModelRequest === undefined) {
            throw new runtime.RequiredError('createIndexForModelRequest','Required parameter requestParameters.createIndexForModelRequest was null or undefined when calling createIndexForModel.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Api-Key"] = this.configuration.apiKey("Api-Key"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/indexes/create-for-model`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateIndexForModelRequestToJSON(requestParameters.createIndexForModelRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => IndexModelFromJSON(jsonValue));
    }

    /**
     * Create an index with integrated embedding.  With this type of index, you provide source text, and Pinecone uses a [hosted embedding model](https://docs.pinecone.io/guides/index-data/create-an-index#embedding-models) to convert the text automatically during [upsert](https://docs.pinecone.io/reference/api/2025-01/data-plane/upsert_records) and [search](https://docs.pinecone.io/reference/api/2025-01/data-plane/search_records).  For guidance and examples, see [Create an index](https://docs.pinecone.io/guides/index-data/create-an-index#integrated-embedding).
     * Create an index with integrated embedding
     */
    async createIndexForModel(requestParameters: CreateIndexForModelOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<IndexModel> {
        const response = await this.createIndexForModelRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create an index from a backup.
     * Create an index from a backup
     */
    async createIndexFromBackupOperationRaw(requestParameters: CreateIndexFromBackupOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CreateIndexFromBackupResponse>> {
        if (requestParameters.backupId === null || requestParameters.backupId === undefined) {
            throw new runtime.RequiredError('backupId','Required parameter requestParameters.backupId was null or undefined when calling createIndexFromBackupOperation.');
        }

        if (requestParameters.createIndexFromBackupRequest === null || requestParameters.createIndexFromBackupRequest === undefined) {
            throw new runtime.RequiredError('createIndexFromBackupRequest','Required parameter requestParameters.createIndexFromBackupRequest was null or undefined when calling createIndexFromBackupOperation.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Api-Key"] = this.configuration.apiKey("Api-Key"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/backups/{backup_id}/create-index`.replace(`{${"backup_id"}}`, encodeURIComponent(String(requestParameters.backupId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateIndexFromBackupRequestToJSON(requestParameters.createIndexFromBackupRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CreateIndexFromBackupResponseFromJSON(jsonValue));
    }

    /**
     * Create an index from a backup.
     * Create an index from a backup
     */
    async createIndexFromBackupOperation(requestParameters: CreateIndexFromBackupOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CreateIndexFromBackupResponse> {
        const response = await this.createIndexFromBackupOperationRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete a backup.
     * Delete a backup
     */
    async deleteBackupRaw(requestParameters: DeleteBackupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.backupId === null || requestParameters.backupId === undefined) {
            throw new runtime.RequiredError('backupId','Required parameter requestParameters.backupId was null or undefined when calling deleteBackup.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Api-Key"] = this.configuration.apiKey("Api-Key"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/backups/{backup_id}`.replace(`{${"backup_id"}}`, encodeURIComponent(String(requestParameters.backupId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete a backup.
     * Delete a backup
     */
    async deleteBackup(requestParameters: DeleteBackupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteBackupRaw(requestParameters, initOverrides);
    }

    /**
     * Delete an existing collection. Serverless indexes do not support collections. 
     * Delete a collection
     */
    async deleteCollectionRaw(requestParameters: DeleteCollectionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.collectionName === null || requestParameters.collectionName === undefined) {
            throw new runtime.RequiredError('collectionName','Required parameter requestParameters.collectionName was null or undefined when calling deleteCollection.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Api-Key"] = this.configuration.apiKey("Api-Key"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/collections/{collection_name}`.replace(`{${"collection_name"}}`, encodeURIComponent(String(requestParameters.collectionName))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete an existing collection. Serverless indexes do not support collections. 
     * Delete a collection
     */
    async deleteCollection(requestParameters: DeleteCollectionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteCollectionRaw(requestParameters, initOverrides);
    }

    /**
     * Delete an existing index.
     * Delete an index
     */
    async deleteIndexRaw(requestParameters: DeleteIndexRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.indexName === null || requestParameters.indexName === undefined) {
            throw new runtime.RequiredError('indexName','Required parameter requestParameters.indexName was null or undefined when calling deleteIndex.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Api-Key"] = this.configuration.apiKey("Api-Key"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/indexes/{index_name}`.replace(`{${"index_name"}}`, encodeURIComponent(String(requestParameters.indexName))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete an existing index.
     * Delete an index
     */
    async deleteIndex(requestParameters: DeleteIndexRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteIndexRaw(requestParameters, initOverrides);
    }

    /**
     * Get a description of a backup.
     * Describe a backup
     */
    async describeBackupRaw(requestParameters: DescribeBackupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BackupModel>> {
        if (requestParameters.backupId === null || requestParameters.backupId === undefined) {
            throw new runtime.RequiredError('backupId','Required parameter requestParameters.backupId was null or undefined when calling describeBackup.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Api-Key"] = this.configuration.apiKey("Api-Key"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/backups/{backup_id}`.replace(`{${"backup_id"}}`, encodeURIComponent(String(requestParameters.backupId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BackupModelFromJSON(jsonValue));
    }

    /**
     * Get a description of a backup.
     * Describe a backup
     */
    async describeBackup(requestParameters: DescribeBackupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BackupModel> {
        const response = await this.describeBackupRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get a description of a collection. Serverless indexes do not support collections. 
     * Describe a collection
     */
    async describeCollectionRaw(requestParameters: DescribeCollectionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CollectionModel>> {
        if (requestParameters.collectionName === null || requestParameters.collectionName === undefined) {
            throw new runtime.RequiredError('collectionName','Required parameter requestParameters.collectionName was null or undefined when calling describeCollection.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Api-Key"] = this.configuration.apiKey("Api-Key"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/collections/{collection_name}`.replace(`{${"collection_name"}}`, encodeURIComponent(String(requestParameters.collectionName))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CollectionModelFromJSON(jsonValue));
    }

    /**
     * Get a description of a collection. Serverless indexes do not support collections. 
     * Describe a collection
     */
    async describeCollection(requestParameters: DescribeCollectionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CollectionModel> {
        const response = await this.describeCollectionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get a description of an index.
     * Describe an index
     */
    async describeIndexRaw(requestParameters: DescribeIndexRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<IndexModel>> {
        if (requestParameters.indexName === null || requestParameters.indexName === undefined) {
            throw new runtime.RequiredError('indexName','Required parameter requestParameters.indexName was null or undefined when calling describeIndex.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Api-Key"] = this.configuration.apiKey("Api-Key"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/indexes/{index_name}`.replace(`{${"index_name"}}`, encodeURIComponent(String(requestParameters.indexName))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => IndexModelFromJSON(jsonValue));
    }

    /**
     * Get a description of an index.
     * Describe an index
     */
    async describeIndex(requestParameters: DescribeIndexRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<IndexModel> {
        const response = await this.describeIndexRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get a description of a restore job.
     * Describe a restore job
     */
    async describeRestoreJobRaw(requestParameters: DescribeRestoreJobRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RestoreJobModel>> {
        if (requestParameters.jobId === null || requestParameters.jobId === undefined) {
            throw new runtime.RequiredError('jobId','Required parameter requestParameters.jobId was null or undefined when calling describeRestoreJob.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Api-Key"] = this.configuration.apiKey("Api-Key"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/restore-jobs/{job_id}`.replace(`{${"job_id"}}`, encodeURIComponent(String(requestParameters.jobId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RestoreJobModelFromJSON(jsonValue));
    }

    /**
     * Get a description of a restore job.
     * Describe a restore job
     */
    async describeRestoreJob(requestParameters: DescribeRestoreJobRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RestoreJobModel> {
        const response = await this.describeRestoreJobRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List all collections in a project. Serverless indexes do not support collections. 
     * List collections
     */
    async listCollectionsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CollectionList>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Api-Key"] = this.configuration.apiKey("Api-Key"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/collections`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CollectionListFromJSON(jsonValue));
    }

    /**
     * List all collections in a project. Serverless indexes do not support collections. 
     * List collections
     */
    async listCollections(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CollectionList> {
        const response = await this.listCollectionsRaw(initOverrides);
        return await response.value();
    }

    /**
     * List all backups for an index.
     * List backups for an index
     */
    async listIndexBackupsRaw(requestParameters: ListIndexBackupsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BackupList>> {
        if (requestParameters.indexName === null || requestParameters.indexName === undefined) {
            throw new runtime.RequiredError('indexName','Required parameter requestParameters.indexName was null or undefined when calling listIndexBackups.');
        }

        const queryParameters: any = {};

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.paginationToken !== undefined) {
            queryParameters['paginationToken'] = requestParameters.paginationToken;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Api-Key"] = this.configuration.apiKey("Api-Key"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/indexes/{index_name}/backups`.replace(`{${"index_name"}}`, encodeURIComponent(String(requestParameters.indexName))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BackupListFromJSON(jsonValue));
    }

    /**
     * List all backups for an index.
     * List backups for an index
     */
    async listIndexBackups(requestParameters: ListIndexBackupsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BackupList> {
        const response = await this.listIndexBackupsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List all indexes in a project.
     * List indexes
     */
    async listIndexesRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<IndexList>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Api-Key"] = this.configuration.apiKey("Api-Key"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/indexes`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => IndexListFromJSON(jsonValue));
    }

    /**
     * List all indexes in a project.
     * List indexes
     */
    async listIndexes(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<IndexList> {
        const response = await this.listIndexesRaw(initOverrides);
        return await response.value();
    }

    /**
     * List all backups for a project.
     * List backups for all indexes in a project
     */
    async listProjectBackupsRaw(requestParameters: ListProjectBackupsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BackupList>> {
        const queryParameters: any = {};

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.paginationToken !== undefined) {
            queryParameters['paginationToken'] = requestParameters.paginationToken;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Api-Key"] = this.configuration.apiKey("Api-Key"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/backups`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BackupListFromJSON(jsonValue));
    }

    /**
     * List all backups for a project.
     * List backups for all indexes in a project
     */
    async listProjectBackups(requestParameters: ListProjectBackupsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BackupList> {
        const response = await this.listProjectBackupsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List all restore jobs for a project.
     * List restore jobs
     */
    async listRestoreJobsRaw(requestParameters: ListRestoreJobsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RestoreJobList>> {
        const queryParameters: any = {};

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.paginationToken !== undefined) {
            queryParameters['paginationToken'] = requestParameters.paginationToken;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Api-Key"] = this.configuration.apiKey("Api-Key"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/restore-jobs`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RestoreJobListFromJSON(jsonValue));
    }

    /**
     * List all restore jobs for a project.
     * List restore jobs
     */
    async listRestoreJobs(requestParameters: ListRestoreJobsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RestoreJobList> {
        const response = await this.listRestoreJobsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
