function route(handle,pathname){
    console.log("ÇëÇóurlÎª£º" + pathname);
    if(typeof handle[pathname] === 'function'){
        handle[pathname]();
    }else{
        console.log("No requerst handler found for" + pathname);
    }
}

exports.route = route;