// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

//import "@openzeppelin/contracts/access/Ownable.sol";


contract Escrow {
    address public beneficiary;
    address public arbiter;
    uint public amount;
    bool public servicesDone;

    modifier onlyArbiter() {
        require(msg.sender == arbiter, "NotAuthorized");
        _;
    }

    event Deposit(address indexed depositor, uint amount);
    event Approved(uint amount);
    event ServicesToggled(bool status);

    constructor(address _arbiter) payable {
        arbiter = _arbiter;
        beneficiary = msg.sender;
        amount = msg.value;

        emit Deposit(msg.sender, amount);
    }

    function toggleServices() external onlyArbiter {
        servicesDone = !servicesDone;
        emit ServicesToggled(servicesDone);
    }

    function transferToBeneficiary() external onlyArbiter {
        require(servicesDone, "ServicesNotDone");

        (bool success, ) = beneficiary.call{ value: amount }("");
        require(success, "Transfer to beneficiary failed");

        emit Approved(amount);
    }

   // function getBeneficiary() external view returns (address) {
   //     return beneficiary;
    //}
}