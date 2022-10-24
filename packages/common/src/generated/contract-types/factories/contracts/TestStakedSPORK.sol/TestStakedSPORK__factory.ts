/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import type { Provider, TransactionRequest } from '@ethersproject/providers';
import type { PromiseOrValue } from '../../../common';
import type { TestStakedSPORK, TestStakedSPORKInterface } from '../../../contracts/TestStakedSPORK.sol/TestStakedSPORK';

const _abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: 'minter',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [],
    name: 'TRANSFER_NOT_ALLOWER',
    type: 'error',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'Approval',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'previousAdminRole',
        type: 'bytes32',
      },
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'newAdminRole',
        type: 'bytes32',
      },
    ],
    name: 'RoleAdminChanged',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
    ],
    name: 'RoleGranted',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
    ],
    name: 'RoleRevoked',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'Transfer',
    type: 'event',
  },
  {
    inputs: [],
    name: 'DEFAULT_ADMIN_ROLE',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'MINTER_ROLE',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
    ],
    name: 'allowance',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'approve',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'balanceOf',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'burn',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'burnFrom',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'decimals',
    outputs: [
      {
        internalType: 'uint8',
        name: '',
        type: 'uint8',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'subtractedValue',
        type: 'uint256',
      },
    ],
    name: 'decreaseAllowance',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
    ],
    name: 'getRoleAdmin',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'grantRole',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'hasRole',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'addedValue',
        type: 'uint256',
      },
    ],
    name: 'increaseAllowance',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'mint',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'name',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'renounceRole',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'revokeRole',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes4',
        name: 'interfaceId',
        type: 'bytes4',
      },
    ],
    name: 'supportsInterface',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'symbol',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'totalSupply',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'recipient',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'transfer',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'recipient',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'transferFrom',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

