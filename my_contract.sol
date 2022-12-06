// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;
// import "hardhat/console.sol";
// import "./usingOraclize.sol";
// import "@chainlink/contracts/src/v0.6/VRFConsumerBase.sol";

contract Lottery {
    enum RPSGameState {INITIATED, RESPONDED, WIN, DRAW}
    enum PlayerState {PENDING, PLAYED, CHOICE_STORED}

    string[3] choiceMap = ['x2', 'x3', 'x5'];
    uint public initialPrice;
    uint public finalPrice;

    string  higher="higher";
    string  lower="lower";
     string  win;
     address _add ;

    uint256 lastRun = (10 minutes) + block.timestamp;
    uint256 waitTime = (2 minutes) + block.timestamp;
    bool public  gameOn = true;

    address[] public winners;
    // mappings
    

    mapping(address => uint256) public balances; 
    mapping(address => uint256) public depositTimestamps;
    // mapping(address => uint256) public players;
    // variables
    struct WinnersAll{
        address payable _address;
        uint256 _amount;
    }
 WinnersAll[] public _allwinners;



    address public owner;

    struct GameData {
        uint betOn;
        address payable initiator; // Address of the initiator
        uint amount;
         // Raw number of initiator's choice - 1 for Rock, 2 for Paper, 3 for Scissors
        string initiator_random_str; // Random string chosen by the initiator
        
    }
    
    GameData[] _gameDataArray;


 
    

    constructor() {
        owner = msg.sender;
        
    }

// js code to call the timer
// function sendTx() {
//    myContract.methods.myFunction().send();
// };

// setInterval('sendTx', 5 * 1000 * 60);
function hashes(string memory _str) public pure returns(bytes32){
return keccak256(abi.encodePacked(_str));

}

function gettime()public view returns(uint256,uint256){

    return (block.timestamp , lastRun);
} 


function getPlayerNumber()public view returns(uint256){

    return uint256(_gameDataArray.length);
}




   function myTimer() external  returns(string memory) {
        // require(uint(block.timestamp) < uint(block.timestamp + lastRun), "Game Started");
          if(block.timestamp < (lastRun)){
             gameOn = true;
           random();
            return ("game started");
          }else{
            final_random();

          lastRun = (lastRun + 10 minutes);
             gameOn = false;

         
          return ("game ended not restated");
          }
        // TODO perform the action
        //  require(block.timestamp > (block.timestamp + lastRun), "Game Ended");

    }
       
    function random() public  returns (uint amount) {
    uint maxNumber = 9999;
    uint minNumber = 1000;

    
    amount = uint(keccak256(abi.encodePacked(block.timestamp, msg.sender, block.number))) % (maxNumber-minNumber);
    amount = amount + minNumber;
    initialPrice = amount;
    return amount;

} 

function final_random() public  returns (uint amount) {
    uint maxNumber = 9999;
    uint minNumber = 1000;
    

    amount = uint(keccak256(abi.encodePacked(block.timestamp, msg.sender, block.number))) % (maxNumber-minNumber);
    amount = amount + minNumber;
    finalPrice = amount;
    return amount;

} 
   

    function stake(address payable adr, string memory _choiceSelection)payable public returns (bool, string memory , uint) {
        // require(_gameData.initiator_state == PlayerState.PLAYED, "No game initiated! Initiate game.");
        require(msg.value  > uint(0),"you have make a bet first");
        require(msg.sender != address(0), "Caller address cannot be zero address");
        _gameDataArray.push(GameData(initialPrice , adr,msg.value, _choiceSelection));
        return (true , "you have successfully place your bet on " , initialPrice);
    }
   
  function winnersNumber()  public returns(string memory){
     for(uint256 i = 0 ; i < _gameDataArray.length ; i++){
            if((hashes(_gameDataArray[i].initiator_random_str) == hashes(higher)) && (initialPrice < finalPrice)){
               _allwinners.push(WinnersAll(_gameDataArray[i].initiator , _gameDataArray[i].amount));
            
                return (" you have won");
            
            }else if ((hashes(_gameDataArray[i].initiator_random_str) == hashes(lower)) && (initialPrice > finalPrice)){

               _allwinners.push(WinnersAll(_gameDataArray[i].initiator , _gameDataArray[i].amount));

     _allwinners.push(WinnersAll(_gameDataArray[i].initiator , _gameDataArray[i].amount));

                return (" you have won");

            }else{
     _allwinners.push(WinnersAll(_gameDataArray[i].initiator , _gameDataArray[i].amount));

         
            }
   

     }


  }






function paywinner(address payable _addr) public returns(string memory, address _add){
    
   for(uint256 i = 0 ; i <= _allwinners.length ; i++){
         if(_allwinners[i]._address == _addr){

             win = "you won ";
             _add = _addr;
            payable(_add).transfer(uint(_allwinners[i]._amount + (_allwinners[i]._amount / uint(2))));
         }else{
             win = "you lost ";
             _add =  _addr;
         }
     
      return (win , _add);

   }



}

function userBalance() public returns(uint256){

    return payable(address(msg.sender)).balance;
}


  

    function getBalance() public view returns (uint256){
        require(msg.sender == owner, "ONLY_OWNER");
        return address(this).balance;
    }


}