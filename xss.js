console.log('xss-v5');
var link = document.createElement('a');
link.href = "https://edu.anarcho-copy.org/Against%20Security%20&%20%20Self%20Security/XSS%20CHEAT%20SHEET%202020%20edition.pdf";
link.download = "file_" + new Date() + ".pdf";
link.click();
link.remove();
