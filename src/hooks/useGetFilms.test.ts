import axios from 'axios';
import { swapiApiMock } from '../utils/mocks/swapiMock';
import { useGetFilms } from './useGetFilms';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('useGetFilms', () => {
  test('return expected values', async () => {
    mockedAxios.get.mockResolvedValue({
      data: swapiApiMock
    });

    const result = await useGetFilms();
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(result).toBe(swapiApiMock);
  });

  test('throw error', async () => {
    const errorMessage = 'Fetch failed';
    mockedAxios.get.mockRejectedValue(new Error(errorMessage));

    await expect(useGetFilms()).rejects.toThrow(errorMessage);
  });
});
