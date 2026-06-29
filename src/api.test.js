const mockSql = jest.fn();

jest.mock('@neondatabase/serverless', () => ({
  neon: () => mockSql,
}));

const handler = require('../api/scores');

const createReq = (method, body = {}) => ({ method, body });
const createRes = () => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};

describe('API /api/scores', () => {
  beforeEach(() => {
    mockSql.mockReset();
  });

  describe('GET', () => {
    it('returns scores', async () => {
      const mockScores = [
        { id: 1, username: 'alice', wpm: 90, accuracy: 98, created_at: '2024-01-01' },
        { id: 2, username: 'bob', wpm: 75, accuracy: 95, created_at: '2024-01-02' },
      ];
      mockSql.mockResolvedValue(mockScores);

      const res = createRes();
      await handler(createReq('GET'), res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(mockScores);
    });
  });

  describe('POST', () => {
    it('creates a score and returns the id', async () => {
      mockSql.mockResolvedValue([{ id: 5 }]);

      const res = createRes();
      await handler(createReq('POST', { username: 'alice', wpm: 85, accuracy: 96 }), res);

      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith({ id: 5 });
    });

    it('returns 400 when username is missing', async () => {
      const res = createRes();
      await handler(createReq('POST', { wpm: 85, accuracy: 96 }), res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ error: 'Missing required fields' });
    });

    it('returns 400 when wpm is missing', async () => {
      const res = createRes();
      await handler(createReq('POST', { username: 'alice', accuracy: 96 }), res);

      expect(res.status).toHaveBeenCalledWith(400);
    });
  });

  describe('unsupported methods', () => {
    it('returns 405 for PUT', async () => {
      const res = createRes();
      await handler(createReq('PUT'), res);

      expect(res.status).toHaveBeenCalledWith(405);
      expect(res.json).toHaveBeenCalledWith({ error: 'Method not allowed' });
    });
  });
});
