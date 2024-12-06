export default function Listas(){
    const nome = ['Wagner','Jhlemar', 'Beatriz', 'Ana', 'Fean']
    const carros = [
        {
            id: 1,
            modelo:'Fusca',
            ano:1975,
            cor: 'Preto'
        },
        {
            id: 2,
            modelo:'Uno',
             ano:1900,
            cor: 'Preto'
        },
        {   
            id: 3,
            modelo:'Civic',
            ano:1000,
            cor: 'azul'
        },
        {
            id: 4,
            modelo:'Carroca',
            ano:1000,
            cor: 'madeira'
        },
        {
            id: 5,
            modelo:'Bmw',
            ano:1000,
            cor: 'marrom'
        }
    ]

    return (
        <div>
            <h1>Listas</h1>
            <h2>lista Comum</h2>
            <ul style={{marginLeft: '50px'}}>
                {nome.map((nome, id) => (
                    <li key={id}>{nome}</li>
                ))}
            </ul>
            <div>
                <h2>Lista de Obejtos</h2>
                {
                    carros.map((carros) => (
                        <div>
                            <h3>{carros.id} - {carros.modelo}</h3>
                            <p>{carros.cor}</p>
                            <p>carros.ano</p>
                        </div>
                    ))}
            </div>
        </div>
    )
}




    
