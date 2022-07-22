import { assert, beforeEach, describe, test } from 'vitest';
import { BinaryTreeImpl } from './BinaryTree';
import { NodeImpl } from './NodeImpl';
import { Node } from './Node';
import { branchSum, branchSumDfs } from './branch-sum';

describe('branch sum', () => {
    let bt = new BinaryTreeImpl<number>(new NodeImpl(1));
    const arr = [15, 16, 18, 10, 11];
    beforeEach(() => {
        let root = bt.getRoot() as Node<number>;
        let right = root.pushRightLeaf(3);
        right.pushRightLeaf(7);
        right.pushLeftLeaf(6);
        let left = root.pushLeftLeaf(2);
        left.pushRightLeaf(5).pushLeftLeaf(10);
        let generateNode = left.pushLeftLeaf(8);
        generateNode.pushRightLeaf(9);
        generateNode.pushLeftLeaf(8);
    });

    //test('first test case', () => {
    //let result = branchSum(bt);
    //assert.deepEqual(result, arr);
    //});

    test('second test case', () => {
        let result = branchSumDfs(bt);
        console.log('result is', result, arr);
        //[ 15, 16, 18, 10, 11 ]
        assert.deepEqual(result, arr);
    });
});
