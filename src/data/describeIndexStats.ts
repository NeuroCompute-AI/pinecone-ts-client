import { handleApiError } from '../errors';
import { buildConfigValidator } from '../validator';
import { Static, Type } from '@sinclair/typebox';
import { VectorOperationsProvider } from './vectorOperationsProvider';

const DescribeIndexStatsOptionsSchema = Type.Object(
  {
    filter: Type.Optional(Type.Object({}, { additionalProperties: true })),
  },
  { additionalProperties: false }
);

export type DescribeIndexStatsOptions = Static<
  typeof DescribeIndexStatsOptionsSchema
>;

export const describeIndexStats = (apiProvider: VectorOperationsProvider) => {
  const validator = buildConfigValidator(
    DescribeIndexStatsOptionsSchema,
    'describeIndexStats'
  );

  return async (options?: DescribeIndexStatsOptions): Promise<object> => {
    if (options) {
      validator(options);
    }

    try {
      const api = await apiProvider.provide();
      const results = await api.describeIndexStats({
        describeIndexStatsRequest: { ...options },
      });
      return results;
    } catch (e) {
      const err = await handleApiError(e);
      throw err;
    }
  };
};