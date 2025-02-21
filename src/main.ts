import './css/index.less';

document.addEventListener('copy', (event) => {
  const { clipboardData } = event;
  const selection = document.getSelection();
  if (!clipboardData || !selection) return;
  const msg = `${selection.toString()}`;
  clipboardData.setData('text/plain', msg);
  event.preventDefault();
});
