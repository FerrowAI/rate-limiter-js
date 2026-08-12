# Rate Limiter

Dead-simple, in-memory rate limiting. Sliding window with minimal overhead.

```javascript
const limiter = new RateLimiter({ maxRequests: 100, windowMs: 60000 });

if (limiter.tryConsume(userId)) {
  // Handle request
} else {
  // Reject: rate limit exceeded
}
```

## Features
- Sliding window algorithm (accurate)
- In-memory backend
- TypeScript
- Zero dependencies

## Use Cases
- REST API throttling
- WebSocket rate limiting
- Database query budgeting
- File upload limits

## Performance
- Memory: O(1) amortized per check
- State is per-process (not shared across instances/servers)

## License: MIT

---

Sponsored by [Ferrow](https://ferrow.ai)

---
Part of the [ferrow-toolkit](https://github.com/FerrowAI/ferrow-toolkit) collection · Sponsored by [Ferrow](https://ferrow.ai)
