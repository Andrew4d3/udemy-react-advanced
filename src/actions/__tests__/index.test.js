import { saveComment } from 'actions';
import { SAVE_COMMENT } from 'actions/types';

// Now let's test our action creators
describe('saveComment', () => {
    // Here we test if we get correct action type
    it('has the correct type', () => {
        const action = saveComment();

        expect(action.type).toEqual(SAVE_COMMENT);
    });

    it('has the correct payload', () => {
        // And here if we get the correct payload
        const action = saveComment('New Comment');

        expect(action.payload).toEqual('New Comment');
    });
});