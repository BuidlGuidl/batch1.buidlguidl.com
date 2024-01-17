//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

interface BatchRegistry {
    function checkIn() external;
}

contract Register {

    BatchRegistry public batch; 

    constructor(address payable _batchAddress) {
        batch = BatchRegistry(_batchAddress);
    }

    function add2List() public {

        batch.checkIn();
    }

    receive() external payable {

    }
}