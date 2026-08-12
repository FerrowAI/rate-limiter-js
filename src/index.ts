export interface RateLimiterOptions {
  maxRequests: number;
  windowMs: number;
  keyPrefix?: string;
}

export class RateLimiter {
  private maxRequests: number;
  private windowMs: number;
  private requests: Map<string, number[]> = new Map();

  constructor(options: RateLimiterOptions) {
    this.maxRequests = options.maxRequests;
    this.windowMs = options.windowMs;
  }

  tryConsume(key: string): boolean {
    const now = Date.now();
    const timestamps = this.requests.get(key) || [];
    const cutoff = now - this.windowMs;
    const valid = timestamps.filter(t => t > cutoff);

    if (valid.length < this.maxRequests) {
      valid.push(now);
      this.requests.set(key, valid);
      return true;
    }
    return false;
  }

  reset(key: string): void {
    this.requests.delete(key);
  }

  getCount(key: string): number {
    const timestamps = this.requests.get(key) || [];
    return timestamps.filter(t => t > Date.now() - this.windowMs).length;
  }
}
export class RedisBackend {}
