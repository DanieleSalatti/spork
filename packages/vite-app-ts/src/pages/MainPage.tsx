/* eslint-disable unused-imports/no-unused-vars-ts */
import { useBalance, useContractReader, useEthersAdaptorFromProviderOrSigners } from 'eth-hooks';
import { useEthersAppContext } from 'eth-hooks/context';
import { useDexEthPrice } from 'eth-hooks/dapps';
import { asEthersAdaptor } from 'eth-hooks/functions';
import { FC, useEffect, useState } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import '~~/styles/main-page.css';

import { createTabsAndRoutes, MainPageFooter, MainPageHeader, TContractPageList } from '../components/main';

import { useAppContracts, useConnectAppContracts, useLoadAppContracts } from '~common/components/context';
import { useCreateAntNotificationHolder } from '~common/components/hooks/useAntNotification';
import { useBurnerFallback } from '~common/components/hooks/useBurnerFallback';
import { useScaffoldAppProviders } from '~common/components/hooks/useScaffoldAppProviders';
import { networkDefinitions } from '~common/constants';
import { useScaffoldHooksExamples } from '~~/components/hooks/useScaffoldHooksExamples';
import { Staker } from '~~/components/Staker';
import {
  AVAILABLE_NETWORKS_DEFINITIONS,
  BURNER_FALLBACK_ENABLED,
  CONNECT_TO_BURNER_AUTOMATICALLY,
  INFURA_ID,
  LOCAL_PROVIDER,
  MAINNET_PROVIDER,
} from '~~/config/viteApp.config';

/** ********************************
 * ⛳️⛳️⛳️⛳️⛳️⛳️⛳️⛳️⛳️⛳️⛳️⛳️⛳️⛳️
 * See ./config/app.config.ts for configuration, such as TARGET_NETWORK
 * See ../common/src/config/appContracts.config.ts and ../common/src/config/externalContracts.config.ts to configure your contracts
 * See pageList variable below to configure your pages
 * See ../common/src/config/web3Modal.config.ts to configure the web3 modal
 * ⛳️⛳️⛳️⛳️⛳️⛳️⛳️⛳️⛳️⛳️⛳️⛳️⛳️⛳️
 * ******************************** */

/**
 * The main component
 * @returns
 */
export const MainPage: FC = () => {
  const notificationHolder = useCreateAntNotificationHolder();
  // -----------------------------
  // Providers, signers & wallets
  // -----------------------------
  // 🦊 Get your web3 ethers context from current providers
  const ethersAppContext = useEthersAppContext();

  // 🛰 providers
  // see useLoadProviders.ts for everything to do with loading the right providers
  const scaffoldAppProviders = useScaffoldAppProviders({
    targetNetworks: AVAILABLE_NETWORKS_DEFINITIONS,
    connectToBurnerAutomatically: CONNECT_TO_BURNER_AUTOMATICALLY,
    localProvider: LOCAL_PROVIDER,
    mainnetProvider: MAINNET_PROVIDER,
    infuraId: INFURA_ID,
  });

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
  // const yourNFT = useAppContracts('YourNFT', ethersAppContext.chainId);
  const mainnetDai = useAppContracts('DAI', networkDefinitions.mainnet.chainId);

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

  // 📟 Listen for broadcast events
  // const [setPurposeEvents] = useEventListener(yourContract, yourContract?.filters.SetPurpose(), 0);

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

  const [route, setRoute] = useState<string>('');
  useEffect(() => {
    setRoute(window.location.pathname);
  }, [setRoute]);

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
  const { routeContent: tabContents, tabMenu } = createTabsAndRoutes(pageList, route, setRoute);

  // -----------------------------
  // 📃 Render the react components
  // -----------------------------

  return (
    <div className="App">
      <MainPageHeader scaffoldAppProviders={scaffoldAppProviders} price={ethPrice} />
      {/* Routes should be added between the <Switch> </Switch> as seen below */}
      <BrowserRouter>
        {tabMenu}
        <Switch>
          {tabContents}
          {/* Subgraph also disabled in MainPageMenu, it does not work, see github issue https://github.com/scaffold-eth/scaffold-eth-typescript/issues/48! */}
          {/*
          <Route path="/subgraph">
            <Subgraph subgraphUri={subgraphUri} mainnetProvider={scaffoldAppProviders.mainnetAdaptor?.provider} />
          </Route>
          */}
        </Switch>
      </BrowserRouter>

      <MainPageFooter scaffoldAppProviders={scaffoldAppProviders} price={ethPrice} />
      <div className="absolute">{notificationHolder}</div>
    </div>
  );
};
