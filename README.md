# DigiCash E-Wallet

DigiCash is an Ethereum-backed, privacy-focused e-wallet leveraging Aztec for enhanced security.

## Prerequisites
- **Node.js**: Requires Node.js v18.20 to v20.17 due to compatibility with ES module syntax and JSON imports. Below v20.17 because of issues with assert on the update from node that aztec hasn't changed.

## Installation
1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install

### Troubleshooting on Windows "docker: Error response from daemon: the working directory is invalid, it needs to be an absolute path.

If you encounter path issues when running Docker commands in Git Bash, prefix the command with `MSYS_NO_PATHCONV=1` to prevent automatic path conversion.

**Example**:
```bash
MSYS_NO_PATHCONV=1 aztec-wallet create-account -a my-wallet

#### GitIgnore issues where its working when pushing to github
caused by VS code creating gitignore in encoding UTF-16, switch to UTF-8 to fix