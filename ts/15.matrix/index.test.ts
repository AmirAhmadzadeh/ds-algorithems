import { describe, it, assert } from 'vitest';
import {
    bfsTraverse,
    dfsTraverse,
    countIslands,
    timeTakeToRotten,
    scapeToGate,
} from './index';

describe('2 dimensional arrays', () => {
    it('traverse 2 dimensional arrays ( dfs )', () => {
        const testCase = Array.from({ length: 4 }, (_, i) => {
            return Array.from({ length: 5 }, (_, j) => i + j + 1 + 4 * i);
        });
        const sortedResult = dfsTraverse(testCase).sort((a, b) =>
            a > b ? 1 : -1
        );
        assert.equal(sortedResult.length, 20);
        assert.deepEqual(sortedResult, testCase.flat());
    });

    it('traverse 2 dimensional arrays ( bfs )', () => {
        const testCase = Array.from({ length: 4 }, (_, i) => {
            return Array.from({ length: 5 }, (_, j) => i + j + 1 + 4 * i);
        });

        const result = bfsTraverse<number>(testCase).sort((a, b) =>
            a > b ? 1 : -1
        );
        assert.equal(result.length, 20);
        assert.deepEqual(result, testCase.flat());
    });

    it('island problem', () => {
        assert.equal(
            countIslands([
                [1, 1, 1, 1, 0],
                [1, 1, 0, 1, 0],
                [1, 1, 0, 0, 1],
                [0, 0, 0, 1, 1],
            ]),
            2
        );

        assert.equal(
            countIslands([
                [0, 1, 0, 1, 0],
                [1, 0, 1, 0, 1],
                [0, 1, 1, 1, 0],
                [1, 0, 1, 0, 1],
            ]),
            7
        );

        assert.equal(
            countIslands([
                [1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1],
            ]),
            1
        );

        assert.equal(countIslands([]), 0);
        assert.equal(countIslands([[1]]), 1);
        assert.equal(countIslands([[0]]), 0);
    });

    it('rotten orange problem', () => {
        assert.equal(
            timeTakeToRotten([
                [1, 1, 0, 0, 0],
                [2, 1, 0, 0, 0],
                [0, 0, 0, 1, 2],
                [0, 1, 0, 0, 1],
            ]),
            -1
        );

        assert.equal(
            timeTakeToRotten([
                [0, 2, 1, 2, 2],
                [1, 1, 0, 2, 1],
                [1, 1, 1, 2, 2],
                [0, 2, 0, 2, 0],
            ]),
            2
        );

        assert.equal(
            timeTakeToRotten([
                [2, 1, 1, 0, 0],
                [1, 1, 1, 0, 0],
                [0, 1, 1, 1, 1],
                [0, 1, 0, 0, 1],
            ]),
            7
        );

        assert.equal(timeTakeToRotten([[]]), 0);
    });

    it('steps to scape from the gate problem', () => {
        assert.deepEqual(
            scapeToGate([
                [Infinity, -1, 0, Infinity],
                [Infinity, Infinity, Infinity, -1],
                [Infinity, -1, Infinity, -1],
                [0, -1, Infinity, Infinity],
            ]),
            [
                [3, -1, 0, 1],
                [2, 2, 1, -1],
                [1, -1, 2, -1],
                [0, -1, 3, 4],
            ]
        );
    });
});