const _bytecode =
  '0x60806040523480156200001157600080fd5b506040516200155638038062001556833981016040819052620000349162000230565b604080518082018252600f81526e546573745374616b656453504f524b60881b602080830191825283518085019094526007845266747353504f524b60c81b9084015281519192916200008a916003916200018a565b508051620000a09060049060208401906200018a565b50620000b291506000905082620000e5565b620000de7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a633620000e5565b506200029f565b60008281526005602090815260408083206001600160a01b038516845290915290205460ff16620001865760008281526005602090815260408083206001600160a01b03851684529091529020805460ff19166001179055620001453390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45b5050565b828054620001989062000262565b90600052602060002090601f016020900481019282620001bc576000855562000207565b82601f10620001d757805160ff191683800117855562000207565b8280016001018555821562000207579182015b8281111562000207578251825591602001919060010190620001ea565b506200021592915062000219565b5090565b5b808211156200021557600081556001016200021a565b6000602082840312156200024357600080fd5b81516001600160a01b03811681146200025b57600080fd5b9392505050565b600181811c908216806200027757607f821691505b602082108114156200029957634e487b7160e01b600052602260045260246000fd5b50919050565b6112a780620002af6000396000f3fe608060405234801561001057600080fd5b50600436106101425760003560e01c806342966c68116100b8578063a217fddf1161007c578063a217fddf146102a6578063a457c2d7146102ae578063a9059cbb146102c1578063d5391393146102d4578063d547741f146102fb578063dd62ed3e1461030e57600080fd5b806342966c681461023c57806370a082311461024f57806379cc67901461027857806391d148541461028b57806395d89b411461029e57600080fd5b8063248a9ca31161010a578063248a9ca3146101bc5780632f2ff15d146101df578063313ce567146101f457806336568abe14610203578063395093511461021657806340c10f191461022957600080fd5b806301ffc9a71461014757806306fdde031461016f578063095ea7b31461018457806318160ddd1461019757806323b872dd146101a9575b600080fd5b61015a610155366004610f85565b610321565b60405190151581526020015b60405180910390f35b610177610358565b6040516101669190610fdb565b61015a61019236600461102a565b6103ea565b6002545b604051908152602001610166565b61015a6101b7366004611054565b610402565b61019b6101ca366004611090565b60009081526005602052604090206001015490565b6101f26101ed3660046110a9565b610485565b005b60405160128152602001610166565b6101f26102113660046110a9565b6104af565b61015a61022436600461102a565b610532565b6101f261023736600461102a565b61054f565b6101f261024a366004611090565b610583565b61019b61025d3660046110d5565b6001600160a01b031660009081526020819052604090205490565b6101f261028636600461102a565b610590565b61015a6102993660046110a9565b6105a5565b6101776105d0565b61019b600081565b61015a6102bc36600461102a565b6105df565b61015a6102cf36600461102a565b610665565b61019b7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a681565b6101f26103093660046110a9565b6106a9565b61019b61031c3660046110f0565b6106ce565b60006001600160e01b03198216637965db0b60e01b148061035257506301ffc9a760e01b6001600160e01b03198316145b92915050565b6060600380546103679061111a565b80601f01602080910402602001604051908101604052809291908181526020018280546103939061111a565b80156103e05780601f106103b5576101008083540402835291602001916103e0565b820191906000526020600020905b8154815290600101906020018083116103c357829003601f168201915b5050505050905090565b6000336103f88185856106f9565b5060019392505050565b600061042e7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6336105a5565b156104655761043e84848461081d565b61045d84338461044e88336106ce565b610458919061116b565b6106f9565b50600161047e565b6040516374f2e9bb60e11b815260040160405180910390fd5b9392505050565b6000828152600560205260409020600101546104a0816109ed565b6104aa83836109f7565b505050565b6001600160a01b03811633146105245760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b60648201526084015b60405180910390fd5b61052e8282610a7d565b5050565b6000336103f881858561054583836106ce565b6104589190611182565b7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6610579816109ed565b6104aa8383610ae4565b61058d3382610bc3565b50565b61059b823383610d11565b61052e8282610bc3565b60009182526005602090815260408084206001600160a01b0393909316845291905290205460ff1690565b6060600480546103679061111a565b600033816105ed82866106ce565b90508381101561064d5760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b606482015260840161051b565b61065a82868684036106f9565b506001949350505050565b60006106917f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6336105a5565b15610465576106a133848461081d565b506001610352565b6000828152600560205260409020600101546106c4816109ed565b6104aa8383610a7d565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6001600160a01b03831661075b5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b606482015260840161051b565b6001600160a01b0382166107bc5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b606482015260840161051b565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b0383166108815760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b606482015260840161051b565b6001600160a01b0382166108e35760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b606482015260840161051b565b6001600160a01b0383166000908152602081905260409020548181101561095b5760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b606482015260840161051b565b6001600160a01b03808516600090815260208190526040808220858503905591851681529081208054849290610992908490611182565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516109de91815260200190565b60405180910390a35b50505050565b61058d8133610d85565b610a0182826105a5565b61052e5760008281526005602090815260408083206001600160a01b03851684529091529020805460ff19166001179055610a393390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b610a8782826105a5565b1561052e5760008281526005602090815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b6001600160a01b038216610b3a5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640161051b565b8060026000828254610b4c9190611182565b90915550506001600160a01b03821660009081526020819052604081208054839290610b79908490611182565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b6001600160a01b038216610c235760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b606482015260840161051b565b6001600160a01b03821660009081526020819052604090205481811015610c975760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b606482015260840161051b565b6001600160a01b0383166000908152602081905260408120838303905560028054849290610cc690849061116b565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a3505050565b6000610d1d84846106ce565b905060001981146109e75781811015610d785760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000604482015260640161051b565b6109e784848484036106f9565b610d8f82826105a5565b61052e57610da7816001600160a01b03166014610de9565b610db2836020610de9565b604051602001610dc392919061119a565b60408051601f198184030181529082905262461bcd60e51b825261051b91600401610fdb565b60606000610df883600261120f565b610e03906002611182565b67ffffffffffffffff811115610e1b57610e1b61122e565b6040519080825280601f01601f191660200182016040528015610e45576020820181803683370190505b509050600360fc1b81600081518110610e6057610e60611244565b60200101906001600160f81b031916908160001a905350600f60fb1b81600181518110610e8f57610e8f611244565b60200101906001600160f81b031916908160001a9053506000610eb384600261120f565b610ebe906001611182565b90505b6001811115610f36576f181899199a1a9b1b9c1cb0b131b232b360811b85600f1660108110610ef257610ef2611244565b1a60f81b828281518110610f0857610f08611244565b60200101906001600160f81b031916908160001a90535060049490941c93610f2f8161125a565b9050610ec1565b50831561047e5760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e74604482015260640161051b565b600060208284031215610f9757600080fd5b81356001600160e01b03198116811461047e57600080fd5b60005b83811015610fca578181015183820152602001610fb2565b838111156109e75750506000910152565b6020815260008251806020840152610ffa816040850160208701610faf565b601f01601f19169190910160400192915050565b80356001600160a01b038116811461102557600080fd5b919050565b6000806040838503121561103d57600080fd5b6110468361100e565b946020939093013593505050565b60008060006060848603121561106957600080fd5b6110728461100e565b92506110806020850161100e565b9150604084013590509250925092565b6000602082840312156110a257600080fd5b5035919050565b600080604083850312156110bc57600080fd5b823591506110cc6020840161100e565b90509250929050565b6000602082840312156110e757600080fd5b61047e8261100e565b6000806040838503121561110357600080fd5b61110c8361100e565b91506110cc6020840161100e565b600181811c9082168061112e57607f821691505b6020821081141561114f57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b60008282101561117d5761117d611155565b500390565b6000821982111561119557611195611155565b500190565b7f416363657373436f6e74726f6c3a206163636f756e74200000000000000000008152600083516111d2816017850160208801610faf565b7001034b99036b4b9b9b4b733903937b6329607d1b6017918401918201528351611203816028840160208801610faf565b01602801949350505050565b600081600019048311821515161561122957611229611155565b500290565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b60008161126957611269611155565b50600019019056fea2646970667358221220bc3f28ca68351182bad93262a4f98153069e75b87a0f5b9c64ce65d1abe4abe064736f6c634300080a0033';

type TestStakedSPORKConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (xs: TestStakedSPORKConstructorParams): xs is ConstructorParameters<typeof ContractFactory> =>
  xs.length > 1;

export class TestStakedSPORK__factory extends ContractFactory {
  constructor(...args: TestStakedSPORKConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = 'TestStakedSPORK';
  }

  override deploy(
    minter: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TestStakedSPORK> {
    return super.deploy(minter, overrides || {}) as Promise<TestStakedSPORK>;
  }
  override getDeployTransaction(
    minter: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(minter, overrides || {});
  }
  override attach(address: string): TestStakedSPORK {
    return super.attach(address) as TestStakedSPORK;
  }
  override connect(signer: Signer): TestStakedSPORK__factory {
    return super.connect(signer) as TestStakedSPORK__factory;
  }
  static readonly contractName: 'TestStakedSPORK';

  public readonly contractName: 'TestStakedSPORK';

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestStakedSPORKInterface {
    return new utils.Interface(_abi) as TestStakedSPORKInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): TestStakedSPORK {
    return new Contract(address, _abi, signerOrProvider) as TestStakedSPORK;
  }
}
