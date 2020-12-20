import { Axios } from '@/infra/http/axios/axios';
import { mockAxios, mockHttpResponse } from '@/infra/tests/mocks/axios';
import { mockHttpRequest } from '@/infra/tests/mocks/http-request';

import axios from 'axios';

jest.mock('axios');

type SutTypes = {
  sut: Axios;
  mockedAxios: jest.Mocked<typeof axios>;
};

const makeSut = (): SutTypes => {
  const sut = new Axios();
  const mockedAxios = mockAxios();

  return {
    sut,
    mockedAxios
  };
};

describe('Axios', () => {
  test('Should call axios with correct values', async () => {
    const httpRequest = mockHttpRequest();
    const { sut, mockedAxios } = makeSut();

    await sut.request(httpRequest);

    expect(mockedAxios.request).toHaveBeenCalledWith({
      url: httpRequest.url,
      data: httpRequest.body,
      headers: httpRequest.headers,
      method: httpRequest.method
    });
  });

  test('Should return correct response', async () => {
    const { sut, mockedAxios } = makeSut();

    const httpResponse = await sut.request(mockHttpRequest());
    const axiosResponse = await mockedAxios.request.mock.results[0].value;

    expect(httpResponse).toEqual({
      statusCode: axiosResponse.status,
      body: axiosResponse.data
    });
  });

  test('Should return correct error', () => {
    const { sut, mockedAxios } = makeSut();

    mockedAxios.request.mockResolvedValueOnce({
      response: mockHttpResponse()
    });

    const axiosPromise = sut.request(mockHttpRequest());

    expect(axiosPromise).toEqual(mockedAxios.request.mock.results[0].value);
  });
});
