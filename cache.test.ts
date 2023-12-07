import {describe, it, jest, expect} from 'jest';

import {
    getOrCreateCacheForArtifact,
    setNetwork,
    makeNetworkRequest,
    subscribe,
    onNextChange,
} from './cache';

import {
    Factory,
    ItemCleanupPair,
    ParentCache,
} from "@isograph/react-disposable-state";

// todo: still needs debug. stable copy is not an exported function. redefine, or mock in this file
describe('stableCopy', () => {
    it('creates a stable copy of an object with sorted keys', () => {
        const inputObject = { b: 2, a: 1, c: 3 };
        const result = stableCopy(inputObject);
        expect(Object.keys(result)).toEqual(['a', 'b', 'c']);
    });

    it('handles nested objects', () => {
        const inputObject = { b: { c: 3, a: 1 }, a: 2 };
        const result = stableCopy(inputObject);
        expect(Object.keys(result.b)).toEqual(['a', 'c']);
    });
});
// todo: still needs debug. stable copy is not an exported function. redefine, or mock in this file
describe('getOrCreateCacheForArtifact', () => {
    it('creates a new cache for a given artifact and variables', () => {
        const mockArtifact = { queryText: 'query', normalizationAst: [], nestedRefetchQueries: [] };
        const mockVariables = { id: '123' };
        const result = getOrCreateCacheForArtifact(mockArtifact, mockVariables);
        const cache: { [index: string]: ParentCache<any> } = {};
        expect(result).toBeInstanceOf(ParentCache);
        expect(cache[`${mockArtifact.queryText}${JSON.stringify(stableCopy(mockVariables))}`]).toBe(result);
    })
});

describe('setNetwork', () => {
    let network: ((queryText: string, variables: object) => Promise<any>) | null;
    it('sets the network function', () => {
        const mockNetwork = jest.fn();
        setNetwork(mockNetwork);
        expect(network).toBe(mockNetwork);
    });
});

describe('makeNetworkRequest', () => {
    it('throws an error if network is not set', () => {
        expect(() => makeNetworkRequest(null, {})).toThrow('Network must be set before makeNetworkRequest is called');
    });

});

describe('subscribe', () => {
    it('adds a callback to subscriptions', () => {
        const mockCallback = jest.fn();
        const subscriptions: Set<() => void> = new Set();
        subscribe(mockCallback);
        expect(subscriptions.has(mockCallback)).toBe(true);
    });

    it('removes a callback from subscriptions when unsubscribed', () => {
        const mockCallback = jest.fn();
        const unsubscribe = subscribe(mockCallback);
        const subscriptions: Set<() => void> = new Set();
        unsubscribe();
        expect(subscriptions.has(mockCallback)).toBe(false);
    });
});

// todo: still needs debug. callSubscription is not an exported function. redefine, or mock in this file
describe('onNextChange', () => {
    it('resolves when a change occurs', async () => {
        const mockCallback = jest.fn();
        const unsubscribe = subscribe(mockCallback);
        const promise = onNextChange();

        expect(mockCallback).not.toHaveBeenCalled();
        unsubscribe();
        // Simulate a change
        callSubscriptions();
        await promise;
        expect(mockCallback).toHaveBeenCalled();
    });
});

// List of more desired tests

// describe('normalizeDataIntoRecord', () => {
//     // Add tests for normalizeDataIntoRecord function
// });

// describe('normalizeScalarField', () => {
//     // Add tests for normalizeScalarField function
// });

// describe('normalizeLinkedField', () => {
//     // Add tests for normalizeLinkedField function
// });

// describe('normalizeNetworkResponseObject', () => {
//     // Add tests for normalizeNetworkResponseObject function
// });

// describe('isScalarOrEmptyArray', () => {
//     // Add tests for isScalarOrEmptyArray function
// });

// describe('isScalarButNotEmptyArray', () => {
//     // Add tests for isScalarButNotEmptyArray function
// });

// describe('getDataIdOfNetworkResponse', () => {
//     // Add tests for getDataIdOfNetworkResponse function
// });
