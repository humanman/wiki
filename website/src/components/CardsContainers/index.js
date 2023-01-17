import React from 'react';
import NavCard from '../NavCard';
import styles from './styles.module.css';
import LogoSVG from '@site/static/img/near_logo.svg';
import logo from '@site/static/img/near_logo.svg';
const cardData = {

  chooseYourPath: [
    {
      title: 'User',
      icon: require('@site/static/images/icons/contour-user-hex.svg').default,
      text: (
        <>
          Crypto ipsum ethereum bitcoin litecoin dogecoin, crypto ipsum
        </>
      ),
      link: ''
    },
    {
      title: 'Developer',
      icon: require('@site/static/images/icons/contour-engineering.svg').default,
      text: (
        <>
          Crypto ipsum ethereum bitcoin litecoin dogecoin, crypto ipsum
        </>
      ),
      link: ''
    },
    {
      title: 'Founder',
      icon: require('@site/static/img/near_logo.svg').default,
      text: (
        <>
          Crypto ipsum ethereum bitcoin litecoin dogecoin, crypto ipsum
        </>
      ),
      link: ''
    },
  ],
  browseByDomain: [
    {
      title: 'Governance',
      icon: require('@site/static/img/near_logo.svg').default,
      text: (
        <>
          Crypto ipsum ethereum bitcoin litecoin dogecoin, crypto ipsum
        </>
      ),
      link: '@site/governance/near-forum/near-forum-guidelines'
    },
    {
      title: 'Education',
      icon: require('@site/static/img/near_logo.svg').default,
      text: (
        <>
          Crypto ipsum ethereum bitcoin litecoin dogecoin, crypto ipsum
        </>
      ),
      link: '@site/support/hr-education-resources'
    },
    {
      title: 'dApps',
      icon: require('@site/static/img/near_logo.svg').default,
      text: (
        <>
          Crypto ipsum ethereum bitcoin litecoin dogecoin, crypto ipsum
        </>
      ),
      link: '@site/ecosystem/dapps'
    },
    {
      title: 'Essential tools',
      icon: require('@site/static/img/near_logo.svg').default,
      text: (
        <>
          Crypto ipsum ethereum bitcoin litecoin dogecoin, crypto ipsum
        </>
      ),
      link: '@site/getting-started/essential-tools'
    },
    {
      title: 'Developer tools',
      icon: require('@site/static/img/near_logo.svg').default,
      text: (
        <>
          Crypto ipsum ethereum bitcoin litecoin dogecoin, crypto ipsum
        </>
      ),
      link: '@site/support/tools-infrastructure'
    },
    {
      title: 'Grants & Funding',
      icon: require('@site/static/img/near_logo.svg').default,
      text: (
        <>
          Crypto ipsum ethereum bitcoin litecoin dogecoin, crypto ipsum
        </>
      ),
      link: '@site/support/funding'
    },
  ],
  browseByProduct: [
    {
      title: 'NEAR Wallet',
      icon: require('@site/static/img/near_logo.svg').default,
      text: (
        <>
          Crypto ipsum ethereum bitcoin litecoin dogecoin, crypto ipsum
        </>
      ),
      link: '@site/getting-started/creating-a-near-wallet'
    },
    {
      title: 'Governance forum',
      icon: require('@site/static/img/near_logo.svg').default,
      text: (
        <>
          Crypto ipsum ethereum bitcoin litecoin dogecoin, crypto ipsum
        </>
      ),
      link: '@site/governance/near-forum/near-forum-guidelines'

    },
    {
      title: 'Astro DAO',
      icon: require('@site/static/img/near_logo.svg').default,
      text: (
        <>
          Crypto ipsum ethereum bitcoin litecoin dogecoin, crypto ipsum
        </>
      ),
      link: '@site/governance/dao-guide/astrodao'
    },
    {
      title: 'NEAR CLI',
      icon: require('@site/static/img/near_logo.svg').default,
      text: (
        <>
          Crypto ipsum ethereum bitcoin litecoin dogecoin, crypto ipsum
        </>
      ),
      link: '@site/support/tools-infrastructure#wallets'
    },
    {
      title: 'JS SDK',
      icon: require('@site/static/img/near_logo.svg').default,
      text: (
        <>
          Crypto ipsum ethereum bitcoin litecoin dogecoin, crypto ipsum
        </>
      ),
      link: '@site/support/tools-infrastructure#javascript-stack'
    },
    {
      title: 'RUST SDK',
      icon: require('@site/static/img/near_logo.svg').default,
      text: (
        <>
          Crypto ipsum ethereum bitcoin litecoin dogecoin, crypto ipsum
        </>
      ),
      link: '@site/support/tools-infrastructure#rust-stack'
    },
    {
      title: 'NEAR Explorer',
      icon: require('@site/static/img/near_logo.svg').default,
      text: (
        <>
          Crypto ipsum ethereum bitcoin litecoin dogecoin, crypto ipsum
        </>
      ),
      link: '@site/getting-started/near-explorer'
    },
    {
      title: 'NEAR Staking',
      icon: require('@site/static/img/near_logo.svg').default,
      text: (
        <>
          Crypto ipsum ethereum bitcoin litecoin dogecoin, crypto ipsum
        </>
      ),
      link: '@site/support/tools-infrastructure#explorers--indexers'
    },
    {
      title: 'Documentation',
      icon: require('@site/static/img/near_logo.svg').default,
      text: (
        <>
          Crypto ipsum ethereum bitcoin litecoin dogecoin, crypto ipsum
        </>
      ),
      link: 'https://docs.near.org'
    },
  ]
}

function CardContainer(dataObj) {
  return (
    <div className={styles.cards_container}>
      {/* <div className={styles.card__row }> */}
        {dataObj.map((props, idx) => (
          <NavCard key={idx} {...props} />
        ))}
      {/* </div> */}
    </div>
  );
}

export function ChooseYourPath(){
  return CardContainer(cardData.chooseYourPath)
}
export function BrowseByDomain(){
  return CardContainer(cardData.browseByDomain)
}
export function BrowseByProduct(){
  return CardContainer(cardData.browseByProduct)
}


