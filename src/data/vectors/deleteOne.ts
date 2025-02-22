import { VectorOperationsProvider } from './vectorOperationsProvider';
import { RecordId } from './types';
import { PineconeArgumentError } from '../../errors';

/**
 * The id of the record to delete from the index.
 *
 * @see {@link Index.deleteOne }
 */
export type DeleteOneOptions = RecordId;

export const deleteOne = (
  apiProvider: VectorOperationsProvider,
  namespace: string
) => {
  const validator = (options: DeleteOneOptions) => {
    if (!options) {
      throw new PineconeArgumentError(
        'You must pass a non-empty string for `options` in order to delete a record.'
      );
    }
  };
  return async (options: DeleteOneOptions): Promise<void> => {
    validator(options);
    const api = await apiProvider.provide();
    await api.deleteVectors({ deleteRequest: { ids: [options], namespace } });
    return;
  };
};
