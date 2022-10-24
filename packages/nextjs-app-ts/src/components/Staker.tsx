import { formatEther, parseEther } from '@ethersproject/units';
import { useEthersAppContext } from 'eth-hooks/context';
import { BigNumber } from 'ethers';
import { FC, useState } from 'react';

import { SporkStaker, StakedSPORK, TestSPORK } from '~common/generated/contract-types';

export interface IStakerProps {
  unstake: boolean;
  Spork: TestSPORK;
  StakedSpork: StakedSPORK;
  Staker: SporkStaker;
  SPORKBalance?: BigNumber;
  StakedSPORKBalance?: BigNumber;
}

export const Staker: FC<IStakerProps> = (props) => {
  const { Spork, StakedSpork, Staker, SPORKBalance, StakedSPORKBalance, unstake } = props;
  const ethersAppContext = useEthersAppContext();

  const [sporkToStake, setSporkToStake] = useState<BigNumber>(BigNumber.from(0));
  const [sporkToUnStake, setSporkToUnStake] = useState<BigNumber>(BigNumber.from(0));

  if (!Staker || !StakedSpork || !Spork) {
    return <div>Contracts not loaded</div>;
  }

  async function mintSPORK(): Promise<void> {
    const tx = await Spork.mint(ethersAppContext.account!, parseEther('100'));
    await tx.wait();
  }

  async function stakeSPORK(): Promise<void> {
    const txAllow = await Spork.approve(Staker.address, sporkToStake);
    await txAllow.wait().then(async (): Promise<void> => {
      const tx = await Staker.stake(sporkToStake);
      await tx.wait();
    });
  }

  async function unstakeSPORK(): Promise<void> {
    const txAllow = await StakedSpork.approve(Staker.address, sporkToUnStake);
    await txAllow.wait().then(async (): Promise<void> => {
      const tx = await Staker.unstake(sporkToUnStake);
      await tx.wait();
    });
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ width: 400, alignSelf: 'center', marginTop: 30 }}>
        <h1>Staker</h1>
        <p>Spork: {Spork.address}</p>
        <p>StakedSpork: {StakedSpork.address}</p>
        <p>Staker: {Staker.address}</p>
        <p>SPORKBalance: {formatEther(SPORKBalance || 0)}</p>
        <p>StakedSPORKBalance: {formatEther(StakedSPORKBalance || 0)}</p>
        {!unstake && (
          <>
            <button
              onClick={(): void => {
                void mintSPORK();
              }}>
              Mint SPORK
            </button>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <label htmlFor="sporkToStake">Spork to stake</label>
              <input type="number" onChange={(e): void => setSporkToStake(parseEther(e.target.value))} />

              <button
                onClick={(): void => {
                  void stakeSPORK();
                }}>
                Stake SPORK
              </button>
            </div>
          </>
        )}
        {unstake && (
          <>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <label htmlFor="sporkToUnStake">Spork to unstake</label>
              <input type="number" onChange={(e): void => setSporkToUnStake(parseEther(e.target.value))} />
              <button
                onClick={(): void => {
                  void unstakeSPORK();
                }}>
                Unstake SPORK
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
