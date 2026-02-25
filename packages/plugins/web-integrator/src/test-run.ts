import { Generator } from './generator';

const run = async () => {
  const gen = new Generator();
  console.log("🚀 ĐANG KÍCH HOẠT HTTOL AGENT...");
  
  const result = await gen.combineAndDeploy([
    "bolt.new", 
    "replit.com", 
    "gemini.com"
  ]);

  console.log("\n✅ KẾT QUẢ TÍCH HỢP:");
  console.log("----------------------------");
  console.log("🔗 URL NGẪU NHIÊN:", result.url);
  console.log("📝 TÓM TẮT AI:", result.summary);
  console.log("📂 MÃ NGUỒN ĐÃ ĐƯỢC SINH RA TRONG TAB CODE.");
};

run();
