import Recipe from '../../../components/Recipe/Recipe';

export default function BolinhoDeChuva(){
    return(
        <div>
            <Recipe 
                name="Bolinho de Chuva" 
                picture="https://img.itdg.com.br/tdg/images/recipes/000/014/950/329096/329096_original.jpg?mode=crop&width=710&height=400" 
                time="30 min"
                servings="8 porções"
            >
                <h2>Ingredientes</h2>

                <ul>
                    <li>2 ovos</li>
                    <li>2 colheres (sopa) de açúcar</li>
                    <li>1 xícara (chá) de leite</li>
                    <li>2 e 1/2 xícaras (chá) de farinha de trigo</li>
                    <li>1 colher (sopa) de fermento</li>
                    <li>3 colheres (sopa) de açúcar</li>
                    <li>1 colher (chá) de canela</li>
                </ul>

                <h2>Modo de Preparo</h2>
                <ol>
                    <li>Em um recipiente, adicione os ovos, o açúcar, o leite, a farinha de trigo e o fermento, depois misture-os até obter uma massa lisa e homogênea.</li>
                    <li>Com a ajuda de uma colher, pegue porções da mistura e despeje em uma panela com o óleo quente.</li>
                    <li>Retire do fogo quando estiver no ponto, depois misture a canela com açúcar e salpique no bolinho de chuva já frito.</li>
                </ol>
            </Recipe>
        </div>
    )
}