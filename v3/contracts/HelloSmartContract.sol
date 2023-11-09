// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.20;

contract HelloSmartContract {
    string private word;

    constructor() {}

    function setWord(string memory _word) public {
        word = _word;
    }

    function retrieveWord() public view returns (string memory) {
        return word;
    }
}
