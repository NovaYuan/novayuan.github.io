function route(handle,pathname){
    console.log("����urlΪ��" + pathname);
    if(typeof handle[pathname] === 'function'){
        handle[pathname]();
    }else{
        console.log("No requerst handler found for" + pathname);
    }
}

exports.route = route;