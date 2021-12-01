console.log('xss-v5');
var link = document.createElement('a');
link.href = "/WWW/test.pdf";
link.download = "file_" + new Date() + ".pdf";
link.click();
link.remove();
