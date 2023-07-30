$(document).ready(function() {
    // ページの読み込みが完了したら実行されます
    $("#popup2").fadeIn();
  
    // 閉じるボタンがクリックされた時にポップアップを非表示にします
    $("#close-popup2").click(function() {
      $("#popup2").fadeOut();
    });
  });
  