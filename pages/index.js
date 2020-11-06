import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import RecipeCard from '../components/RecipeCard/RecipeCard';

export default function Index(){
  return (
    <div>
      <Header title="TreinaCook - Receitas" />

      <main>

        <RecipeCard
          name="Bolo de Cenoura"
          category="Bolos"
          picture="https://img.itdg.com.br/tdg/images/recipes/000/000/023/323619/323619_original.jpg?mode=crop&width=710&height=400"
          link="/receitas/bolos/bolo-de-cenoura"
        />

        <RecipeCard
          name="Brigadeiro"
          category="Doce"
          picture="https://cdn.panelinha.com.br/receita/958014000000-Brigadeiro.jpg"
          link="/receitas/doces/brigadeiro"
        />
        <RecipeCard
          name="Bolinho de Chuva" 
          category="Lanches"
          picture="https://img.itdg.com.br/tdg/images/recipes/000/014/950/329096/329096_original.jpg?mode=crop&width=710&height=400" 
          link="/receitas/lanches/bolinho-de-chuva"
        />
        <RecipeCard
          name="Molho Branco" 
          category="Molhos"
          picture="https://img.itdg.com.br/tdg/images/recipes/000/044/199/332851/332851_original.jpg?mode=crop&width=710&height=400" 
          link="/receitas/molhos/molho-branco"
        />


      </main>

      <Footer />
    </div>
  )
}