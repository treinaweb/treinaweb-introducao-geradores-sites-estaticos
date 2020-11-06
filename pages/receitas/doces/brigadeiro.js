import Recipe from '../../../components/Recipe/Recipe';

export default function Brigadeiro(){
    return(
        <div>
            <Recipe 
                name="Brigadeiro" 
                picture="https://cdn.panelinha.com.br/receita/958014000000-Brigadeiro.jpg" 
                time="25 min"
                servings="30 porções"
            >
                <h2>Ingredientes</h2>

                <ul>
                    <li>1 caixa de leite condensado</li>
                    <li>1 colher (sopa) de margarina sem sal</li>
                    <li>7 colheres (sopa) de achocolatado ou 4 colheres (sopa) de chocolate em pó</li>
                    <li>chocolate granulado</li>
                </ul>


                <h2>Modo de Preparo</h2>


                <h3>Cobertura</h3>

                <ol>
                    <li>
                        Em uma panela funda, acrescente o leite condensado, a margarina e o chocolate em pó.
                    </li>
                    <li>
                        Cozinhe em fogo médio e mexa até que o brigadeiro comece a desgrudar da panela.
                    </li>
                    <li>
                        Deixe esfriar e faça pequenas bolas com a mão passando a massa no chocolate granulado.
                    </li>
                </ol>
            </Recipe>
        </div>
    )
}