import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from '../components/Card';
import Header from '../components/Header';
import Search from '../components/Search';

import styles from './home.module.scss';

export default function Home() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('')

  useEffect(() => {
    const api = async () => {
      const response = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      )

      setItems(response.data);
      setIsLoading(true);
    }

    api()
  }, [query])

  return (
    <main>
      <Header />
      <div className={styles.container}>
        <h1>Breaking Bad <br /> 3º melhor série entre 100º no mundo</h1>
        <h2>Saiba mais sobre os personagens da terceira <br /> melhor série de TV do século 21</h2>
        <a href="https://www.bbc.com/portuguese/vert-cul-59038520" target="_blank" >Notícia</a>

        <Search getQuery={(q) => setQuery(q)} />
        <p>Personagens</p>
        <Card items={items} isLoading={isLoading} />
      </div>
    </main>
  )
}
