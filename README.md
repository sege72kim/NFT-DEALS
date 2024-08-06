# LOLZ Hamster NFT P2P Exchange

Welcome to the LOLZ Hamster NFT P2P Exchange repository! This is an official work-in-progress project for LOLZ Hamster, designed to provide a user-friendly frontend for a peer-to-peer (P2P) platform where users can exchange NFTs and tokens between TON Space cryptocurrency wallets.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Components](#components)
  - [Registration Page](#registration-page)
  - [Profile Page](#profile-page)
  - [Main Page](#main-page)
  - [DealsBlock](#dealsblock)
  - [Navbar](#navbar)
- [IMPORTANT](#IMPORTANT)

## Introduction

The LOLZ Hamster NFT P2P Exchange is designed to facilitate the exchange of NFTs and tokens between users' TON Space wallets. The platform features two main pages: the main trading page and the user profile page. Each of these pages consists of various blocks to provide comprehensive functionality for the exchange process.

## Features

- **Main Trading Page**: Allows users to browse, list, and trade NFTs and tokens.
- **User Profile Page**: Displays user information, transaction history, and other personal details.
- **Registration Page**: Shown when a user is not connected to a TON Space wallet, guiding them through the connection process.
- **Wallet Integration**: Seamless connection with TON Space cryptocurrency wallets using ton-connect.
- **Routing**: Efficient navigation between different sections of the application using react-router-dom.
- **Localization**: Multi-language support implemented with react-intl.

## Technologies Used

- **HTML, CSS, JavaScript**: Core web technologies for building the frontend.
- **React.js**: A JavaScript library for building user interfaces.
- **ton-connect**: Library for connecting to TON Space cryptocurrency wallets.
- **react-router-dom**: A library for routing in React applications.
- **react-intl**: Internationalization and localization for React applications.

## Project Structure 

```
NFT-DEX/
├── node_modules/
├── public/
├── src/
│   ├── App/
│   ├── components/
│   │   ├── mainPage/
│   │   │   ├── dealsBlock/
│   │   │   │   ├── components/
│   │   │   │   │   ├── infoblock/
│   │   │   │   │   │   └── info-block.js
│   │   │   │   │   ├── nftBlock/
│   │   │   │   │   │   ├── ListOfNFTs/
│   │   │   │   │   │   │   └── listcomponent.js
│   │   │   │   │   │   │   └── listitem.js
│   │   │   │   │   │   └── nft-block.js
│   │   │   │   │   └── nft-block.js
│   │   │   │   ├── containers/
│   │   │   │   │   └── DealsBlockMobile.js
│   │   │   │   │   └── DealsBlockDesktope.js
│   │   │   │   └── DealsBlock.js
│   │   │   ├── header/
│   │   │   │   └── Header.js
│   │   ├── navbar/
│   │   │   ├── menu/
│   │   │   │   └── menu_modal.js
│   │   │   │   └── menu.js
│   │   │   │   └── menuitems.js
│   │   │   ├── notifications/
│   │   │   │   └── notification.js
│   │   │   └── Navbar.js
│   │   ├── profile/
│   │   │   ├── hamsterBlock/
│   │   │   │   └── hamsterBlock.js
│   │   │   ├── historyBlock/
│   │   │   │   └── historyBlock.js
│   │   │   ├── jettonsBlock/
│   │   │   │   └── JettonList.js
│   │   │   ├── notificationsBlock/
│   │   │   │   └── listNotifications.js
│   │   │   ├── userinfoBlock/
│   │   │   │   └── infoblick.js
│   │   │   ├── userNftBlock/
│   │   │   │   └── userNftBlock.js
│   │   └── i18n/
│   │   │   └── locales.js
│   │   │   └── messages.js
│   ├── pages/
│   │   ├── main/
│   │   │   ├── Main.js
│   │   ├── profile/
│   │   │   └── Profile.js
│   │   └── registration/
│   │       └── Registration.js
│   ├── utils/
│   └── index.js
├── .gitignore
├── package.json
└── README.md
```

## Components

### Registration Page

The Registration Page is shown when a user is not connected to a TON Space wallet. It guides users through the wallet connection process, ensuring they are set up correctly before accessing the platform's main features.

### Profile Page

The Profile Page includes various blocks, all of which are located in `src/components/profile`. While most styles for the blocks are already implemented, further details for transaction histories need to be refined. Additionally, backend integration, Dedust gadget, and HMSTR rate need to be incorporated. On the Profile Page, users can:

- View their personal information.
- Check their transaction history.
- View their NFTs and tokens.
- Access their transaction history.
- See notifications.

### Main Page

- **Header**: Handles the top section with text and a live trade button.
- **DealsBlock**: Manages the lower two blocks with information and modal windows.

All components for the Main Page are located in `src/components/mainPage`.

#### DealsBlock

The `DealsBlock` component is exported from `DealsBlock.js`, which dynamically selects between `DealsBlockMobile` and `DealsBlockDesktop` based on the user's device. These are located in `src/components/mainPage/dealsblock/containers`.

Inside `src/components/mainPage/dealsblock/components`, you'll find:
- `infoblock`: Manages the top two information blocks.
- `nftblock`: Handles the modals that perform core functionality.
- `listofnfts`: Contains the internal contents of the NFT modal.

#### Navbar

The navigation bar is essentially the header, located in `src/components/navbar`. If the wallet is not connected, the Navbar will show the default `TonConnectButton` along with the `language_menu`. Once the wallet is connected, it will display `src/components/navbar/menu/menu.js`, which includes buttons for:
- Copying address
- Profile navigation
- Language selection
- Customization
- Logout

For localization, the language files are in `src/i18n`. To configure localization, you can find the highlight settings in `src/pages/main/main.js` inside `<div className="background_light">`.

## Contributing

We welcome contributions to the LOLZ Hamster NFT P2P Exchange! To contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Make your changes and commit them with clear and descriptive messages.
4. Push your changes to your forked repository.
5. Create a pull request to the main repository.

Please ensure your code adheres to our coding standards and passes all tests.

## Installation

Follow these steps to set up the project locally:

1. **Clone the repository**:
   ```bash
   git clone [https://github.com/sege72kim/NFT-DEALS-main.git]
   cd NFT-DEALS-main
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm start
   ```

The application will be available at `http://localhost:3000`.

## IMPORTANT
---

This README provides a comprehensive overview of the LOLZ Hamster NFT P2P Exchange project, detailing its features, technologies used, installation steps, usage instructions, project structure, and component details. Please note that this is an official working project for LOLZ Hamster, not a personal or pet project, and is currently in development. The Registration Page must be completed before accessing other parts of the platform.
