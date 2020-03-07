
import { db } from './index';

test('FindAll user entries', async () => {
    const result = await db.Users.findAll();
    expect(result instanceof Array).toBe(true);
});