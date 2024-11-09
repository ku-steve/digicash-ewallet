# Digicash E-Wallet

## Overview
Digicash E-Wallet is a privacy-first, Ethereum-backed digital wallet built on Aztec’s zero-knowledge technology, enabling secure and anonymous transactions. Designed for multi-currency functionality, it aims to be a global financial tool that prioritizes user privacy and security.

## Features
- **Privacy Protection**: Implements Aztec zero-knowledge rollups for two-layer transaction privacy.
- **Ethereum-Backed**: Built on the Ethereum blockchain for robust stability and transparency.
- **Multi-Currency Support**: Supports both fiat and cryptocurrencies for seamless cross-border transactions.
- **Escrow Functionality**: Integrates a built-in escrow service, ideal for secure transactions and salary disbursements.
- **Modular and Scalable**: Architected to easily accommodate additional features as the project grows.

## Getting Started

### Prerequisites
Ensure the following are installed to run the project locally:
- **Node.js** (Version 18.x - 20.x)
- **Docker**
- **Aztec Sandbox** (for testing zero-knowledge rollups)

### Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/digicash-ewallet.git
   cd digicash-ewallet
   npm install

#### Troubleshooting
- Docker Path Issues on Windows
      If you encounter the error docker: Error response from daemon: the working directory is invalid, it needs to be an absolute path when running Docker commands in Git Bash, you can resolve it by prefixing the command with MSYS_NO_PATHCONV=1. This prevents Git Bash from automatically converting paths.

- Example:
      MSYS_NO_PATHCONV=1 aztec-wallet create-account -a my-wallet

- Git Ignore Issues in VS Code
      If .gitignore isn’t working as expected when pushing to GitHub, it may be due to VS Code encoding . gitignore in UTF-16. Switch the encoding to UTF-8 to fix this issue.
