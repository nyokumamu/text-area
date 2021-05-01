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
