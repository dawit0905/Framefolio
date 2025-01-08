import { connectToDatabase } from '../../src/db/mongo';
import { describe, it, expect } from 'vitest';


describe('connectToDatabase', () => {
    it('connects to the database successfully', async () => {
        const db = await connectToDatabase();
        expect(db).toBeDefined(); // 데이터베이스 연결 확인
    });
});
