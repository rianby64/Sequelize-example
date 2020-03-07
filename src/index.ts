
import { db } from './models/index';

void async function() {
    const result = await db.Users.findAll();
    console.log(result, 'here we go!');
}();