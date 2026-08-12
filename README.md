# Rate Limiter

Dead-simple, production-ready rate limiting. Sliding window with minimal overhead.

```javascript
const limiter = new RateLimiter({ maxRequests: 100, windowMs: 60000 });

if (limiter.tryConsume(userId)) {
  // Handle request
} else {
  // Reject: rate limit exceeded
}
```

## Features
- ✓ Sliding window algorithm (accurate)
- ✓ Multiple backends (Memory, Redis)
- ✓ TypeScript
- ✓ < 1KB gzipped
- ✓ Zero dependencies

## Use Cases
- REST API throttling
- WebSocket rate limiting
- Database query budgeting
- File upload limits

## Performance
- Memory: O(1) per check
- Redis: 1-2ms latency
- Supports 10K+ concurrent limits

## License: MIT
