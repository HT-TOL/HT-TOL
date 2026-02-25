import { Scraper } from './scraper';
import { AIBrain } from './ai-brain';

export class Generator {
  private scraper = new Scraper();
  private brain = new AIBrain();

  async combineAndDeploy(urls: string[]) {
    // 1. Thu thập (Scraping)
    const rawData = await Promise.all(urls.map(url => this.scraper.scrape(url)));
    
    // 2. AI Suy nghĩ và Tối ưu (Reasoning)
    const intelligence = await this.brain.analyzeAndMerge(rawData);

    // 3. Tạo link URL ngẫu nhiên (Deployment)
    const randomId = Math.random().toString(36).substring(7);
    const finalUrl = `https://httol-agent.ai/v/${randomId}`;

    return {
      status: "Integrated",
      url: finalUrl,
      source: intelligence.code,
      summary: intelligence.instructions
    };
  }
}
