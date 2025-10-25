import express from 'express';

const app = express();
const port = 5000;

// simple body parser for JSON
app.use(express.json());

// Dummy DID creation demo (Phase 2)
// NOTE: In the real code your Agent should have added POST /create-did.
// Keep server.ts consistent with what der Agent gebaut hat.
// You can keep the /verify endpoint here:
app.post('/verify', (req, res) => {
  const { issuer, credentialSubject } = req.body || {};
  if (issuer && credentialSubject) {
    return res.json({ status: 'valid' });
  } else {
    return res.json({ status: 'invalid' });
  }
});

// Fallback health route (optional, nice for testing)
app.get('/', (_req, res) => {
  res.json({ status: 'idhub-backend-running' });
});

app.listen(port, () => {
  console.log(`IDHUB backend running on http://localhost:${port}`);
});
