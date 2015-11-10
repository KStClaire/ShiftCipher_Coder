var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
var coded = [];

function coder(){
    var shifter = parseInt($('#shifter').val());
    var codedTxt = $('#encodedTxt').val().toLowerCase().split("");
    for(var i = 0; i < codedTxt.length; i++){
        jQuery.each(alphabet, function(index, value) {
            if(codedTxt[i] === value){
                var newIndex = index + shifter;
                if(newIndex > 25){ newIndex = newIndex-26; }
                if(newIndex < 0){ newIndex = 26+newIndex; }
                    
                coded.push(alphabet[newIndex]);;
            }
        });
    };
    coded.forEach(function(entry){
       $('#result').append(entry); 
    });
}
    


