var cnt=0;
var user1 = "O";
var user2 ="X";
var a =[0,0,0,0,0,0,0,0,0];
function game(pos)
{
    cnt++;
    var num = document.getElementById(pos);
    if(cnt<10){
        if(cnt%2!=0)
        {
            if(num.innerHTML=="X" || num.innerHTML=="O")
            {
                alert("You Can't Enter Here");
                cnt--;
            }
            else
            {
                a[pos-1]=user2;
                num.innerText=user2;
            }
        }
        else
        {
            if(num.innerHTML=="X" || num.innerHTML=="O")
            {
                alert("You Can't Enter Here");
                cnt--;
            }
            else
            {
                a[pos-1]=user1;
                num.innerText=user1;
            }
        }
    }
    else{
        alert("Game Tie...");
        alert(a);
        window.location.reload();
    }
    if(cnt>6)
    {
        if(a[0]=="X" && a[1]=="X" && a[2]=="X"||a[3]=="X" && a[4]=="X" && a[5]=="X" || a[6]=="X" && a[7]=="X" && a[8]=="X" || a[0]=="X" && a[3]=="X" && a[6]=="X" || a[1]=="X" && a[4]=="X" && a[7]=="X" || a[2]=="X" && a[5]=="X" && a[8]=="X" || a[0]=="X" && a[4]=="X" && a[8]=="X" || a[2]=="X" && a[4]=="X" && a[6]=="X")
        {
            alert("User 1 Is Winner");
            window.location.reload();
        }
        if(a[0]=="O" && a[1]=="O" && a[2]=="O"||a[3]=="O" && a[4]=="O" && a[5]=="O" || a[6]=="O" && a[7]=="O" && a[8]=="O" || a[0]=="O" && a[3]=="O" && a[6]=="O" || a[1]=="O" && a[4]=="O" && a[7]=="O" || a[2]=="O" && a[5]=="O" && a[8]=="O" || a[0]=="O" && a[4]=="O" && a[8]=="O" || a[2]=="O" && a[4]=="O" && a[6]=="O")
        {
            alert("User 2 Is Winner");
            window.location.reload();
        }
    }
}
