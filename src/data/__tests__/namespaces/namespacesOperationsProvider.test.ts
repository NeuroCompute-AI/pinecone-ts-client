import { NamespaceOperationsProvider } from '../../namespaces/namespacesOperationsProvider';
import { IndexHostSingleton } from '../../indexHostSingleton';
import { Configuration } from '../../../pinecone-generated-ts-fetch/db_data';

jest.mock('../../../pinecone-generated-ts-fetch/db_data', () => ({
  ...jest.requireActual('../../../pinecone-generated-ts-fetch/db_data'),
  Configuration: jest.fn(),
}));

describe('NamespacesOperationsProvider', () => {
  let real;
  const config = {
    apiKey: 'test-api-key',
  };

  beforeAll(() => {
    real = IndexHostSingleton.getHostUrl;
  });
  afterAll(() => {
    IndexHostSingleton.getHostUrl = real;
  });
  beforeEach(() => {
    IndexHostSingleton.getHostUrl = jest.fn();
  });
  afterEach(() => {
    IndexHostSingleton._reset();
  });

  test('makes no API calls on instantiation', async () => {
    const config = {
      apiKey: 'test-api-key',
    };
    new NamespaceOperationsProvider(config, 'index-name');
    expect(IndexHostSingleton.getHostUrl).not.toHaveBeenCalled();
  });

  test('api calls occur only the first time the provide method is called', async () => {
    const config = {
      apiKey: 'test-api-key',
    };
    const provider = new NamespaceOperationsProvider(config, 'index-name');
    expect(IndexHostSingleton.getHostUrl).not.toHaveBeenCalled();

    const api = await provider.provide();
    expect(IndexHostSingleton.getHostUrl).toHaveBeenCalled();

    const api2 = await provider.provide();
    expect(IndexHostSingleton.getHostUrl).toHaveBeenCalledTimes(1);
    expect(api).toEqual(api2);
  });

  test('passing indexHostUrl skips hostUrl resolution', async () => {
    const indexHostUrl = 'http://index-host-url';
    const provider = new NamespaceOperationsProvider(
      config,
      'index-name',
      indexHostUrl
    );

    jest.spyOn(provider, 'buildNamespaceOperationsConfig');

    await provider.provide();

    expect(IndexHostSingleton.getHostUrl).not.toHaveBeenCalled();
    expect(provider.buildNamespaceOperationsConfig).toHaveBeenCalled();
  });

  test('passing additionalHeaders applies them to the API Configuration', async () => {
    const additionalHeaders = { 'x-custom-header': 'custom-value' };
    const provider = new NamespaceOperationsProvider(
      config,
      'index-name',
      undefined,
      additionalHeaders
    );

    await provider.provide();
    expect(Configuration).toHaveBeenCalledWith(
      expect.objectContaining({
        headers: expect.objectContaining(additionalHeaders),
      })
    );
  });
});
