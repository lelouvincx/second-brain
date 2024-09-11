---
Type: Book
Related:
  - "[[Books]]"
Title: Mastering Blockchain - Fourth Edition
Author:
  - Imran Bashir
Categories:
  - Computers
  - Blockchain
Publisher:
  - Packt Publishing Ltd
Publish Date:
  - 2023-03-31
Current Page: 27
Total Pages: 819
Book Source: https://drive.google.com/file/d/1ZSi1YulCGL-MI1NQOLYDAjeZtSCZmfLx/view?usp=sharing
Cover: http://books.google.com/books/content?id=PiC2EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
Status: Unread
Book Rating: 
Created At: 2024-04-26 16:49:00
Updated At: 2024-05-04T23:06:00
tags:
  - book
  - blockchain
  - resource
  - computer
---
<div class=center>
<img src=http://books.google.com/books/content?id=PiC2EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api />
</div>

# 1. Pre-reading

## 1.1. Why do I want to read this book?

I'm about to join Sky Mavis, a top-tier, ideal company that builds blockchain games (Axie Infinity, etc.) and blockchain services (Ronin Wallet, etc.). My role in that company is Frontend Engineer, but in fact my role is Blockchain Software Engineer. That's why I need to study about blockchain as fast as possible, so I chose this book.

At first, I intended to choose Mastering Blockchain as my to go book, because there's no room for conversation about O'reilly book anymore. However, I could not find its source so I chose this book instead, it has great reviews and good for beginner like me.

Anyway, I must complete at least half of this book in order to work at Sky Mavis, and that is my target.
## 1.2. What do I expect to obtain from this book?

The title of the book has already told what I expect to obtain from this book. I want to study about blockchain, not only for skills and knowledge to work at my company, but for my deep understanding about blockchain technology.

During my interview, Mr. Tino stated that it is a must to understand the basic concepts of something, so when I encounter its edge cases, I can handle or at least search for its solution much easier.

# 2. Reading

## Chapter 3: Symmetric Cryptography

### Introducing cryptography

#### Services provided by cryptography

### Cryptographic primitives

#### Keyless primitives

##### Random numbers

##### Hash functinos

#### Symmetric key primitives

##### Message authentication codes

##### Secret key ciphers

### Advanced Encryption Standard

#### Data Encryption Standard

#### Encrypting and decrypting using AES

### Summary

## Chapter 4: Asymmetric Cryptography

### Foundational mathematics

### Asymmetric cryptography

#### Public and private keys

#### Asymmetric cryptography algorithms

##### Integer factorization

##### Discrete logarithm

##### Elliptic curves

#### Integrated encryption scheme

### Introducing RSA

#### Encrypting and decrypting with RSA

### Introducing ECC

#### Mathematics behind ECC

##### Point addition

##### Point doubling

##### Point multiplication

#### The discrete logarithm problem

#### Generating keys with ECC

### Digital signatures

#### RSA digital signature algorithms

##### Generating RSA digital signatures

#### The elliptic curve digital signature algorithm

##### Generating ECDSA digital signatures

#### Different types of digital signatures

##### Blind signatures

##### Multisignatures

##### Threshold signatures

##### Aggregate signatures

##### Ring signatures

### Cryptographic constructs and blockchain technology

#### Homomorphic encryption

#### Secret sharing

#### Commitment schemes

#### Zero-knowledge proofs

##### zk-SNARKS

##### zk-STARKS

##### Zero-knowledge range proofs

#### Encoding schemes

##### Base64

##### base58

#### Verifiable random functions

### Summary

## Chapter 5: Consensus Algorithms

### Introducing consensus

#### Fault tolerance

#### FLP impossibility

### Analysis and design

#### Model

#### Processes

#### Timing assumptions

### Classification

### Algorithms

#### CFT algorithms

##### Paxos

##### Raft

#### BFT algorithms

##### Practical Byzantine Fault Tolerance

##### Istanbul Byzantine Fault Tolerance

##### Tendermint

##### Nakamoto consensus

##### Variants of PoW

##### HotStuff

### Choosing an algorithm

#### Finality

#### Speed, performance, and scalability

### Summary

## Chapter 6: Bitcoin Architecture

### Introducing Bitcoin

### Cryptograpihc keys

#### Private keys in Bitcoin

#### Public keys in Bitcoin

### Addresses

#### Typical Bitcoin addresses

#### Advanced Bitcoin addresses

### Transactions

#### Coinbase transactions

#### The transaction lifecycle

##### Transaction validation

##### Transaction fees

#### The transaction data structure

##### Metadata

##### Inputs

##### Outputs

##### Verification

#### The Script language

##### Opcodes

##### Standard transactions scripts

##### Contracts

#### Transaction bugs

### Blockchain

#### Structure

#### The genesis block

#### Stale and orphan blocks

#### Forks

