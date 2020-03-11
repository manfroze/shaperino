const shape=["circle","square","rhombus","cross","octagon"],mode=["main","hyper","charge","split"],kind=["shape","charge","color"],powertype=["idle","click"],position={side:["top","left","bottom","right"],corner:["topright","topleft","bottomright","bottomleft"],split:["topbottom","leftright","topleftbottomright","toprightbottomleft"]},color={basic:["black","white","red","blue","yellow"],composite:["green","orange","violet","grey","lightred","lightblue","lightyellow","darkred","darkblue","darkyellow","lightgreen","lightorange","lightviolet","darkgreen","darkorange","darkviolet"]},colorCode={black:"#222222",white:"#FFFFFF",red:"#FF4329",yellow:"#FFD600",blue:"#0085FF",orange:"#FF9A3D",green:"#47E24D",violet:"#883BEB",grey:"#9F9F9F",darkred:"#823525",darkyellow:"#CCB152",darkblue:"#1A3782",lightred:"#FFC2C2",lightyellow:"#FCFF81",lightblue:"#7CC0FF",darkorange:"#825933",darkgreen:"#239727",darkviolet:"#400072",lightorange:"#FFBF5F",lightgreen:"#C8FF54",lightviolet:"#E64EFF"},colors=[...color.basic,...color.composite],positions=[...position.side,...position.corner,,...position.split],chargePositions=[...position.side,...position.corner],tokens=[shape,...color.basic,...position.side];function rand(e){if(e instanceof Array==1)return e[Math.floor(Math.random()*e.length)]}function swap(e){var t={};for(var o in e)t[e[o]]=o;return t}function style(){$.each(shape,function(e,t){$(".item#"+t).css("background-image",'url("svg/'+t+'.svg")'),$(".pricetag."+t).css("background-image",'url("svg/'+t+'-token.svg")')}),$.each(positions,function(e,t){$(".item#"+t).css("background-image",'url("svg/'+t+'.svg")'),$(".pricetag."+t).css("background-image",'url("svg/'+t+'-token.svg")')}),$.each(colors,function(e,t){$(".item#"+t).css("background-image",'url("svg/'+t+'.svg")'),$(".pricetag."+t).css("background-image",'url("svg/'+t+'.svg")')}),$.each(powertype,function(e,t){$.each(kind,function(e,o){$(".upgrade.boost."+t+"."+o).css("background-image",'url("svg/boost-'+t+"-"+o+'.svg")')})}),$(".upgrade.blazon").css("background-image",'url("svg/blazon.svg")'),$(".upgrade.wonderbar").css("background-image",'url("svg/wonderbar.svg")')}function prettifySub(e){(e=parseFloat(e.toFixed(3)))>=1e3&&(e=999);var t=(e=e.toString()).split(".");return void 0===t[1]||t[0].length>=3?e.substring(0,3):e.substring(0,4)}function formatNumber(e){var t=e;if(e=Math.round(1e6*e)/1e6,!isFinite(e))return"Infinite";if(e>=0&&e<1e4)return Math.floor(e);if(0===e)return prettifySub(0);var o=Math.floor(Math.log(e)/Math.log(1e3));if(o<=0)return prettifySub(e);e/=Math.pow(1e3,o);var r,a=["K","M","B","T","Qa","Qi","Sx","Sp","Oc","No","Dc","Ud","Dd","Td","Qad","Qid","Sxd","Spd","Od","Nd","V","Uv","Dv","Tv","Qav","Qiv","Sxv","Spv","Ov","Nv","Tt"];if(!(o<=a.length&&o>0)){var c=parseFloat(t).toExponential(2);return c=c.replace("+","")}return r=a[o-1],prettifySub(e)+r}var current={main:{status:"enabled",shape:"circle",color:"black",colorType:"basic"},charge:{status:"disabled",type:"side",position:"topleft",shape:"square",color:"black",colorType:"basic"},split:{status:"disabled",position:"topbottom",shape:"circle",color:"black",colorType:"basic"},hyper:{status:"disabled",shape:"circle",color:"white",colorType:"basic"},wonderbar:{status:"disabled",color:"black"},colorbar:{status:"disabled"},select:"main"},items={circle:{sec:"shape",subsec:"shape",card:"card",status:"locked"},square:{sec:"shape",subsec:"shape",card:"card",status:"locked"},rhombus:{sec:"shape",subsec:"shape",card:"card",status:"locked"},cross:{sec:"shape",subsec:"shape",card:"card",status:"locked"},octagon:{sec:"shape",subsec:"shape",card:"card",status:"locked"},top:{sec:"charge",subsec:"side",card:"card",status:"locked"},left:{sec:"charge",subsec:"side",card:"card",status:"locked"},right:{sec:"charge",subsec:"side",card:"card",status:"locked"},bottom:{sec:"charge",subsec:"side",card:"card",status:"locked"},topleft:{sec:"charge",subsec:"corner",card:"small",status:"locked"},topright:{sec:"charge",subsec:"corner",card:"small",status:"locked"},bottomleft:{sec:"charge",subsec:"corner",card:"small",status:"locked"},bottomright:{sec:"charge",subsec:"corner",card:"small",status:"locked"},topbottom:{sec:"charge",subsec:"split",card:"small",status:"locked"},leftright:{sec:"charge",subsec:"split",card:"small",status:"locked"},topleftbottomright:{sec:"charge",subsec:"split",card:"small",status:"locked"},toprightbottomleft:{sec:"charge",subsec:"split",card:"small",status:"locked"},black:{subsec:"primary",sec:"color",card:"card",status:"locked"},white:{sec:"color",subsec:"primary",card:"card",status:"locked"},red:{sec:"color",subsec:"primary",card:"card",status:"locked"},blue:{sec:"color",subsec:"primary",card:"card",status:"locked"},yellow:{sec:"color",subsec:"primary",card:"card",status:"locked"},green:{sec:"color",subsec:"secondary",card:"small",status:"locked"},orange:{sec:"color",subsec:"secondary",card:"small",status:"locked"},violet:{sec:"color",subsec:"secondary",card:"small",status:"locked"},grey:{sec:"color",subsec:"secondary",card:"small",status:"locked"},lightred:{sec:"color",subsec:"light",card:"small",status:"locked"},lightblue:{sec:"color",subsec:"light",card:"small",status:"locked"},lightyellow:{sec:"color",subsec:"light",card:"small",status:"locked"},darkred:{sec:"color",subsec:"dark",card:"small",status:"locked"},darkblue:{sec:"color",subsec:"dark",card:"small",status:"locked"},darkyellow:{sec:"color",subsec:"dark",card:"small",status:"locked"},lightgreen:{sec:"color",subsec:"secondarylight",card:"small",status:"locked"},lightorange:{sec:"color",subsec:"secondarylight",card:"small",status:"locked"},lightviolet:{sec:"color",subsec:"secondarylight",card:"small",status:"locked"},darkgreen:{sec:"color",subsec:"secondarydark",card:"small",status:"locked"},darkorange:{sec:"color",subsec:"secondarydark",card:"small",status:"locked"},darkviolet:{sec:"color",subsec:"secondarydark",card:"small",status:"locked"}},sectionUnlock={shape:"locked",charge:"locked",hyper:"locked",color:"locked",upgrades:"locked"},subSectionUnlock={shape:"locked",side:"locked",corner:"locked",split:"locked",hyper:"locked",primary:"locked",secondary:"locked",light:"locked",dark:"locked",secondarylight:"locked",secondarydark:"locked",upgrades:"locked"},counter={circle:0,square:0,rhombus:0,cross:0,octagon:0,top:0,left:0,right:0,bottom:0,black:0,white:0,red:0,yellow:0,blue:0},power={idle:{shape:0,charge:0,color:0},click:{shape:1,charge:1,color:1}},multi={main:1,charge:.5,split:.25,hyper:5,comp:.5},unlockeditems=[];function unlockedItems(){$.each(items,function(e,t){"active"==t.status&&unlockeditems.push(e)}),unlockedColors=unlockeditems.filter(e=>colors.includes(e)),unlockedShapes=unlockeditems.filter(e=>shape.includes(e)),unlockedChargePositions=unlockeditems.filter(e=>chargePositions.includes(e))}const blazonDict={circle:["disc","ball","circle","discus","circumference","sun","moon"],square:["square","equilateral","quadrat","box"],rhombus:["lozenge","rhombus","diamond","rhomboid"],black:["dark","moor","black","abyssal","noir","sable"],white:["pale","snowy","white"],red:["blood","red","fiery","crimson","flaming","vermilion","sanguine","ruby"],yellow:["yellow","daffodil","lemon"],blue:["blue","sapphire"],orange:["orange","copper"],green:["green","emerald","grass"],violet:["purple","amethyst","plum"],grey:["grey","ashen","silver","silvery","pearly","ghostly"],darkred:["dark red","wine","bordeaux"],darkyellow:["gold","golden"],darkblue:["ultramarine","dark blue","deep blue","deep ocean","oceanic"],lightred:["pink","rose"],lightyellow:["light yellow"],lightblue:["azure","cerulean","sky"],darkorange:["brown","maroon"],darkgreen:["dark green","forest"],darkviolet:["violet"],lightorange:["salmon","light orange"],lightgreen:["chartreuse"],lightviolet:["magenta","fuchsia","hot pink"],top:["on top","on the top","as a crown"],left:["on its left","left side"],right:["on the right","right side"],bottom:["on the bottom","on its bottom"],topright:["on its top right corner"],topleft:["on its top left corner"],bottomright:["on its bottom right corner"],bottomleft:["on its bottom left corner"],chargeVerb:["charged by a","surmounted by a","with a"],splitVerb:["and a","opposite a","also a"],splitEnd:["on the other side","on the mirror side"]};function addBlazon(){$("#blazon").append("<span></span>").hide().fadeIn(2e3),writeBlazon()}function makeBlazon(){return blazonTerm={main:{shape:rand(blazonDict[current.main.shape]),color:rand(blazonDict[current.main.color])},charge:{verb:rand(blazonDict.chargeVerb),shape:rand(blazonDict[current.charge.shape]),color:rand(blazonDict[current.charge.color]),position:rand(blazonDict[current.charge.position])},split:{verb:rand(blazonDict.splitVerb),shape:rand(blazonDict[current.split.shape]),color:rand(blazonDict[current.split.color]),end:rand(blazonDict.splitEnd)}},blazonPart={main:"A "+blazonTerm.main.color+" "+blazonTerm.main.shape,charge:blazonTerm.charge.verb+" "+blazonTerm.charge.color+" "+blazonTerm.charge.shape+" "+blazonTerm.charge.position,split:blazonTerm.split.verb+" "+blazonTerm.split.color+" "+blazonTerm.split.shape+" "+blazonTerm.split.end},blazon=blazonPart.main,"enabled"==current.charge.status&&(blazon+=" "+blazonPart.charge),"enabled"==current.split.status&&(blazon+=" "+blazonPart.split),blazon}function writeBlazon(){$("#blazon span").html(makeBlazon())}const classes={shape:["shape"],side:["side","charge"],corner:["corner","charge"],split:["split"],primary:["color","basic","primary"],secondary:["color","composite","secondary"],light:["color","composite","light"],dark:["color","composite","dark"],secondarylight:["color","composite","secondarylight"],secondarydark:["color","composite","secondarydark"]},price={square:{unlock:[25,"circle"],price:[100,"circle"]},rhombus:{unlock:[100,"square"],price:[200,"white"]},white:{unlock:[100,"black"],price:[200,"square"]},red:{unlock:[150,"white"],price:[200,"rhombus"]},yellow:{unlock:[200,"white"],price:[250,"circle"]},blue:{unlock:[250,"red"],price:[150,"yellow"]},green:{unlock:[200,"yellow"],price:[450,"top"]},orange:{unlock:[1200,"red"],price:[800,"right"]},violet:{unlock:[2e3,"blue"],price:[5e3,"circle"]},grey:{unlock:[1e4,"black"],price:[7e3,"bottom"]},top:{unlock:[150,"rhombus"],price:[1e3,"rhombus"]},right:{unlock:[600,"top"],price:[2600,"blue"]},bottom:{unlock:[1500,"right"],price:[3e3,"red"]},left:{unlock:[2e3,"bottom"],price:[2e3,"right"]},topleft:{unlock:[1e3,"square"],price:[1e3,"rhombus"]},topright:{unlock:[600,"top"],price:[2600,"blue"]},bottomleft:{unlock:[1500,"right"],price:[3e3,"red"]},bottomright:{unlock:[2e3,"bottom"],price:[2e3,"right"]},topbottom:{unlock:[1e3,"square"],price:[1e3,"rhombus"]},leftright:{unlock:[600,"top"],price:[2600,"blue"]},toprightbottomleft:{unlock:[1500,"right"],price:[3e3,"red"]},topleftbottomright:{unlock:[2e3,"bottom"],price:[2e3,"right"]},cross:{unlock:[175e3,"rhombus"],price:[1e6,"left"]},octagon:{unlock:[175e3,"cross"],price:[1e6,"blue"]},lightred:{unlock:[1e5,"red"],price:[1e4,"cross"]},lightyellow:{unlock:[1e5,"yellow"],price:[1e4,"octagon"]},lightblue:{unlock:[1e5,"blue"],price:[1e6,"circle"]},darkred:{unlock:[1e6,"red"],price:[1e7,"square"]},darkyellow:{unlock:[1e6,"yellow"],price:[1e7,"blue"]},darkblue:{unlock:[1e6,"blue"],price:[1e5,"octagon"]},lightgreen:{unlock:[1e3,"yellow"],price:[450,"top"]},lightorange:{unlock:[1e8,"yellow"],price:[1e9,"cross"]},lightviolet:{unlock:[1e8,"red"],price:[1e9,"octagon"]},darkgreen:{unlock:[1e8,"blue"],price:[1e10,"rhombus"]},darkorange:{unlock:[1200,"red"],price:[700,"right"]},darkviolet:{unlock:[2e3,"blue"],price:[5e3,"circle"]}};var labelDiv='<div class="label"></div>',powerDiv='<div class="power"></div>',counterDiv='<div class="counter">0</div>',chargeButtons='<div class="chargebuttons" class="container"><div class="button main active selected"><span>main</span></div><div class="button charge inactive"><span>charge</span><span class="modifier">shift</span></div><div class="button split inactive"><span>split</span><span class="modifier">alt</span></div><div class="button hyper inactive"><span>hyper</span></div></div>';function addSection(e){"locked"==sectionUnlock[e]&&(sectionUnlock[e]="unlocked",$("#"+e).append('<div class="title">'+e.toUpperCase()+"</div>"),"charge"!=e&&"hyper"!=e||$("#"+e+" .title").append('<div class="button remove inactive">&#10005;</div>'),"charge"==e&&($("#color > .title").after(chargeButtons),$("#shape.section > .title").after(chargeButtons)))}function addSubSection(e,t){"locked"==subSectionUnlock[t]&&(subSectionUnlock[t]="unlocked",$("#"+e).append('<div id="'+t+'" class="subsection"> <div class="title sub">'+t.toUpperCase()+'</div> <div class="container"></div></div>'))}function addUnlock(e){addSection(items[e].sec),addSubSection(items[e].sec,items[e].subsec),"locked"==items[e].status&&(items[e].status="unlocked","card"==items[e].card?dash=labelDiv+powerDiv+counterDiv:dash=labelDiv,$('<div id="'+e+'" class="item unbuyable unlocked '+classes[items[e].subsec].join(" ")+" "+items[e].card+'">'+dash+"</div>").hide().appendTo("#"+items[e].subsec+" > .container").fadeIn(2e3),price[e]&&$("#"+e).append('<div class="pricetag '+price[e].price[1]+'"><span>'+formatNumber(price[e].price[0])+"</span></div>")),style()}function addItem(e){"unlocked"==items[e].status&&(items[e].status="active",$("#"+e).removeClass("unlocked").addClass("active"),$("#"+e+" .pricetag").remove()),style()}function buyableStatus(e,t){"on"==t?$("#"+e).removeClass("unbuyable").addClass("buyable"):"off"==t&&$("#"+e).removeClass("buyable").addClass("unbuyable"),style()}function addComplete(e){addUnlock(e),addItem(e)}function priceUnlock(){$.each(price,function(e,t){counter[t.unlock[1]]>t.unlock[0]-1&&addUnlock(e),counter[t.price[1]]>t.price[0]-1&&buyableStatus(e,"on"),counter[t.price[1]]<t.price[0]-1&&buyableStatus(e,"off")})}function itemBuy(e){counter[price[e].price[1]]>price[e].price[0]-1&&(addItem(e),counter[price[e].price[1]]-=price[e].price[0],$("#"+e).removeClass("buyable"))}function hyperAdd(){addSection("hyper"),addSubSection("hyper","hyper"),$("#hyper .container").append('<div id="hyperBuy" class="upgrade"><span class="name">hyper</span></div>')}function hyperBuy(){current.hyper.status="enabled",updateSelectors(),draw()}addComplete("circle"),addComplete("black"),$(document).on("click",".item.unlocked.buyable",function(e){itemBuy($(e.currentTarget).attr("id"))}),$(document).on("click","#hyperBuy",function(e){hyperBuy()});const upgrade={boostidleshape:{name:"boost shape idling",type:"boost",data:["idle","shape"],amount:.2},boostidlecharge:{name:"boost charge idling",type:"boost",data:["idle","charge"],amount:.2},boostidlecolor:{name:"boost color idling",type:"boost",data:["idle","color"],amount:.2},boostclickshape:{name:"boost shape click",type:"boost",data:["click","shape"],amount:1},boostclickcharge:{name:"boost charge click",type:"boost",data:["click","charge"],amount:1},boostclickcolor:{name:"boost color click",type:"boost",data:["click","color"],amount:1},blazon:{name:"unlock blazons",type:"blazon",data:[""]},wonderbar:{name:"unlock wonder bar",type:"wonderbar",data:[""]}},upgradeLevel={boostidleshape:{l1:{unlock:[200,"circle"],price:[250,"blue"],status:"locked"},l2:{unlock:[3e3,"rhombus"],price:[4e3,"blue"],status:"locked"},l3:{unlock:[5e3,"rhombus"],price:[6e3,"blue"],status:"locked"}},boostidlecharge:{l1:{unlock:[1e3,"right"],price:[2e3,"red"],status:"locked"},l2:{unlock:[3e3,"right"],price:[4e3,"red"],status:"locked"},l3:{unlock:[5e3,"right"],price:[6e3,"red"],status:"locked"}},boostidlecolor:{l1:{unlock:[1e3,"yellow"],price:[2e3,"bottom"],status:"locked"},l2:{unlock:[3e3,"yellow"],price:[4e3,"bottom"],status:"locked"},l3:{unlock:[5e3,"yellow"],price:[6e3,"bottom"],status:"locked"}},boostclickshape:{l1:{unlock:[1e3,"circle"],price:[2e3,"black"],status:"locked"},l2:{unlock:[3e3,"square"],price:[4e3,"black"],status:"locked"},l3:{unlock:[5e3,"circle"],price:[6e3,"black"],status:"locked"}},boostclickcharge:{l1:{unlock:[1e3,"top"],price:[2e3,"square"],status:"locked"},l2:{unlock:[3e3,"top"],price:[4e3,"square"],status:"locked"},l3:{unlock:[5e3,"top"],price:[6e3,"square"],status:"locked"}},boostclickcolor:{l1:{unlock:[1e3,"white"],price:[2e3,"left"],status:"locked"},l2:{unlock:[3e3,"white"],price:[4e3,"left"],status:"locked"},l3:{unlock:[5e3,"white"],price:[6e3,"left"],status:"locked"}},blazon:{l1:{unlock:[1e4,"left"],price:[1e4,"red"],status:"locked"}},wonderbar:{l1:{unlock:[1e4,"red"],price:[1e4,"rhombus"],status:"locked"}}};function addUpgrade(e,t){addSection("upgrades"),addSubSection("upgrades","upgrades"),"locked"==upgradeLevel[e][t].status&&(upgradeLevel[e][t].status="unlocked",$("#upgrades > .container").append('<div id="'+e+"-"+t+'"class="upgrade '+upgrade[e].type+" "+upgrade[e].data.join(" ")+'"><span class="name">'+upgrade[e].name+'</span><span class="level">'+t.replace("l","")+'</span><div class="pricetag '+upgradeLevel[e][t].price[1]+'"><span>'+upgradeLevel[e][t].price[0]+"</span></div></div>"),$("#"+e+"-"+t).removeClass("locked").addClass("unlocked")),style()}function upgradeUnlock(){$.each(upgradeLevel,function(e,t){$.each(t,function(t,o){counter[o.unlock[1]]>o.unlock[0]&&addUpgrade(e,t),counter[upgradeLevel[e][t].price[1]]>upgradeLevel[e][t].price[0]&&buyableStatus(e+"-"+t,"on"),counter[upgradeLevel[e][t].price[1]]<upgradeLevel[e][t].price[0]&&buyableStatus(e+"-"+t,"off")})})}function upgradeBuy(e,t){counter[upgradeLevel[e][t].price[1]]>upgradeLevel[e][t].price[0]-1&&(counter[upgradeLevel[e][t].price[1]]-=upgradeLevel[e][t].price[0],upgradeEffect(e),upgradeLevel[e][t].status="bought",$("#"+e+"-"+t).hide("slow").remove())}function upgradeEffect(e){"boost"==upgrade[e].type&&boost(upgrade[e].data[0],upgrade[e].data[1],upgrade[e].amount),"blazon"==upgrade[e].type&&addBlazon()}function writeCounters(){$.each(counter,function(e){$("#"+e+" .counter").html(formatNumber(counter[e]))})}function increaseCounters(e){$.each(mode,function(t,o){"enabled"==current[o].status&&(counter[current[o].shape]+=power[e].shape*multi[o],"basic"==current[o].colorType&&(counter[current[o].color]+=power[e].color*multi[o]))}),"enabled"==current.charge.status&&"side"==current.charge.type&&(counter[current.charge.position]+=power[e].charge),"enabled"==current.charge.status&&"corner"==current.charge.type&&$.each(comp.charge[current.charge.position],function(t,o){counter[o]+=power[e].charge*multi.comp}),"enabled"==current.split.status&&$.each(comp.split[current.split.position],function(t,o){counter[o]+=power[e].charge*multi.comp}),"composite"==current.main.colorType&&$.each(comp.color[current.main.color],function(t,o){counter[o]+=power[e].color*multi.comp}),"enabled"==current.charge.status&&"composite"==current.charge.colorType&&$.each(comp.color[current.charge.color],function(t,o){counter[o]+=power[e].color*multi.charge*multi.comp}),"enabled"==current.split.status&&"composite"==current.split.colorType&&$.each(comp.color[current.split.color],function(t,o){counter[o]+=power[e].color*multi.split*multi.comp}),writeCounters()}function boost(e,t,o){power[e][t]+=o}function loop(){setInterval(function(){increaseCounters("idle"),writeCounters()},300),setInterval(function(){priceUnlock(),upgradeUnlock(),debugData()},1e3)}$(document).on("click",".upgrade.unlocked.buyable",function(e){var t=$(e.currentTarget).attr("id").split("-");upgradeBuy(t[0],t[1])}),loop(),$(document).on("click","#shaperino",function(e){increaseCounters("click")});const canvasSize=500,middle=250,size={main:400,hyper:280,charge:220,split:220},modif={rhombus:{size:-50,offset:38},cross:{size:.3,offset:73},octagon:{size:.5,offset:56}},chargeCenter={circle:{zero:size.charge/2,middle:middle,full:500-size.charge/2},square:{zero:size.charge/2,middle:middle,full:500-size.charge/2},rhombus:{zero:(size.charge+modif.rhombus.size)/2+modif.rhombus.offset,middle:middle,full:500-((size.charge+modif.rhombus.size)/2+modif.rhombus.offset)},cross:{zero:size.charge*modif.cross.size/2+modif.cross.offset,middle:middle,full:500-(size.charge*modif.cross.size/2+modif.cross.offset)},octagon:{zero:size.charge*modif.octagon.size/2+modif.octagon.offset,middle:middle,full:500-(size.charge*modif.octagon.size/2+modif.octagon.offset)}},wonderBarSizeList={x:[300,350,400,450],y:[80,100,120]},wonderBarCenterOffsetList=[0,30,50,80],centerPositions={left:["zero","middle"],top:["middle","zero"],right:["full","middle"],bottom:["middle","full"],topleft:["zero","zero"],topright:["full","zero"],bottomright:["full","full"],bottomleft:["zero","full"]},mirror={full:"zero",zero:"full",middle:"middle"};var center={circle:{},square:{},rhombus:{},cross:{},octagon:{}};$.each(shape,function(e,t){center[t].main=[middle,middle],center[t].charge=[],center[t].split=[],center[t].hyper=[middle,middle]});var wonderBarCenter=[middle,middle],wonderBarRotation=0,wonderBarCenterOffset=0;function chargePosition(){$.each(centerPositions,function(e,t){current.charge.position==e&&$.each(t,function(e,t){$.each(shape,function(o,r){center[r].charge[e]=chargeCenter[r][t],center[r].split[e]=chargeCenter[r][mirror[t]]})})})}function draw(){clearCanvas(),chargePosition(),$.each(mode,function(e,t){"enabled"==current[t].status&&drawShape(t)})}function drawShape(e){shapeDraw(e,current[e].shape,size[e],center[current[e].shape][e][0],center[current[e].shape][e][1],colorCode[current[e].color])}function shapeDraw(e,t,o,r,a,c){"circle"==t&&SVG(e+"-canvas").size(500,500).group().circle(o,o).center(r,a).attr({fill:c}),"square"==t&&SVG(e+"-canvas").size(500,500).group().rect(o,o).center(r,a).attr({fill:c}),"rhombus"==t&&SVG(e+"-canvas").size(500,500).group().rect(o+modif.rhombus.size,o+modif.rhombus.size).center(r,a).attr({fill:c}).transform({rotation:45}),"cross"==t&&(SVG(e+"-canvas").size(500,500).group().rect(o,o*modif.cross.size).center(r,a).attr({fill:c}).transform({rotation:45}),SVG(e+"-canvas").size(500,500).group().rect(o*modif.cross.size,o).center(r,a).attr({fill:c}).transform({rotation:45})),"octagon"==t&&SVG(e+"-canvas").size(500,500).group().polygon().ngon({radius:o*modif.octagon.size,edges:8}).center(r,a).attr({fill:c}).transform({rotation:22.5})}function drawWonderBar(){avColors=colors.filter(e=>e!==current.main.color&&e!==current.charge.color&&e!==current.split.color&&e!==current.hyper.color),"enabled"==current.wonderbar.status&&wonder.remove(),current.wonderbar.status="enabled",wonderBarSize={x:rand(wonderBarSizeList.x),y:rand(wonderBarSizeList.y)},wonderBarCenter=[middle,middle],wonderBarCenterOffset="enabled"==current.split.status?0:rand(wonderBarCenterOffsetList),"enabled"==current.charge.status?("topleft"!=current.charge.position&&"bottomright"!=current.charge.position||(wonderBarRotation=45),"topright"!=current.charge.position&&"bottomleft"!=current.charge.position||(wonderBarRotation=-45),"left"==current.charge.position&&(wonderBarRotation=0,wonderBarCenter[0]=wonderBarCenter[0]-wonderBarCenterOffset),"top"==current.charge.position&&(wonderBarRotation=90,wonderBarCenter[1]=wonderBarCenter[1]-wonderBarCenterOffset),"right"==current.charge.position&&(wonderBarRotation=0,wonderBarCenter[0]=wonderBarCenter[0]+wonderBarCenterOffset),"bottom"==current.charge.position&&(wonderBarRotation=90,wonderBarCenter[1]=wonderBarCenter[1]+wonderBarCenterOffset)):"disabled"==current.charge.status&&(wonderBarRotation=rand([0,45,-45,90])),wonder=SVG("wonder-canvas").size(500,500).group().rect(wonderBarSize.x,wonderBarSize.y).center(wonderBarCenter[0],wonderBarCenter[1]).attr({fill:colorCode[rand(avColors)]}).transform({rotation:wonderBarRotation})}function clearCanvas(){document.getElementById("main-canvas").innerHTML="",document.getElementById("charge-canvas").innerHTML="",document.getElementById("split-canvas").innerHTML="",document.getElementById("hyper-canvas").innerHTML="",document.getElementById("wonder-canvas").innerHTML="",$.each(mode,function(e,t){})}const comp={charge:{topleft:["top","left"],topright:["top","right"],bottomleft:["bottom","left"],bottomright:["bottom","right"]},split:{topbottom:["top","bottom"],leftright:["left","right"],topleftbottomright:["top","left","bottom","right"],toprightbottomleft:["top","left","bottom","right"]},color:{orange:["red","yellow"],green:["yellow","blue"],violet:["blue","red"],grey:["white","black"],darkred:["red","black"],darkyellow:["yellow","black"],darkblue:["blue","black"],lightred:["red","white"],lightyellow:["yellow","white"],lightblue:["blue","white"],darkorange:["red","yellow","black"],darkgreen:["yellow","blue","black"],darkviolet:["blue","red","black"],lightorange:["red","yellow","white"],lightgreen:["yellow","blue","white"],lightviolet:["blue","red","white"]}},split={topbottom:"top",leftright:"left",topleftbottomright:"topleft",toprightbottomleft:"topright"},splitto=swap(split);function setCurrent(e,t,o){current[e][t]=o}function highlight(e,t){$("#"+current[e][t]).addClass("selected").addClass("sel-"+e),$("#"+current[e][t]+" .label").append('<span class="pip sel-'+e+'"></span>')}function highlightComp(e,t,o){""!=comp[e][current[t][o]]&&(components=comp[e][current[t][o]],$("#"+components.join(", .card#")).addClass("bordered").addClass("sel-"+t),$("#"+components.join(" .label , .card#")+" .label").append('<span class="pip comp sel-'+t+'"></span>'))}function clearSelectors(){$.each(mode,function(e,t){$(".item").removeClass("sel-"+t)}),$("*").removeClass("selected"),$("*").removeClass("bordered"),$(".label").html("")}function updateSelectors(){clearSelectors(),highlight("main","shape"),highlight("main","color"),"composite"==current.main.colorType&&highlightComp("color","main","color"),"enabled"==current.charge.status&&"disabled"==current.split.status&&(highlight("charge","position"),"corner"==current.charge.type&&highlightComp("charge","charge","position")),"enabled"==current.charge.status&&(highlight("charge","shape"),highlight("charge","color"),"composite"==current.charge.colorType&&highlightComp("color","charge","color"),$(".button.charge").addClass("active").removeClass("inactive"),$("#charge .button.remove").addClass("active").removeClass("inactive")),"enabled"==current.split.status&&(highlight("split","position"),highlight("split","shape"),highlight("split","color"),highlightComp("split","split","position"),"composite"==current.split.colorType&&highlightComp("color","split","color"),$(".button.split").addClass("active").removeClass("inactive")),"enabled"==current.hyper.status&&(highlight("hyper","position"),highlight("hyper","shape"),highlight("hyper","color"),"composite"==current.hyper.colorType&&highlightComp("color","hyper","color"),$(".button.hyper").addClass("active").removeClass("inactive"),$("#hyper .button.remove").addClass("active").removeClass("inactive")),"disabled"==current.charge.status&&($(".button.charge").addClass("inactive").removeClass("active"),$("#charge .button.remove").addClass("inactive").removeClass("active")),"disabled"==current.split.status&&$(".button.split").addClass("inactive").removeClass("active"),"disabled"==current.hyper.status&&($(".button.hyper").addClass("inactive").removeClass("active"),$("#hyper .button.remove").addClass("inactive").removeClass("active")),selector("main")}function setTypes(){position.side.includes(current.charge.position)?setCurrent("charge","type","side"):position.corner.includes(current.charge.position)&&setCurrent("charge","type","corner"),$.each(mode,function(e,t){color.basic.includes(current[t].color)?setCurrent(t,"colorType","basic"):color.composite.includes(current[t].color)&&setCurrent(t,"colorType","composite")}),$.each(splitto,function(e,t){current.charge.position==e&&setCurrent("split","position",t)})}function randomShape(){unlockedItems(),setCurrent("main","shape",rand(unlockedShapes)),setCurrent("main","color",rand(unlockedColors)),setCurrent("hyper","status",rand(["enabled","disabled"])),unlockeditems.includes("top")&&setCurrent("charge","status",rand(["enabled","disabled"])),"enabled"==current.charge.status?(setCurrent("charge","position",rand(unlockedChargePositions)),setCurrent("charge","shape",rand(unlockedShapes)),setCurrent("charge","color",rand(unlockedColors)),unlockeditems.includes("topbottom")&&setCurrent("split","status",rand(["enabled","disabled"]))):setCurrent("split","status","disabled"),"enabled"==current.split.status&&(setCurrent("split","shape",rand(unlockedShapes)),setCurrent("split","color",rand(unlockedColors))),"enabled"==current.hyper.status&&(setCurrent("hyper","shape",rand(unlockedShapes)),setCurrent("hyper","color",rand(unlockedColors))),update()}function allRandomShape(){setCurrent("main","shape",rand(shape)),setCurrent("main","color",rand(colors)),setCurrent("charge","status",rand(["enabled","disabled"])),setCurrent("hyper","status",rand(["enabled","disabled"])),"enabled"==current.charge.status?(setCurrent("charge","position",rand(chargePositions)),setCurrent("charge","shape",rand(shape)),setCurrent("charge","color",rand(colors)),setCurrent("split","status",rand(["enabled","disabled"]))):setCurrent("split","status","disabled"),"enabled"==current.split.status&&(setCurrent("split","shape",rand(shape)),setCurrent("split","color",rand(colors))),"enabled"==current.hyper.status&&(setCurrent("hyper","shape",rand(shape)),setCurrent("hyper","color",rand(colors))),update(),"0"==rand(["0","1"])&&drawWonderBar()}function selector(e){current.select=e,$(".button.active").removeClass("selected"),$(".button.active."+e).addClass("selected")}function update(){setTypes(),draw(),updateSelectors(),writeBlazon()}update(),$(document).bind("keydown",function(e){"enabled"==current.charge.status&&16==e.keyCode&&selector("charge"),18==e.keyCode&&"enabled"==current.split.status&&selector("split")}),$(document).bind("keyup",function(e){16!=e.keyCode&&18!=e.keyCode||selector("main")}),$(document).on("click",".button.main",function(e){selector("main")}),$(document).on("click",".button.charge",function(e){selector("charge")}),$(document).on("click",".button.split",function(e){selector("split")}),$(document).on("click",".button.hyper",function(e){selector("hyper")}),$(document).on("click","#charge .button.remove",function(e){setCurrent("charge","status","disabled"),setCurrent("split","status","disabled"),update()}),$(document).on("click","#hyper .button.remove",function(e){setCurrent("hyper","status","disabled"),update()}),$(document).on("click",".item.shape.active",function(e){target=$(e.currentTarget).attr("id"),setCurrent(current.select,"shape",target)}),$(document).on("click",".item.color.active",function(e){target=$(e.currentTarget).attr("id"),setCurrent(current.select,"color",target)}),$(document).on("click",".item.charge.active",function(e){setCurrent("charge","position",$(e.currentTarget).attr("id")),setCurrent("charge","status","enabled"),setCurrent("split","status","disabled")}),$(document).on("click",".item.split.active",function(e){var t=$(e.currentTarget).attr("id");setCurrent("split","position",t),setCurrent("charge","position",split[t]),setCurrent("split","status","enabled"),setCurrent("charge","status","enabled")}),$(document).on("click",".item.active",function(e){update()}),$(document).on("click","#shaperino",function(e){});const colorBar={black:0,white:0,red:0,yellow:0,blue:0,orange:0,green:0,violet:0,grey:0,darkred:0,darkyellow:0,darkblue:0,lightred:0,lightyellow:0,lightblue:0,darkorange:0,darkgreen:0,darkviolet:0,lightorange:0,lightgreen:0,lightviolet:0};function colorBarActivate(){current.colorbar.status="enabled",$("#colorbar").show(),$.each(colors,function(e,t){$("#colorbar").append('<div class="piece '+t+'"><span></span></div>'),$(".piece."+t).css("background-color",colorCode[t]),$("#footer").css("bottom","38px")})}function colorBarIncrease(){setInterval(function(){"enabled"==current.colorbar.status&&$.each(mode,function(e,t){"enabled"==current[t].status&&(colorBar[current[t].color]<=100-.1*multi[t]&&(colorBar[current[t].color]+=.1*multi[t]),$(".piece."+current[t].color).css("width",100/21/100*colorBar[current[t].color]+"vw"),$(".piece."+current[t].color+" span").html(Math.floor(colorBar[current[t].color])+"%"))})},300)}function addMenuButton(e){$("#menu").append('<div class="button inactive" id="'+e+'">'+e+"</div>")}function activateMenuButton(e){$("#menu #"+e).addClass("active").removeClass("inactive")}function selectMenuButton(e){$("#menu .button").removeClass("selected"),$("#menu #"+e).addClass("selected")}function addPanel(e){$("#panel").empty(),$("#panel").append('<div class="panel" id="'+e+'">'+panelContent[e]+"</div>"),selectMenuButton(e),activateMenuButton("remove")}function addAll(){$.each(items,function(e){addComplete(e)}),hyperAdd(),$.each(upgradeLevel,function(e,t){$.each(t,function(t,o){addUpgrade(e,t)})})}function addAllUnlock(){$.each(items,function(e){addUnlock(e)})}function earn(){$.each(counter,function(e,t){counter[e]+=784,writeCounters()})}function debugData(){$(".data#main-shape span").html(current.main.shape),$(".data#main-color span").html(current.main.color+" ("+current.main.colorType+")"),$(".data#charge-status span").html(current.charge.status),$(".data#split-status span").html(current.split.status),$(".data#charge-position span").html(current.charge.position),$(".data#charge-shape span").html(current.charge.shape),$(".data#charge-color span").html(current.charge.color+" ("+current.charge.colorType+")"),$(".data#charge-type span").html(current.charge.type),$(".data#split-shape span").html(current.split.shape),$(".data#split-color span").html(current.split.color+" ("+current.split.colorType+")"),$(".data#split-position span").html(current.split.position),$(".data#click-power-shape span").html(power.click.shape),$(".data#click-power-color span").html(power.click.color),$(".data#idle-power-shape span").html(power.idle.shape),$(".data#idle-power-color span").html(power.idle.color),$(".data#idle-power-charge span").html(power.idle.charge),$(".data#click-power-charge span").html(power.click.charge)}colorBarIncrease(),menu=["options","stats","catalogue","debug"],panelContent={options:"panel",debug:'<div class="container"><div id="clickboost" class="button">click boost</div> <div id="idleboost" class="button">idle boost</div> </div> <div class="container"> <div id="unlock" class="button">unlock</div> <div id="complete" class="button">complete</div><div id="earn" class="button">earn</div> <div id="addupgrades" class="button">add upgrades</div> </div> <div class="container"> <div id="random" class="button">random</div><div id="totalrandom" class="button">total random</div><div id="wonder-bar" class="button">wonder bar</div><div id="color-bar" class="button">color bar</div><div id="hyper-debug" class="button">hyper</div> </div> <div class="container"> <div id="main-shape" class="data">shape: <span></span></div> <div id="main-color" class="data">color: <span></span></div> </div> <div class="container"> <div id="charge-status" class="data">charge: <span></span></div> <div id="charge-shape" class="data">shape: <span></span></div> <div id="charge-color" class="data">color: <span></span></div> <div id="charge-position" class="data">pos: <span></span></div> <div id="charge-type" class="data">type: <span></span></div> </div> <div class="container"> <div id="split-status" class="data">split: <span></span></div> <div id="split-shape" class="data">shape: <span></span></div> <div id="split-color" class="data">color: <span></span></div> <div id="split-position" class="data">pos: <span></span></div> </div> <div class="container"> <div id="click-power-shape" class="data">shape click power: <span></span></div> <div id="click-power-charge" class="data">charge click power: <span></span></div> <div id="click-power-color" class="data">color click power: <span></span></div> </div> <div class="container"> <div id="idle-power-shape" class="data">shape idle power: <span></span></div> <div id="idle-power-charge" class="data">charge idle power: <span></span></div> <div id="idle-power-color" class="data">color idle power: <span></span></div> </div>'},$.each(menu,function(e,t){$(document).on("click","#menu .button.active#"+t,function(e){addPanel(t)})}),$(document).on("click","#menu .button.active#remove",function(e){$("#panel").empty(),$("#menu .button").removeClass("selected"),$("#menu #remove").addClass("inactive").removeClass("active")}),$.each(menu,function(e,t){addMenuButton(t)}),activateMenuButton("debug"),$(document).on("click","#clickboost",function(e){boost("click","shape",10),boost("click","color",10),boost("click","charge",10)}),$(document).on("click","#idleboost",function(e){boost("idle","shape",10),boost("idle","color",10),boost("idle","charge",10)}),$(document).on("click","#complete",function(e){addAll()}),$(document).on("click","#preview",function(e){addAllPreviews()}),$(document).on("click","#unlock",function(e){addAllUnlock()}),$(document).on("click","#earn",function(e){earn()}),$(document).on("click","#random",function(e){randomShape()}),$(document).on("click","#totalrandom",function(e){allRandomShape()}),$(document).on("click","#hyper-debug",function(e){hyperAdd()}),$(document).on("click","#wonder-bar",function(e){drawWonderBar()}),$(document).on("click","#color-bar",function(e){colorBarActivate()}),$(document).on("click","#addupgrades",function(e){$.each(upgradeLevel,function(e,t){$.each(t,function(t,o){addUpgrade(e,t)})})}),$(document).keydown(function(e){"d"===e.key&&$("#debug").toggle()}),$(document).keydown(function(e){"r"===e.key&&allRandomShape()}),$(document).keydown(function(e){"t"===e.key&&randomShape()}),$(document).keydown(function(e){"c"===e.key&&addAll()});