// function hello(nome){
//     return new Promise(function(resolve, reject){
//         resolve(`Hello ${nome}`)
//     })
// }

// hello("Pedro").then(res => console.log(res))

////Function with async (return promise)
// async function hello(nome){
//     return "Hello, "+nome
// }

// const promise = hello("Joao")
// promise.then(res => console.log(res))

function fatorial(n){
    if (n < 0) return Promise.reject("valor não pode ser negativo")
    let res = 1
    for(let i = 2; i <= n; i++) res *= i
    return Promise.resolve(res)
}

function chamadaComThenCatch(){
    fatorial(10)
    .then(res => console.log(res))
    .catch(erro => console.log(erro))

    fatorial(-10)
    .then(res => console.log(res))
    .catch(erro => console.log(erro))
}

async function chamadaComAsyncAwait(){
    const f1 = await fatorial(10)
    console.log(f1)
    
    const f2 = await fatorial(-10)
    console.log(f1)
}

//chamadaComThenCatch()
chamadaComAsyncAwait()