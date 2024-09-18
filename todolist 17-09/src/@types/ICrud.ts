//T = um tipo dinâmico (pode ser um objeto, um número, uma string)
//promise = tratar como uma promessa. trabalha com o conceito de fazer e esperar(T[]). 
//uma chamada de retorno onde then() - resultado esperado
//catch() - em tratamento de erro

export interface ICrud<T> {
    insert(objeto: T): Promise<void>
    selectAll():Promise<T[]>
    select(id: string): Promise<T>
    update(objeto:T): Promise<void>
    delete(id: string): Promise<void>
}