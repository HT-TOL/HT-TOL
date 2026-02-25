export class Scraper {
  async scrape(url: string) {
    console.log(`🔍 Đang thu thập dữ liệu từ: ${url}...`);
    try {
      // Trong thực tế, bạn sẽ dùng fetch hoặc thư viện như axios
      // Ở đây ta mô phỏng việc trích xuất các tính năng cốt lõi
      const mockData: Record<string, string> = {
        "bolt.new": "Web-container, Code Editor, Real-time Preview",
        "replit.com": "Cloud IDE, Multi-language support, Hosting",
        "gemini.com": "Advanced LLM, Multimodal Reasoning, Chat Interface"
      };

      const domain = new URL(url).hostname.replace('www.', '');
      return mockData[domain] || "Generic AI capabilities and UI components";
    } catch (e) {
      return "Không thể truy cập dữ liệu trang web.";
    }
  }
}
