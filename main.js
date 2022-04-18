for(let i = 0 ; i < 4 ; i++) {const img = document.createElement("img");
img.src = "https://i.ytimg.com/vi/VEx5hNYeZtY/hqdefault.jpg" ;
document.body.appendChild(img);
}
const users = [
    {
      id: 7,
      email: "john.doe@gmail.com",
      first_name: "John",
      last_name: "Doe",
      avatar: "https://i.ytimg.com/vi/VEx5hNYeZtY/hqdefault.jpg"
    },
    {
      id: 7,
      email: "john.doe@gmail.com",
      first_name: "John",
      last_name: "Doe",
      avatar: "https://i.ytimg.com/vi/VEx5hNYeZtY/hqdefault.jpg"
    },
    {
      id: 7,
      email: "john.doe@gmail.com",
      first_name: "John",
      last_name: "Doe",
      avatar: "https://i.ytimg.com/vi/VEx5hNYeZtY/hqdefault.jpg"
    },
    {
        id: 7,
        email: "john.doe@gmail.com",
        first_name: "John",
        last_name: "Doe",
        avatar: "https://i.ytimg.com/vi/VEx5hNYeZtY/hqdefault.jpg"
      }
    ]


// #6
const candles =  [18, 90, 90, 13, 90, 75, 90, 8, 90, 43];
function birthdayCakeCandles (candles)
{
    if(candles.length == 0)
        return null;
    var modeMap = {};
    var maxEl = candles[0], maxCount = 1;
    for(var i = 0; i < candles.length; i++)
    {
        var el = candles[i];
        if(modeMap[el] == null)
            modeMap[el] = 1;
        else
            modeMap[el]++;  
        if(modeMap[el] > maxCount)
        {
            maxEl = el;
            maxCount = modeMap[el];
        }
    }
    return maxEl;
}