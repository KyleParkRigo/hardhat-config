/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "./common";

export interface HelloSmartContractInterface extends Interface {
  getFunction(nameOrSignature: "retrieveWord" | "setWord"): FunctionFragment;

  encodeFunctionData(
    functionFragment: "retrieveWord",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "setWord", values: [string]): string;

  decodeFunctionResult(
    functionFragment: "retrieveWord",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setWord", data: BytesLike): Result;
}

export interface HelloSmartContract extends BaseContract {
  connect(runner?: ContractRunner | null): HelloSmartContract;
  waitForDeployment(): Promise<this>;

  interface: HelloSmartContractInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  retrieveWord: TypedContractMethod<[], [string], "view">;

  setWord: TypedContractMethod<[_word: string], [void], "nonpayable">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "retrieveWord"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "setWord"
  ): TypedContractMethod<[_word: string], [void], "nonpayable">;

  filters: {};
}