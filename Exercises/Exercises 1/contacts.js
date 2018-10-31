var obj=[]
function validat() {
    event.preventDefault();
    var ph = document.getElementById("phone1").value;
    var user = document.getElementById("name1").value;
    var pl = document.getElementById("place1").value;

        
        
        var o={
            Name :user,
            Phone :ph,
            Place :pl

        };
        obj.push(o);
        console.log(obj);
        // location.reload(true);
    }
