self.addEventListener("install", e => {
  console.log("Service Worker ติดตั้งแล้ว");
});

self.addEventListener("fetch", e => {
  console.log("ดึงข้อมูล: ", e.request.url);
});