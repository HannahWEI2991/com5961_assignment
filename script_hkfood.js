function recommend(){
  var food_style = prompt("What kind of food are you looking for?\n(Please input a or b)\na-Exotic Food\nb-Local Food")
  var place = prompt("Which place are you going to？\n(Please input 1 or 2 or 3)\n1-New Territories\n2-Kowloon\n3-Hong Kong Island")
  if (food_style=="a" && place=="1"){
    document.getElementById("show").innerHTML = "豚王拉麵/芽莊越式料理/PARKVIEW"
  }
  else if(food_style=="a" && place=="2"){
    document.getElementById("show").innerHTML = "Aqua/一蘭拉麵/Mango Tree"
  }
  else if(food_style=="a" && place=="3"){
    document.getElementById("show").innerHTML = "鶯/泰面/Rare 紅館"
  }
  else if(food_style=="b" && place=="1"){
    document.getElementById("show").innerHTML = "陳根記/翠華餐廳/茶記冰室"
  }
  else if(food_style=="b" && place=="2"){
    document.getElementById("show").innerHTML = "添好運/文記車仔面/容記小菜王"
  }
  else if(food_style=="b" && place=="3"){
    document.getElementById("show").innerHTML = "華嫂冰室/甘牌燒鵝/坤記煲仔小菜"
  }
}
