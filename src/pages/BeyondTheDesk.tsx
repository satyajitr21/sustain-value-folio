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
          <div className="bg-card rounded-lg p-8 shadow-sm border border-border">
            <h2 className="text-2xl font-serif font-semibold text-academic-heading mb-6 text-center">
              অবাক কবি
            </h2>
            <div className="text-academic-body leading-relaxed whitespace-pre-line text-lg">
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
      </div>
    </div>
  );
}
