/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import type { Provider, TransactionRequest } from '@ethersproject/providers';
import type { PromiseOrValue } from '../../common';
import type { TestSPORK, TestSPORKInterface } from '../../contracts/TestSPORK';

const _abi = [
  {
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'constructor',
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
    name: 'DOMAIN_SEPARATOR',
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
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
    ],
    name: 'nonces',
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
        name: 'owner',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'deadline',
        type: 'uint256',
      },
      {
        internalType: 'uint8',
        name: 'v',
        type: 'uint8',
      },
      {
        internalType: 'bytes32',
        name: 'r',
        type: 'bytes32',
      },
      {
        internalType: 'bytes32',
        name: 's',
        type: 'bytes32',
      },
    ],
    name: 'permit',
    outputs: [],
    stateMutability: 'nonpayable',
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
        name: 'to',
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
        name: 'from',
        type: 'address',
      },
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
  '0x6101406040523480156200001257600080fd5b50604051806040016040528060098152602001685465737453504f524b60b81b81525080604051806040016040528060018152602001603160f81b815250604051806040016040528060098152602001685465737453504f524b60b81b815250604051806040016040528060068152602001657453504f524b60d01b8152508160039080519060200190620000a99291906200015b565b508051620000bf9060049060208401906200015b565b5050825160208085019190912083518483012060e08290526101008190524660a0818152604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f81880181905281830187905260608201869052608082019490945230818401528151808203909301835260c0019052805194019390932091935091906080523060c05261012052506200023e9350505050565b828054620001699062000201565b90600052602060002090601f0160209004810192826200018d5760008555620001d8565b82601f10620001a857805160ff1916838001178555620001d8565b82800160010185558215620001d8579182015b82811115620001d8578251825591602001919060010190620001bb565b50620001e6929150620001ea565b5090565b5b80821115620001e65760008155600101620001eb565b600181811c908216806200021657607f821691505b602082108114156200023857634e487b7160e01b600052602260045260246000fd5b50919050565b60805160a05160c05160e05161010051610120516112636200028e60003960006109dd01526000610a2c01526000610a07015260006109600152600061098a015260006109b401526112636000f3fe608060405234801561001057600080fd5b506004361061010b5760003560e01c806342966c68116100a257806395d89b411161007157806395d89b4114610217578063a457c2d71461021f578063a9059cbb14610232578063d505accf14610245578063dd62ed3e1461025857600080fd5b806342966c68146101b557806370a08231146101c857806379cc6790146101f15780637ecebe001461020457600080fd5b8063313ce567116100de578063313ce567146101765780633644e51514610185578063395093511461018d57806340c10f19146101a057600080fd5b806306fdde0314610110578063095ea7b31461012e57806318160ddd1461015157806323b872dd14610163575b600080fd5b61011861026b565b6040516101259190610fe5565b60405180910390f35b61014161013c366004611056565b6102fd565b6040519015158152602001610125565b6002545b604051908152602001610125565b610141610171366004611080565b610315565b60405160128152602001610125565b610155610339565b61014161019b366004611056565b610348565b6101b36101ae366004611056565b61036a565b005b6101b36101c33660046110bc565b610378565b6101556101d63660046110d5565b6001600160a01b031660009081526020819052604090205490565b6101b36101ff366004611056565b610385565b6101556102123660046110d5565b61039a565b6101186103ba565b61014161022d366004611056565b6103c9565b610141610240366004611056565b610449565b6101b36102533660046110f7565b610457565b61015561026636600461116a565b6105bb565b60606003805461027a9061119d565b80601f01602080910402602001604051908101604052809291908181526020018280546102a69061119d565b80156102f35780601f106102c8576101008083540402835291602001916102f3565b820191906000526020600020905b8154815290600101906020018083116102d657829003601f168201915b5050505050905090565b60003361030b8185856105e6565b5060019392505050565b60003361032385828561070b565b61032e858585610785565b506001949350505050565b6000610343610953565b905090565b60003361030b81858561035b83836105bb565b61036591906111e8565b6105e6565b6103748282610a7a565b5050565b6103823382610b59565b50565b61039082338361070b565b6103748282610b59565b6001600160a01b0381166000908152600560205260408120545b92915050565b60606004805461027a9061119d565b600033816103d782866105bb565b90508381101561043c5760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084015b60405180910390fd5b61032e82868684036105e6565b60003361030b818585610785565b834211156104a75760405162461bcd60e51b815260206004820152601d60248201527f45524332305065726d69743a206578706972656420646561646c696e650000006044820152606401610433565b60007f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98888886104d68c610c9f565b6040805160208101969096526001600160a01b0394851690860152929091166060840152608083015260a082015260c0810186905260e001604051602081830303815290604052805190602001209050600061053182610cc7565b9050600061054182878787610d15565b9050896001600160a01b0316816001600160a01b0316146105a45760405162461bcd60e51b815260206004820152601e60248201527f45524332305065726d69743a20696e76616c6964207369676e617475726500006044820152606401610433565b6105af8a8a8a6105e6565b50505050505050505050565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6001600160a01b0383166106485760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608401610433565b6001600160a01b0382166106a95760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608401610433565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b600061071784846105bb565b9050600019811461077f57818110156107725760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606401610433565b61077f84848484036105e6565b50505050565b6001600160a01b0383166107e95760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608401610433565b6001600160a01b03821661084b5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610433565b6001600160a01b038316600090815260208190526040902054818110156108c35760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608401610433565b6001600160a01b038085166000908152602081905260408082208585039055918516815290812080548492906108fa9084906111e8565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161094691815260200190565b60405180910390a361077f565b6000306001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161480156109ac57507f000000000000000000000000000000000000000000000000000000000000000046145b156109d657507f000000000000000000000000000000000000000000000000000000000000000090565b50604080517f00000000000000000000000000000000000000000000000000000000000000006020808301919091527f0000000000000000000000000000000000000000000000000000000000000000828401527f000000000000000000000000000000000000000000000000000000000000000060608301524660808301523060a0808401919091528351808403909101815260c0909201909252805191012090565b6001600160a01b038216610ad05760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610433565b8060026000828254610ae291906111e8565b90915550506001600160a01b03821660009081526020819052604081208054839290610b0f9084906111e8565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b6001600160a01b038216610bb95760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b6064820152608401610433565b6001600160a01b03821660009081526020819052604090205481811015610c2d5760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b6064820152608401610433565b6001600160a01b0383166000908152602081905260408120838303905560028054849290610c5c908490611200565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906020016106fe565b6001600160a01b03811660009081526005602052604090208054600181018255905b50919050565b60006103b4610cd4610953565b8360405161190160f01b6020820152602281018390526042810182905260009060620160405160208183030381529060405280519060200120905092915050565b6000806000610d2687878787610d3d565b91509150610d3381610e2a565b5095945050505050565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0831115610d745750600090506003610e21565b8460ff16601b14158015610d8c57508460ff16601c14155b15610d9d5750600090506004610e21565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015610df1573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116610e1a57600060019250925050610e21565b9150600090505b94509492505050565b6000816004811115610e3e57610e3e611217565b1415610e475750565b6001816004811115610e5b57610e5b611217565b1415610ea95760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e617475726500000000000000006044820152606401610433565b6002816004811115610ebd57610ebd611217565b1415610f0b5760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e677468006044820152606401610433565b6003816004811115610f1f57610f1f611217565b1415610f785760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b6064820152608401610433565b6004816004811115610f8c57610f8c611217565b14156103825760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c604482015261756560f01b6064820152608401610433565b600060208083528351808285015260005b8181101561101257858101830151858201604001528201610ff6565b81811115611024576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b038116811461105157600080fd5b919050565b6000806040838503121561106957600080fd5b6110728361103a565b946020939093013593505050565b60008060006060848603121561109557600080fd5b61109e8461103a565b92506110ac6020850161103a565b9150604084013590509250925092565b6000602082840312156110ce57600080fd5b5035919050565b6000602082840312156110e757600080fd5b6110f08261103a565b9392505050565b600080600080600080600060e0888a03121561111257600080fd5b61111b8861103a565b96506111296020890161103a565b95506040880135945060608801359350608088013560ff8116811461114d57600080fd5b9699959850939692959460a0840135945060c09093013592915050565b6000806040838503121561117d57600080fd5b6111868361103a565b91506111946020840161103a565b90509250929050565b600181811c908216806111b157607f821691505b60208210811415610cc157634e487b7160e01b600052602260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600082198211156111fb576111fb6111d2565b500190565b600082821015611212576112126111d2565b500390565b634e487b7160e01b600052602160045260246000fdfea26469706673582212204228163a044b3529b33d44989589d5f8cd6d69998e64bfc0165d8edcb8f4019964736f6c634300080a0033';

type TestSPORKConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (xs: TestSPORKConstructorParams): xs is ConstructorParameters<typeof ContractFactory> =>
  xs.length > 1;

export class TestSPORK__factory extends ContractFactory {
  constructor(...args: TestSPORKConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = 'TestSPORK';
  }

  override deploy(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<TestSPORK> {
    return super.deploy(overrides || {}) as Promise<TestSPORK>;
  }
  override getDeployTransaction(overrides?: Overrides & { from?: PromiseOrValue<string> }): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): TestSPORK {
    return super.attach(address) as TestSPORK;
  }
  override connect(signer: Signer): TestSPORK__factory {
    return super.connect(signer) as TestSPORK__factory;
  }
  static readonly contractName: 'TestSPORK';

  public readonly contractName: 'TestSPORK';

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestSPORKInterface {
    return new utils.Interface(_abi) as TestSPORKInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): TestSPORK {
    return new Contract(address, _abi, signerOrProvider) as TestSPORK;
  }
}
