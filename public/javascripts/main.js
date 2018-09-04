

$("#button1").on('click', function(){
    $.ajax({
        url: '/test',
        success: function(data){

            var htmlstr = '<table>';

            try {
                //   if(data instanceof Array)
                if (typeof data == 'string') {
                    var data1 = JSON.parse(data);
                    //str = JSON.stringify(data);
                    for (var i = 0; i < data1.length; i++) {
                        htmlstr += '<tr>'
                        for (var j = 0; j < data1[i].length; j++)
                            htmlstr += '<td>' + data1[i][j] + '</td>';
                        htmlstr += '</tr>';
                    }
                    htmlstr += '</table>';
                    $("#mytable").html(htmlstr);
                }
            } catch(e){}
            //console.log('Download infa:' + data);
        }
    });


});