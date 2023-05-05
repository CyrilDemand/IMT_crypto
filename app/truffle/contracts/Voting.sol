pragma solidity ^0.8.18;
import "@openzeppelin/contracts/access/Ownable.sol";

contract Voting is Ownable {
    enum WorkflowStatus {
        RegisteringVoters,
        ProposalsRegistrationStarted,
        ProposalsRegistrationEnded,
        VotingSessionStarted,
        VotingSessionEnded,
        VotesTallied
    }
    struct Voter {
        bool isRegistered;
        bool hasVoted;
        uint votedProposalId;
    }
    struct Proposal {
        string description;
        uint voteCount;
    }
    WorkflowStatus public status;
    uint winningProposalId;
    mapping(address => Voter) public voters;
    Proposal[] public proposals;
    uint public networkId;

    modifier onlyRegisteredVoter() {
        require(voters[msg.sender].isRegistered, "You are not Registered");
        _;
    }
    modifier onlyDuringStatus(WorkflowStatus _status){
        require(status == _status,  "Invalid workflow status.");
        _;
    }

    constructor(uint _networkId){
        networkId = _networkId;
    }

    function startRegisteringVoters() public onlyOwner {
        require(status == WorkflowStatus.VotesTallied, "Voting session has not ended yet.");
        status = WorkflowStatus.RegisteringVoters;
        emit WorkflowStatusChange(WorkflowStatus.VotesTallied, status);
    }

    function registerVoter(address _voter) public onlyOwner onlyDuringStatus(WorkflowStatus.RegisteringVoters) {
        require(!voters[_voter].isRegistered, "Voter is already registered.");
        voters[_voter].isRegistered = true;
        emit VoterRegistered(_voter);
    }

    function endRegisteringVoters() public onlyOwner onlyDuringStatus(WorkflowStatus.RegisteringVoters) {
        status = WorkflowStatus.ProposalsRegistrationStarted;
        emit WorkflowStatusChange(WorkflowStatus.RegisteringVoters, status);
    }
    function registerProposal(string memory _description) public onlyRegisteredVoter onlyDuringStatus(WorkflowStatus.ProposalsRegistrationStarted) {
        proposals.push(Proposal({description: _description, voteCount: 0}));
        emit ProposalRegistered(proposals.length - 1);
    }

    function endProposalsRegistration() public onlyOwner onlyDuringStatus(WorkflowStatus.ProposalsRegistrationEnded) {
        require(proposals.length > 0, "No proposal was registered.");
        status = WorkflowStatus.VotingSessionStarted;
        emit WorkflowStatusChange(WorkflowStatus.ProposalsRegistrationEnded, status);
    }

    function startVotingSession() public onlyOwner onlyDuringStatus(WorkflowStatus.VotingSessionStarted) {
        require(proposals.length > 0, "No proposal was registered.");
        status = WorkflowStatus.VotingSessionEnded;
        emit WorkflowStatusChange(WorkflowStatus.VotingSessionStarted, status);
    }

    function vote(uint _proposalId) public onlyRegisteredVoter onlyDuringStatus(WorkflowStatus.VotingSessionStarted) {
        require(!voters[msg.sender].hasVoted, "You have already voted.");
        require(_proposalId < proposals.length, "Invalid proposal ID.");
        voters[msg.sender].hasVoted = true;
        voters[msg.sender].votedProposalId = _proposalId;
        proposals[_proposalId].voteCount++;
        emit Voted(msg.sender, _proposalId);
    }

    function endVotingSession() public onlyOwner onlyDuringStatus(WorkflowStatus.VotingSessionStarted) {
        status = WorkflowStatus.VotingSessionEnded;
        emit WorkflowStatusChange(WorkflowStatus.VotingSessionStarted, status);
    }

    function tallyVotes() public onlyOwner onlyDuringStatus(WorkflowStatus.VotingSessionEnded) {
        uint winningVoteCount = 0;
        for (uint i = 0; i < proposals.length; i++) {
            if (proposals[i].voteCount > winningVoteCount) {
                winningVoteCount = proposals[i].voteCount;
                winningProposalId = i;
            }
        }
        status = WorkflowStatus.VotesTallied;
        emit WorkflowStatusChange(WorkflowStatus.VotingSessionEnded, status);
    }

    function getWinner() public view onlyDuringStatus(WorkflowStatus.VotesTallied) returns (uint) {
        require(proposals.length > 0, "No proposal was registered.");
        return winningProposalId;
    }
    event VoterRegistered(address voterAddress);
    event WorkflowStatusChange(WorkflowStatus previousStatus, WorkflowStatus newStatus);
    event ProposalRegistered(uint proposalId);
    event Voted (address voter, uint proposalId);
}