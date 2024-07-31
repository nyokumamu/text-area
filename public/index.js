$('#download')
// Tooltipの設定
.tooltip({
  title: '保存しました',
  placement: 'right',
  trigger: 'manual'
})
// Tooltip表示後の動作を設定
.on('shown.bs.tooltip', function(){
  setTimeout((function(){
    $(this).tooltip('hide');
  }).bind(this), 2000);
})
// クリック時の動作を設定
.on('click', function() {
  $(this).tooltip('show'); // Tooltipを表示する

  var fileName = $('#filename').val();
  var content =  $('textarea[name="memo"').val();
  var blob    = new Blob([content], { type: 'text/plain' });
  var url     = (window.URL || window.webkitURL).createObjectURL(blob);
  $(this).attr('download' ,fileName);
  $(this).attr('href' ,url);
});

$(document).ready(function() {
  // URLからパラメータを取得してtextareaに設定
  var urlParams = new URLSearchParams(window.location.search);
  var memoContent = urlParams.get('memo');
  if (memoContent) {
    $('textarea[name="memo"]').val(LZString.decompressFromEncodedURIComponent(memoContent));
  }

  // リンクを生成するボタンのクリックイベント
  $('#generate-link').on('click', function() {
    var memoText = $('textarea[name="memo"]').val();
    var compressedText = LZString.compressToEncodedURIComponent(memoText);
    var link = `${window.location.origin}${window.location.pathname}?memo=${compressedText}`;
    window.location.href = link; // 生成したリンクにリダイレクト
  });
});

