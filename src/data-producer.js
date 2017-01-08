/**
 * Created by appel on 1/6/2017.
 */

function* getProps(obj){
    const p = Reflect.ownKeys(obj);

    for (const prop of p){
       // yield {key: prop.key, val: obj[prop.key]};
       yield [prop, obj[prop]];
    }
}

function* GetArray(count, returnVal){

    for(let i=0;i<count;i++){
        yield "Item " + i;
    }

    if(returnVal) return "done";
}



