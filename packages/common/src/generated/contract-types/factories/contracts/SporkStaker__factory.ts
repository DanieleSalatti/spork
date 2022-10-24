/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, BigNumberish, Overrides } from 'ethers';
import type { Provider, TransactionRequest } from '@ethersproject/providers';
import type { PromiseOrValue } from '../../common';
import type { SporkStaker, SporkStakerInterface } from '../../contracts/SporkStaker';

const _abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: '_sporkToken',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_stakedSporkToken',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_unstakeOnlyAfter',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [],
    name: 'CANNOT_UNSTAKE_YET',
    type: 'error',
  },
  {
    inputs: [],
    name: 'INVALID_AMOUNT',
    type: 'error',
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
        name: 'user',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'Staked',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'Unstaked',
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
    name: 'currentTimestamp',
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
        internalType: 'uint256',
        name: '_unstakeOnlyAfter',
        type: 'uint256',
      },
    ],
    name: 'setUnstakeOnlyAfter',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'sporkToken',
    outputs: [
      {
        internalType: 'contract IERC20',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
    ],
    name: 'stake',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'stakedSporkToken',
    outputs: [
      {
        internalType: 'contract IERC20MintableBurnable',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
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
    inputs: [
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
    ],
    name: 'unstake',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'unstakeOnlyAfter',
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
];

const _bytecode =
  '0x60c060405234801561001057600080fd5b50604051610d48380380610d4883398101604081905261002f91610110565b61003a600033610055565b6001600160a01b03928316608052911660a05260015561014c565b6000828152602081815260408083206001600160a01b038516845290915290205460ff166100f0576000828152602081815260408083206001600160a01b03851684529091529020805460ff191660011790556100af3390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45b5050565b80516001600160a01b038116811461010b57600080fd5b919050565b60008060006060848603121561012557600080fd5b61012e846100f4565b925061013c602085016100f4565b9150604084015190509250925092565b60805160a051610bbb61018d6000396000818161011c015281816102dc01526105c40152600081816101c90152818161035a01526105320152610bbb6000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c80634744a1781161008c578063a687d80311610066578063a687d80314610206578063a694fc3a14610219578063c4ed56901461022c578063d547741f1461023557600080fd5b80634744a178146101c457806391d14854146101eb578063a217fddf146101fe57600080fd5b8063248a9ca3116100c8578063248a9ca3146101665780632e17de78146101895780632f2ff15d1461019e57806336568abe146101b157600080fd5b806301ffc9a7146100ef57806312d4b0a5146101175780631e2ff94f14610156575b600080fd5b6101026100fd36600461097c565b610248565b60405190151581526020015b60405180910390f35b61013e7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b03909116815260200161010e565b425b60405190815260200161010e565b6101586101743660046109a6565b60009081526020819052604090206001015490565b61019c6101973660046109a6565b61027f565b005b61019c6101ac3660046109bf565b61040b565b61019c6101bf3660046109bf565b610435565b61013e7f000000000000000000000000000000000000000000000000000000000000000081565b6101026101f93660046109bf565b6104b8565b610158600081565b61019c6102143660046109a6565b6104e1565b61019c6102273660046109a6565b6104f2565b61015860015481565b61019c6102433660046109bf565b61065a565b60006001600160e01b03198216637965db0b60e01b148061027957506301ffc9a760e01b6001600160e01b03198316145b92915050565b8061029d5760405163fae8279160e01b815260040160405180910390fd5b6001544210156102c0576040516322ef9b0f60e01b815260040160405180910390fd5b60405163079cc67960e41b8152336004820152602481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906379cc679090604401600060405180830381600087803b15801561032857600080fd5b505af115801561033c573d6000803e3d6000fd5b505060405163a9059cbb60e01b8152336004820152602481018490527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316925063a9059cbb91506044016020604051808303816000875af11580156103ad573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103d191906109fb565b5060405181815233907f0f5bb82176feb1b5e747e28471aa92156a04d9f3ab9f45f28e2d704232b93f75906020015b60405180910390a250565b6000828152602081905260409020600101546104268161067f565b610430838361068c565b505050565b6001600160a01b03811633146104aa5760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b60648201526084015b60405180910390fd5b6104b48282610710565b5050565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b60006104ec8161067f565b50600155565b806105105760405163fae8279160e01b815260040160405180910390fd5b6040516323b872dd60e01b8152336004820152306024820152604481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303816000875af1158015610583573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105a791906109fb565b506040516340c10f1960e01b8152336004820152602481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906340c10f1990604401600060405180830381600087803b15801561061057600080fd5b505af1158015610624573d6000803e3d6000fd5b50506040518381523392507f9e71bc8eea02a63969f509818f2dafb9254532904319f9dbda79b67bd34a5f3d9150602001610400565b6000828152602081905260409020600101546106758161067f565b6104308383610710565b6106898133610775565b50565b61069682826104b8565b6104b4576000828152602081815260408083206001600160a01b03851684529091529020805460ff191660011790556106cc3390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b61071a82826104b8565b156104b4576000828152602081815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b61077f82826104b8565b6104b457610797816001600160a01b031660146107d9565b6107a28360206107d9565b6040516020016107b3929190610a4d565b60408051601f198184030181529082905262461bcd60e51b82526104a191600401610ac2565b606060006107e8836002610b0b565b6107f3906002610b2a565b67ffffffffffffffff81111561080b5761080b610b42565b6040519080825280601f01601f191660200182016040528015610835576020820181803683370190505b509050600360fc1b8160008151811061085057610850610b58565b60200101906001600160f81b031916908160001a905350600f60fb1b8160018151811061087f5761087f610b58565b60200101906001600160f81b031916908160001a90535060006108a3846002610b0b565b6108ae906001610b2a565b90505b6001811115610926576f181899199a1a9b1b9c1cb0b131b232b360811b85600f16601081106108e2576108e2610b58565b1a60f81b8282815181106108f8576108f8610b58565b60200101906001600160f81b031916908160001a90535060049490941c9361091f81610b6e565b90506108b1565b5083156109755760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e7460448201526064016104a1565b9392505050565b60006020828403121561098e57600080fd5b81356001600160e01b03198116811461097557600080fd5b6000602082840312156109b857600080fd5b5035919050565b600080604083850312156109d257600080fd5b8235915060208301356001600160a01b03811681146109f057600080fd5b809150509250929050565b600060208284031215610a0d57600080fd5b8151801515811461097557600080fd5b60005b83811015610a38578181015183820152602001610a20565b83811115610a47576000848401525b50505050565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000815260008351610a85816017850160208801610a1d565b7001034b99036b4b9b9b4b733903937b6329607d1b6017918401918201528351610ab6816028840160208801610a1d565b01602801949350505050565b6020815260008251806020840152610ae1816040850160208701610a1d565b601f01601f19169190910160400192915050565b634e487b7160e01b600052601160045260246000fd5b6000816000190483118215151615610b2557610b25610af5565b500290565b60008219821115610b3d57610b3d610af5565b500190565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b600081610b7d57610b7d610af5565b50600019019056fea2646970667358221220747cb28d3012f2dd996b6ec67f82153e8a5c66e69e7ed99020982946fb2da53964736f6c634300080a0033';

type SporkStakerConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (xs: SporkStakerConstructorParams): xs is ConstructorParameters<typeof ContractFactory> =>
  xs.length > 1;

export class SporkStaker__factory extends ContractFactory {
  constructor(...args: SporkStakerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = 'SporkStaker';
  }

  override deploy(
    _sporkToken: PromiseOrValue<string>,
    _stakedSporkToken: PromiseOrValue<string>,
    _unstakeOnlyAfter: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<SporkStaker> {
    return super.deploy(_sporkToken, _stakedSporkToken, _unstakeOnlyAfter, overrides || {}) as Promise<SporkStaker>;
  }
  override getDeployTransaction(
    _sporkToken: PromiseOrValue<string>,
    _stakedSporkToken: PromiseOrValue<string>,
    _unstakeOnlyAfter: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_sporkToken, _stakedSporkToken, _unstakeOnlyAfter, overrides || {});
  }
  override attach(address: string): SporkStaker {
    return super.attach(address) as SporkStaker;
  }
  override connect(signer: Signer): SporkStaker__factory {
    return super.connect(signer) as SporkStaker__factory;
  }
  static readonly contractName: 'SporkStaker';

  public readonly contractName: 'SporkStaker';

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SporkStakerInterface {
    return new utils.Interface(_abi) as SporkStakerInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): SporkStaker {
    return new Contract(address, _abi, signerOrProvider) as SporkStaker;
  }
}