import poetPortrait from "@/assets/poet-portrait.png";
import workerPortrait from "@/assets/worker-portrait.png";
import silhouettePortrait from "@/assets/silhouette-portrait.png";

export default function BeyondTheDesk() {
  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-serif font-bold text-academic-heading mb-8 text-center">
          Me and Myself
        </h1>
        
        <p className="text-lg text-academic-body italic leading-relaxed mb-12">
          Stepping Beyond the Desk, where operations and supply chain management fade into stanzas and sustainability models meet sunlit soil. Here, poetry captures life's quiet rhythms, and my garden grows as a simple reminder of patient care. These moments recharge the being in me.
        </p>
        
        {/* Poetry Section */}
        <div className="space-y-8">
          <div className="relative bg-card rounded-lg p-8 shadow-sm border border-border overflow-hidden">
            <div 
              className="absolute inset-0 bg-center bg-cover opacity-10"
              style={{ backgroundImage: `url(${poetPortrait})` }}
            />
            <div className="relative z-10">
              <h2 className="text-2xl font-serif font-semibold text-academic-heading mb-6 text-center">
                অবাক কবি
              </h2>
              <div className="text-academic-body leading-relaxed whitespace-pre-line text-lg text-center">
              {`কী করে পারলে কবি?
তোমার কবিতায় এত মানুষকে ঠাই দিতে
কোথা থেকে পেলে এত আকাশ?
এত ব্যাথা, এত বেদনা
তারই মাঝে এক অনাবিল আনন্দ;
এত অন্য জগত কোথা থেকে এলো
তোমার কবিতায়, তোমার গানে?
কখনও কি ভেবেছিলে?
এতলোক আশ্রয় পাবে তোমার কবিতায়,
কতো লোককে বাঁচতে শেখাবে তোমার গান।
ভাবতেও অবাক লাগে কবি
চোখের জলে পাতা ভিজিয়েও
গীতবিতান পড়ে মানুষ।
সে শুধু অন্তরের টানে,
তোমার মাঝে নিজেকে হারিয়ে দিতে।
তবু বল "সর্বত্রগামী" হতে পারনি তুমি?
সে দোষ তোমার নয়,
সে দোষ আমাদের।
আমরাই সর্বত্রগামী হতে দিইনি তোমাকে;
পারিনি প্রতিটি মানুষকে
"তোমা মাঝে অসীম"-আনন্দের সন্ধান দিতে।
আটকে রেখেছি আমাদের সভ্য সমাজের 
ছিলেকথায়,নয়তো বইয়ের তাঁকে, লাইব্রেরি তে
সে শুধু শোভা পাওয়ার জন্য,
তোমাকে আশ্রয় দেওয়ার জন্য নয়;
তুমি সেখানেই সুখে থাকো কবি।`}
              </div>
            </div>
          </div>

          <div className="relative bg-card rounded-lg p-8 shadow-sm border border-border overflow-hidden">
            <div 
              className="absolute inset-0 bg-center bg-cover opacity-10"
              style={{ backgroundImage: `url(${workerPortrait})` }}
            />
            <div className="relative z-10">
              <h2 className="text-2xl font-serif font-semibold text-academic-heading mb-6 text-center">
                তাহাদের কথা
              </h2>
              <div className="text-academic-body leading-relaxed whitespace-pre-line text-lg text-center">
              {`"তাহা"রা?
কারা?
"তাহা"রা তাহারাই।
তাদের কন সংজ্ঞা হয় না,
সমাজের সর্বত্রই তারা আছে, কিন্তু নেই।
আসলে থেকেও নেই আর কী
থাকতে পারছে না।
রিপোর্টার থেকে কবি,
শিক্ষক থেকে মন্ত্রী এমনকি
তারা নিজেরাও
তাদের কথা বলতে চেয়েও পারেনা।
হয়তো কিছুটা বলে, আরও অনেকটা বলতে চায় কিন্তু পারেনা।
কিভাবে পারবে?
কিভাবে বলবে যে তারাও মানুষ, কিন্তু
ঠিক যেন মানুষের মত নয়;
তবুও তারা আছে।
মরে যেতে পারেনা তাই কষ্টে বেঁচে আছে।
অন্তত এখনও বাঁচবে বলে স্বপ্ন দেখছে।
নামহীন অন্ধকার গ্রাম থেকে রাজধানীর আলোক ঝলমলে শহর
সবখানেই তারা আছে।
কোথাও অন্ধকারেও নিজেদেরকে কোনোরকমে চিনে নিয়ে,
প্রকৃতির দয়ায়, 
তাঁর সাথে সংগ্রাম করেও বেঁচে আছে;
আর কোথাও
আলোর মধ্যে থেকেও নিজেদেরকে ছায়া ভেবে, 
সভ্য মানুষের পায়ের তলায় 
তাদের সঙ্গে ছুটে বেড়াচ্ছে।
সত্যি অদ্ভুত এই "তাহা"দের জীবন।
সমাজে তারাই সংখ্যাগরিষ্ঠ,
তারাই উন্নতির হাতিয়ার,
"তাদের জন্নেই আমরা আছি" একথা বলেই
সভ্য মানুষ সভ্যতর হচ্ছে; আর তারা-
সবকিছু বুঝেও, বলতে ছেয়েও,বলতে না পেরে
"বেঁচে থাকবো" এই স্বপ্ন নিয়ে
নিজেদেরকে টিকিয়ে রাখছে।
আমিও পারলাম না,
আর পাঁচটা সভ্য মানুষের মত আমিও
"তাহা"দের কথা বলতে চেয়েও 
পারলাম না।
শুধু ভাবলাম 'বলা উচিত';
এই পর্যন্তই।
হয়তো কেউ পারবে, 
কোনও একদিন।
নয়তো তারা নিজেরাই, নিজেরাই একদিন বলবে-
"আমরাও আছি, আমরাও মানুষ, আমাদেরও সংজ্ঞা হয়"।`}
              </div>
            </div>
          </div>

          <div className="relative bg-card rounded-lg p-8 shadow-sm border border-border overflow-hidden">
            <div 
              className="absolute inset-0 bg-center bg-cover opacity-10"
              style={{ backgroundImage: `url(${silhouettePortrait})` }}
            />
            <div className="relative z-10">
              <h2 className="text-2xl font-serif font-semibold text-academic-heading mb-6 text-center">
                বিনিময় প্রথা
              </h2>
              <div className="text-academic-body leading-relaxed whitespace-pre-line text-lg text-center">
              {`সব ই বিনিময় প্রথা
কেউ টাকার বিনিময়ে বেঁচে 
নিজের শরীর
আর কেউ খুশির বিনিময়ে
স্বেচ্ছায় একসাথে শুয়ে পড়ে
টাকা টা মাধ্যম হলেই 
শরীর টা " বেঁচা " হয়ে গেলো ?
আর অন্যটা ?
একটা ব্যবসা ,
আর একটা সহবাস 
একটা অপরাধ 
আর একটা দায়িত্ব ?
শুধু বিনিময়ের মাধ্যম দিয়েই 
বিচার হয়ে গেলো ?
কে সতী আর
কে নষ্টা ?`}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
