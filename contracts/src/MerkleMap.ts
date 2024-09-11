import {
    Field,
    PrivateKey,
    SelfProof,
    ZkProgram,
    Struct,
    Bool,
    Provable,
    Poseidon,
    MerkleMap,
    MerkleTree,
    MerkleWitness,
    MerkleMapWitness,
  } from 'o1js';



const merkleMap = new MerkleMap();

tree: MerkleTree;

const key = Field(5);
console.log(key)

const value = Field(10);
merkleMap.set(key, value);
console.log(merkleMap._keyToIndex(Field(5)))

const get = merkleMap.get(key);
console.log(get);

const root = merkleMap.getRoot();
console.log(root)