#### Properties

### Miners

#### Proof of Work (PoW)

#### Mining systems

##### CPU

##### GPU

##### FPGAs

##### ASICs

#### Mining pools

### Network

#### Types of messages

#### Client software

#### Bloom filters

### Wallets

### Summary


## Chapter 7: Bitcoin in Practice

### Bitcoin in the real world

### Bitcoin payments

### Innovation in Bitcoin

#### Bitcoin improvement proposals

#### Advanced protocols

##### Segregated Witness

##### Bitcoin Cash

##### Bitcoin Unlimited

##### Bitcoin Gold

##### Taproot

#### Extend protocols on top of Bitcoin

##### Colored coins

##### Counterparty

#### Altcoins from Bitcoin

### Bitcoin client installation

#### Types of clients and tools

#### Setting up a Bitcoin node

##### Setting up the source code

##### Setting up botcoin.conf

#### Starting up a node in the testnet

#### Starting up a node in regtest

### Experimenting further with bitcoin-cli

#### Using the Bitcoin command-line tool

#### Using the JSON-RPC interface

#### Using the HTTP REST interface

### Bitcoin programming

### Summary

## Chapter 8: Smart Contracts

### Introducing smart contracts

#### Definitions

#### Properties

#### Real-world application

### Racardian contracts

### Smart contract templates

### Oracles

#### Software-and network-assisted proofs

##### TLSNotary

##### TLS-N-based mechanism

#### Hardware device-assisted proofs

##### Android proof

##### Ledger proof

##### Trusted hardware-assisted proofs

#### Types of blockchain oracles

##### Inbound oracles

##### Outbound oracles

##### Cryptoeconomic oracles

#### Blockchain oracle services

### Deploying smart contracts

### The DAO

### Advances in smart contract technology

#### Solana Sealevel

#### Digital Asset Modeling Language

### Summary

## Chapter 9: Ethereum Arcchitecture

### Introducing Ethereum

### Cryptocurrency

### Keys and addresses

### Accounts

### Transactions and messages

#### MPTs

#### Transaction components

#### Recursive Length Prefix

#### Gas

#### Transaction types

##### Simple transactions

##### Contract creation transactions

##### Message call transactions

#### Messages

#### Transaction validation and execution

#### State and storage in the Ethereum blockchain

##### The world state

##### The account state

##### Transaction receipts

### Ethereum virtual machine

#### Execution environment

#### The machine state

### Blocks and blockchain

#### The genesis block

#### Block validation, finalization, and processing

#### Block difficulty mechanism

### Nodes and miners

#### The consensus mechanism

#### Forks in the blockchain

### The Ethereum network

#### Main net

#### Test nets

#### Private nets

### Procompiled smart contracts

#### Programming languages

##### Solidity

##### Runtime bytecode

##### Opcodes

### Wallets and client software

#### Wallets

#### Geth

#### Light clients

### Supporting protocols

#### Whisper

#### Swarm

### Summary

## Chapter 10: Ethereum in Practice

### Ethereum payments

### Innovations in Ethereum

#### Difficulty time bomb

#### EIP-1559

#### The merge and upcoming upgrades

### Programming with Geth

#### Installing and configuring the Geth client

#### Creating a Geth new account

#### Querying the blockchain using Geth

##### Geth console

##### Geth attach

##### Geth JSON RPC API

### Setting up a development environment

#### Connecting to a test networks

#### Creating aprivate network

##### Starting up the private network

##### Experimenting with the Geth JavaScript console

##### Mining and sending transactions

### Introducing Remix IDE

### Interacting with the Ethereum Blockahin wtith MetaMask

#### Installing MetaMask

#### Creating and funding an account with MetaMask

#### Using MetaMask and Remix IDE to deploy a smart contract

##### Adding a custom network to MetaMask and connecting it with Remix IDE

##### Importing accounts into MetaMask using keystores files

##### Deploying a contract wih MetaMask

##### Interacting with a contract through MetaMask using Remix IDE

## Chapter 11: Tools, Languages, and Frameworks for Ethereum Developers

### Languages

### The Solidity compiler

#### Installing solc

#### Experimenting with solc

### Tools, libraries, and frameworks

#### Node.js

#### Ganache

##### ganache-cli

##### Ganache UI

#### Truffle

#### Drizzle

#### Other tools

### Contract development and deployment

#### Writing smart contracts

#### Testing smart contracts

#### Deploying smart contracts

### The Solidity language

#### Functions

#### Variables

##### Local variables

##### Global variables

##### State variables

#### Data types

##### Value types

##### Reference types

#### Control structures

#### Events

#### Inheritance

#### Libraries

#### Error handling

### Summary

## Chapter 12: Web3 Development Using Etherum

### Interacting with contracts using Web3 and Geth

#### Deploying contracts

#### Using solc to generate ABI and code

