// console.log(module);

exports.getDate= function ()
{
    let options={
        weekday:"long",
        day:"numeric",
        month:"long"
    }
    
    let today = new Date();
    return "Hello today is "+today.toLocaleDateString('en-us',options);
}

exports.getDay= function ()
{
    let today=new Date();
    let options={
        weekday:"long"
    }

    return "Hello today is "+today.toLocaleDateString('en-us',options);
    
}

