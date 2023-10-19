var container=document.createElement('div')
   container.setAttribute('class','container')
   container.setAttribute('id','container')
var row=document.createElement('div')
   row.setAttribute('class','row')
   row.setAttribute('id','row')
   container.append(row)
   document.body.append(container)   
var res=fetch("https://restcountries.com/v2/all")
res.then((data)=>data.json()).then((data1)=>{ 
   console.log(data1)  
      for(i=0;i<data1.length;i++){
        if(data1[i].capital==undefined){
            data1[i].capital=data1[i].name
        }
         var div=document.createElement('div')
         div.setAttribute('id','main')
         div.innerHTML=`
                        <div class="row col-lg-12 col-sm-12">
                           <div class="card" id='card' style="width: 300px;" style="background-color:white;">
                              <div class="card-body" id="card-body" style="padding:0px">
                                 <h1 class="card-title" id='title'>${data1[i].name}</h1>
                                 <img src='${data1[i].flag}' width= 220px height=140px style="padding-left:40px"></img><br>
                                 <div class="body" style="text-align:center; padding-bottom:10px">
                                    <h5 class="card-title">Capital:${data1[i].capital}</h5>
                                    <h5 class="card-title">Region:${data1[i].region}</h5>
                                    <h5 class="card-title">Country-code:${data1[i].alpha3Code}</h5>
                                    <h5 class="card-title">Latlng:${data1[i].latlng}</h5>
                                    <div id='${data1[i].name}'></div>
                                    <button type="button" class="btn btn-primary" id='btn' onclick="weather('${data1[i].name}')">click for weather</a></button>   
                                 </div> 
                              </div>
                           </div>
                        </div>`
         
         var c=document.getElementById('container')
         var r=document.getElementById('row')
         r.append(div)
         c.append(r)
         document.body.append(c)
//         console.log(`${data1[1].name}`)
      }
}).catch((err)=>console(err))

function weather(city){
   let w=fetch('https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=1e327aa2b6353a855baa06be0be817d4&units=metric')
   w.then((ans)=>ans.json()).then((res)=>{
      console.log(city)
      
      var cap1=document.getElementById(city)
           
      var span1=document.createElement('p');
      span1.innerHTML=`Temperature :${res.main.temp}c`;
      cap1.append(span1)

      var span2=document.createElement('p');
      span2.innerHTML=`Wind_speed :${res.wind.speed}km/h`;
      cap1.append(span2)

   }).catch((r)=>console.log(r))
}