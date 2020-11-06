import Head from 'next/head';
import Link from 'next/link';

export default function Index(){
  return (
    <div>
      <Head>
        <title>TreinaCook</title>
        <link rel="stylesheet" href="/styles/page.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" />
      </Head>
      
      <header className="header" >
        <Link href="/" >
          <a>
            <img alt="Logo TreinaCook" src="/img/logo.svg" />
          </a>
        </Link>
      </header>

      <main>

        <figure className="recipe-card" >
          <Link href="/receitas/doces/brigadeiro" >
            <a>
              <img className="recipe-picture" src="https://cdn.panelinha.com.br/receita/958014000000-Brigadeiro.jpg" />
            </a>
          </Link>
          <div className="recipe-category" >Doces</div>
          <figcaption className="recipe-name" >Brigadeiro</figcaption>
        </figure>

        <figure className="recipe-card" >
          <Link href="/receitas/doces/brigadeiro" >
            <a>
              <img className="recipe-picture" src="https://cdn.panelinha.com.br/receita/958014000000-Brigadeiro.jpg" />
            </a>
          </Link>
          <div className="recipe-category" >Doces</div>
          <figcaption className="recipe-name" >Brigadeiro</figcaption>
        </figure>

        <figure className="recipe-card" >
          <Link href="/receitas/doces/brigadeiro" >
            <a>
              <img className="recipe-picture" src="https://cdn.panelinha.com.br/receita/958014000000-Brigadeiro.jpg" />
            </a>
          </Link>
          <div className="recipe-category" >Doces</div>
          <figcaption className="recipe-name" >Brigadeiro</figcaption>
        </figure>

        <figure className="recipe-card" >
          <Link href="/receitas/doces/brigadeiro" >
            <a>
              <img className="recipe-picture" src="https://cdn.panelinha.com.br/receita/958014000000-Brigadeiro.jpg" />
            </a>
          </Link>
          <div className="recipe-category" >Doces</div>
          <figcaption className="recipe-name" >Brigadeiro</figcaption>
        </figure>

      </main>

      <footer className="footer" >
        &copy; TreinaCook
      </footer>
    </div>
  )
}