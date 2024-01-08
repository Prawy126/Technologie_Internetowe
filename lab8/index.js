export {abc, asd};

function abc(){
    console.log('wywołano funkcję abc');
    return 0;
};

function bca(){
    console.log('wywołano funkcję bca')
    return 1;
};

const asd = () =>{
    console.log('wywołano asd');
};

console.log(abc());