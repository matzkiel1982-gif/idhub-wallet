// backend/src/index.js
//
// This file implements a simple Express server with a
// POST route for creating DIDs (Decentralized Identifiers).
// The `/create-did` route generates a fresh public/private
// key pair using the Node.js crypto API, derives a demo DID
// from the public key, and returns both the DID and the
// public key in JSON format. The private key is held only
// in memory and never stored or returned.

const express = require('express');
const crypto = require('crypto');

const app = express();

// Middleware to parse JSON bodies (useful for future endpoints).
app.use(express.json());

/**
 * POST /create-did
 *
 * This endpoint generates a temporary Ed25519 key pair,
 * derives a simple demo DID from the public key, and
 * returns the DID and the public key as JSON.
 * The private key remains in memory and is not stored
 * or returned.
 */
app.post('/create-did', (req, res) => {
  try {
    // Generate an Ed25519 key pair (widely used for signatures).
    const { publicKey, privateKey } = crypto.generateKeyPairSync('ed25519');

    // Export the public key in DER format and encode as Base64.
    const publicKeyDer = publicKey.export({ type: 'spki', format: 'der' });
    const publicKeyBase64 = publicKeyDer.toString('base64');

    // Derive a simple demo DID from the first 16 chars of the Base64 key.
    const did = `did:idhub:${publicKeyBase64.slice(0, 16)}`;

    // Respond with the DID and public key.
    res.json({
      did,
      publicKey: publicKeyBase64
    });

    // The private key variable exists only in memory
    // and is garbage-collected after this request ends.
  } catch (err) {
    console.error('Error creating DID:', err);
    res.status(500).json({
      error: 'Error creating DID',
      details: err.message
    });
  }
});

// Start the server if executed directly.
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`IDHub backend running on port ${PORT}`);
  });
}

module.exports = app;