#### Querying contracts with Geth

#### Interacting with Geth using POST requests

### Interacting with contracts via frontends

#### Installing the web3.js JavaScript library

#### Creating a web3 object

#### Creating and app.js Javascript file

#### Creating a frontend webpage

#### Calling a contract functions

#### Creating a frontend web page

### Deploying and interacting with contracts using Truffle

#### Installing and initializing Truffle

#### Compiling, testing, and migrating using Truffle

#### Interacting with t he contract

#### Using Truffle to test and deploy smart contracts

#### Deployment on decentralized storage using IPFS

### Summary

## Chapter 13: The Merge and Beyond

### Introduction

### Ethereum after The Merge

#### The Beacon Chain

##### Beacon nodes

##### Consensus client

##### Execution client

##### Validator client

##### Proof-of-stake

#### P2P interface (networking)

### The Merge

### Sharding

### The future roadmap of Ethereum

### Summary

## Chapter 14: Hyperledger

### Projects under Hyperledger

#### Distributed ledgers

##### Fabric

##### Sawtooth

##### Iroha

##### Indy

##### Besu

#### Libraries

##### Aries

##### Transact

##### AnonCreds

#### Tools

##### Cello

##### Caliper

#### Domain-specific

##### Grid

### Hyperledger reference architecture

#### Hyperledger design principles

### Hyperledger Fabric

#### Key concepts

##### Membership service

##### Blockchain services

##### Smart contract services

##### APIs and CLIs

#### Components

##### Peers/nodes

##### Clients

##### Channels

##### World state database

##### Private data colletions

##### Transactions

##### Membership Service Provider

##### Smart contracts

##### Crypto service provider

#### Application

##### Chaincode implementation

##### The application model

#### Consensus mechanism

#### Transaction lifecycle

### Fabric 2.0

#### New chaincode lifecycle management

#### New chaincode application patterns

### Summary

## Chapter 15: Tokenization

### Tokenization on a blockchain

#### Advantages of tokenization

#### Disadvantages of tokenization

### Types of tokesn

#### Fungible tokesn

#### Non-fungible tokens

#### Stable tokens

#### Security tokesn

### Process of tokenization

### Token offerings

#### Initial coin offerings

#### Security token offerings

#### Initial exchange offerings

#### Decentralized autonomous initial coin offering

#### Other token offerings

### Token standards

#### ERC-20

#### ERC-223

#### ERC-777

#### ERC-721

#### ERC-884

#### ERC-1400

#### ERC-1404

#### ERC-1155

#### ERC-4626

### Building an ERC-20 token

#### Building the Solidity contract

#### Deploying the contract on the Remix JavaScript virtual machine

#### Adding tokens in MetaMask

### Emerging concepts

#### Tokenomics/token economics

#### Token engineering

#### Token taxonomy

### Summary

## Chapter 16: Enterprise Blockchain

### Enterprise solutions and blockchain

#### Success factors

#### Limiting factors

### Requirements

#### Privacy

#### Performance

#### Access governance

#### Further requirements

##### Compliance

##### Interoperability

##### Integration

##### Ease of use

##### Monitoring

##### Secure off-chain computation

##### Better tools

### Enterprise blockchain versus public blockchain

### Enterprise blockchain architecture

### Designing enterprise blockchain solutions

#### TOGAF

#### Architecture development method (ADM)

#### Blockchain in the cloud

### Currently available enterprise blockchains

### Enterprise blockchain challenges

#### Interoperability

#### Lack of standardization

#### Compliance

#### Busniess challenges

### VMware Blockchain

#### Components

#### Consensus protocol

#### Architecture

#### VMware Blockchain for Etherum

### Quorum

### Setting up a Quorum network with IBFT

### Other Quorum projects

### Summary

## Chapter 17: Scalability

### What is scalability?

### Summary

## Chapter 18: Blockchain Privacy

### Privacy

### Techniques to achieve privacy

### Summary

## Chapter 19: Blockchain Security

### Security

### Blockchain layers and attacks

### Attacks on layer 2 blockchains

### Security analysis tools and mechanism

### Threat modeling

### Regulation and compliance

### Summary

## Chapter 20: Decentralized Identity

### Identity

### Digital identity

### Identity in Ethereum

### Identity in the world of Web3, DeFi and metaverse

### SSI-specific blockchain projects

### Challenges

### Summary

## Chapter 21: Decentralized Finance

### Introduction

### Financial markets

### Applications of blockchain in finance

### Decentralized finance

## Chapter 22: Blockchain Applications and What's Next

### Use cases

### IoT architecture

### Implementing blockchain-based IoT in practice

### Government

### Healthy

### Media

### Blockchain and AI

### Some emerging trends

### Some challenges

### Summary

# 3. After Reading

## 3.1. Knowledge Summary

## 3.2. What is my emotion when completing this book?