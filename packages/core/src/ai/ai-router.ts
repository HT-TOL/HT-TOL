export class AIRouter {
  private routes: Record<string, string> = {
    'gemini.com': 'LLM_REASONING_FLOW',
    'bolt.new': 'WEB_CONTAINER_FLOW',
    'replit.com': 'IDE_SYNC_FLOW'
  };

  async getStrategy(url: string) {
    try {
      const domain = new URL(url).hostname.replace('www.', '');
      const strategy = this.routes[domain] || 'GENERIC_SCRAPE';
      
      console.log(`🎯 AI Routing: Chế độ ${strategy} cho ${domain}`);
      
      return {
        domain,
        strategy,
        useGemini: strategy === 'LLM_REASONING_FLOW'
      };
    } catch (e) {
      return { strategy: 'ERROR', message: 'URL không hợp lệ' };
    }
  }
}
