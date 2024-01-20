// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import "./interfaces/BatchRegistryInterface.sol";

contract CheckIn {
    address public batchRegistryAddress;
 //   BatchRegistry public batchRegistry;

    // Constructor that receives the address of the BatchRegistry contract
    constructor(address payable _batchRegistryAddress) {
        batchRegistryAddress = _batchRegistryAddress;
        //batchRegistry = BatchRegistry(_batchRegistryAddress);
    }

    // Function to check in
    function checkMeIn() public {
        // Implement your check-in logic here
        // You can interact with batchRegistry for additional functionality
        // ...

        emit CheckedIn(msg.sender);
    }

    // Declare the CheckedIn event
    event CheckedIn(address indexed participant);
}