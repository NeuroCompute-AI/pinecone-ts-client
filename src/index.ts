// Class, function exports
export { Pinecone } from './pinecone';
export { Index } from './data';
export { Assistant, ChatStream } from './assistant';
export * as Errors from './errors';

// Interface exports
export type { RerankOptions } from './inference/inference';
export type {
  RerankResult,
  RerankResultUsage,
  RankedDocument,
  EmbeddingsList,
  EmbeddingsListUsage,
  Embedding,
} from './pinecone-generated-ts-fetch/inference';
export type { ListResponse } from './pinecone-generated-ts-fetch/db_data';
export type {
  AssistantList,
  AssistantModel,
  AssistantStatusEnum,
  ChatOptions,
  ChatModelEnum,
  ChoiceModel,
  FinishReasonEnum,
  StreamedChatResponse,
  StreamedChatCompletionResponse,
  BaseChunk,
  MessageStartChunk,
  ContentChunk,
  CitationChunk,
  MessageEndChunk,
  ContextOptions,
  AssistantFileModel,
  AssistantFileStatusEnum,
  AssistantFilesList,
  ListFilesOptions,
  UploadFileOptions,
  CreateAssistantOptions,
  UpdateAssistantOptions,
  UpdateAssistantResponse,
} from './assistant';
export type {
  ChatModel,
  ChatModelFinishReasonEnum,
  ChatCompletionModel,
  CitationModel,
  ContextModel,
  MessageModel,
  UsageModel,
} from './pinecone-generated-ts-fetch/assistant_data';

// Type exports
export type {
  CollectionName,
  CreateIndexOptions,
  DeleteCollectionOptions,
  DeleteIndexOptions,
  DescribeIndexOptions,
  DescribeCollectionOptions,
  IndexName,
  PodType,
} from './control';
export type {
  DeleteManyByFilterOptions,
  DeleteManyByRecordIdOptions,
  DeleteManyOptions,
  DeleteOneOptions,
  DescribeIndexStatsOptions,
  FetchOptions,
  FetchResponse,
  IndexStatsDescription,
  IndexStatsNamespaceSummary,
  PineconeConfiguration,
  PineconeRecord,
  UpdateOptions,
  QueryByRecordId,
  QueryByVectorValues,
  QueryOptions,
  QueryResponse,
  QueryShared,
  RecordId,
  RecordMetadata,
  RecordMetadataValue,
  RecordSparseValues,
  RecordValues,
  ScoredPineconeRecord,
} from './data';
export type {
  CollectionList,
  CollectionModel,
  ConfigureIndexRequestSpecPod,
  CreateCollectionRequest,
  CreateIndexRequest,
  CreateIndexRequestMetricEnum,
  DeletionProtection,
  DescribeCollectionRequest,
  DescribeIndexRequest,
  FetchAPI,
  IndexList,
  IndexModel,
  ServerlessSpec,
  ServerlessSpecCloudEnum,
  PodSpec,
  PodSpecMetadataConfig,
} from './pinecone-generated-ts-fetch/db_control';
