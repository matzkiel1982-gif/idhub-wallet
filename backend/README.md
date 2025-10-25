# IDHUB Backend

Node.js + TypeScript API server for the IDHUB wallet.

## To run

```bash
npm install
npm run dev
The Express server runs on port 5000 with a /verify and /create-did endpoint.

Not for production use.

A DID (Decentralized Identifier) is a cryptographically verifiable, decentralized identity string.
In this demo, DIDs and keys are generated on the fly and not persisted.
