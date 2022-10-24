import { useBalance, useContractReader, useEthersAdaptorFromProviderOrSigners } from 'eth-hooks';
import { useEthersAppContext } from 'eth-hooks/context';
import { useDexEthPrice } from 'eth-hooks/dapps';
import { asEthersAdaptor } from 'eth-hooks/functions';
import { NextPage } from 'next';
import { ReactElement } from 'react';

import { Staker } from '../Staker';

import { createTabsAndPages, MainPageFooter, MainPageHeader, TContractPageList } from '.';

import { useAppContracts, useConnectAppContracts, useLoadAppContracts } from '~common/components/context';
import { useCreateAntNotificationHolder } from '~common/components/hooks/useAntNotification';
import { useBurnerFallback } from '~common/components/hooks/useBurnerFallback';
import { useScaffoldAppProviders } from '~common/components/hooks/useScaffoldAppProviders';
import { useScaffoldHooksExamples } from '~~/components/hooks/useScaffoldHooksExamples';
import {
  AVAILABLE_NETWORKS_DEFINITIONS,
  BURNER_FALLBACK_ENABLED,
  CONNECT_TO_BURNER_AUTOMATICALLY,
  INFURA_ID,
  LOCAL_PROVIDER,
  MAINNET_PROVIDER,
} from '~~/config/nextjsApp.config';
import { TAppProps } from '~~/models/TAppProps';

/** ********************************
 * ⛳️⛳️⛳️⛳️⛳️⛳️⛳️⛳️⛳️⛳️⛳️⛳️⛳️⛳️
 * See ./config/app.config.ts for configuration, such as TARGET_NETWORK
 * See ../common/src/config/appContracts.config.ts and ../common/src/config/externalContracts.config.ts to configure your contracts
 * See pageList variable below to configure your pages
 * See ../common/src/config/web3Modal.config.ts to configure the web3 modal
 * ⛳️⛳️⛳️⛳️⛳️⛳️⛳️⛳️⛳️⛳️⛳️⛳️⛳️⛳️
 * ******************************** */

interface IMainPageProps {
  pageName: string;
  children?: ReactElement;
  appProps: TAppProps;
}

/**
 * The main component
 * @returns
 */
export const MainPage: NextPage<IMainPageProps> = (props) => {
  // passed in by nextjs getInitalProps
  const appProps: TAppProps = props.appProps;

  const notificationHolder = useCreateAntNotificationHolder();

  // -----------------------------
  // Providers, signers & wallets
  // -----------------------------
  // 🛰 providers
  // see useLoadProviders.ts for everything to do with loading the right providers
  const scaffoldAppProviders = useScaffoldAppProviders({
    targetNetworks: AVAILABLE_NETWORKS_DEFINITIONS,
    connectToBurnerAutomatically: CONNECT_TO_BURNER_AUTOMATICALLY,
    localProvider: LOCAL_PROVIDER,
    mainnetProvider: MAINNET_PROVIDER,
    infuraId: INFURA_ID,
  });

  // 🦊 Get your web3 ethers context from current providers
  const ethersAppContext = useEthersAppContext();

  // if no user is found use a burner wallet on localhost as fallback if enabled
  useBurnerFallback(scaffoldAppProviders, BURNER_FALLBACK_ENABLED);

  // -----------------------------
  // Load Contracts
  // -----------------------------
  // 🛻 load contracts
  useLoadAppContracts();
  // 🏭 connect to contracts for mainnet network & signer
  const [mainnetAdaptor] = useEthersAdaptorFromProviderOrSigners(MAINNET_PROVIDER);
  useConnectAppContracts(mainnetAdaptor);
  // 🏭 connec to  contracts for current network & signer
  useConnectAppContracts(asEthersAdaptor(ethersAppContext));

  // -----------------------------
  // Hooks use and examples
  // -----------------------------
  // 🎉 Console logs & More hook examples:
  // 🚦 disable this hook to stop console logs
  // 🏹🏹🏹 go here to see how to use hooks!
  useScaffoldHooksExamples(scaffoldAppProviders);

  // -----------------------------
  // These are the contracts!
  // -----------------------------

  // init contracts
  const spork = useAppContracts('TestSPORK', ethersAppContext.chainId);
  const stakedSpork = useAppContracts('StakedSPORK', ethersAppContext.chainId);
  const staker = useAppContracts('SporkStaker', ethersAppContext.chainId);
  // keep track of a variable from the contract in the local React state:
  const [sporkBalance] = useContractReader(
    spork,
    spork?.balanceOf,
    [ethersAppContext.account!]
    // yourContract?.filters.SetPurpose()
  );

  const [stakedSporkBalance] = useContractReader(
    stakedSpork,
    stakedSpork?.balanceOf,
    [ethersAppContext.account!]
    // yourContract?.filters.SetPurpose()
  );

  // -----------------------------
  // .... 🎇 End of examples
  // -----------------------------
  // 💵 This hook will get the price of ETH from 🦄 Uniswap:
  const [ethPrice] = useDexEthPrice(
    scaffoldAppProviders.mainnetAdaptor?.provider,
    ethersAppContext.chainId !== 1 ? scaffoldAppProviders.currentTargetNetwork : undefined
  );

  // 💰 this hook will get your balance
  const [yourCurrentBalance] = useBalance(ethersAppContext.account);

  // -----------------------------
  // 📃 App Page List
  // -----------------------------
  // This is the list of tabs and their contents
  const pageList: TContractPageList = {
    mainPage: {
      name: 'Stake',
      content: (
        <Staker
          StakedSpork={stakedSpork}
          Spork={spork}
          Staker={staker}
          SPORKBalance={sporkBalance}
          StakedSPORKBalance={stakedSporkBalance}
          unstake={false}
        />
      ),
    },
    pages: [
      {
        name: 'Unstake',
        content: (
          <Staker
            StakedSpork={stakedSpork}
            Spork={spork}
            Staker={staker}
            SPORKBalance={sporkBalance}
            StakedSPORKBalance={stakedSporkBalance}
            unstake={true}
          />
          /* <>
            <GenericContract
              contractName="StakedSPORK"
              contract={stakedSpork}
              mainnetAdaptor={scaffoldAppProviders.mainnetAdaptor}
              blockExplorer={scaffoldAppProviders.currentTargetNetwork.blockExplorer}></GenericContract>
            <GenericContract
              contractName="SPORK"
              contract={spork}
              mainnetAdaptor={scaffoldAppProviders.mainnetAdaptor}
              blockExplorer={scaffoldAppProviders.currentTargetNetwork.blockExplorer}></GenericContract>
            <GenericContract
              contractName="Staker"
              contract={staker}
              mainnetAdaptor={scaffoldAppProviders.mainnetAdaptor}
              blockExplorer={scaffoldAppProviders.currentTargetNetwork.blockExplorer}></GenericContract>
          </>*/
        ),
      },
    ],
  };
  const { tabMenu, pages } = createTabsAndPages(pageList);
  const RouteNotFound = <h3 className="p-10 mt-10 text-xl">Route Not Found </h3>;

  // -----------------------------
  // 📃 Render the react components
  // -----------------------------

  return (
    <div>
      <MainPageHeader scaffoldAppProviders={scaffoldAppProviders} price={ethPrice} appProps={appProps} />
      {tabMenu}
      {pages[props.pageName] ?? RouteNotFound}
      <MainPageFooter scaffoldAppProviders={scaffoldAppProviders} price={ethPrice} appProps={appProps} />
      <div className="absolute bg-slate-600">{notificationHolder}</div>
    </div>
  );
};
