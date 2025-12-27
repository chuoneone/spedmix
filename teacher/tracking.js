/**
 * @file tracking.js
 * @description Google Analytics 事件追蹤的中央腳本。
 */

/**
 * 向 Google Analytics 發送一個自訂事件。
 * @param {string} eventName - 事件名稱 (固定用 'button_click')
 * @param {string} eventCategory - 事件類別 (描述點擊的類型，如 'chapter_select', 'resource_link')
 * @param {string} eventLabel - 事件標籤 (描述點擊的具體內容，如 'g8-math-s2-ch1-challenge-series')
 */
function trackEvent(eventName, eventCategory, eventLabel) {
  // 安全檢查：確認 gtag 函式已載入
  if (typeof gtag === 'function') {
    gtag('event', eventName, {
      'event_category': eventCategory,
      'event_label': eventLabel
    });
    // 在開發者工具中顯示訊息，方便你測試
    console.log(`GA Event Sent -> Category: ${eventCategory} | Label: ${eventLabel}`);
  } else {
    console.error('Google Analytics gtag function not found.');
  }
}