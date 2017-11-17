
//export const KEY='goodsdata';


export function setItem(value){
    var Jsonstring=localStorage.getItem('goodsdata');
    Jsonstring= Jsonstring || '[]';
    var arr=JSON.parse(Jsonstring);
    arr.push(value);
    localStorage.setItem('goodsdata',JSON.stringify(arr));
}


export function getItem(){
    var Jsonstring=localStorage.getItem('goodsdata');
    Jsonstring= Jsonstring || '[]';
    return JSON.parse(Jsonstring);
}

export function getgoodsObj(){
    var arr=getItem();
   var resobj={};
   for(var i=0;i<arr.length;i++){
       var item=arr[i];
       if(!resobj[item.goodsid]){
        resobj[item.goodsid]=item.numval;
    
       }else{
           var count=resobj[item.goodsid];
           resobj[item.goodsid]=item.numval+count;
       }
   }

   return resobj
}

export function updateData(obj){

    var arr=getItem();
    var count=1;
    if(obj.type=="add"){
        arr.push({goodsid:obj.goodsid,numval:count});
    }else{
        for(var i=0;i<arr.length;i++){
            if(arr[i].goodsid==obj.goodsid){
                if(arr[i].numval>1){
                    arr[i].numval=arr[i].numval-1;
                    break;
                }else{
                    arr.splice(i,1);
                    break;
                }
            }
        }
    }
    
    localStorage.setItem('goodsdata',JSON.stringify(arr));

}

export function removeloca(goodsid){
    var arr=getItem();
   console.log(goodsid);
   var goodsid=goodsid;
   console.log(arr);
    for(var i=arr.length-1;i>=0;i--){
        if(arr[i].goodsid==goodsid){
            arr.splice(i,1);
        }
    }

    localStorage.setItem('goodsdata',JSON.stringify(arr));

}